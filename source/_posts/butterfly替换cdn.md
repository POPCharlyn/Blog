---
title: butterfly替换jsdelivr cdn链接教程
date: 2022-05-28 20:21:46
categories: 教程
cover: https://ik.imagekit.io/nicexl/text/2785d5d234ba98d6a202e99f6bdcac7a_prpvld10x.jpeg
tags: cdn
---
最近jsdelivr凉了，国内不少博客都出现了无法访问或访问慢的问题。下面介绍一些jsdelivr的替换链接。

#### 替换方式

```
themes/butterfly/_config.yml
```
新版butterfly cdn配置页面，在_config.yml底部

![1](https://ik.imagekit.io/nicexl/text/57822202270702.jpg)

目前能用的jsdelivr链接

```
gcore.jsdelivr.net
fastly.jsdelivr.net
```

#### npm

```npm
https://npm.elemecdn.com
https://unpkg.com/
演示:https://unpkg.com/@waline/client@v2/dist/waline.js
记住/后不带npm/
```
我这里只列出我在用的cdn，我没有用到的cdn可以在评论中留言，有时间我会补充。
#### jquery
```
https://npm.elemecdn.com/jquery@3.2.1/dist/jquery.min.js
```
#### pjax
```
https://npm.elemecdn.com/pjax/pjax.min.js
```
#### waline
```
https://unpkg.com/@waline/client@v2/dist/waline.js
https://unpkg.com/@waline/client@v2/dist/waline.css
```
#### fontawesome
```
https://use.fontawesome.com/releases/v6.0.0/css/all.css
```


