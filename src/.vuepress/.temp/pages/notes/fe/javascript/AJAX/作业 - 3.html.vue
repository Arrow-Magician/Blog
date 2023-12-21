<template><div><h1 id="作业-3" tabindex="-1"><a class="header-anchor" href="#作业-3" aria-hidden="true">#</a> 作业 - 3</h1>
<h2 id="客观题" tabindex="-1"><a class="header-anchor" href="#客观题" aria-hidden="true">#</a> 客观题</h2>
<p>https://ks.wjx.top/vm/YLDl1RR.aspx#</p>
<h2 id="主观题" tabindex="-1"><a class="header-anchor" href="#主观题" aria-hidden="true">#</a> 主观题</h2>
<h3 id="作业1-英雄百科" tabindex="-1"><a class="header-anchor" href="#作业1-英雄百科" aria-hidden="true">#</a> 作业1 - 英雄百科</h3>
<h4 id="目标" tabindex="-1"><a class="header-anchor" href="#目标" aria-hidden="true">#</a> 目标</h4>
<p>完成如下英雄百科的效果</p>
<h4 id="要求" tabindex="-1"><a class="header-anchor" href="#要求" aria-hidden="true">#</a> 要求</h4>
<ol>
<li>默认上来展示所有英雄列表数据</li>
<li>关键字搜索，并判断为空，根据关键词搜索匹配英雄</li>
<li>点击英雄显示英雄详情</li>
</ol>
<h4 id="接口文档" tabindex="-1"><a class="header-anchor" href="#接口文档" aria-hidden="true">#</a> 接口文档</h4>
<p>https://apifox.com/apidoc/shared-1b0dd84f-faa8-435d-b355-5a8a329e34a8/api-87684195</p>
<h4 id="效果演示" tabindex="-1"><a class="header-anchor" href="#效果演示" aria-hidden="true">#</a> 效果演示</h4>
<p><img src="@source/notes/fe/javascript/AJAX/md_img/hero_list.gif" alt="hero_list" loading="lazy"></p>
<h4 id="代码实现" tabindex="-1"><a class="header-anchor" href="#代码实现" aria-hidden="true">#</a> 代码实现</h4>
<ol>
<li>默认显示所有列表</li>
</ol>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">getHero</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token function">axios</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">'https://hmajax.itheima.net/api/lol/search'</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> listHero <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'.list'</span><span class="token punctuation">)</span>
    listHero<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> res<span class="token punctuation">.</span>data<span class="token punctuation">.</span>data<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">hero</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">
        &lt;li>
	        &lt;img src="</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>hero<span class="token punctuation">.</span>icon<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">" alt="" />
          &lt;p></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>hero<span class="token punctuation">.</span>title<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/p>
        &lt;/li>
      </span><span class="token template-punctuation string">`</span></span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token function">getHero</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>搜索框</li>
</ol>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'.search'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'keydown'</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>e<span class="token punctuation">.</span>keyCode <span class="token operator">!==</span> <span class="token number">13</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string">''</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'内容不能为空'</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value <span class="token operator">&amp;&amp;</span> e<span class="token punctuation">.</span>key <span class="token operator">===</span> <span class="token string">'Enter'</span> <span class="token operator">||</span> e<span class="token punctuation">.</span>keyCode <span class="token operator">===</span> <span class="token number">13</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">axios</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">'https://hmajax.itheima.net/api/lol/search'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">params</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">q</span><span class="token operator">:</span> e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>res<span class="token punctuation">.</span>data<span class="token punctuation">.</span>code <span class="token operator">!==</span> <span class="token number">400</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> listHero <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'.list'</span><span class="token punctuation">)</span>
        listHero<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> res<span class="token punctuation">.</span>data<span class="token punctuation">.</span>data<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">hero</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">  
            &lt;li>  
              &lt;img src="</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>hero<span class="token punctuation">.</span>icon<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">" alt="" />  
              &lt;p></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>hero<span class="token punctuation">.</span>title<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/p>  
            &lt;/li> 
          </span><span class="token template-punctuation string">`</span></span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token function">alert</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>data<span class="token punctuation">.</span>msg<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/notes/fe/javascript/AJAX/md_img/image-20231219161514395.png" alt="image-20231219161514395" loading="lazy"></p>
