

Preview: 👻 [Dale's Docs](https://docs.dalechu.cn/)


## Info

🎉 Dale 的文档存放站, 基于 [VitePress](https://vitepress.dev/) 和 [vitepress-theme-curve](https://github.com/imsyy/vitepress-theme-curve) 主题

<br/>

## Deploy

```shell
# 安装好 node.js, pnpm 和 VitePress 环境后 :

pnpm install

pnpm build

cp -r docs/.vitepress/dist/* /var/www/html/

vim /etc/nginx/sites-available/vitepress
```
<br/>

写入 :
```
server 
{
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;

    listen 443; # 推荐 https
    server_name docs.dalechu.cn; # 自定义 URL
    index index.html;

    location / 
    {
        # content location
        root /var/www/html; # 静态文件存放位置

        # exact matches -> reverse clean urls -> folders -> not found
        try_files $uri $uri.html $uri/ =404;

        # non existent pages
        error_page 404 /404.html;

        # a folder without index.html raises 403 in this setup
        error_page 403 /404.html;

        # adjust caching headers
        # files in the assets folder have hashes filenames
        location ~* ^/assets/ 
        {
            expires 1y;
            add_header Cache-Control "public, immutable";
        }
    }
}

```
<br/>

重启 nginx
```shell
sudo ln -s /etc/nginx/sites-available/vitepress /etc/nginx/sites-enabled/

nginx -t
nginx -s reload
```



