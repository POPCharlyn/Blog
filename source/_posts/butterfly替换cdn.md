---
title: butterfly替换jsdelivr cdn链接教程
date: 2022-05-28 20:21:46
categories: 教程
cover: https://ik.imagekit.io/nicexl/text/2785d5d234ba98d6a202e99f6bdcac7a_prpvld10x.jpeg
tags: cdn
---
最近jsdelivr凉了，国内不少博客都出现了无法访问的问题。下面介绍一些jsdelivr的替换链接。

#替换方式

```mermaid
themes/butterfly/_config.yml
```
新版butterfly cdn配置页面，在_config.yml底部

![Alt text]( "https://p.zhheo.com/9oOR5i25990581652933939374.png")
#链接

目前能用的jsdelivr链接

```mermaid
gcore.jsdelivr.net
fastly.jsdelivr.net
```

#npm

```npm
https://npm.elemecdn.com
https://unpkg.com/
事例:https://unpkg.com/@waline/client@v2/dist/waline.js
记得后面unpkg.com/后不带npm/
```
