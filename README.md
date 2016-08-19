# flexshare

> 更加灵活的web自定义分享插件，纯Javascript插件，配置简单，样式可高度自定义

使用方式：

1、引入分享插件
        
    <script src="./tk_share.js"></script>


2、配置参数：
    
    <script type="text/javascript">
        
        var share = new Tk_share();
        share.init({
            // 设置弹窗的窗口宽高，这里不用加单位
            width: 450,
            height: 500,
            // 分享的完整url地址
            url : 'https://www.baidu.com',
            // 分享标题
            title : '百度搜索',
            // 分享内容描述
            description : '百度一下，你就知道',
            // 分享的图片地址，建议使用完整的url地址
            pic : 'http://img0.imgtn.bdimg.com/it/u=3248586135,4175343721&fm=21&gp=0.jpg'
        })
    </script>
3、调用方式：
    
    <div class="box">
        <a href="javascript:share.weibo();">weibo</a>
        <a href="javascript:share.qzone();">qzone</a>
        <a href="javascript:share.tqq();">tqq</a>
        <a href="javascript:share.renren();">renren</a>
        <a href="javascript:share.douban();">douban</a>
        <a href="javascript:share.facebook();">facebook</a>
        <a href="javascript:share.twitter();">twitter</a>
        <a href="javascript:share.linkedin();">linkedin</a>
        <a href="javascript:share.weixin();">weixin</a>
        <a href="javascript:share.tieba();">tieba</a>
        <a href="javascript:share.google();">google</a>
        <a href="javascript:share.vk()">vk</a>
        <a href="javascript:share.ishou()">sohu</a>
    </div>

目前支持的分享社交平台：
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