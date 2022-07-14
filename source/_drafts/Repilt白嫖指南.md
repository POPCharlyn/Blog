---
title: Repilt | 白嫖指南
date: 2022-07-11 17:28:30
tags: 笔记
categories: 杂项
cover: https://cn.bing.com/th?id=OHR.BarcelonaPop_ZH-CN3687855585_1920x1080.jpg&rf=LaDigue_1920x1080.jpg
---

前一阵子捣鼓了 [Replit](https://replit.com/)
白嫖了不少项目，感觉真滴不错。
下面会写教程。
![](https://ik.imagekit.io/nicexl/text/26604.webp)
可以部署Vue3 博客，[Busuanzi](http://busuanzi.ibruce.info/) 计数，[Hexo](https://hexo.io/) 博客，[Kodbox](https://kodcloud.com/) 可道云，[OneManager-php](https://github.com/qkqpttgf/OneManager-php)，[Panindex](https://libsgh.github.io/PanIndex)，[Alist](https://alist-doc.nn.ci/) , [onedrive-vercel-index](https://github.com/spencerwooo/onedrive-vercel-index) 等等。

#### 准备

注册登录 [Replit](https://replit.com/) 并创建教育 Team（私有仓库）。
![](https://ik.imagekit.io/nicexl/text/replit.com.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1657535838371)

#### 开始

##### 在Repilt中部署Alist

[🗂️ Alist演示站 (nn.ci)](https://alist.nn.ci/)

##### 个人版

<a href="https://repl.it/github/xlenco/alist-build-on-replit">
<img alt="Run on Repl.it" src="https://repl.it/badge/github/xilej/alist-build-on-replit" style="height: 40px; width: 190px;" />
</a>

##### 教育版

1.在Repilt中新建Bash语言项目
![](https://ik.imagekit.io/nicexl/text/343779.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1657536161860)
2.将以下代码粘贴至Replit Shell后回车

```
git clone https://github.com/xlenco/alist-build-on-replit && mv -b alist-build-on-replit/* ./ && mv -b alist-build-on-replit/.[^.]* ./ && rm -rf *~ && rm -rf alist-build-on-replit
```

当加载完 Loading Nix environment... 后点击绿色 ▶ Run

##### 在Repilt中部署OneMangaer

[Demo ](https://onemanager.qkqpttgf.repl.co/)

1. 在Repilt中新建PHP Web Server 语言项目
2. 在Replit Shell内输入以下内容并回车

`git clone https://github.com/qkqpttgf/OneManager-php && mv -b OneManager-php/* ./ && mv -b OneManager-php/.[^.]* ./ && rm -rf *~ && rm -rf OneManager-php`

3.加载完后点击绿色 ▶ Run

##### 在Repilt中部署onedrive-vercel-index



这个稍微有点复杂，不过下面会手把手的教学。

1. 下载下面项目源码
   [![Readme Card](https://github-readme-stats.vercel.app/api/pin/?username=xlenco&repo=onedrive-vercel-index-replit&theme=vue)](https://github.com/xlenco/onedrive-vercel-index-replit)
   
   <a href="https://repl.it/github/xlenco/onedrive-vercel-index-replit">

<img alt="Run on Repl.it" src="https://repl.it/badge/github/xlenco/onedrive-vercel-index-replit" style="height: 40px; width: 190px;" />
</a>
此项方便Repilt个人版用户
[分流下载密码：abcd](https://url66.ctfile.com/f/30717266-614561272-1d7d9a?p=abcd)
由于github在国内不是太稳定，



* Alistr如何查看密码:
  `./alist -password`
  ##### 在Replit Shell内输入后回车即可查看

#### 结尾

其他内容将会在后面继续更新



