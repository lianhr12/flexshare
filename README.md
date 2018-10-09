# flexshare

> 更加灵活的web自定义分享插件，纯Javascript插件，配置简单，样式可高度自定义

### 快速上手

#### 1、引入分享插件
 
```html
<script src="./dist/flexshare.js"></script>
```

#### 2、配置参数

```html
<script src="../dist/flexshare.min.js"></script>
<script>
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
```
#### 3、调用方式

```html 
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

### 目前支持的分享社交平台
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