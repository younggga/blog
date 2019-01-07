---
title: 使用 VuePress 搭建个人博客
sidebar: auto
sidebarDepth: 2
---
## 为什么你需要一个博客？
优秀的程序员都在写博客，写博客有很多好处：
- 帮助自己梳理、总结、理解知识点（个人提升）
- 帮助别人理解知识点（好人一生平安）
- 简历更好看，更多面试机会（升职加薪）

## 什么是 VuePress？
**VuePress** 是 **尤雨溪**（vue.js 框架作者）4月12日发布的一个全新的基于 vue 的静态网站生成器，实际上就是一个 vue 的 spa 应用，内置 webpack，可以用来写文档。详见 [VuePress中文网](https://vuepress.docschina.org/)

其实类似的建站工具有很多，比如 **WordPress**、**Jekyll**、**Hexo** 等，**VuePress**有哪些优势呢

- 界面简洁优雅
- 容易上手（半小时能搭好整个项目）
- 更好的兼容、扩展 Markdown 语法
- 支持SEO优化
- 可以挂载到GitPage
- 响应式布局，PC端、手机端
- Google Analytics 集成
- 支持 PWA

## 开始搭建

### 创建项目文件夹
可以右键手动新建，也可以使用 mkdir 命令新建：

    mkdir vuepressBlogDemo

### 全局安装 VuePress

    npm install -g vuepress

### 进入 vuepressBlogDemo 文件夹，初始化项目
使用 `npm init` 或 `npm init -y`（默认yes）

    npm init -y

### 创建文件夹和文件
在 vuepressBlogDemo 文件夹中创建 docs 文件夹，在 docs 中创建 .vuepress 文件夹，在.vuepress中创建 public 文件夹和 config.js 文件，最终项目结构如下所示：

    vuepressBlogDemo
    ├─── docs
    │   ├── .vuepress
    │   │   ├── public
    │   │   └── config.js
    │   └── README.md    
    └── package.json

### 在 config.js 文件中配置网站标题、描述、主题等信息

```js
module.exports = {
  title: 'zzz\'s blog',//标题
  description: '我的个人网站',//副标题
  head: [ // 注入到当前页面的 HTML <head> 中的标签
    ['link', { rel: 'icon', href: '/logo.ico' }], // 增加一个自定义的 favicon
  ],
  base: '/', // 这是部署到github相关的配置，部署到github仓库的分支选择
  markdown: {
    lineNumbers: false // 代码块显示行号
  },
  themeConfig: {
    nav:[ // 导航栏配置
      { text: 'one',link: '/one/' },
      { text: 'two', link: '/two/' },
      {text: 'Github', link: 'https://github.com/younggga/blog'}      
    ],
    sidebar: 'auto', // 侧边栏配置
    sidebarDepth: 2, // 侧边栏显示2级
  }
};
```

### 在 package.json 文件里添加两个启动命令
```json
{
  "scripts" : {
    "dev": "vuepress dev docs", //开发环境启动
    "build": "vuepress build docs" //打包编译md文件为静态html
  }
}
```

### 一切就绪 :tada: 跑起来看看吧

    npm run dev

## 部署上线
目前的所有都是在本地进行的，现在我们要把本地的内容推送到某个服务器上，这样只要有网络，就可以随时随地看自己的网站了。

一般来说，有两种方案可供选择：
1. 自己买一个服务器，阿里云、腾讯云等。
2. 使用 [Github Pages](https://pages.github.com/) 。什么是 Github Pages 呢？简单说就是 Github 提供的、用于搭建个人网站的静态站点托管服务。很多人用它搭建个人博客。这种方式的好处是免费、方便，坏处是速度可能会有些慢、不能被国内的搜索引擎收录。

### 挂载到自购服务器
1. 运行

    npm run build

### 挂载到GitPage

#### 登陆 [Github](https://github.com/) 
打开 github 网站，登陆自己的 github 账号

接着我们新建两个仓库：
**新建仓库一： USERNAME.github.io （不用克隆到本地**

**！！！注意：USERNAME 必须是你 Github 的账号名称，不是你的名字拼音，也不是你的非主流网名，不要瞎起，要保证和Github账号名一模一样！**

例如我的 Github 账号名称是 younggga

![](/images/vuepress/1.png)

那么新建仓库，Repository name 就填写为：younggga.github.io

![](/images/vuepress/2.png)

**这个仓库建好后，不用克隆到本地，内容更新修改都在仓库二中进行。**

**新建仓库二：随便起一个名字，比如：vuepressBlog （将你本地代码push到这个库）**

![](/images/vuepress/3.png)

仓库二用来保存源码，使用Git保存代码是一个程序员应该养成的习惯，也可以自己搭建git服务器存放代码，或者使用国内运营商[Gitee](https://gitee.com/)的服务.

#### 在你的项目中，创建一个如下的 deploy.sh 文件（请自行判断去掉高亮行的注释）:
```sh{13,20,23}
#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 推送源码到git仓库(仓库二)
# git push -f <仓库二地址>

# 生成静态文件
npm run build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果你想要部署到 https://USERNAME.github.io
# git push -f git@github.com:USERNAME/USERNAME.github.io.git master

# 如果发布到 https://USERNAME.github.io/<REPO>  REPO=github上的项目
# git push -f git@github.com:USERNAME/<REPO>.git master:gh-pages

cd -
```

把文件中的 USERNAME 改成 Github 账号名。

仓库一负责显示网站内容，我们不需要改动它；日常开发和新增内容，都推送到仓库二中，也可以手动推送。

#### :clap: 大功告成，运行发布命令
运行根目录的deploy.sh

此时打开https://<username>.github.io/即可看到自己的主页啦(ps:可能会有延迟)

配置自己

## 语法
完成了基础搭建后，就可以在docs目录下新建 `.md` 文件写文章了（.md 是 Markdown 语法文件，你需要知道 Markdown 的一些基本写法，很简单，这里给大家一份 [Markdown 语法整理大集合](https://www.jianshu.com/p/b03a8d7b1719)）

下面给大家安利一些VuePress自定义的方法。

### 代码块高亮
在 .md 文件中书写代码时，可在 \`\`\` 后增加 js、html、json等格式类型，代码块即可按照指定类型高亮

大括号中的行还会特别高亮显示

代码：

<pre class="language-text"><code>``` js
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```</code></pre>

效果：
``` js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

### 自定义容器

代码：

    ::: tip 提示
    this is a tip
    :::

    ::: warning 注意
    this is a tip
    :::

    ::: danger 警告
    this is a tip
    :::

效果：
::: tip 提示
this is a tip
:::

::: warning 注意
this is a tip
:::

::: danger 警告
this is a tip
:::

### 支持 Emoji
代码：

    :tada: :100: :bamboo: :gift_heart: :fire:

效果：
:tada: :100: :bamboo: :gift_heart: :fire:

:point_right: 这里有一份 [Emoji 大全](https://www.webpagefx.com/tools/emoji-cheat-sheet/) 

### 支持 PWA
VuePress 默认支持 [PWA](https://segmentfault.com/a/1190000012353473)，配置方法如下：

config.js 文件中增加

```js
head: [ // 注入到当前页面的 HTML <head> 中的标签
  ['link', { rel: 'manifest', href: '/logo.ico' }],
  ['link', { rel: 'apple-touch-icon', href: '/logo.ico' }],
],
serviceWorker: true // 是否开启 PWA
```

public 文件夹下新建 manifest.json 文件，添加

```json
{
  "name": "张三",
  "short_name": "张三",
  "start_url": "index.html",
  "display": "standalone",
  "background_color": "#2196f3",
  "description": "张三的个人主页",
  "theme_color": "blue",
  "icons": [
    {
      "src": "./logo.ico",
      "sizes": "144x144",
      "type": "image/png"
    }
  ],
  "related_applications": [
    {
      "platform": "web"
    },
    {
      "platform": "play",
      "url": "https://play.google.com/store/apps/details?id=cheeaun.hackerweb"
    }
  ]
}
```

最后在 iPhone 的 safrai 浏览器中打开本网站，点击 `+添加到主屏幕` 就能在桌面看到一个像原生 App 一样的图标（感觉自己写了一个 App 有木有 :smile:）

## 最后
- 你需要一些 [Markdown](https://www.jianshu.com/p/b03a8d7b1719) 语法的基础知识；
- 你需要一个 [Github](https://github.com/) 账号，并在里面创建两个 repo；
- Github 需要添加 ssh key，第一次使用的同学遇到问题可以百度解决；
- 个人博客不只可以用来写技术相关的内容，也可以有自己写的文章、随笔，甚至上传一些照片。
