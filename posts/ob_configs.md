---
title: Obsidian 配置
tags: [Obsidian]
categories: [桌面软件]
date: 2024-10-11
description: 午梦千山, 窗阴一箭, 隔江人在雨声中, 晚风菰叶生秋怨

---



## 快捷键
___
-  Ctrl + 数字 = 标题
-  Ctrl Shift K = 代码
-  Alt Q = 引用
-  ...

<br/>


## 外观
___
-  字体使用 [霞鹜文楷](https://github.com/lxgw/LxgwWenKai) 
-  下载插件 [style settings](https://github.com/mgmeyers/obsidian-style-settings#obsidian-style-settings-plugin)
-  使用 [Blue Topaz 主题](https://github.com/PKM-er/Blue-Topaz_Obsidian-css?tab=readme-ov-file) 
-  ...

<br/>


## 同步
___
基于github 的 git同步方式 ( 前提 : 在所有设备上配制好 git , 密钥对和代理等 ) :

```shell
# 在 github 上创建仓库 obsidians, 终端切到笔记目录下, 执行 :
git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/Daleveral/obsidians.git
git push -u origin main

# 若 git init 后是 master 分支, 删除 .git 文件夹再执行 : git config --global init.defaultBranch main
```
<br/>


编写脚本, 保存为 sync.ps1 :

```shell
$commitMessage = Read-Host "commit message ~"

git add .
git commit -m $commitMessage
git push origin main
```

<br/>


更多 :

```shell
# 若有 commit 冲突, 可覆盖远程仓库强制 push : 
git push --force origin main

# 新设备获取笔记文件 : 
git clone git@github.com:Daleveral/obsidians.git

# 移动设备在 termux 中可设置软链接 :
mv obsidians /storage/emulated/0/
ln -s /storage/emulated/0/obsidians obsidians
git config --global --add safe.directory /storage/emulated/0/obsidians  
```

<br/>

移动设备拉取远程仓库, 使用脚本 :

```shell
cd ./obsidians
git reset --hard HEAD
git pull origin main
```


<br/>
<br/>

