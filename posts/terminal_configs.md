---
title: 终端配置
tags: [Linux, Windows]
categories: [服务器]
date: 2024-10-11
description: 桃李春风一杯酒, 江湖夜雨十年灯

---



## Linux
___
-  SHELL : zsh
-  个性化工具 : oh-my-zsh

**~/.zshrc** 配置 :

```shell
export ZSH=/etc/oh-my-zsh
export ZSH_CACHE_DIR="${XDG_CACHE_HOME:-$HOME/.cache}/oh-my-zsh"
export PATH=$HOME/bin:/usr/local/bin:$PATH
export PATH=$PATH:/usr/games

ZSH_THEME="af-magic"
# ZSH_THEME="robbyrussell"

plugins=(
        git
        zsh-autosuggestions
        zsh-syntax-highlighting
        )

# 切记: 等号左右不要有空格!
source $ZSH/oh-my-zsh.sh
alias apti="apt install"
alias aptin="apt install"
alias aptu="apt update"
alias aptup="apt update"
alias b="batcat"
alias bat="batcat"
alias bt="btop"
alias bmm="batcat ~/.config/micro/bindings.json"
alias c="cat"
alias cdno="cd ~/NotionNext"
alias cdn="cd ~/NotionNext"
alias cdd="cd .."
alias cdr="cd /root"
alias cpr="cp -r"
alias config="cd ~/.config"
alias conf="cd ~/.config"
alias dk="docker"
alias dps="docker ps"
alias dp="docker ps --format 'table {{.ID}}\t{{.Names}}\t{{.Image}}\t{{.Ports}}'"
alias dpa="docker ps -a --format 'table {{.ID}}\t{{.Names}}\t{{.Image}}\t{{.Ports}}'"
alias dpsa="docker ps -a"
alias dki="docker images"
alias dmi="docker images"
alias dush="du -sh"
alias ea="exa -lah"
alias el="exa -lh"
alias e="exa"
alias et2="exa --tree --level=2"
alias et1="exa --tree --level=1"
alias et="exa --tree"
alias elh="exa -lh"
alias ec="echo"
alias f="fortune"
alias fch="fortune-zh"
alias fd="fdfind"
alias fff="free -h; echo -e "---------------------------------------"; df -h"
alias fcl="fortune | cowsay -f koala  | lolcat"
alias fftp="cd /home/ftper/ftp/files"
alias ftpf="cd /home/ftper/ftp/files"
alias gitc="git clone"
alias gitcl="git clone"
alias gp="git push"
alias gpush="git push"
alias gcm="git commit"
alias gitcm="git commit"
alias jiayou="echo '加油!'"
alias ko="pkill next-server"
alias m="micro"
alias mk="mkdir"
alias mm="micro ~/.config/micro/bindings.json"
alias me="cd ~"
alias ns="netstat -lntp"
alias neo="neofetch"
alias nums="cd /root/sendnums/sn_v3 && nohup node server.js > out.txt 2>&1 &"
alias ngx="nginx"
alias nt="nginx -t"
alias nr="nginx -s reload"
alias nsr="nginx -s reload"
alias nre="nginx -s reload"
alias p="pwd"
alias psa="ps aux"
alias python="python3"
alias py="python3"
alias rmr="rm -rf"
alias rmrf="rm -rf"
alias sctl="systemctl"
alias sh="echo $SHELL"
alias sz="source ~/.zshrc"
alias sau="sudo apt update"
alias share="docker start cce45b4b106d"
alias una="uname -a"
alias v="vim"
alias vz="vim ~/.zshrc"
alias vv="vim ~/.vimrc"
alias vn="vim /etc/nginx/nginx.conf"
alias vimz="vim ~/.zshrc"
alias vimv="vim ~/.vimrc"
alias vimn="vim /etc/nginx/nginx.conf"
alias wow="nohup yarn start >/dev/null 2>&1 &"
alias yb="yarn build"
alias vp="cp -r ~/docs/.vitepress/dist/* /var/www/html/"
alias pb="pnpm build"
alias ys="yarn start"

source ~/.nvm/nvm.sh

# orcaterm enhanced command
if [ -f /root/.orca_term/orca-zsh.sh ]; then
        source /root/.orca_term/orca-zsh.sh
fi

eval "$(thefuck --alias)"
eval "$(zoxide init zsh)"


export LC_CTYPE=C.UTF-8
# 或者
#export LANG_ALL=en_US.UTF-8
# 或者
#export LANG=en_US.UTF-8

```

