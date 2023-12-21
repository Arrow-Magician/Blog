<template><div><h1 id="三、ajax原理" tabindex="-1"><a class="header-anchor" href="#三、ajax原理" aria-hidden="true">#</a> 三、AJAX原理</h1>
<h2 id="xmlhttprequest" tabindex="-1"><a class="header-anchor" href="#xmlhttprequest" aria-hidden="true">#</a> XMLHttpRequest</h2>
<p><code v-pre>XMLHttpRequet</code>，简称 <code v-pre>XHR</code>，可以用于与服务器交互。</p>
<p><code v-pre>XHR</code> 是在 <code v-pre>axios</code> 里面的，有的时候一些静态网页并不需要那么大的代码量，发送的请求只有一两次的话，就可以直接使用 <code v-pre>XHR</code>，两三行代码就可以搞定了。</p>
<h3 id="步骤" tabindex="-1"><a class="header-anchor" href="#步骤" aria-hidden="true">#</a> 步骤</h3>
<ol>
<li>创建 <code v-pre>XMLHttpRequest</code> 对象</li>
<li>配置请求方法和请求 <code v-pre>url</code> 地址</li>
<li>监听 <code v-pre>loadend</code> 事件，接收响应结果</li>
<li>发起请求</li>
</ol>
<h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h3>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> xhr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
xhr<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">'请求方法'</span><span class="token punctuation">,</span> <span class="token string">'请求url网址'</span><span class="token punctuation">)</span>
xhr<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'loadend'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>response<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
xhr<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>示例：</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>my-p<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">const</span> xhr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    xhr<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">'get'</span><span class="token punctuation">,</span> <span class="token string">'http://hmajax.itheima.net/api/province'</span><span class="token punctuation">)</span>
    xhr<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'loadend'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token comment">// console.log(xhr.response);</span>
      <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>response<span class="token punctuation">)</span>
      <span class="token comment">// console.log(data.list.join('&lt;br>'));</span>
      document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'.my-p'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> data<span class="token punctuation">.</span>list<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">'&lt;br>'</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    xhr<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="xmlhttprequest-查询参数" tabindex="-1"><a class="header-anchor" href="#xmlhttprequest-查询参数" aria-hidden="true">#</a> XMLHttpRequest - 查询参数</h3>
