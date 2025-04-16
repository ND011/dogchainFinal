@echo off
cd /d "%~dp0"

echo # %~n0 > README.md

git init
git remote set-url origin https://github.com/ND011/dogchainFinal.git

git config user.email "99769678+ND011@users.noreply.github.com"
git config user.name "ND011"

git checkout -b main

REM Remove submodule remnants
git rm --cached Gandhinagar/frontend -r
rd /s /q Gandhinagar\frontend\.git
rd /s /q InstAnalytics\.git

git add .
git commit -m "Initial clean commit with all files"

git push -u origin main --force

pause
