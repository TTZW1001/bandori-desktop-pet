@echo off
setlocal
cd /d "%~dp0"
powershell -ExecutionPolicy Bypass -File ".\build_release.ps1"
if errorlevel 1 (
  echo.
  echo 打包失败，请查看上面的报错信息。
  pause
  exit /b 1
)
echo.
echo 打包成功。
pause