<br/>



## Windows
___
-  终端 : Windows Terminal
-  Shell : PowerShell
-  个性化工具 : oh-my-posh

**$PROFILE** 文件 :

```shell
$VerbosePreference = 'SilentlyContinue'


# 配置 oh-my-posh 的 theme
oh-my-posh init pwsh --config "$env:POSH_THEMES_PATH\capr4n.omp.json" | Invoke-Expression
# oh-my-posh init pwsh --config "$env:POSH_THEMES_PATH\tonybaloney.omp.json" | Invoke-Expression
# oh-my-posh init pwsh --config "$env:POSH_THEMES_PATH\M365Princess.omp.json" | Invoke-Expression
# oh-my-posh init pwsh --config "$env:POSH_THEMES_PATH/jandedobbeleer.omp.json" | Invoke-Expression

Set-PSReadlineKeyHandler -Chord Tab -Function MenuComplete # Tab键补全

Import-Module PSReadLine

# 根据历史右箭头补全, 这个效果不是很好
# Set-PSReadLineKeyHandler -Key RightArrow -Function HistorySearchBackward

# 右箭头补全历史命令, 更符合直觉
Set-PSReadLineOption -PredictionSource History

Function me { Set-Location $env:USERPROFILE }
Function cdssh { Set-Location $env:USERPROFILE\.ssh && Get-ChildItem}
Function sc { Set-Location ~/.ssh && code config }
Function cdob { Set-Location E:\daleobs\obsidians\ }
Function cdn { Set-Location ~\NotionNext\}
Function ob { Set-Location E:\daleobs\obsidians\ }
Function ip { ipconfig | findstr IPv4 }
Function ipa { ipconfig /all }
Function vim { nvim $args }
Function dale { ping dalechu.life }
Function wdale { ping www.dalechu.life }
Function ed { explorer .}
Function exp { explorer $args }
Function ns { netstat $args }
Function cap { Get-Content $PROFILE}
Function cop { code $PROFILE}
Function p { python $args }
Function c { Get-Content $args }

Function vcp { vercel --prod }

Function dld { Set-Location $env:USERPROFILE\Downloads}
Function dow { Set-Location $env:USERPROFILE\Downloads}
Function des { Set-Location $env:USERPROFILE\Desktop}
Function cdd { Set-Location ..}

Function e { exit}
Function co { code $args }
Function m { micro $args }
Function mk { mkdir $args }
Function pth { python $args }
Function nn { nano $args }
Function na { nano $args }
Function sa { ssh aly}
Function st { ssh tx }
Function sr { ssh redmi }
Function ssp { ssh pad }
Function nvims { nvim C:\Users\24489\AppData\Local\nvim\init.vim }

Function gcl { git clone $args }
Function gitc { git clone $args }
Function gitcl { git clone $args }

Function gcm { git commit -m $args }
Function gitcm { git commit -m $args }
Function gpom { git push origin main }
Function gpush { git pull }
Function gpull { git pull }
Function ga { git add $args }
Function gitconfig { code ~/.gitconfig }
Function sync { cdob && ./sync.bat}


Function gall {
    # 提示用户输入 commit 信息
    $commitMessage = Read-Host "请输入 commit 信息"

    if (-not $commitMessage) {
        Write-Host "错误: commit 信息不能为空"
        return
    }

    git add .
    if ($LASTEXITCODE -ne 0) {
        Write-Host "错误: git add 失败"
        return
    }

    git commit -m $commitMessage
    if ($LASTEXITCODE -ne 0) {
        Write-Host "错误: git commit 失败"
        return
    }

    git push
    if ($LASTEXITCODE -ne 0) {
        Write-Host "错误: git push 失败"
        return
    }

    Write-Host "成功: 代码已提交并推送"
}




Function py {
    param (
        [string]$scriptName
    )

    if ($scriptName) {
        # 如果提供了参数，直接运行指定的 .py 文件
        if (Test-Path $scriptName) {
            python $scriptName
        } else {
            Write-Host "文件 $scriptName 不存在"
        }
    } else {
        # 获取当前文件夹下的所有 .py 文件
        $pyFiles = Get-ChildItem -Path "." -Filter "*.py"

        if ($pyFiles.Count -eq 0) {
            Write-Host "当前文件夹下没有 .py 文件"
            return
        }

        if ($pyFiles.Count -eq 1) {
            # 如果只有一个 .py 文件，直接运行
            python $pyFiles[0].FullName
        } else {
            # 如果有多个 .py 文件，列出所有文件，并让用户选择
            Write-Host "请选择要运行的 .py 文件："
            for ($i = 0; $i -lt $pyFiles.Count; $i++) {
                Write-Host "$($i + 1). $($pyFiles[$i].Name)"
            }

            $selection = Read-Host "输入编号"
            
            if ($selection -match '^\d+$' -and $selection -gt 0 -and $selection -le $pyFiles.Count) {
                $selectedFile = $pyFiles[$selection - 1].FullName
                python $selectedFile
            } else {
                Write-Host "无效的选择"
            }
        }
    }
}



# Import the Chocolatey Profile that contains the necessary code to enable
# tab-completions to function for `choco`.
# Be aware that if you are missing these lines from your profile, tab completion
# for `choco` will not function.
# See https://ch0.co/tab-completion for details.
$ChocolateyProfile = "$env:ChocolateyInstall\helpers\chocolateyProfile.psm1"
if (Test-Path($ChocolateyProfile)) {
  Import-Module "$ChocolateyProfile"
}

```


