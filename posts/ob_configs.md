---
title: Obsidian 配置
tags: [Obsidian]
categories: [桌面软件]
date: 2024-10-11
description: 午梦千山, 窗阴一箭, 隔江人在雨声中, 晚风菰叶生秋怨

---



## 快捷键
可以在设置里自定义 :
-  Ctrl + 数字 = 标题
-  Ctrl Shift K = 代码
-  Alt Q = 引用
-  ...

<br/>


## 外观
-  字体使用 [霞鹜文楷](https://github.com/lxgw/LxgwWenKai) 
-  下载插件 [style settings](https://github.com/mgmeyers/obsidian-style-settings#obsidian-style-settings-plugin)
-  使用 [Blue Topaz 主题](https://github.com/PKM-er/Blue-Topaz_Obsidian-css?tab=readme-ov-file) 
-  ...

<br/>


## 同步
___

基于 github 远程仓库进行同步 ( 前提 : 在所有设备上配制好 git , 密钥对和代理等 ) :

```shell
# 对本地 obsidian vault git 化
# 在 github 上创建仓库 obsidians, 终端切到笔记目录下, 执行 :
git init

git add .

git commit -m "first commit"

git branch -M main

git remote add origin https://github.com/Daleveral/obsidians.git

git push -u origin main

# 若 git init 后是 master 分支, 删除 .git 目录后执行 : 
# git config --global init.defaultBranch main
```
<br/>


简单的 PowerShell 脚本 sync.ps1 , 将本地更改提交到远程 :

```shell
$commitMessage = Read-Host "commit message ~"

git add .
git commit -m $commitMessage
git push origin main
```

<br/>



```shell
# 若有 commit 冲突, 可覆盖远程仓库强制 push : 
git push --force origin main
```

<br/>


对于安卓设备, 可以在 termux 命令行中配置 git 环境 :

```shell
# 先配制好 GitHub 公私钥
cd /storage/emulated/0

git clone git@github.com:yourname/yourrepo.git

cd ~

# 配置软链接
ln -s /storage/emulated/0/yourrepo yourrepo

git config --global --add safe.directory /storage/emulated/0/yourrepo
```


<br/>

移动设备拉取远程仓库, 可使用脚本 :

```shell
cd ./obsidians
git reset --hard HEAD
git pull origin main
```


<br/>

___

