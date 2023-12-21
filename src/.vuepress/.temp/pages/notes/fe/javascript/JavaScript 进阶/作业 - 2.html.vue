<template><div><h1 id="作业-2" tabindex="-1"><a class="header-anchor" href="#作业-2" aria-hidden="true">#</a> 作业 - 2</h1>
<h2 id="客观题" tabindex="-1"><a class="header-anchor" href="#客观题" aria-hidden="true">#</a> 客观题</h2>
<p>https://ks.wjx.top/vj/QG54lSj.aspx</p>
<h2 id="排错题" tabindex="-1"><a class="header-anchor" href="#排错题" aria-hidden="true">#</a> 排错题</h2>
<h3 id="_1-foreach排错题" tabindex="-1"><a class="header-anchor" href="#_1-foreach排错题" aria-hidden="true">#</a> 1. forEach排错题</h3>
<p>以下代码是否有问题，如果有，如何修改</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">]</span>

<span class="token keyword">const</span> res <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">item<span class="token punctuation">,</span>index<span class="token punctuation">,</span> arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>答：<code v-pre>forEach</code> 里面应该是函数，应该修改为 <code v-pre>const res = arr.forEach(item =&gt; console.log(item))</code></p>
<h3 id="_2-实例成员-静态成员" tabindex="-1"><a class="header-anchor" href="#_2-实例成员-静态成员" aria-hidden="true">#</a> 2. 实例成员 - 静态成员</h3>
<p>size与getSize 是实例成员说法对吗</p>
<p>name与getName 是静态成员说法对吗</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
fn<span class="token punctuation">.</span>size <span class="token operator">=</span> <span class="token string">'24cm'</span>
fn<span class="token punctuation">.</span><span class="token function-variable function">getSize</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'123'</span><span class="token punctuation">,</span>
  <span class="token function-variable function">getName</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>

obj<span class="token punctuation">.</span>name
obj<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><code v-pre>size</code> 和 <code v-pre>getSize</code> 是实例成员，因为它们是定义在函数 <code v-pre>fn</code> 上的。</li>
<li><code v-pre>name</code> 和 <code v-pre>getName</code> 是实例成员，因为它们是定义在对象 <code v-pre>obj</code> 上的。</li>
</ul>
<h3 id="_3-map-的排错题" tabindex="-1"><a class="header-anchor" href="#_3-map-的排错题" aria-hidden="true">#</a> 3. map 的排错题</h3>
<p>下面res的返回值是[2] 说法对吗</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span>

<span class="token keyword">const</span> res <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">item<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> item <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">===</span> <span class="token number">0</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>答：不对。map的返回值只有 <code v-pre>true</code> 和 <code v-pre>false</code></p>
<h3 id="_4-find-排错题" tabindex="-1"><a class="header-anchor" href="#_4-find-排错题" aria-hidden="true">#</a> 4. find 排错题</h3>
<p>下面res的返回值是 undefined 说法对吗</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">11</span><span class="token punctuation">,</span> <span class="token number">22</span><span class="token punctuation">,</span> <span class="token number">33</span><span class="token punctuation">,</span> <span class="token number">44</span><span class="token punctuation">]</span>