<ol start="3">
<li>详情</li>
</ol>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> modal <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">bootstrap<span class="token punctuation">.</span>Modal</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'#infoModal'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'.list'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'click'</span><span class="token punctuation">,</span> <span class="token parameter">e</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>dataset<span class="token punctuation">.</span>id<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">axios</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">'https://hmajax.itheima.net/api/lol/info'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">params</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">id</span><span class="token operator">:</span> e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>dataset<span class="token punctuation">.</span>id
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> hero <span class="token operator">=</span> res<span class="token punctuation">.</span>data<span class="token punctuation">.</span>data<span class="token punctuation">.</span>hero
      document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'.modal-title'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> hero<span class="token punctuation">.</span>name <span class="token operator">+</span> hero<span class="token punctuation">.</span>title
      document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'.icon'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>src <span class="token operator">=</span> hero<span class="token punctuation">.</span>icon
      document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'.attack'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>style<span class="token punctuation">.</span>width <span class="token operator">=</span> <span class="token punctuation">(</span>hero<span class="token punctuation">.</span>attack <span class="token operator">/</span> <span class="token number">10</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">100</span> <span class="token operator">+</span> <span class="token string">'%'</span>
      document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'.defense'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>style<span class="token punctuation">.</span>width <span class="token operator">=</span> <span class="token punctuation">(</span>hero<span class="token punctuation">.</span>defense <span class="token operator">/</span> <span class="token number">10</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">100</span> <span class="token operator">+</span> <span class="token string">'%'</span>
      document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'.magic'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>style<span class="token punctuation">.</span>width <span class="token operator">=</span> <span class="token punctuation">(</span>hero<span class="token punctuation">.</span>magic <span class="token operator">/</span> <span class="token number">10</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">100</span> <span class="token operator">+</span> <span class="token string">'%'</span>
      document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'.difficulty'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>style<span class="token punctuation">.</span>width <span class="token operator">=</span> <span class="token punctuation">(</span>hero<span class="token punctuation">.</span>difficulty <span class="token operator">/</span> <span class="token number">10</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">100</span> <span class="token operator">+</span> <span class="token string">'%'</span>
      modal<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/notes/fe/javascript/AJAX/md_img/image-20231219161523239.png" alt="image-20231219161523239" loading="lazy"></p>
<h2 id="排错题" tabindex="-1"><a class="header-anchor" href="#排错题" aria-hidden="true">#</a> 排错题</h2>
<p>一共有三个错误</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 目标1：默认显示-北京市天气
 *  1.1 获取北京市天气数据
 *  1.2 数据展示到页面
 */</span>
<span class="token comment">// 获取并渲染城市天气函数</span>
<span class="token keyword">function</span> <span class="token function">getWeather</span><span class="token punctuation">(</span><span class="token parameter">cityCode</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 1.1 获取北京市天气数据</span>
  <span class="token function">myAxios</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token comment">// 第一个错误</span>
    <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">'http://hmajax.itheima.net/api/waether'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">params</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">city</span><span class="token operator">:</span> cityCode
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">result</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span>
    <span class="token keyword">const</span> wObj <span class="token operator">=</span> result<span class="token punctuation">.</span>data
    <span class="token comment">// 1.2 数据展示到页面</span>
    <span class="token comment">// 阳历和农历日期</span>
    <span class="token keyword">const</span> dateStr <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">&lt;span class="dateShort"></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>wObj<span class="token punctuation">.</span>date<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/span>
    &lt;span class="calendar">农历&amp;nbsp;
      &lt;span class="dateLunar"></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>wObj<span class="token punctuation">.</span>dateLunar<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/span>
    &lt;/span></span><span class="token template-punctuation string">`</span></span>
    document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'.title'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> dateStr
    <span class="token comment">// 城市名字</span>
    document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'.area'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> wObj<span class="token punctuation">.</span>area
    <span class="token comment">// 当天气温</span>
    <span class="token keyword">const</span> nowWStr <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">&lt;div class="tem-box">
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
  &lt;/div></span><span class="token template-punctuation string">`</span></span>
    document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'.weather-box'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> nowWStr
    <span class="token comment">// 当天天气</span>
    <span class="token keyword">const</span> twObj <span class="token operator">=</span> wObj<span class="token punctuation">.</span>todayWeather
    <span class="token keyword">const</span> todayWStr <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">&lt;div class="range-box">
    &lt;span>今天：&lt;/span>
    &lt;span class="range">
      &lt;span class="weather"></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>twObj<span class="token punctuation">.</span>weather<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/span>
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
  &lt;/ul></span><span class="token template-punctuation string">`</span></span>
    document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'.today-weather'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> todayWStr

    <span class="token comment">// 7日天气预报数据展示</span>
    <span class="token keyword">const</span> dayForecast <span class="token operator">=</span> wObj<span class="token punctuation">.</span>dayForecast
    <span class="token keyword">const</span> dayForecastStr <span class="token operator">=</span> dayForecast<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">item</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">&lt;li class="item">
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
    &lt;/li></span><span class="token template-punctuation string">`</span></span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span>
    <span class="token comment">// console.log(dayForecastStr)</span>
    document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'.week-wrap'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> dayForecastStr
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 默认进入网页-就要获取天气数据（北京市城市编码：'110100'）</span>
<span class="token comment">// 第二个错误</span>
<span class="token function">getWeather</span><span class="token punctuation">(</span><span class="token string">'1101001'</span><span class="token punctuation">)</span>

<span class="token doc-comment comment">/**
 * 目标2：搜索城市列表
 *  2.1 绑定input事件，获取关键字
 *  2.2 获取展示城市列表数据
 */</span>
<span class="token comment">// 2.1 绑定input事件，获取关键字</span>
document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'.search-city'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'input'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
  <span class="token comment">// 2.2 获取展示城市列表数据</span>
  <span class="token function">myAxios</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">'http://hmajax.itheima.net/api/weather/city'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">params</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">city</span><span class="token operator">:</span> e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">result</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span>
    <span class="token keyword">const</span> liStr <span class="token operator">=</span> result<span class="token punctuation">.</span>data<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">item</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">&lt;li class="city-item" data-code="</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>item<span class="token punctuation">.</span>code<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">"></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>item<span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/li></span><span class="token template-punctuation string">`</span></span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>liStr<span class="token punctuation">)</span>
    document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'.search-list'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> liStr
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token doc-comment comment">/**
 * 目标3：切换城市天气
 *  3.1 绑定城市点击事件，获取城市code值
 *  3.2 调用获取并展示天气的函数
 */</span>
<span class="token comment">// 3.1 绑定城市点击事件，获取城市code值</span>
<span class="token comment">// 第三个错误</span>
document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'.city-item'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'click'</span><span class="token punctuation">,</span> <span class="token parameter">e</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span><span class="token string">'city-item'</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 只有点击城市li才会走这里</span>
    <span class="token keyword">const</span> cityCode <span class="token operator">=</span> e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>dataset<span class="token punctuation">.</span>code
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>cityCode<span class="token punctuation">)</span>
    <span class="token comment">// 3.2 调用获取并展示天气的函数</span>
    <span class="token function">getWeather</span><span class="token punctuation">(</span>cityCode<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="第一个错误" tabindex="-1"><a class="header-anchor" href="#第一个错误" aria-hidden="true">#</a> 第一个错误</h3>
<p>api 地址写错，应改为</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">getWeather</span><span class="token punctuation">(</span><span class="token parameter">cityCode</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">myAxios</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">'http://hmajax.itheima.net/api/weather'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="第二个错误" tabindex="-1"><a class="header-anchor" href="#第二个错误" aria-hidden="true">#</a> 第二个错误</h3>
<p>传参错误，应改为</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token function">getWeather</span><span class="token punctuation">(</span><span class="token string">'110100'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="第三个错误" tabindex="-1"><a class="header-anchor" href="#第三个错误" aria-hidden="true">#</a> 第三个错误</h3>
<p>获取列表错误，应改为</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'.search-list'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'click'</span><span class="token punctuation">,</span> <span class="token operator">...</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div></template>


