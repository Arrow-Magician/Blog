<template><div><h1 id="作业-1" tabindex="-1"><a class="header-anchor" href="#作业-1" aria-hidden="true">#</a> 作业 - 1</h1>
<h2 id="客观题" tabindex="-1"><a class="header-anchor" href="#客观题" aria-hidden="true">#</a> 客观题</h2>
<p>https://ks.wjx.top/vm/OrYaZ1x.aspx#</p>
<h2 id="主观题" tabindex="-1"><a class="header-anchor" href="#主观题" aria-hidden="true">#</a> 主观题</h2>
<ol>
<li>微信聊天</li>
</ol>
<h4 id="要求" tabindex="-1"><a class="header-anchor" href="#要求" aria-hidden="true">#</a> 要求</h4>
<ol>
<li>点击发送和敲击回车键，都能发送聊天消息</li>
<li>把自己和对方消息都展示到页面上</li>
<li>当聊天消息出现滚动条时，始终让最后一条消息出现在视口范围内</li>
</ol>
<p>接口文档：https://apifox.com/apidoc/shared-1b0dd84f-faa8-435d-b355-5a8a329e34a8/api-82668104</p>
<h4 id="代码编写" tabindex="-1"><a class="header-anchor" href="#代码编写" aria-hidden="true">#</a> 代码编写</h4>
<ol>
<li>逻辑代码</li>
</ol>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">let</span> chatDiv <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'.chat'</span><span class="token punctuation">)</span>
  <span class="token keyword">let</span> chatUL <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'.chat_list'</span><span class="token punctuation">)</span>
  <span class="token keyword">let</span> sendInput <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'.chat_input'</span><span class="token punctuation">)</span>

  <span class="token keyword">let</span> <span class="token function-variable function">chatFn</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> sendText <span class="token operator">=</span> sendInput<span class="token punctuation">.</span>value
    chatUL<span class="token punctuation">.</span>innerHTML <span class="token operator">+=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">
      &lt;li class="right">
        &lt;span></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>sendText<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/span>
        &lt;img src='./assets/me.png' alt="">
      &lt;/li>
    </span><span class="token template-punctuation string">`</span></span>
    sendInput<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token string">''</span>
    chatDiv<span class="token punctuation">.</span>scrollTop <span class="token operator">=</span> chatDiv<span class="token punctuation">.</span>scrollHeight
    <span class="token function">axios</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">'http://hmajax.itheima.net/api/robot'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">params</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">spoken</span><span class="token operator">:</span> sendText
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">result</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      chatUL<span class="token punctuation">.</span>innerHTML <span class="token operator">+=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">
        &lt;li class="left">
          &lt;img src="./assets/you.png" alt="">
          &lt;span></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>result<span class="token punctuation">.</span>data<span class="token punctuation">.</span>data<span class="token punctuation">.</span>info<span class="token punctuation">.</span>text<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/span>
        &lt;/li>
      </span><span class="token template-punctuation string">`</span></span>
      chatDiv<span class="token punctuation">.</span>scrollTop <span class="token operator">=</span> chatDiv<span class="token punctuation">.</span>scrollHeight
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">const</span> send <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'.send_img'</span><span class="token punctuation">)</span>
  send<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'click'</span><span class="token punctuation">,</span> chatFn<span class="token punctuation">)</span>

  document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'.chat_input'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'keyup'</span><span class="token punctuation">,</span> <span class="token parameter">e</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>e<span class="token punctuation">.</span>keyCode <span class="token operator">===</span> <span class="token number">13</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">chatFn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/notes/fe/javascript/AJAX/md_img/image-20231214173544683.png" alt="image-20231214173544683" loading="lazy"></p>
<h3 id="_2-必要商城搜索" tabindex="-1"><a class="header-anchor" href="#_2-必要商城搜索" aria-hidden="true">#</a> 2. 必要商城搜索</h3>
<h4 id="要求-1" tabindex="-1"><a class="header-anchor" href="#要求-1" aria-hidden="true">#</a> 要求</h4>
<ol>
<li>输入要搜索的关键字，点击放大镜搜索匹配商品</li>
</ol>
<h4 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h4>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">const</span> btn <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'#searchButton'</span><span class="token punctuation">)</span>
  btn<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'click'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> searchText <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'#searchInp'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>value
    <span class="token function">axios</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">'https://hmajax.itheima.net/api-s/searchGoodsList'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">'get'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">params</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">searchText</span><span class="token operator">:</span> searchText<span class="token punctuation">,</span>
        <span class="token literal-property property">page</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token literal-property property">everyNum</span><span class="token operator">:</span> <span class="token number">16</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">result</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token comment">// console.log(result);</span>
      <span class="token keyword">let</span> ul <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'.category-list'</span><span class="token punctuation">)</span>
      ul<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> result<span class="token punctuation">.</span>data<span class="token punctuation">.</span>list<span class="token punctuation">.</span>data<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">obj</span> <span class="token operator">=></span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">
        &lt;li>
          &lt;a>
            &lt;i>
              &lt;img src="</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>obj<span class="token punctuation">.</span>imageUrl<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">">
            &lt;/i>
            &lt;div class="supplier">祖玛珑同原料制造商&lt;/div>
            &lt;div class="title"></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>obj<span class="token punctuation">.</span>goodsName<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/div>
            &lt;div class="priceBox">
              &lt;div class="price" price="</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>obj<span class="token punctuation">.</span>goodsPrice<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">">
                &lt;span style="color: #F7A701; font-size: 12px; padding-left: 2px;">￥&lt;span style="font-size:18px;">
                    </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>obj<span class="token punctuation">.</span>goodsPrice<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">
                  &lt;/span>
                &lt;/span>
              &lt;/div>
              &lt;div class="mack">
                &lt;span style="color:#FB4C81;background:#FFFFFF; border-color:#FB4C81">一起拼&lt;/span>
                &lt;span style="color:#FFFFFF;background:#AB7FD1; border-color:#AB7FD1">精选&lt;/span>
              &lt;/div>
            &lt;/div>
            &lt;div class="evaluate"></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>obj<span class="token punctuation">.</span>evalNum<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">条好评&lt;/div>
          &lt;/a>
        &lt;/li>
      </span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/notes/fe/javascript/AJAX/md_img/image-20231214180212688.png" alt="image-20231214180212688" loading="lazy"></p>
