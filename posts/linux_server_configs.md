___

##### 更改主机名
```shell
hostnamectl set-hostname dales
vim /etc/hosts # 127.0.0.1 后面的字符改成主机名
# 重启
```


##### 安装必要软件
```shell
yum install git nginx neofetch zsh unzip
```


##### zsh 配置
```shell
chsh -s /bin/zsh

# git 方式
git clone https://github.com/zsh-users/zsh-autosuggestions.git ~/.oh-my-zsh/plugins/zsh-autosuggestions
git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ~/.oh-my-zsh/plugins/zsh-syntax-highlighting

# gitee 方式
git clone https://gitee.com/dale-chu/zsh-autosuggestions.git ~/.oh-my-zsh/plugins/zsh-autosuggestions
git clone https://gitee.com/dale-chu/zsh-syntax-highlighting-master.git ~/.oh-my-zsh/plugins/zsh-syntax-highlighting

# git 本地再 scp 
cd C:/Users/24489/Desktop/Temp/Linux-configs
scp -r .\zsh-autosuggestions\ aly:~/.oh-my-zsh/plugins/
scp -r .\zsh-syntax-highlighting\ aly:~/.oh-my-zsh/plugins/


vim ~/.zshrc
# 添加以下内容 : 
plugins=(git
        zsh-autosuggestions
        zsh-syntax-highlighting
        )

# 主题改为 sorin, af-magic, agnoster ...


# 自定义快速函数 :

```