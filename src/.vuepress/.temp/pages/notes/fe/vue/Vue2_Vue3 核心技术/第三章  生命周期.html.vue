<template><div><h1 id="第三章-生命周期" tabindex="-1"><a class="header-anchor" href="#第三章-生命周期" aria-hidden="true">#</a> 第三章 | 生命周期</h1>
<h2 id="生命周期" tabindex="-1"><a class="header-anchor" href="#生命周期" aria-hidden="true">#</a> 生命周期</h2>
<p>一个Vue实例从<strong>创建</strong>到<strong>销毁</strong>的整个过程。</p>
<h2 id="生命周期四个阶段" tabindex="-1"><a class="header-anchor" href="#生命周期四个阶段" aria-hidden="true">#</a> 生命周期四个阶段</h2>
<p>四个阶段：① 创建 ② 挂载 ③ 更新 ④ 销毁</p>
<ol>
<li>创建阶段：创建响应式数据</li>
<li>挂在阶段：渲染模板</li>
<li>更新阶段：修改数据，更新视图</li>
<li>销毁阶段：销毁Vue实例</li>
</ol>
<p><img src="@source/notes/fe/vue/Vue2+Vue3 核心技术/md_img/1682065937815.png" alt="1682065937815" loading="lazy"></p>
<h2 id="生命周期函数-钩子函数" tabindex="-1"><a class="header-anchor" href="#生命周期函数-钩子函数" aria-hidden="true">#</a> 生命周期函数(钩子函数)</h2>
<p>让开发者可以在<strong>特定阶段</strong>运行自己的代码</p>
<p><img src="@source/notes/fe/vue/Vue2+Vue3 核心技术/md_img/image-20231025120630381.png" alt="image-20231025120630381" loading="lazy"></p>
<p><img src="@source/notes/fe/vue/Vue2+Vue3 核心技术/md_img/image-20231025121623082.png" alt="image-20231025121623082" loading="lazy"></p>
<h3 id="示例代码" tabindex="-1"><a class="header-anchor" href="#示例代码" aria-hidden="true">#</a> 示例代码</h3>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>app<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">></span></span>{{ title }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>count--<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>-<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span>{{ count }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>count++<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>+<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
	<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">'#app'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
      <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'计数器'</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// 1. 创建阶段(准备数据)</span>
    <span class="token function">beforeCreate</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'beforeCreate 响应式数据准备好之前'</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>count<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">created</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'created 响应式数据准备好之后'</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>count<span class="token punctuation">)</span>
      <span class="token comment">// this.数据名 = 请求回来的数据</span>
      <span class="token comment">// 可以开始发送初始化渲染的请求</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// 2. 挂载阶段(渲染模板)</span>
    <span class="token function">beforeMount</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'beforeMount 模板渲染之前'</span><span class="token punctuation">,</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'h3'</span><span class="token punctuation">)</span>。innerHTML<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">mounted</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'mounted 模板渲染之后'</span><span class="token punctuation">,</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'h3'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>innerHTML<span class="token punctuation">)</span>
      <span class="token comment">// 可以开始操作dom了</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> 
    <span class="token comment">// 3. 更新阶段(修改数据 -> 更新视图)</span>
    <span class="token function">beforeUpdate</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'beforeUpdate 数据修改了，视图还没更新'</span><span class="token punctuation">,</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'span'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>innerHTML<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">updated</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'updated 数据修改了，视图已经更新'</span><span class="token punctuation">,</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'span'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>innerHTML<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// 4. 卸载阶段</span>
    <span class="token function">beforeDestroy</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'beforeDestroy, 卸载前'</span><span class="token punctuation">)</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'清除掉一些Vue以外的资源占用，定时器、演示器等'</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">destroyed</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'destroyed, 卸载后'</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/notes/fe/vue/Vue2+Vue3 核心技术/md_img/image-20231025151603203.png" alt="image-20231025151603203" loading="lazy"></p>
