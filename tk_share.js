function Tk_share(){
	this.title = document.title;
	this.url = window.location.href;
	this.meta = document.getElementsByTagName('meta')['description']
	this.description = this.meta ? this.meta.getAttribute('content') : '';
	/**
	 * [defaluts 默认参数]
	 * @width {number}  		弹窗width
	 * @height {number} 		弹窗height
	 * @url {string} 			完整分享URL地址
	 * @title {string}  		分享标题
	 * @description {string}    分享内容描述
	 * @pic {string}    		图片的绝对路径地址
	 */
	this.defaluts = {
		width : 570,
		height: 520,
		url : this.url,
		title : this.title,
		description : this.description,
		pic : 'your img url'
	}

	// 各大社交分享链接URL及参数
	this.shareURL = {
		qzone : 'http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url={this.defaluts.url}&title={this.defaluts.title}&pics={this.defaluts.pic}&summary={this.defaluts.description}',
		weibo : 'http://service.weibo.com/share/share.php?url={this.defaluts.url}&title={this.defaluts.title}&pic={this.defaluts.pic}&searchPic=false',
		tqq : 'http://share.v.t.qq.com/index.php?c=share&a=index&url={this.defaluts.url}&title={this.defaluts.title}&appkey=801cf76d3cfc44ada52ec13114e84a96',
		renren : 'http://widget.renren.com/dialog/share?resourceUrl={this.defaluts.url}&srcUrl={this.defaluts.url}&title={this.defaluts.title}&description={this.defaluts.description}',
		douban : 'http://www.douban.com/share/service?href={this.defaluts.url}&name={this.defaluts.title}&text={this.defaluts.description}&image={this.defaluts.pic}',
		facebook : 'https://www.facebook.com/sharer/sharer.php?u={this.defaluts.url}&t={this.defaluts.title}&pic={this.defaluts.pic}',
		twitter : 'https://twitter.com/intent/tweet?text={this.defaluts.title}&url={this.defaluts.url}',
		linkedin : 'https://www.linkedin.com/shareArticle?title={this.defaluts.title}&summary={this.defaluts.description}&mini=true&url={this.defaluts.url}&ro=true',
		weixin : 'http://qr.liantu.com/api.php?text={this.defaluts.url}',
		qq : 'http://connect.qq.com/widget/shareqq/index.html?url={this.defaluts.url}&desc={this.defaluts.title}&pics={this.defaluts.pic}',
		ishou : 'http://i.sohu.com/a/app/mblog/add.htm?link={this.defaluts.url}&title={this.defaluts.title}',
		tieba : 'http://tieba.baidu.com/f/commit/share/openShareApi?url={this.defaluts.url}&title={this.defaluts.title}&desc={this.defaluts.description}&pic={this.defaluts.pic}',
		google : 'https://plus.google.com/share?url={this.defaluts.url}',
		vk : 'https://vk.com/share.php?url={this.defaluts.url}&title={this.defaluts.title}&description={this.defaluts.description}'
	}

}
Tk_share.prototype.init = function(options){
	extend(this.defaluts,options);
}
Tk_share.prototype.replaceApi = function(url){
	url = url.replace('{this.defaluts.url}',encodeURIComponent(this.defaluts.url));
	url = url.replace('{this.defaluts.title}',encodeURIComponent(this.defaluts.title))
	url = url.replace('{this.defaluts.description}',encodeURIComponent(this.defaluts.description))
	url = url.replace('{this.defaluts.pic}',encodeURIComponent(this.defaluts.pic))
	return url;
}

Tk_share.prototype.qzone = function(){
	this.dialog(this.shareURL.qzone);
}
Tk_share.prototype.weibo = function(){
	this.dialog(this.shareURL.weibo);
}
Tk_share.prototype.tqq = function(){
	this.dialog(this.shareURL.tqq)
}
Tk_share.prototype.renren = function(){
	this.dialog(this.shareURL.renren);
}
Tk_share.prototype.douban = function(){
	this.dialog(this.shareURL.douban)
}
Tk_share.prototype.facebook = function(){
	this.dialog(this.shareURL.facebook);
}
Tk_share.prototype.twitter = function(){
	this.dialog(this.shareURL.twitter);
}
Tk_share.prototype.linkedin = function(){
	this.dialog(this.shareURL.linkedin);
}
Tk_share.prototype.weixin = function(callback){
	if (!callback) {
		this.dialog(this.shareURL.weixin);
	}else{
		callback(this.dialog(this.shareURL.weixin));
	}
}
Tk_share.prototype.qq = function(){
	this.dialog(this.shareURL.qq);
}
Tk_share.prototype.ishou = function(){
	this.dialog(this.shareURL.ishou)
}
Tk_share.prototype.tieba = function(){
	this.dialog(this.shareURL.tieba);
}
Tk_share.prototype.ishou = function(){
	this.dialog(this.shareURL.ishou)
}
Tk_share.prototype.google = function(){
	this.dialog(this.shareURL.google)
}
Tk_share.prototype.vk = function(){
	this.dialog(this.shareURL.vk);
}

Tk_share.prototype.dialog = function(repalceContent){
	this.iTop = (window.screen.availHeight-30-this.defaluts.height)/2;
	this.iLeft = (window.screen.availWidth-10-this.defaluts.width)/2;
	window.open(this.replaceApi(repalceContent),'','width='+ this.defaluts.width +',height='+ this.defaluts.height +',top='+ this.iTop +', left='+ this.iLeft +' ')
}

function extend(defaluts,options){
	for(var attr in options){
		defaluts[attr] = options[attr]
	}
}
