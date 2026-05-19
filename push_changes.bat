@echo off
title KAA Website - Push Changes to GitHub
color 0A

echo ============================================
echo   KAA Website - GitHub Push Script
echo ============================================
echo.

REM ── Git identity (update these if needed) ──
git config user.name "jacobjerin38"
git config user.email "jacobjerin38@gmail.com"

REM ── Ensure remotes are set correctly ──
echo [1/6] Configuring remote repositories...
git remote remove origin 2>nul
git remote add origin https://github.com/jacobjerin38/KAAwebsite.git

git remote remove backup 2>nul
git remote add backup https://github.com/jerinjacobai/kaa_technologies_website.git

echo       origin : https://github.com/jacobjerin38/KAAwebsite.git
echo       backup : https://github.com/jerinjacobai/kaa_technologies_website.git
echo.

REM ── Stage all changes ──
echo [2/6] Staging all changes...
git add .
echo       Done.
echo.

REM ── Prompt for commit message ──
echo [3/6] Enter your commit message below:
set /p COMMIT_MSG=">> "
if "%COMMIT_MSG%"=="" set COMMIT_MSG=chore: update KAA website

echo.
echo [4/6] Committing: %COMMIT_MSG%
git commit -m "%COMMIT_MSG%"
echo.

REM ── Enforce branch name ──
git branch -M main

REM ── Push to origin ──
echo [5/6] Pushing to origin (jacobjerin38/KAAwebsite)...
git push -u origin main
echo.

REM ── Push to backup ──
echo [6/6] Pushing to backup (jerinjacobai/kaa_technologies_website)...
git push -u backup main
echo.

echo ============================================
echo   Push complete! Both repos updated.
echo   origin : https://github.com/jacobjerin38/KAAwebsite.git
echo   backup : https://github.com/jerinjacobai/kaa_technologies_website.git
echo ============================================
echo.
pause