<p><img src="@source/notes/fe/vue/Vue2+Vue3 核心技术/md_img/image-20231025151628367.png" alt="image-20231025151628367" loading="lazy"></p>
<h2 id="案例-新闻列表-created应用" tabindex="-1"><a class="header-anchor" href="#案例-新闻列表-created应用" aria-hidden="true">#</a> 案例-新闻列表(created应用)</h2>
<p>created 数据准备好后，就可以发送初始化渲染请求</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
  	<span class="token selector">*</span> <span class="token punctuation">{</span>
      <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
      <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
      <span class="token property">list-style</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.news</span> <span class="token punctuation">{</span>
      <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
      <span class="token property">height</span><span class="token punctuation">:</span> 120px<span class="token punctuation">;</span>
      <span class="token property">width</span><span class="token punctuation">:</span> 600px<span class="token punctuation">;</span>
      <span class="token property">margin</span><span class="token punctuation">:</span> 0 auto<span class="token punctuation">;</span>
      <span class="token property">padding</span><span class="token punctuation">:</span> 20px 0<span class="token punctuation">;</span>
      <span class="token property">cursor</span><span class="token punctuation">:</span> pointer<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.news .left</span> <span class="token punctuation">{</span>
      <span class="token property">flex</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
      <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
      <span class="token property">flex-direction</span><span class="token punctuation">:</span> column<span class="token punctuation">;</span>
      <span class="token property">justify-content</span><span class="token punctuation">:</span> space-between<span class="token punctuation">;</span>
      <span class="token property">padding-right</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.news .left .title</span> <span class="token punctuation">{</span>
      <span class="token property">font-size</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.news .left .info</span> <span class="token punctuation">{</span>
      <span class="token property">color</span><span class="token punctuation">:</span> #999999<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.news .left .info span</span> <span class="token punctuation">{</span>
      <span class="token property">margin-right</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.news .right</span> <span class="token punctuation">{</span>
      <span class="token property">width</span><span class="token punctuation">:</span> 160px<span class="token punctuation">;</span>
      <span class="token property">height</span><span class="token punctuation">:</span> 120px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.news .right img</span> <span class="token punctuation">{</span>
      <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
      <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
      <span class="token property">object-fit</span><span class="token punctuation">:</span> cover<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>app<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>news<span class="token punctuation">"</span></span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>(item, index) in list<span class="token punctuation">"</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item.id<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>left<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>{{ item.title }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>info<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span>{{ item.source }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span>{{ item.time }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>right<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">:src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item.img<span class="token punctuation">"</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  	<span class="token comment">// 接口地址：http://hmajax.itheima.net/api/news</span>
		<span class="token comment">// 请求方式：get</span>
    <span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">'#app'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">list</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token keyword">async</span> <span class="token function">created</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 1. 发送请求获取数据</span>
        <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'http://hmajax.itheima.net/api/news'</span><span class="token punctuation">)</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>list <span class="token operator">=</span> res<span class="token punctuation">.</span>data<span class="token punctuation">.</span>data
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/notes/fe/vue/Vue2+Vue3 核心技术/md_img/image-20231025152503021.png" alt="image-20231025152503021" loading="lazy"></p>
<h2 id="案例-输入框获取焦点-mounted应用" tabindex="-1"><a class="header-anchor" href="#案例-输入框获取焦点-mounted应用" aria-hidden="true">#</a> 案例-输入框获取焦点(mounted应用)</h2>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
  <span class="token comment">&lt;!-- 初始化演示 --></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span>
    <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>stylesheet<span class="token punctuation">"</span></span>
    <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://cdn.jsdelivr.net/npm/reset.css@2.0.2/reset.min.css<span class="token punctuation">"</span></span>
  <span class="token punctuation">/></span></span>
  <span class="token comment">&lt;!-- 核心样式 --></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
  	<span class="token selector">html,
    body</span> <span class="token punctuation">{</span>
      <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.search-container</span> <span class="token punctuation">{</span>
      <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
      <span class="token property">top</span><span class="token punctuation">:</span> 30%<span class="token punctuation">;</span>
      <span class="token property">left</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
      <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>-50%<span class="token punctuation">,</span> -50%<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.search-container .search-box</span> <span class="token punctuation">{</span>
      <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.search-container img</span> <span class="token punctuation">{</span>
      <span class="token property">margin-bottom</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.search-container .search-box input</span> <span class="token punctuation">{</span>
      <span class="token property">width</span><span class="token punctuation">:</span> 512px<span class="token punctuation">;</span>
      <span class="token property">height</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>
      <span class="token property">padding</span><span class="token punctuation">:</span> 12px 16px<span class="token punctuation">;</span>
      <span class="token property">font-size</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>
      <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
      <span class="token property">vertical-align</span><span class="token punctuation">:</span> top<span class="token punctuation">;</span>
      <span class="token property">outline</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
      <span class="token property">box-shadow</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
      <span class="token property">border-radius</span><span class="token punctuation">:</span> 10px 0 0 10px<span class="token punctuation">;</span>
      <span class="token property">border</span><span class="token punctuation">:</span> 2px solid #c4c7ce<span class="token punctuation">;</span>
      <span class="token property">background</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
      <span class="token property">color</span><span class="token punctuation">:</span> #222<span class="token punctuation">;</span>
      <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
      <span class="token property">box-sizing</span><span class="token punctuation">:</span> content-box<span class="token punctuation">;</span>
      <span class="token property">-webkit-tap-highlight-color</span><span class="token punctuation">:</span> transparent<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.search-container .search-box button</span> <span class="token punctuation">{</span>
      <span class="token property">cursor</span><span class="token punctuation">:</span> pointer<span class="token punctuation">;</span>
      <span class="token property">width</span><span class="token punctuation">:</span> 112px<span class="token punctuation">;</span>
      <span class="token property">height</span><span class="token punctuation">:</span> 44px<span class="token punctuation">;</span>
      <span class="token property">line-height</span><span class="token punctuation">:</span> 41px<span class="token punctuation">;</span>
      <span class="token property">line-height</span><span class="token punctuation">:</span> 42px<span class="token punctuation">;</span>
      <span class="token property">background-color</span><span class="token punctuation">:</span> #ad2a27<span class="token punctuation">;</span>
      <span class="token property">border-radius</span><span class="token punctuation">:</span> 0 10px 10px 0<span class="token punctuation">;</span>
      <span class="token property">font-size</span><span class="token punctuation">:</span> 17px<span class="token punctuation">;</span>
      <span class="token property">box-shadow</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
      <span class="token property">font-weight</span><span class="token punctuation">:</span> 400<span class="token punctuation">;</span>
      <span class="token property">border</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
      <span class="token property">outline</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
      <span class="token property">letter-spacing</span><span class="token punctuation">:</span> normal<span class="token punctuation">;</span>
      <span class="token property">color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">body</span> <span class="token punctuation">{</span>
      <span class="token property">background</span><span class="token punctuation">:</span> no-repeat center / cover<span class="token punctuation">;</span>
      <span class="token property">background-color</span><span class="token punctuation">:</span> #edf0f5<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>container<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>app<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>search-container<span class="token punctuation">'</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://www.itheima.com/images/logo.png<span class="token punctuation">"</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>search-box<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>words<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>inp<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span><span class="token punctuation">></span></span>搜索一下<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  	<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">'#app'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">words</span><span class="token operator">:</span> <span class="token string">''</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'#inp'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">focus</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/notes/fe/vue/Vue2+Vue3 核心技术/md_img/image-20231025161017458.png" alt="image-20231025161017458" loading="lazy"></p>
</div></template>


