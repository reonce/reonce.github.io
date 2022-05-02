#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

npm run build

# 进入生成的文件夹
cd docs/.vuepress/dist

git init
git add -A
git commit -m 'build'

git push -f git@github.com:reonce/reonce.github.io.git master

rm -rf dist

cd -
