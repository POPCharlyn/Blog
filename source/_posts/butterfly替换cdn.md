---
title: butterfly替换jsdelivr cdn链接教程
date: 2022-05-28 20:21:46
categories: cdn
cover: https://ik.imagekit.io/nicexl/text/86bbb6f9c0432695b85ac84b8cef8e24_edit_34429706274886_0VG-_qWcm.png
tags: 教程
---
最近jsdelivr凉了，国内不少博客都出现了无法访问的问题。下面介绍一些jsdelivr的替换链接。

#替换方式#

```mermaid
themes/butterfly/_config.yml
```

#链接#

勉强能用的jsdelivr链接

```mermaid
gcore.jsdelivr.net
fastly.jsdelivr.net
```

#npm#

```

https://unpkg.com/
事例:https://unpkg.com/@waline/client@v2/dist/waline.js
记得后面unpkg.com/后不带npm/
```
