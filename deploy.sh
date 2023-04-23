#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

git pull
git add -A
git commit -m 'synchronization'
git push -f

npm run build

# 进入生成的文件夹
cd docs/.vuepress/dist

git init
git add -A
git commit -m 'build'

git push -f git@github.com:reonce/reonce.github.io.git main

rm -rf dist

cd -
