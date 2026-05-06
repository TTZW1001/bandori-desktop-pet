$ErrorActionPreference = 'Stop'
[Console]::InputEncoding = [System.Text.UTF8Encoding]::new($false)
[Console]::OutputEncoding = [System.Text.UTF8Encoding]::new($false)
$OutputEncoding = [System.Text.UTF8Encoding]::new($false)

$projectRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
$tempRoot = 'C:\Users\ORANGE\AppData\Local\Temp\bandori-pet-build'
$releaseDir = Join-Path $projectRoot 'release'
$npmCmd = 'G:\Program Files\nodejs\npm.cmd'

function Invoke-CmdCommand {
  param(
    [Parameter(Mandatory = $true)]
    [string]$CommandLine
  )

  $wrappedCommand = "$CommandLine 2>&1"
  & cmd.exe /d /c $wrappedCommand
  if ($LASTEXITCODE -ne 0) {
    throw "Command failed with exit code ${LASTEXITCODE}: $CommandLine"
  }
}

Write-Host '==> Prepare temporary build directory'
if (Test-Path $tempRoot) {
  Remove-Item -LiteralPath $tempRoot -Recurse -Force -ErrorAction SilentlyContinue
}
New-Item -ItemType Directory -Path $tempRoot | Out-Null

Write-Host '==> Copy project to ASCII temp directory'
robocopy $projectRoot $tempRoot /MIR /XD node_modules dist release .git | Out-Null

Push-Location $tempRoot
try {
  Write-Host '==> Install dependencies'
  Invoke-CmdCommand "`"$npmCmd`" install"

  Write-Host '==> Build portable exe'
  $env:CSC_IDENTITY_AUTO_DISCOVERY = 'false'
  Invoke-CmdCommand "`"$npmCmd`" run build"

  $builtExe = Get-ChildItem -Path (Join-Path $tempRoot 'dist') -Filter *.exe |
    Sort-Object LastWriteTime -Descending |
    Select-Object -First 1

  if (-not $builtExe) {
    throw 'No built exe was found in the dist directory.'
  }

  if (!(Test-Path $releaseDir)) {
    New-Item -ItemType Directory -Path $releaseDir | Out-Null
  }

  $targetExe = Join-Path $releaseDir $builtExe.Name

  Write-Host "==> Copy artifact to release: $($builtExe.Name)"
  Copy-Item -LiteralPath $builtExe.FullName -Destination $targetExe -Force

  Write-Host ''
  Write-Host 'Build completed.'
  Write-Host "Output file: $targetExe"
}
finally {
  Pop-Location
}
