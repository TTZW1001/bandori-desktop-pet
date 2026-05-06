@echo off
setlocal
cd /d "%~dp0"
chcp 65001 >nul

set "PS_EXE=%SystemRoot%\System32\WindowsPowerShell\v1.0\powershell.exe"
set "LOG_FILE=%~dp0build-release.log"

echo [INFO] Starting build...
echo [INFO] Log file: "%LOG_FILE%"
echo. > "%LOG_FILE%"

"%PS_EXE%" -NoProfile -ExecutionPolicy Bypass -Command ^
  "& { try { . '.\build_release.ps1' *>&1 | Tee-Object -FilePath '%LOG_FILE%' -Append } catch { $_ | Tee-Object -FilePath '%LOG_FILE%' -Append; exit 1 } }"
if errorlevel 1 (
  echo.
  echo Build failed. See log:
  echo "%LOG_FILE%"
  pause
  exit /b 1
)

echo.
echo Build succeeded.
echo See log:
echo "%LOG_FILE%"
pause
