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

REM ── Ensure remote is set to the correct repo ──
echo [1/5] Configuring remote repository...
git remote remove origin 2>nul
git remote add origin https://github.com/jacobjerin38/KAAwebsite.git
echo       Remote set to: https://github.com/jacobjerin38/KAAwebsite.git
echo.

REM ── Stage all changes ──
echo [2/5] Staging all changes...
git add .
echo       Done.
echo.

REM ── Prompt for commit message ──
echo [3/5] Enter your commit message below:
set /p COMMIT_MSG=">> "
if "%COMMIT_MSG%"=="" set COMMIT_MSG=chore: update KAA website

echo.
echo [4/5] Committing: %COMMIT_MSG%
git commit -m "%COMMIT_MSG%"
echo.

REM ── Enforce branch name and push ──
echo [5/5] Pushing to 'main' on origin...
git branch -M main
git push -u origin main

echo.
echo ============================================
echo   Push complete!
echo   Repo: https://github.com/jacobjerin38/KAAwebsite.git
echo ============================================
echo.
pause
