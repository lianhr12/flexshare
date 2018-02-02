'use strict';

export default {
    qzone:    'http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url={url}&title={title}&pics={pic}&summary={desc}',
    weibo:    'http://service.weibo.com/share/share.php?url={url}&title={title}&pic={pic}&searchPic=false',
    tqq:      'http://share.v.t.qq.com/index.php?c=share&a=index&url={url}&title={title}&appkey=801cf76d3cfc44ada52ec13114e84a96',
    renren:   'http://widget.renren.com/dialog/share?resourceUrl={url}&srcUrl={url}&title={title}&description={desc}',
    douban:   'http://www.douban.com/share/service?href={url}&name={title}&text={desc}&image={pic}',
    facebook: 'https://www.facebook.com/sharer/sharer.php?u={url}&t={title}&pic={pic}',
    twitter:  'https://twitter.com/intent/tweet?text={title}&url={url}',
    linkedin: 'https://www.linkedin.com/shareArticle?title={title}&summary={desc}&mini=true&url={url}&ro=true',
    weixin:   'http://qr.liantu.com/api.php?text={url}',
    qq:       'http://connect.qq.com/widget/shareqq/index.html?url={url}&desc={title}&pics={pic}',
    ishou:    'http://i.sohu.com/a/app/mblog/add.htm?link={url}&title={title}',
    tieba:    'http://tieba.baidu.com/f/commit/share/openShareApi?url={url}&title={title}&desc={desc}&pic={pic}',
    google:   'https://plus.google.com/share?url={url}',
    vk:       'https://vk.com/share.php?url={url}&title={title}&description={desc}'
};