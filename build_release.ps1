$ErrorActionPreference = 'Stop'

$projectRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
$tempRoot = 'C:\Users\ORANGE\AppData\Local\Temp\bandori-pet-build'
$releaseDir = Join-Path $projectRoot 'release'
$npmCmd = 'G:\Program Files\nodejs\npm.cmd'

Write-Host '==> 准备临时构建目录'
if (Test-Path $tempRoot) {
  Remove-Item -LiteralPath $tempRoot -Recurse -Force -ErrorAction SilentlyContinue
}
New-Item -ItemType Directory -Path $tempRoot | Out-Null

Write-Host '==> 复制项目到英文临时目录'
robocopy $projectRoot $tempRoot /MIR /XD node_modules dist release .git | Out-Null

Push-Location $tempRoot
try {
  Write-Host '==> 安装依赖'
  & $npmCmd install

  Write-Host '==> 开始打包'
  $env:CSC_IDENTITY_AUTO_DISCOVERY = 'false'
  & $npmCmd run build

  $builtExe = Get-ChildItem -Path (Join-Path $tempRoot 'dist') -Filter *.exe |
    Sort-Object LastWriteTime -Descending |
    Select-Object -First 1

  if (-not $builtExe) {
    throw '没有在 dist 目录中找到打包后的 exe 文件。'
  }

  if (!(Test-Path $releaseDir)) {
    New-Item -ItemType Directory -Path $releaseDir | Out-Null
  }

  $targetExe = Join-Path $releaseDir $builtExe.Name

  Write-Host "==> 复制成品到 release: $($builtExe.Name)"
  Copy-Item -LiteralPath $builtExe.FullName -Destination $targetExe -Force

  Write-Host ''
  Write-Host '打包完成。'
  Write-Host "输出文件: $targetExe"
}
finally {
  Pop-Location
}
