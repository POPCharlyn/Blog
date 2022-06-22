---
title: 教程：hexo-githubcalendar 插件 1.0
date: 2022-06-23 07:15:39
tags: 教程
categories: - Github
            - hexo-githubcalendar
cover:
---
### NPM 插件安装的部署方法：

#### 1.安装

```
npm i hexo-githubcalendar --save

# 或者

cnpm i hexo-githubcalendar --save
```

#### 2.添加_config 配置项 (不是主题的)：

```
githubcalendar:
  enable: true
  enable_page: /
  user: zfour
  layout:
    type: id
    name: recent-posts
    index: 0
  githubcalendar_html: '<div class="recent-post-item" style="width:100%;height:auto;padding:10px;"><div id="github_loading" style="width:10%;height:100%;margin:0 auto;display: block"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"  viewBox="0 0 50 50" style="enable-background:new 0 0 50 50" xml:space="preserve"><path fill="#d0d0d0" d="M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z" transform="rotate(275.098 25 25)"><animateTransform attributeType="xml" attributeName="transform" type="rotate" from="0 25 25" to="360 25 25" dur="0.6s" repeatCount="indefinite"></animateTransform></path></svg></div><div id="github_container"></div></div>'
  pc_minheight: 280px
  mobile_minheight: 0px
  color: "['#ebedf0', '#fdcdec', '#fc9bd9', '#fa6ac5', '#f838b2', '#f5089f', '#c4067e', '#92055e', '#540336', '#48022f', '#30021f']"
  api: https://python-github-calendar-api.vercel.app/api
  # api: https://python-gitee-calendar-api.vercel.app/api
  calendar_js: https://cdn.jsdelivr.net/gh/Zfour/hexo-github-calendar@1.21/hexo_githubcalendar.js
  plus_style: ""
```

更多主题配置请前往：[https://github.com/Zfour/hexo-github-calendar/issues](https://github.com/Zfour/hexo-github-calendar/issues)

##### enable

参数：true/false

含义：是否开启插件

##### 

##### enable_page

参数： /
含义： 路由地址，如 / 代表主页。/me/ 代表自我介绍页等等

##### 

##### user

参数： zfour
含义： 你的 github 或者 gitee 用户名

##### layout

参数：type; （class&id）

参数：name;

参数：index；（数字）

含义：如果说 gihubcalendar 是一幅画，那么这个 layout 就是指定了哪面墙来挂画

而在 HTML 的是世界里有两种墙分别 type 为 id 和 class。

其中在定义 class 的时候会出现多个 class 的情况，这时就需要使用 index，确定是哪一个。

最后墙的名字即是 name;

````
<div name="我是墙" id="recent-posts">
  <!-- id=>type  recent-posts=>name    -->
  <div name="我是画框">
    <div name="我是纸">
      <!--这里通过js挂载githubcalendar，也就是画画-->
    </div>
  </div>
</div>
```
````
