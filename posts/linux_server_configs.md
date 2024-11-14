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

## 换源

```shell
vim /etc/apt/sources.list 
```

```shell
deb http://mirrors.aliyun.com/debian/ buster main non-free contrib
deb-src http://mirrors.aliyun.com/debian/ buster main non-free contrib
deb http://mirrors.aliyun.com/debian-security buster/updates main
deb-src http://mirrors.aliyun.com/debian-security buster/updates main
deb http://mirrors.aliyun.com/debian/ buster-updates main non-free contrib
deb-src http://mirrors.aliyun.com/debian/ buster-updates main non-free contrib
deb http://mirrors.aliyun.com/debian/ buster-backports main non-free contrib
deb-src http://mirrors.aliyun.com/debian/ buster-backports main non-free contrib
```

```shell
apt update
```


<br/>


## 安装必要软件
```shell
# 以 Debian 为例
apt update
apt upgrade
apt install fish
fish
cd .config/fish
vim config.fish
# 重启 fish

# 安装 : git nginx neofetch unzip micro btop python ...
```

<br/>

## 安装 node.js 最新版本

```shell
apt update 
```
```shell
apt upgrade 
```

```shell
apt install -y ca-certificates curl gnupg
```
```
mkdir -p /etc/apt/keyrings
```
```
curl -fsSL https://deb.nodesource.com/gpgkey/nodesource-repo.gpg.key | sudo gpg --dearmor -o /etc/apt/keyrings/nodesource.gpg
```
```
echo "deb [signed-by=/etc/apt/keyrings/nodesource.gpg] https://deb.nodesource.com/node_21.x nodistro main" | sudo tee /etc/apt/sources.list.d/nodesource.list
```
```
apt update
```
```
apt install nodejs -y
```
```
npm config set registry https://registry.npmmirror.com
```
```
npm install --global pnpm
```


