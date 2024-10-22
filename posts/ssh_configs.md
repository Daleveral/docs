___
#### 服务器端开启密钥登录模式

```shell
vim /etc/ssh/sshd_config

# 是否允许 root 远程登录
PermitRootLogin yes

# 密码登录是否打开
PasswordAuthentication yes

# 开启公钥认证
PubkeyAuthentication yes
RSAAuthentication yes # 这个参数可能没有, 没关系

# 当公钥信息写入到 ~/.ssh/authorized_keys 之后, 重启 sshd :
service sshd restart
# 或 /bin/systemctl restart sshd.service
```



#### 用户端创建自己的秘钥对

```bash
ssh-keygen -t rsa -b 2048 -f key_name

cd ~/.ssh/

cat id_rsa.pub # 查看公钥

# 编辑 ./config 文件 : 

Host nickname # 连接服务器用自定义的 nickname 就行了
    HostName 8.8.8.8 # 服务器 ip 地址
    Port 22
    User root # 服务器相关账户名
    IdentityFile ~/.ssh/id_rsa # 本地私钥路径
    ServerAliveInterval 30
    TCPKeepAlive yes
    
# 传送公钥 
type key_name.pub | ssh user_name@8.8.8.8 "cat >> ~/.ssh/authorized_keys"
```



#### Git 配置

```shell
# 编辑 ~/.ssh/config , 添加 :
Host github.com
  HostName github.com
  PreferredAuthentications publickey
  IdentityFile ~/.ssh/id_rsa

# 配置代理, 端口可在梯子里自行设置 :
git config --global http.proxy 'socks5://127.0.0.1:7891'
git config --global https.proxy 'socks5://127.0.0.1:7891'

git config --global --list  # 查看配置
```
