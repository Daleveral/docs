---
title: Linux 新服务器配置
tags: [Linux, 服务器]
categories: [服务器]
date: 2024-10-11
description: 沉重的影子像道路，穿过整个国土

---



## 更改主机名
```shell
hostnamectl set-hostname dales
vim /etc/hosts # 127.0.0.1 后面的字符改成新主机名
# 重启服务器
```
<br/>


## 安装必要软件
```shell
# 以 Debian 为例
apt update
apt upgrade
apt install git nginx neofetch zsh unzip micro btop

# 更多 :
# node.js, python, docker, 1panel ... 
```

<br/>


## zsh 配置
```shell
chsh -s /bin/zsh

# 安装两个插件, 自动补全和语法高亮, 可通过 github, gitee, scp 多种方式进行 :
# GitHub
cd ~/.oh-my-zsh/plugins/
git clone https://github.com/zsh-users/zsh-autosuggestions.git 
git clone https://github.com/zsh-users/zsh-syntax-highlighting.git 

# Gitee
cd ~/.oh-my-zsh/plugins/
git clone https://gitee.com/dale-chu/zsh-autosuggestions.git 
git clone https://gitee.com/dale-chu/zsh-syntax-highlighting-master.git 

#  scp ( dales 代指 .ssh/config 中服务器名称 )
scp -r .\zsh-autosuggestions\ dales:~/.oh-my-zsh/plugins/
scp -r .\zsh-syntax-highlighting\ dales:~/.oh-my-zsh/plugins/


vim ~/.zshrc
# 添加以下内容 : 
plugins=(git
        zsh-autosuggestions
        zsh-syntax-highlighting
        )

# 主题可改为 sorin, af-magic, agnoster ...

source ~/.zshrc
```

<br/>

## 更多 .zshrc 配置

参考 [终端配置](/posts/terminal_configs)


<br/>
<br/>
