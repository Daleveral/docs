---
title: Linux 新服务器配置
tags: [Linux, 服务器]
categories: [服务器]
date: 2024-10-11
description: 沉重的影子像道路，穿过整个国土
references:
  - title: Ubuntu 安装 Node.js 的方法
    url: https://juejin.cn/post/7361323894449946662
---



## 更改主机名
```shell
hostnamectl set-hostname dales

vim /etc/hosts 
# 127.0.0.1 后面的字符改成新主机名
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


## 使用 fish 终端
```shell
# 以 Debian 为例

apt update

apt upgrade

apt install fish

fish

cd .config/fish

vim config.fish

# 配置文件 : https://gitee.com/dale-chu/prefered_configs/blob/master/config.fish 

# 重启 fish

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

```shell
mkdir -p /etc/apt/keyrings
```

```shell
curl -fsSL https://deb.nodesource.com/gpgkey/nodesource-repo.gpg.key | sudo gpg --dearmor -o /etc/apt/keyrings/nodesource.gpg
```

```shell
echo "deb [signed-by=/etc/apt/keyrings/nodesource.gpg] https://deb.nodesource.com/node_21.x nodistro main" | sudo tee /etc/apt/sources.list.d/nodesource.list
```

```shell
apt update
```

```shell
apt install nodejs -y
```

```shell
npm config set registry https://registry.npmmirror.com
```

```shell
npm install --global pnpm
```


<br/>

## 安装 docker
```shell
apt install -y docker.io docker-compose jq

vim /etc/docker/daemon.json
# 使用可用镜像源

docker -v
```

<br/>

## 更多
- 必装 : **git nginx neofetch unzip micro btop python**

- [Linux 服务器免密登录](https://docs.dalechu.cn/posts/ssh_configs)

- [V2RayA 使用手册](https://pengtech.net/network/v2rayA_install.html)

- [部署 VitePress 网页 ](https://docs.dalechu.cn/posts/vp_server)

<br/>
<br/>