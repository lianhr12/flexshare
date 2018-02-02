## Functions

<dl>
<dt><a href="#socialShare">socialShare(name, fn)</a></dt>
<dd><p>绑定社交分享处理</p>
</dd>
<dt><a href="#shareUrlProccess">shareUrlProccess(url)</a> ⇒ <code>*</code></dt>
<dd><p>跳转的URL地址内容替换成分享内容处理</p>
</dd>
<dt><a href="#showDialog">showDialog(shareUrl)</a></dt>
<dd><p>创建新窗口打开分享页面</p>
</dd>
<dt><a href="#getPageShareTitle">getPageShareTitle()</a> ⇒ <code>String</code></dt>
<dd><p>默认获取页面自定义分享标题</p>
</dd>
<dt><a href="#getPageShareContent">getPageShareContent()</a> ⇒ <code>String</code></dt>
<dd><p>默认获取页面自定义分享内容</p>
</dd>
<dt><a href="#getPageShareUrl">getPageShareUrl()</a> ⇒ <code>String</code></dt>
<dd><p>默认获取页面自定义分享URL地址</p>
</dd>
<dt><a href="#getPageSharePic">getPageSharePic()</a> ⇒ <code>String</code></dt>
<dd><p>默认获取页面自定义分享图片地址</p>
</dd>
</dl>

<a name="socialShare"></a>

## socialShare(name, fn)
绑定社交分享处理

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>String</code> | 社交名称，具体值可查看/configs/share-url.js |
| fn | <code>function</code> | 回调事件处理 |

<a name="shareUrlProccess"></a>

## shareUrlProccess(url) ⇒ <code>\*</code>
跳转的URL地址内容替换成分享内容处理

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>String</code> | 跳转社交平台分享页面URL地址 |

<a name="showDialog"></a>

## showDialog(shareUrl)
创建新窗口打开分享页面

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| shareUrl | <code>String</code> | 分享的URL地址 |

<a name="getPageShareTitle"></a>

## getPageShareTitle() ⇒ <code>String</code>
默认获取页面自定义分享标题

**Kind**: global function  
**Returns**: <code>String</code> - 分享标题  
<a name="getPageShareContent"></a>

## getPageShareContent() ⇒ <code>String</code>
默认获取页面自定义分享内容

**Kind**: global function  
**Returns**: <code>String</code> - 分享内容  
<a name="getPageShareUrl"></a>

## getPageShareUrl() ⇒ <code>String</code>
默认获取页面自定义分享URL地址

**Kind**: global function  
**Returns**: <code>String</code> - 分享URL地址  
<a name="getPageSharePic"></a>

## getPageSharePic() ⇒ <code>String</code>
默认获取页面自定义分享图片地址

**Kind**: global function  
**Returns**: <code>String</code> - 分享图片地址  