<h2 id="排错题" tabindex="-1"><a class="header-anchor" href="#排错题" aria-hidden="true">#</a> 排错题</h2>
<p>一共有6处错误</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token comment">// 获取提示框</span>
  
  <span class="token comment">// 1. 第一个错误</span>
  <span class="token keyword">const</span> myAlert <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'alert'</span><span class="token punctuation">)</span>
  <span class="token keyword">function</span> <span class="token function">alertFn</span><span class="token punctuation">(</span><span class="token parameter">msg<span class="token punctuation">,</span> isSuccess</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    myAlert<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">'show'</span><span class="token punctuation">)</span>

    myAlert<span class="token punctuation">.</span>innerText <span class="token operator">=</span> msg
    <span class="token keyword">const</span> bgStyle <span class="token operator">=</span> isSuccess <span class="token operator">?</span> <span class="token string">'alert-success'</span> <span class="token operator">:</span> <span class="token string">'alert-danger'</span>
    myAlert<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>bgStyle<span class="token punctuation">)</span>

    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      myAlert<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token string">'show'</span><span class="token punctuation">)</span>
      myAlert<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span>bgStyle<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'.btn-login'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'click'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token comment">// 2. 第二个错误</span>
    <span class="token keyword">const</span> username <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'.password'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>value
    <span class="token keyword">const</span> password <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'.password'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>value

    <span class="token keyword">if</span> <span class="token punctuation">(</span>username<span class="token punctuation">.</span>length <span class="token operator">&lt;</span> <span class="token number">8</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">alertFn</span><span class="token punctuation">(</span><span class="token string">'用户名必须大于等于8位'</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'用户名必须大于等于8位'</span><span class="token punctuation">)</span>
      <span class="token keyword">return</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>password<span class="token punctuation">.</span>length <span class="token operator">&lt;</span> <span class="token number">6</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">alertFn</span><span class="token punctuation">(</span><span class="token string">'密码必须大于等于6位'</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'密码必须大于等于6位'</span><span class="token punctuation">)</span>
      <span class="token keyword">return</span>
    <span class="token punctuation">}</span>

    <span class="token function">axios</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token comment">// 3. 第三个错误</span>
      <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">'http://hmajax.itheima.net/api/lgoin'</span><span class="token punctuation">,</span>
      <span class="token comment">// 4. 第四个错误</span>
      <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token string">'POST'</span><span class="token punctuation">,</span>
      <span class="token comment">// 5. 第五个错误</span>
      <span class="token literal-property property">params</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// 6. 第六个错误</span>
        <span class="token literal-property property">user</span><span class="token operator">:</span> username<span class="token punctuation">,</span>
        password
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">result</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token function">alertFn</span><span class="token punctuation">(</span>result<span class="token punctuation">.</span>data<span class="token punctuation">.</span>message<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">.</span>data<span class="token punctuation">.</span>message<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">error</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token function">alertFn</span><span class="token punctuation">(</span>error<span class="token punctuation">.</span>response<span class="token punctuation">.</span>data<span class="token punctuation">.</span>message<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>error<span class="token punctuation">.</span>response<span class="token punctuation">.</span>data<span class="token punctuation">.</span>message<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>答：</p>
<ol>
<li>类名写错了</li>
</ol>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> myAlert <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'.alert-success'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2">
<li>用户名获取错误</li>
</ol>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> username <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'.username'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>value
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="3">
<li>地址写错了</li>
</ol>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token function">axios</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">'https://hmajax.itheima.net/api/login'</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4">
<li>单词拼写错误</li>
</ol>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token function">axios</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token operator">...</span><span class="token punctuation">,</span>
  <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">'POST'</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5">
<li>应该用 <code v-pre>data</code> 传递参数，而不是用 <code v-pre>params</code> 查询参数</li>
</ol>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token function">axios</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token operator">...</span><span class="token punctuation">,</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token operator">...</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="6">
<li>键的名字错了</li>
</ol>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token function">axios</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token operator">...</span><span class="token punctuation">,</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  	username<span class="token punctuation">,</span>
  	password
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="一些面试题" tabindex="-1"><a class="header-anchor" href="#一些面试题" aria-hidden="true">#</a> 一些面试题</h2>
<p>https://lamphc.github.io/fe-up/#/</p>
</div></template>