<br/>


## Termux
___
-  SHELL : zsh
-  个性化工具 : oh-my-zsh

安装 **zsh-autosuggestions** 插件 :

``` shell
# git clone https://gitee.com/dale-chu/zsh-autosuggestions $ZSH_CUSTOM/plugins/zsh-autosuggestions
git clone https://github.com/zsh-users/zsh-autosuggestions $ZSH_CUSTOM/plugins/zsh-autosuggestions
```

**~/.zshrc** 有效部分 :
 
```shell
ZSH_THEME="sorin"
# export PATH=$HOME/bin:/usr/local/bin:$PATH
export ZSH=$HOME/.oh-my-zsh

plugins=(git zsh-autosuggestions)
source $ZSH/oh-my-zsh.sh

# alias zshconfig="mate ~/.zshrc"
# alias ohmyzsh="mate ~/.oh-my-zsh"
alias chcolor='/data/data/com.termux/files/home/.termux/colors.sh'
alias chfont='/data/data/com.termux/files/home/.termux/fonts.sh'
alias fetch='cd ~ && ./fetch.sh'
alias cdd="cd .."
alias c="cat"
alias me="cd ~"
alias vimz="vim ~/.zshrc"
alias vimv="vim ~/.vimrc"
alias vz="vim ~/.zshrc"
alias vv="vim ~/.vimrc"
alias neo="neofetch"
alias m="micro"
alias sz="source ~/.zshrc"
alias jiayou="echo '加油!'"
alias sshc='vim ~/.ssh/config'

source /data/data/com.termux/files/home/.zsh-syntax-highlighting/zsh-syntax-highlighting.zsh
```

<br/>
<br/>

