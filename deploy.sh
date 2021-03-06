# deploy.sh
# 错误时停止
set -e

# 打包
npm run build

# 进入目标文件夹
cd docs

# 提交到本地仓库

git init
git add -A
git commit -m 'deploy'

# 提交到 https://github.com:Guidozijef/zijef-blog 项目的 main 分支
git push -f git@github.com:Guidozijef/zijef-blog.git master:main

cd -
