#!/usr/bin/env sh



npm run build

git pull
git add -A
git commit -m 'synchronization'
git push -f

# 进入生成的文件夹
cd src/.vuepress/dist

git init
git add -A
git commit -m 'build'

git push -f git@github.com:reonce/reonce.github.io.git master

cd -
