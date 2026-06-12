@echo off
chcp 65001 > nul
echo.
echo ====================================
echo   밀리 B2B 랜딩페이지 배포
echo ====================================
echo.

cd /d "%~dp0"

:: 변경사항 확인
git status --short
if %errorlevel% neq 0 (
  echo [오류] Git 저장소를 찾을 수 없습니다.
  pause
  exit /b 1
)

echo.
set /p MSG="커밋 메시지를 입력하세요 (엔터 = 날짜 자동): "
if "%MSG%"=="" (
  for /f "tokens=1-3 delims=/ " %%a in ("%DATE%") do set TODAY=%%a-%%b-%%c
  set MSG=update: %TODAY%
)

:: 커밋 & 푸시
git add .
git commit -m "%MSG%"
git push origin main

echo.
echo ====================================
echo   완료! Vercel이 자동으로 배포합니다.
echo   보통 1-2분 후 반영됩니다.
echo ====================================
echo.
pause