<span class="token keyword">const</span> res <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token parameter">item</span> <span class="token operator">=></span> item <span class="token operator">></span> <span class="token number">50</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>答：是的</p>
<h3 id="_5-字符串的-substring-排错题" tabindex="-1"><a class="header-anchor" href="#_5-字符串的-substring-排错题" aria-hidden="true">#</a> 5. 字符串的 subString 排错题</h3>
<p>下面打印的结果是 ll 说法对吗</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> str <span class="token operator">=</span> <span class="token string">'hello'</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>答：不正确。输出的是 <code v-pre>l</code></p>
<h2 id="主观题" tabindex="-1"><a class="header-anchor" href="#主观题" aria-hidden="true">#</a> 主观题</h2>
<p><img src="@source/notes/fe/javascript/JavaScript 进阶/md_img/1676792598055.png" alt="67679259805" loading="lazy"></p>
<h3 id="需求" tabindex="-1"><a class="header-anchor" href="#需求" aria-hidden="true">#</a> 需求</h3>
<ol>
<li>全选反选功能</li>
<li>个数新增和减少功能</li>
<li>删除功能</li>
<li>计算总额和总数量功能</li>
</ol>
<h3 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h3>
<ol>
<li>先将页面渲染出来</li>
</ol>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">const</span> tbody <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'.tbody'</span><span class="token punctuation">)</span>

  <span class="token keyword">function</span> <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> strArr <span class="token operator">=</span> dataArr<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">ele<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> <span class="token punctuation">{</span> icon<span class="token punctuation">,</span> num<span class="token punctuation">,</span> price<span class="token punctuation">,</span> isChecked <span class="token punctuation">}</span> <span class="token operator">=</span> ele
      <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">
      &lt;div class="tr" data-id="</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>index<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">">
        &lt;div class="td">&lt;input type="checkbox" </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>isChecked <span class="token operator">?</span> <span class="token string">'checked'</span> <span class="token operator">:</span> <span class="token string">''</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> />&lt;/div>
        &lt;div class="td">&lt;img src=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>icon<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> alt="" />&lt;/div>
        &lt;div class="td"></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>price<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/div>
        &lt;div class="td">
        &lt;div class="my-input-number">
        &lt;button class="decrease"> - &lt;/button>
        &lt;span class="my-input"></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>num<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/span>
        &lt;button class="increase"> + &lt;/button>
          &lt;/div>
          &lt;/div>
        &lt;div class="td"></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>price <span class="token operator">*</span> num<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/div>
        &lt;div class="td">&lt;button class="button del">删除&lt;/button>&lt;/div>
      &lt;/div> 
    </span><span class="token template-punctuation string">`</span></span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    tbody<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> strArr<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span>
    
    tbody<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'click'</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> id <span class="token operator">=</span> e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>parentNode<span class="token punctuation">.</span>parentNode<span class="token punctuation">.</span>dataset<span class="token punctuation">.</span>id
      <span class="token comment">// 小复选框控制全选</span>
      <span class="token keyword">if</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>tagName <span class="token operator">===</span> <span class="token string">'INPUT'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        dataArr<span class="token punctuation">[</span>id<span class="token punctuation">]</span><span class="token punctuation">.</span>isChecked <span class="token operator">=</span> e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>checked
        <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token comment">// 空空购物车是否显示</span>
    <span class="token keyword">const</span> empty <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'.empty'</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> bottom <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'.bottom'</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>dataArr<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      empty<span class="token punctuation">.</span>style<span class="token punctuation">.</span>display <span class="token operator">=</span> <span class="token string">'block'</span>
      bottom<span class="token punctuation">.</span>style<span class="token punctuation">.</span>display <span class="token operator">=</span> <span class="token string">'none'</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      empty<span class="token punctuation">.</span>style<span class="token punctuation">.</span>display <span class="token operator">=</span> <span class="token string">'none'</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>全选反选功能</li>
</ol>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
	<span class="token keyword">const</span> checkAll <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'.check-all input'</span><span class="token punctuation">)</span>
  
  <span class="token keyword">function</span> <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span>
    <span class="token comment">// 全选按钮设置</span>
    checkAll<span class="token punctuation">.</span>checked <span class="token operator">=</span> dataArr<span class="token punctuation">.</span><span class="token function">every</span><span class="token punctuation">(</span><span class="token parameter">ele</span> <span class="token operator">=></span> ele<span class="token punctuation">.</span>isChecked <span class="token operator">===</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  
  checkAll<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'click'</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    dataArr<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">ele</span> <span class="token operator">=></span> ele<span class="token punctuation">.</span>isChecked <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>checked<span class="token punctuation">)</span>
    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>个数新增和减少功能</li>
</ol>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token comment">// 事件委托</span>
  tbody<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'click'</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 增加数量</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>className <span class="token operator">===</span> <span class="token string">"increase"</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> idNum <span class="token operator">=</span> e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>parentNode<span class="token punctuation">.</span>parentNode<span class="token punctuation">.</span>parentNode<span class="token punctuation">.</span>dataset<span class="token punctuation">.</span>id
      dataArr<span class="token punctuation">[</span>idNum<span class="token punctuation">]</span><span class="token punctuation">.</span>num<span class="token operator">++</span>
      <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>className <span class="token operator">===</span> <span class="token string">"decrease"</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> idNum <span class="token operator">=</span> e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>parentNode<span class="token punctuation">.</span>parentNode<span class="token punctuation">.</span>parentNode<span class="token punctuation">.</span>dataset<span class="token punctuation">.</span>id
      <span class="token keyword">if</span> <span class="token punctuation">(</span>dataArr<span class="token punctuation">[</span>idNum<span class="token punctuation">]</span><span class="token punctuation">.</span>num <span class="token operator">&lt;=</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        dataArr<span class="token punctuation">[</span>idNum<span class="token punctuation">]</span><span class="token punctuation">.</span>num <span class="token operator">=</span> <span class="token number">1</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        dataArr<span class="token punctuation">[</span>idNum<span class="token punctuation">]</span><span class="token punctuation">.</span>num<span class="token operator">--</span>
        <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4">
<li>删除功能</li>
</ol>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
	tbody<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'click'</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 删除</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>className <span class="token operator">===</span> <span class="token string">'button del'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      dataArr<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>id<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
      <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5">
<li>计算总额和总数量</li>
</ol>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
	<span class="token keyword">const</span> price <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'.price'</span><span class="token punctuation">)</span>
  
  <span class="token keyword">function</span> <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> newArr <span class="token operator">=</span> dataArr<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token parameter">ele</span> <span class="token operator">=></span> ele<span class="token punctuation">.</span>isChecked <span class="token operator">===</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> totalPrice <span class="token operator">=</span> newArr<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">prev<span class="token punctuation">,</span> item</span><span class="token punctuation">)</span> <span class="token operator">=></span> prev <span class="token operator">+=</span> item<span class="token punctuation">.</span>num <span class="token operator">*</span> item<span class="token punctuation">.</span>price<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
    document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'.price-box .price'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> totalPrice<span class="token punctuation">.</span><span class="token function">toFixed</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> totalNum <span class="token operator">=</span> newArr<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">prev<span class="token punctuation">,</span> item</span><span class="token punctuation">)</span> <span class="token operator">=></span> prev <span class="token operator">+=</span> item<span class="token punctuation">.</span>num<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
    document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'.pay'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">结算(</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>totalNum<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">)</span><span class="token template-punctuation string">`</span></span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/notes/fe/javascript/JavaScript 进阶/md_img/image-20231208100146956.png" alt="image-20231208100146956" loading="lazy"></p>
</div></template>


