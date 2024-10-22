

```shell
pnpm build

cp -r docs/.vitepress/dist/* /var/www/html/

vim /etc/nginx/sites-available/vitepress

# 写入 :

server {
    listen 80;
    server_name IP_OR_DOMIAN;

    root /var/www/vitepress;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}

```



```shell
sudo ln -s /etc/nginx/sites-available/vitepress /etc/nginx/sites-enabled/

nginx -t
nginx -s reload
# systemctl restart nginx
```



