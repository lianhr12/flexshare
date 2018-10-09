# [flexshare](https://github.com/lianhr12/flexshare)
[![](https://img.shields.io/badge/Powered%20by-flexshare-brightgreen.svg)](https://github.com/lianhr12/flexshare)
[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/lianhr12/flexshare/blob/master/LICENSE)
[![Build Status](https://travis-ci.org/lianhr12/flexshare.svg?branch=master)](https://travis-ci.org/lianhr12/flexshare)
[![npm](https://img.shields.io/badge/npm-0.2.0-orange.svg)](https://www.npmjs.com/package/flexshare)

更加灵活的web自定义分享插件，纯Javascript插件，配置简单，样式可高度自定义

## 特性

- 支持umd通用模块方式引用
- 支持更加灵活的分享

## 兼容性

单元测试保证支持如下环境：

| IE   | CH   | FF   | SF   | OP   | IOS  | 安卓   | Node  |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- | ----- |
| 6+   | 23+  | 4+   | 6+   | 10+  | 5+   | 2.3+ | 0.10+ |

**注意：编译代码依赖ES5环境，对于ie6-8需要引入[es5-shim](http://github.com/es-shims/es5-shim/)才可以兼容

## 目录介绍

```
.
├── demo 使用demo
├── dist 编译产出代码
├── docs 项目文档
├── src 源代码目录
├── test 单元测试
├── CHANGELOG.md 变更日志
└── scripts rollup构建配置目录
```

## 使用者指南
通过npm下载安装代码

```bash
$ npm install --save flexshare
```

如果你是node环境

```js
var base = require('flexshare');
```

如果你是webpack等环境

```js
import base from 'flexshare';
```

如果你是requirejs环境

```js
requirejs(['node_modules/flexshare/dist/index.js'], function (base) {
    // xxx
})
```

如果你是浏览器环境

```html

<!-- 1、引入分享插件 -->
<script src="node_modules/flexshare/dist/index.umd.js"></script>
<script>
    // 2、配置参数
    var flexShare = new flexshare({
       title: '前端技术博客',                      // 分享标题
       desc : '分享生活点滴',                      // 分享内容
       url  : 'https://blog.hrope.cn',            // 分享URL地址
       pic  : 'https://res.hrope.cn/blog/page_background.jpg', // 分享图片
       isOpenDialog: true,                       // 是否新窗口打开分享页面
       dialog      : {                           // 跟isOpenDialog关联，开启后可配置窗口大小设置
           width : 570,
           height: 520
       }
   });
</script>
<!-- 3、调用方式 -->
<ul class="share-container">
    <li><a href="javascript:flexShare.socialShare('weibo');">新浪微博</a></li>
    <li><a href="javascript:flexShare.socialShare('qzone');">QQ空间</a></li>
    <li><a href="javascript:flexShare.socialShare('qq');">QQ</a></li>
    <li><a href="javascript:flexShare.socialShare('tqq');">腾讯微博</a></li>
    <li><a href="javascript:flexShare.socialShare('renren');">人人</a></li>
    <li><a href="javascript:flexShare.socialShare('douban');">豆瓣</a></li>
    <li><a href="javascript:flexShare.socialShare('facebook');">facebook</a></li>
    <li><a href="javascript:flexShare.socialShare('twitter');">twitter</a></li>
    <li><a href="javascript:flexShare.socialShare('linkedin');">linkedin</a></li>
    <li><a href="javascript:flexShare.socialShare('weixin');">微信</a></li>
    <li><a href="javascript:flexShare.socialShare('tieba');">贴吧</a></li>
    <li><a href="javascript:flexShare.socialShare('google');">google</a></li>
    <li><a href="javascript:flexShare.socialShare('vk');">vk</a></li>
    <li><a href="javascript:flexShare.socialShare('ishou');">搜狐微博</a></li>
</ul>
```

## 文档
[API](https://github.com/lianhr12/flexshare/blob/master/docs/flexShare.md)



## 贡献者指南
首次运行需要先安装依赖

```bash
$ npm install
```

一键打包生成生产代码

```bash
$ npm run build
```

运行单元测试，浏览器环境需要手动测试，位于`test/browser`

```bash
$ npm test
```

修改package.json中的版本号，修改README.md中的版本号，修改CHANGELOG.md，然后发布新版

```bash
$ npm run release
```

将新版本发布到npm

```bash
$ npm publish
```

可能需要你自己修改的地方如下：

- README.md 中的信息
- package.json 中的信息
- scripts/pkg-info.js 中的信息

## 更新日志
[CHANGELOG.md](https://github.com/lianhr12/flexshare/blob/master/CHANGELOG.md)

## 目前支持的分享社交平台
 - 新浪微博
 - 搜狐微博
 - QQ
 - QQ空间
 - 微信
 - 人人网
 - 豆瓣
 - 贴吧
 - Facebook
 - Google
 - Linkedin
 - Twitter
 - Vkontakte