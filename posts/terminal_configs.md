##### Windows
___
-  终端 : Windows Terminal
-  Shell : PowerShell
-  个性化工具 : oh-my-posh

$PROFILE 文件 :

```shell
# 配置 oh-my-posh 的主题 :

oh-my-posh init pwsh --config "$env:POSH_THEMES_PATH\capr4n.omp.json" | Invoke-Expression
# oh-my-posh init pwsh --config "$env:POSH_THEMES_PATH\tonybaloney.omp.json" | Invoke-Expression
# oh-my-posh init pwsh --config "$env:POSH_THEMES_PATH\M365Princess.omp.json" | Invoke-Expression
# oh-my-posh init pwsh --config "$env:POSH_THEMES_PATH/jandedobbeleer.omp.json" | Invoke-Expression


# 代码提示补全 : 

Set-PSReadlineKeyHandler -Chord Tab -Function MenuComplete     # Tab 键补全
Import-Module PSReadLine     # 使用命令 Install-Module PSReadLine -Force 来安装
Set-PSReadLineOption -PredictionSource History     # 更加历史命令右箭头补全
# Set-PSReadLineKeyHandler -Key UpArrow -Function HistorySearchBackward     # 另一种补全模式

```




##### Termux
___
-  SHELL : zsh
-  个性化工具 : oh-my-zsh

安装 zsh-autosuggestions 插件 :

``` shell
# git clone https://gitee.com/dale-chu/zsh-autosuggestions $ZSH_CUSTOM/plugins/zsh-autosuggestions
git clone https://github.com/zsh-users/zsh-autosuggestions $ZSH_CUSTOM/plugins/zsh-autosuggestions
```

 ~/.zshrc 有效部分 :
 
```shell
ZSH_THEME="sorin"
plugins=(git zsh-autosuggestions)
source $ZSH/oh-my-zsh.sh
alias chcolor='/data/data/com.termux/files/home/.termux/colors.sh'
alias chfont='/data/data/com.termux/files/home/.termux/fonts.sh'
source /data/data/com.termux/files/home/.zsh-syntax-highlighting/zsh-syntax-highlighting.zsh
```


