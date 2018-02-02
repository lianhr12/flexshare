(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.FlexShare = factory());
}(this, (function () { 'use strict';

var shareUrl = {
    qzone: 'http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url={url}&title={title}&pics={pic}&summary={desc}',
    weibo: 'http://service.weibo.com/share/share.php?url={url}&title={title}&pic={pic}&searchPic=false',
    tqq: 'http://share.v.t.qq.com/index.php?c=share&a=index&url={url}&title={title}&appkey=801cf76d3cfc44ada52ec13114e84a96',
    renren: 'http://widget.renren.com/dialog/share?resourceUrl={url}&srcUrl={url}&title={title}&description={desc}',
    douban: 'http://www.douban.com/share/service?href={url}&name={title}&text={desc}&image={pic}',
    facebook: 'https://www.facebook.com/sharer/sharer.php?u={url}&t={title}&pic={pic}',
    twitter: 'https://twitter.com/intent/tweet?text={title}&url={url}',
    linkedin: 'https://www.linkedin.com/shareArticle?title={title}&summary={desc}&mini=true&url={url}&ro=true',
    weixin: 'http://qr.liantu.com/api.php?text={url}',
    qq: 'http://connect.qq.com/widget/shareqq/index.html?url={url}&desc={title}&pics={pic}',
    ishou: 'http://i.sohu.com/a/app/mblog/add.htm?link={url}&title={title}',
    tieba: 'http://tieba.baidu.com/f/commit/share/openShareApi?url={url}&title={title}&desc={desc}&pic={pic}',
    google: 'https://plus.google.com/share?url={url}',
    vk: 'https://vk.com/share.php?url={url}&title={title}&description={desc}'
};

function extend(target, object) {
    for (var attr in object) {
        target[attr] = object[attr];
    }
    return target;
}

function isMobile() {
    var userAgentInfo = navigator.userAgent;
    if (!!userAgentInfo.match(/AppleWebKit.*Mobile.*/) || !!userAgentInfo.match(/AppleWebKit/)) {
        var temp = userAgentInfo.toLowerCase();
        if (temp.indexOf('android') > -1 || temp.indexOf('iphone') > -1 || temp.indexOf('ipad') > -1 || temp.indexOf('windows phone') > -1 || temp.indexOf('blackberry') > -1 || temp.indexOf('hp-tablet') > -1 || temp.indexOf('symbian') > -1 || temp.indexOf('phone') > -1) {
            return true;
        }
    }

    return false;
}

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var FlxeShare = function () {
    /**
     * 社交分享类
     * @param options {Object} 分享内容配置信息
     */
    function FlxeShare(options) {
        classCallCheck(this, FlxeShare);

        var defaults$$1 = {
            title: this.getPageShareTitle(), // 分享标题
            desc: this.getPageShareContent(), // 分享内容
            url: this.getPageShareUrl(), // 分享URL地址
            pic: this.getPageSharePic(), // 分享图片
            isOpenDialog: false, // 是否新窗口打开分享页面
            dialog: { // 跟isOpenDialog关联，开启后可配置窗口大小设置
                width: 570,
                height: 520
            }
        };

        this.options = extend(defaults$$1, options);
    }

    /**
     * 绑定社交分享处理
     * @param name {String} 社交名称，具体值可查看/configs/share-url.js
     * @param fn {Function} 回调事件处理
     */


    createClass(FlxeShare, [{
        key: 'socialShare',
        value: function socialShare(name, fn) {
            if (!shareUrl[name]) {
                console.error('Please pass in the correct social platform.');
                return;
            }

            var currentSocial = shareUrl[name];
            var currentShareUrl = this.shareUrlProccess(currentSocial);

            // 如果为移动端不使用open打开分享地址
            if (isMobile()) {
                fn && fn();
                window.location.href = currentShareUrl;
            } else {
                if (this.options.isOpenDialog) {
                    fn && fn();
                    this.showDialog(currentShareUrl);
                } else {
                    fn && fn();
                    window.location.href = currentShareUrl;
                }
            }
        }

        /**
         * 跳转的URL地址内容替换成分享内容处理
         * @param url {String} 跳转社交平台分享页面URL地址
         * @returns {*}
         */

    }, {
        key: 'shareUrlProccess',
        value: function shareUrlProccess(url) {
            if (!url) {
                return '';
            }

            url = url.replace('{title}', encodeURIComponent(this.options.title)).replace('{desc}', encodeURIComponent(this.options.desc)).replace('{url}', encodeURIComponent(this.options.url)).replace('{pic}', encodeURIComponent(this.options.pic));

            return url;
        }

        /**
         * 创建新窗口打开分享页面
         * @param shareUrl {String} 分享的URL地址
         */

    }, {
        key: 'showDialog',
        value: function showDialog(shareUrl$$1) {
            var dialogHeight = this.options.dialog.height;
            var dialogWidth = this.options.dialog.width;
            var iTop = (window.screen.availHeight - 30 - dialogHeight) / 2;
            var iLeft = (window.screen.availWidth - 10 - dialogWidth) / 2;
            window.open(shareUrl$$1, '', 'width=' + dialogWidth + ',height=' + dialogHeight + ',top=' + iTop + ',left=' + iLeft);
        }

        /**
         * 默认获取页面自定义分享标题
         * @returns {String} 分享标题
         */

    }, {
        key: 'getPageShareTitle',
        value: function getPageShareTitle() {
            return document.querySelector('meta[property="og:title"]') && document.querySelector('meta[property="og:title"]').getAttribute('content') || document.querySelector('meta[itemprop="name"]') && document.querySelector('meta[itemprop="name"]').getAttribute('content') || document.title || '';
        }

        /**
         * 默认获取页面自定义分享内容
         * @returns {String} 分享内容
         */

    }, {
        key: 'getPageShareContent',
        value: function getPageShareContent() {
            return document.querySelector('meta[property="og:description"]') && document.querySelector('meta[property="og:description"]').getAttribute('content') || document.querySelector('meta[itemprop="description"]') && document.querySelector('meta[itemprop="description"]').getAttribute('content') || document.querySelector('meta[name="description"]') && document.querySelector('meta[name="description"]').getAttribute('content') || '';
        }

        /**
         * 默认获取页面自定义分享URL地址
         * @returns {String} 分享URL地址
         */

    }, {
        key: 'getPageShareUrl',
        value: function getPageShareUrl() {
            return document.querySelector('meta[property="og:url"]') && document.querySelector('meta[property="og:url"]').getAttribute('content') || document.querySelector('meta[itemprop="url"]') && document.querySelector('meta[itemprop="url"]').getAttribute('content') || window.location.href || '';
        }

        /**
         * 默认获取页面自定义分享图片地址
         * @returns {String} 分享图片地址
         */

    }, {
        key: 'getPageSharePic',
        value: function getPageSharePic() {
            return document.querySelector('meta[property="og:image"]') && document.querySelector('meta[property="og:image"]').getAttribute('content') || document.querySelector('meta[itemprop="image"]') && document.querySelector('meta[itemprop="image"]').getAttribute('content') || '';
        }
    }]);
    return FlxeShare;
}();

return FlxeShare;

})));
