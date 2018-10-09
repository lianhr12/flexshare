'use strict';

import shareUrl from './configs/share-url';
import {extend, isMobile} from './utils/index';


export default class FlxeShare {
    /**
     * 社交分享类
     * @param options {Object} 分享内容配置信息
     */
    constructor(options) {
        let defaults = {
            title       : this.getPageShareTitle(),    // 分享标题
            desc        : this.getPageShareContent(),  // 分享内容
            url         : this.getPageShareUrl(),      // 分享URL地址
            pic         : this.getPageSharePic(),      // 分享图片
            isOpenDialog: false,                       // 是否新窗口打开分享页面
            dialog      : {                            // 跟isOpenDialog关联，开启后可配置窗口大小设置
                width : 570,
                height: 520
            }
        };

        this.options = extend(defaults, options);
    }

    /**
     * 绑定社交分享处理
     * @param name {String} 社交名称，具体值可查看/configs/share-url.js
     * @param fn {Function} 回调事件处理
     */
    socialShare(name, fn) {
        if (!shareUrl[name]) {
            console.error('Please pass in the correct social platform.');
            return;
        }

        let currentSocial   = shareUrl[name];
        let currentShareUrl = this.shareUrlProccess(currentSocial);

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
    shareUrlProccess(url) {
        if (!url) {
            return '';
        }

        url = url.replace('{title}', encodeURIComponent(this.options.title))
            .replace('{desc}', encodeURIComponent(this.options.desc))
            .replace('{url}', encodeURIComponent(this.options.url))
            .replace('{pic}', encodeURIComponent(this.options.pic));

        return url;
    }

    /**
     * 创建新窗口打开分享页面
     * @param shareUrl {String} 分享的URL地址
     */
    showDialog(shareUrl) {
        let dialogHeight = this.options.dialog.height;
        let dialogWidth  = this.options.dialog.width;
        let iTop         = (window.screen.availHeight - 30 - dialogHeight) / 2;
        let iLeft        = (window.screen.availWidth - 10 - dialogWidth) / 2;
        window.open(shareUrl, '', `width=${dialogWidth},height=${dialogHeight},top=${iTop},left=${iLeft}`);
    }

    /**
     * 默认获取页面自定义分享标题
     * @returns {String} 分享标题
     */
    getPageShareTitle() {
        return (document.querySelector('meta[property="og:title"]') && document.querySelector('meta[property="og:title"]').getAttribute('content')) ||
            (document.querySelector('meta[itemprop="name"]') && document.querySelector('meta[itemprop="name"]').getAttribute('content')) ||
            document.title || '';
    }

    /**
     * 默认获取页面自定义分享内容
     * @returns {String} 分享内容
     */
    getPageShareContent() {
        return (document.querySelector('meta[property="og:description"]') && document.querySelector('meta[property="og:description"]').getAttribute('content')) ||
            (document.querySelector('meta[itemprop="description"]') && document.querySelector('meta[itemprop="description"]').getAttribute('content')) ||
            (document.querySelector('meta[name="description"]') && document.querySelector('meta[name="description"]').getAttribute('content')) || '';
    }

    /**
     * 默认获取页面自定义分享URL地址
     * @returns {String} 分享URL地址
     */
    getPageShareUrl() {
        return (document.querySelector('meta[property="og:url"]') && document.querySelector('meta[property="og:url"]').getAttribute('content')) ||
            (document.querySelector('meta[itemprop="url"]') && document.querySelector('meta[itemprop="url"]').getAttribute('content')) ||
            window.location.href || '';
    }

    /**
     * 默认获取页面自定义分享图片地址
     * @returns {String} 分享图片地址
     */
    getPageSharePic() {
        return (document.querySelector('meta[property="og:image"]') && document.querySelector('meta[property="og:image"]').getAttribute('content')) ||
            (document.querySelector('meta[itemprop="image"]') && document.querySelector('meta[itemprop="image"]').getAttribute('content')) || '';
    }
}