<h4 id="语法-1" tabindex="-1"><a class="header-anchor" href="#语法-1" aria-hidden="true">#</a> 语法</h4>
<p><code v-pre>http://xxxx.com/xxx/xxx?参数名1=值1&amp;参数名2=值2</code></p>
<h4 id="小案例-地区查询" tabindex="-1"><a class="header-anchor" href="#小案例-地区查询" aria-hidden="true">#</a> 小案例 - 地区查询</h4>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> selBtn <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'.sel-btn'</span><span class="token punctuation">)</span>
selBtn<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'click'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> pname <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'.province'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>value
  <span class="token keyword">const</span> cname <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'.city'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>value
  
  <span class="token keyword">const</span> qObj <span class="token operator">=</span> <span class="token punctuation">{</span>
    pname<span class="token punctuation">,</span>
    cname
  <span class="token punctuation">}</span>
  
  <span class="token keyword">const</span> paramsObj <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">URLSearchParams</span><span class="token punctuation">(</span>qObj<span class="token punctuation">)</span>
  <span class="token keyword">const</span> queryString <span class="token operator">=</span> paramsObj<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  
  <span class="token keyword">const</span> xhr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  xhr<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">'get'</span><span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">http://hmajax.itheima.net/api/area?</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>queryString<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>
  xhr<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'loadend'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>response<span class="token punctuation">)</span>
    <span class="token keyword">const</span> htmlStr <span class="token operator">=</span> data<span class="token punctuation">.</span>list<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">areaName</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">&lt;li class="list-group-item"></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>areaName<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/li></span><span class="token template-punctuation string">`</span></span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span>
    document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'.list-group'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> htmlStr
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  xhr<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="xmlhttprequest-数据提交" tabindex="-1"><a class="header-anchor" href="#xmlhttprequest-数据提交" aria-hidden="true">#</a> XMLHttpRequest - 数据提交</h3>
<blockquote>
<p>请求头设置 Content-Type: application/json</p>
<p>请求体携带 JSON 字符串</p>
</blockquote>
<h4 id="语法-2" tabindex="-1"><a class="header-anchor" href="#语法-2" aria-hidden="true">#</a> 语法</h4>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> xhr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
xhr<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">'请求方法'</span><span class="token punctuation">,</span> <span class="token string">'请求url网址'</span><span class="token punctuation">)</span>
xhr<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'loadend'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>response<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

xhr<span class="token punctuation">.</span><span class="token function">setRequestHeader</span><span class="token punctuation">(</span><span class="token string">'Content-Type'</span><span class="token punctuation">,</span> <span class="token string">'application/json'</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> user <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">username</span><span class="token operator">:</span> <span class="token string">'itheima007'</span><span class="token punctuation">,</span> <span class="token literal-property property">password</span><span class="token operator">:</span> <span class="token string">'7654321'</span> <span class="token punctuation">}</span>
<span class="token keyword">const</span> userStr <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span>
xhr<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>userStr<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>示例：</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>reg-btn<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>注册用户<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
    document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'.reg-btn'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'click'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> xhr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      xhr<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">'post'</span><span class="token punctuation">,</span> <span class="token string">'http://hmajax.itheima.net/api/register'</span><span class="token punctuation">)</span>
      xhr<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'loadend'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>response<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
      xhr<span class="token punctuation">.</span><span class="token function">setRequestHeader</span><span class="token punctuation">(</span><span class="token string">'Content-Type'</span><span class="token punctuation">,</span> <span class="token string">'application/json'</span><span class="token punctuation">)</span>
      <span class="token keyword">const</span> userObj <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">username</span><span class="token operator">:</span> <span class="token string">'itheima832'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">password</span><span class="token operator">:</span> <span class="token string">'7654321'</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">const</span> userStr <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>userObj<span class="token punctuation">)</span>
      xhr<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>userStr<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/notes/fe/javascript/AJAX/md_img/image-20231219101730130.png" alt="image-20231219101730130" loading="lazy"></p>
<h2 id="promise" tabindex="-1"><a class="header-anchor" href="#promise" aria-hidden="true">#</a> Promise</h2>
<p>管理异步操作的代码，获取异步操作成功或者失败的结果。</p>
<h3 id="步骤-1" tabindex="-1"><a class="header-anchor" href="#步骤-1" aria-hidden="true">#</a> 步骤</h3>
<ol>
<li>创建 Promise 对象</li>
<li>执行异步任务并传递结果
<ol>
<li>成功调用：resolve（值）触发then() 执行</li>
<li>失败调用：reject（值）触发 catch() 执行</li>
</ol>
</li>
<li>接收结果</li>
</ol>
<h3 id="语法-3" tabindex="-1"><a class="header-anchor" href="#语法-3" aria-hidden="true">#</a> 语法</h3>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> p <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token comment">// 执行异步任务并传递结果</span>
	<span class="token comment">// 1. 成功调用：resolve（值）触发then() 执行</span>
	<span class="token comment">// 2. 失败调用：reject（值）触发 catch() 执行</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
p<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">result</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token comment">// 成功</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">error</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token comment">// 失败</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>示例</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> p <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token comment">// resolve('模拟成功结果')</span>
    <span class="token function">reject</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">'模拟失败结果'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
p<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">err</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="promise-三种状态" tabindex="-1"><a class="header-anchor" href="#promise-三种状态" aria-hidden="true">#</a> Promise - 三种状态</h3>
<p>一个 Promise 对象，必然处于以下几种状态之一</p>
<ul>
<li>待定 (pending)：初始状态，既没有被兑现，也没有被拒绝</li>
<li>已兑现(fulfilled)：意味着，操作成功完成</li>
<li>已拒绝(rejected)：意味着，操作失败</li>
</ul>
<p><img src="@source/notes/fe/javascript/AJAX/md_img/image-20231219103451184.png" alt="image-20231219103451184" loading="lazy"></p>
<div class="hint-container warning">
<p class="hint-container-title">注意</p>
<p>Promise 对象一旦被兑现 / 拒绝就是已敲定了，状态无法再被改变</p>
</div>
<h2 id="封装简易版-axios" tabindex="-1"><a class="header-anchor" href="#封装简易版-axios" aria-hidden="true">#</a> 封装简易版 axios</h2>
<h3 id="需求" tabindex="-1"><a class="header-anchor" href="#需求" aria-hidden="true">#</a> 需求</h3>
<p>基于 Promise + XHR 封装 myAxios 函数，获取省份列表展示</p>
<h3 id="步骤-2" tabindex="-1"><a class="header-anchor" href="#步骤-2" aria-hidden="true">#</a> 步骤</h3>
<ol>
<li>定义 myAxios 函数，接收配置对象，返回 Promise 对象</li>
<li>发起 XHR 请求，默认请求方法位 GET</li>
<li>调用成功/失败的处理程序</li>
<li>使用 myAxios 函数，获取省份列表展示</li>
</ol>
<h3 id="语法-4" tabindex="-1"><a class="header-anchor" href="#语法-4" aria-hidden="true">#</a> 语法</h3>
<h4 id="简易版" tabindex="-1"><a class="header-anchor" href="#简易版" aria-hidden="true">#</a> 简易版</h4>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">myAxios</span><span class="token punctuation">(</span><span class="token parameter">config</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res<span class="token punctuation">,</span> rej</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token comment">// XHR 请求</span>
    <span class="token comment">// 调用成功/失败的处理程序</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token function">myAxios</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">'目标资源地址'</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">err</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="较完整版" tabindex="-1"><a class="header-anchor" href="#较完整版" aria-hidden="true">#</a> 较完整版</h4>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">myAxios</span><span class="token punctuation">(</span><span class="token parameter">config</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> xhr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>config<span class="token punctuation">.</span>params<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> paramsObj <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">URLSearchParams</span><span class="token punctuation">(</span>config<span class="token punctuation">.</span>params<span class="token punctuation">)</span>
      <span class="token keyword">const</span> queryString <span class="token operator">=</span> paramsObj<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      config<span class="token punctuation">.</span>url <span class="token operator">+=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">?</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>queryString<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span>
    <span class="token punctuation">}</span>
    xhr<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span>config<span class="token punctuation">.</span>method <span class="token operator">||</span> <span class="token string">'GET'</span><span class="token punctuation">,</span> config<span class="token punctuation">.</span>url<span class="token punctuation">)</span>

    xhr<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'loadend'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>status <span class="token operator">>=</span> <span class="token number">200</span> <span class="token operator">&amp;&amp;</span> xhr<span class="token punctuation">.</span>status <span class="token operator">&lt;</span> <span class="token number">300</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>response<span class="token punctuation">)</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token function">reject</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>response<span class="token punctuation">)</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>config<span class="token punctuation">.</span>data<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> jsonStr <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>config<span class="token punctuation">.</span>data<span class="token punctuation">)</span>
      xhr<span class="token punctuation">.</span><span class="token function">setRequestHeader</span><span class="token punctuation">(</span><span class="token string">'Content-Type'</span><span class="token punctuation">,</span> <span class="token string">'application/json'</span><span class="token punctuation">)</span>
      xhr<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>jsonStr<span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      xhr<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>示例</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">myAxios</span><span class="token punctuation">(</span><span class="token parameter">config</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res<span class="token punctuation">,</span> rej</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> xhr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    xhr<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span>config<span class="token punctuation">.</span>method <span class="token operator">||</span> <span class="token string">'get'</span><span class="token punctuation">,</span> config<span class="token punctuation">.</span>url<span class="token punctuation">)</span>
    xhr<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'loadend'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>status <span class="token operator">>=</span> <span class="token number">200</span> <span class="token operator">&amp;&amp;</span> xhr<span class="token punctuation">.</span>status <span class="token operator">&lt;</span> <span class="token number">300</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">res</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>response<span class="token punctuation">)</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token function">rej</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>response<span class="token punctuation">)</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    xhr<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="案例-天气预报" tabindex="-1"><a class="header-anchor" href="#案例-天气预报" aria-hidden="true">#</a> 案例 - 天气预报</h2>
<h3 id="步骤-3" tabindex="-1"><a class="header-anchor" href="#步骤-3" aria-hidden="true">#</a> 步骤</h3>
<ol>
<li>默认显示-北京市天气
<ol>
<li>获取北京市天气数据</li>
<li>数据展示到页面</li>
</ol>
</li>
<li>搜索城市列表
<ol>
<li>绑定 input 事件，获取关键字</li>
<li>获取展示城市列表数据</li>
</ol>
</li>
<li>切换城市的天气
<ol>
<li>绑定城市点击事件，获取城市code值</li>
<li>调用获取并显示天气的函数</li>
</ol>
</li>
</ol>
<h3 id="代码实现" tabindex="-1"><a class="header-anchor" href="#代码实现" aria-hidden="true">#</a> 代码实现</h3>
<ol>
<li>默认显示 - 北京市天气</li>
</ol>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">getWeather</span><span class="token punctuation">(</span><span class="token parameter">cityCode</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">myAxios</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">'http://hmajax.itheima.net/api/weather'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">params</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">city</span><span class="token operator">:</span> cityCode
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token comment">// console.log(res);</span>
    <span class="token keyword">const</span> wObj <span class="token operator">=</span> res<span class="token punctuation">.</span>data
    <span class="token comment">// 阳历和农历日期</span>
    <span class="token keyword">const</span> dateStr <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">
      &lt;span class="dateShort"></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>wObj<span class="token punctuation">.</span>date<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/span>
      &lt;span class="calendar">农历&amp;nbsp;
        &lt;span class="dateLunar"></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>wObj<span class="token punctuation">.</span>dateLunar<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/span>
      &lt;/span>
    </span><span class="token template-punctuation string">`</span></span>
    document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'.title'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> dateStr
    <span class="token comment">// 城市名字</span>
    document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'.area'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> wObj<span class="token punctuation">.</span>area
    <span class="token comment">// 当天气温</span>
    <span class="token keyword">const</span> nowWStr <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">
      &lt;div class="tem-box">
        &lt;span class="temp">
          &lt;span class="temperature"></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>wObj<span class="token punctuation">.</span>temperature<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/span>
          &lt;span>°&lt;/span>
        &lt;/span>
      &lt;/div>
      &lt;div class="climate-box">
        &lt;div class="air">
          &lt;span class="psPm25"></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>wObj<span class="token punctuation">.</span>psPm25<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/span>
          &lt;span class="psPm25Level"></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>wObj<span class="token punctuation">.</span>psPm25Level<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/span>
        &lt;/div>
        &lt;ul class="weather-list">
          &lt;li>
            &lt;img src="</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>wObj<span class="token punctuation">.</span>weatherImg<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">" class="weatherImg" alt="">
            &lt;span class="weather"></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>wObj<span class="token punctuation">.</span>weather<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/span>
          &lt;/li>
          &lt;li class="windDirection"></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>wObj<span class="token punctuation">.</span>windDirection<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/li>
          &lt;li class="windPower"></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>wObj<span class="token punctuation">.</span>windPower<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/li>
        &lt;/ul>
      &lt;/div>
    </span><span class="token template-punctuation string">`</span></span>
    document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'.weather-box'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> nowWStr
    <span class="token comment">// 当天天气</span>
    <span class="token keyword">const</span> twObj <span class="token operator">=</span> wObj<span class="token punctuation">.</span>todayWeather
    <span class="token keyword">const</span> todayWStr <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">
      &lt;div class="range-box">
          &lt;span>今天：&lt;/span>
          &lt;span class="range">
            &lt;span class="weather"></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>wObj<span class="token punctuation">.</span>weather<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/span>
            &lt;span class="temNight"></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>twObj<span class="token punctuation">.</span>temNight<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/span>
            &lt;span>-&lt;/span>
            &lt;span class="temDay"></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>twObj<span class="token punctuation">.</span>temDay<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/span>
            &lt;span>℃&lt;/span>
          &lt;/span>
        &lt;/div>
        &lt;ul class="sun-list">
          &lt;li>
            &lt;span>紫外线&lt;/span>
            &lt;span class="ultraviolet"></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>twObj<span class="token punctuation">.</span>ultraviolet<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/span>
          &lt;/li>
          &lt;li>
            &lt;span>湿度&lt;/span>
            &lt;span class="humidity"></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>twObj<span class="token punctuation">.</span>humidity<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/span>%
          &lt;/li>
          &lt;li>
            &lt;span>日出&lt;/span>
            &lt;span class="sunriseTime"></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>twObj<span class="token punctuation">.</span>sunriseTime<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/span>
          &lt;/li>
          &lt;li>
            &lt;span>日落&lt;/span>
            &lt;span class="sunsetTime"></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>twObj<span class="token punctuation">.</span>sunsetTime<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/span>
          &lt;/li>
        &lt;/ul>
      &lt;/div>
    </span><span class="token template-punctuation string">`</span></span>
    document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'.today-weather'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> todayWStr
    <span class="token comment">// 7日天气预报数据显示</span>
    <span class="token keyword">const</span> dayForecast <span class="token operator">=</span> wObj<span class="token punctuation">.</span>dayForecast
    <span class="token keyword">const</span> dayForecastStr <span class="token operator">=</span> dayForecast<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">item</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">
        &lt;li class="item">
          &lt;div class="date-box">
            &lt;span class="dateFormat"></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>item<span class="token punctuation">.</span>dateFormat<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/span>
            &lt;span class="date"></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>item<span class="token punctuation">.</span>date<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/span>
          &lt;/div>
          &lt;img src="</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>item<span class="token punctuation">.</span>weatherImg<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">" alt="" class="weatherImg">
          &lt;span class="weather"></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>item<span class="token punctuation">.</span>weather<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/span>
          &lt;div class="temp">
            &lt;span class="temNight"></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>item<span class="token punctuation">.</span>temNight<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/span>-
            &lt;span class="temDay"></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>item<span class="token punctuation">.</span>temDay<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/span>
            &lt;span>℃&lt;/span>
          &lt;/div>
          &lt;div class="wind">
            &lt;span class="windDirection"></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>item<span class="token punctuation">.</span>windDirection<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/span>
            &lt;span class="windPower"></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>item<span class="token punctuation">.</span>windPower<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/span>
          &lt;/div>
        &lt;/li>
      </span><span class="token template-punctuation string">`</span></span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span>
    document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'.week-wrap'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> dayForecastStr
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token function">getWeather</span><span class="token punctuation">(</span><span class="token string">'110100'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/notes/fe/javascript/AJAX/md_img/image-20231219120133869.png" alt="image-20231219120133869" loading="lazy"></p>
<ol start="2">
<li>搜索城市列表</li>
</ol>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'.search-city'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'input'</span><span class="token punctuation">,</span> <span class="token parameter">e</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token comment">// console.log(e.target.value);</span>
  <span class="token function">myAxios</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">'http://hmajax.itheima.net/api/weather/city'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">params</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">city</span><span class="token operator">:</span> e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> liStr <span class="token operator">=</span> res<span class="token punctuation">.</span>data<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">item</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">&lt;li class="city-item" data-code="</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>item<span class="token punctuation">.</span>code<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">"></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>item<span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/li></span><span class="token template-punctuation string">`</span></span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span>
    document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'.search-list'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> liStr
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/notes/fe/javascript/AJAX/md_img/image-20231219121318664.png" alt="image-20231219121318664" loading="lazy"></p>
<ol start="3">
<li>切换城市天气</li>
</ol>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'.search-list'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'click'</span><span class="token punctuation">,</span> <span class="token parameter">e</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span><span class="token string">'city-item'</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> cityCode <span class="token operator">=</span> e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>dataset<span class="token punctuation">.</span>code
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>cityCode<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">getWeather</span><span class="token punctuation">(</span>cityCode<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/notes/fe/javascript/AJAX/md_img/image-20231219144807181.png" alt="image-20231219144807181" loading="lazy"></p>
</div></template>


