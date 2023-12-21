<template><div><h1 id="四、函数-综合案例" tabindex="-1"><a class="header-anchor" href="#四、函数-综合案例" aria-hidden="true">#</a> 四、函数 | 综合案例</h1>
<h2 id="函数" tabindex="-1"><a class="header-anchor" href="#函数" aria-hidden="true">#</a> 函数</h2>
<p>自我感觉，如果是根据知识路线的方式来学习的话，这个阶段对函数的概念确实模糊。不能理解，可以结合这个<a href="./%E5%87%BD%E6%95%B0%E5%88%86%E7%BB%84%E5%BC%95%E5%8F%91%E7%9A%84%E6%80%9D%E8%80%83">文档</a>看<a href="https://www.bilibili.com/video/BV1MM41197xm/?spm_id_from=333.1007.top_right_bar_window_custom_collection.content.click&amp;vd_source=ce2373d3d93ecee4088b1954ccc2db50" target="_blank" rel="noopener noreferrer">视频<ExternalLinkIcon/></a>，在函数的方面确实能够给人很大的思考</p>
<h3 id="什么是函数" tabindex="-1"><a class="header-anchor" href="#什么是函数" aria-hidden="true">#</a> 什么是函数？</h3>
<p>函数可以把具有相同或相似逻辑的代码“包裹”起来，通过函数调用执行这些被“包裹”起来的代码逻辑，这样做是能够更加方便的 <strong>“复用”</strong></p>
<h3 id="函数的使用" tabindex="-1"><a class="header-anchor" href="#函数的使用" aria-hidden="true">#</a> 函数的使用</h3>
<p>语法：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">函数名</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  函数体
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>示例：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">sayHi</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  document<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">'hey'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>函数命名的时候，使用小驼峰命名法，尽量和变量命名一致。</p>
<p>如果需要调用语法，使用 <code v-pre>函数名()</code> 的方式，其中，一定要用 <code v-pre>()</code> 来调用函数，例：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 每一次调用函数里面的函数代码就会重新执行一次</span>
<span class="token function">sayHi</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token function">sayHi</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="函数传参" tabindex="-1"><a class="header-anchor" href="#函数传参" aria-hidden="true">#</a> 函数传参</h3>
<p>我们试想一下这个场景：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">getSum</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> num1 <span class="token operator">=</span> <span class="token number">10</span>
  <span class="token keyword">let</span> num2 <span class="token operator">=</span> <span class="token number">20</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>num1 <span class="token operator">+</span> num2<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token function">getSum</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样做固然能把 <code v-pre>10+20</code> 加上，那如果我不想要 <code v-pre>10+20</code> 了呢？我想要 <code v-pre>20+30</code> 了呢？这个时候直接改里面的 <code v-pre>num1</code> 和 <code v-pre>num2</code> 了吗？</p>
<p>这个时候就需要传入数据了，这样就能灵活调用这个函数了</p>
<p>改造一下:</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">getSum</span><span class="token punctuation">(</span><span class="token parameter">num1<span class="token punctuation">,</span> num2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>num1 <span class="token operator">+</span> num2<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token function">getSum</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里就不得不提一下我们经常所说的 <code v-pre>形参</code> 和 <code v-pre>实参</code> 了</p>
<h4 id="形参-实参" tabindex="-1"><a class="header-anchor" href="#形参-实参" aria-hidden="true">#</a> 形参 &amp; 实参</h4>
<ul>
<li>形参：声明函数时写在函数名右边小括号里的叫形参（形式上的参数）</li>
<li>实参：调用函数时写在函数名右边小括号里的叫实参（实际上的参数）</li>
</ul>
<p>即，在上面的函数中，<code v-pre>(num1, num2)</code> 就是 <strong>形参</strong>，<code v-pre>(10, 20)</code> 就是 <strong>实参</strong>。</p>
<p>形参其实可以看做一个变量，如果一个变量不给值，默认则是 <code v-pre>undefined</code> ，如果用户不输入实参，就会出现 <code v-pre>undefined + undefined=NaN</code> 。</p>
<p>怎么个改进？</p>
<p>可以给形参一个默认值，这个默认值只有在缺少实参参数传递的时候才会被执行。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">getSum</span><span class="token punctuation">(</span><span class="token parameter">x <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> y <span class="token operator">=</span> <span class="token number">0</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  document<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>x <span class="token operator">+</span> y<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token function">getSum</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 0</span>
<span class="token function">getSum</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token comment">// 3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="函数返回值" tabindex="-1"><a class="header-anchor" href="#函数返回值" aria-hidden="true">#</a> 函数返回值</h3>
<p>上面的函数其实还有一些缺陷，有的时候我们并不像那么快让函数把结果给我，我想迟一点再拿结果，这个时候就需要函数的返回值。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">getSum</span><span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> y</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> x <span class="token operator">+</span> y
<span class="token punctuation">}</span>
<span class="token keyword">let</span> num <span class="token operator">=</span> <span class="token function">getSum</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">)</span>
document<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>在函数体中使用 <code v-pre>return</code> 关键字能将内部的执行结果交给函数外部使用</li>
<li><code v-pre>return</code> 后面代码不会再被执行，会立即结束当前函数</li>
<li><code v-pre>return</code> 函数可以没有 <code v-pre>return</code> ，这种情况函数默认返回 <code v-pre>undefined</code></li>
</ul>
<h4 id="如果需要返回两个值应该怎么返回" tabindex="-1"><a class="header-anchor" href="#如果需要返回两个值应该怎么返回" aria-hidden="true">#</a> 如果需要返回两个值应该怎么返回？</h4>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">getArr</span><span class="token punctuation">(</span><span class="token parameter">arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span></span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">let</span> max <span class="token operator">=</span> arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
  <span class="token keyword">let</span> min <span class="token operator">=</span> arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>max <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      max <span class="token operator">=</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>min <span class="token operator">></span> arr<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      min <span class="token operator">=</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token punctuation">[</span>max<span class="token punctuation">,</span> min<span class="token punctuation">]</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> newArr <span class="token operator">=</span> <span class="token function">getArr</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>newArr<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="作用域" tabindex="-1"><a class="header-anchor" href="#作用域" aria-hidden="true">#</a> 作用域</h3>
<p>一段代码中有全局作用域和局部作用域。</p>
<figure><img src="@source/notes/fe/javascript/JavaScript 基础/md_img/image-20231110145605991.png" alt="image-20231110145605991" tabindex="0" loading="lazy"><figcaption>image-20231110145605991</figcaption></figure>
<p>而在JavaScript中，根据作用域的不同，变量又可以分为：</p>
<figure><img src="@source/notes/fe/javascript/JavaScript 基础/md_img/image-20231110145725820.png" alt="image-20231110145725820" tabindex="0" loading="lazy"><figcaption>image-20231110145725820</figcaption></figure>
<div class="hint-container warning">
<p class="hint-container-title">注意</p>
<p>如果函数内部变量没有声明，直接赋值，也会当全局变量看，但是不推荐</p>
<p>函数内部的形参可以看作是局部变量</p>
</div>
<h4 id="变量访问原则" tabindex="-1"><a class="header-anchor" href="#变量访问原则" aria-hidden="true">#</a> 变量访问原则</h4>
<ol>
<li>
<p>在能够访问到的情况下，先局部，局部没有再找全局</p>
</li>
<li>
<p>采取就近原则的方式查找变量最终的值</p>
</li>
</ol>
<h3 id="匿名函数" tabindex="-1"><a class="header-anchor" href="#匿名函数" aria-hidden="true">#</a> 匿名函数</h3>
<p>函数又分为具名函数和匿名函数</p>
<figure><img src="@source/notes/fe/javascript/JavaScript 基础/md_img/image-20231110151154956.png" alt="image-20231110151154956" tabindex="0" loading="lazy"><figcaption>image-20231110151154956</figcaption></figure>
<p>所谓匿名函数，就是没有名字的函数，它们是无法直接使用的。要用，只能是函数表达式的形式或者立即执行这个函数</p>
<h4 id="函数表达式" tabindex="-1"><a class="header-anchor" href="#函数表达式" aria-hidden="true">#</a> 函数表达式</h4>
<p>将匿名函数赋值给一个变量，并通过变量名称进行调用。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> <span class="token function-variable function">fn</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 函数体</span>
<span class="token punctuation">}</span>

<span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//函数名()</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="立即执行函数" tabindex="-1"><a class="header-anchor" href="#立即执行函数" aria-hidden="true">#</a> 立即执行函数</h4>
<p>主要为了必满全局变量之间的污染</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 方式1</span>
<span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">11</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 方式2</span>
<span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">11</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="综合案例" tabindex="-1"><a class="header-anchor" href="#综合案例" aria-hidden="true">#</a> 综合案例</h2>
<h3 id="需求" tabindex="-1"><a class="header-anchor" href="#需求" aria-hidden="true">#</a> 需求</h3>
<p>用户输入秒数，可以自动转换为时分秒</p>
<h3 id="分析" tabindex="-1"><a class="header-anchor" href="#分析" aria-hidden="true">#</a> 分析</h3>
<ol>
<li>用户输入总秒数（注意默认值）</li>
<li>计算时分秒（封装函数）里面包含数字补0</li>
<li>打印输出</li>
</ol>
<p><strong>计算公式：计算时分秒</strong></p>
<p>小时：<code v-pre>h = parseInt(总秒数 / 60 / 60 % 24)</code></p>
<p>分钟：<code v-pre>m = parseInt(总秒数 / 60 % 60)</code></p>
<p>秒数：<code v-pre>s = parseInt(总秒数 % 60)</code></p>
<h3 id="代码编写" tabindex="-1"><a class="header-anchor" href="#代码编写" aria-hidden="true">#</a> 代码编写</h3>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> second <span class="token operator">=</span> <span class="token operator">+</span><span class="token function">prompt</span><span class="token punctuation">(</span><span class="token string">'请输入秒数'</span><span class="token punctuation">)</span>

<span class="token keyword">function</span> <span class="token function">getTime</span><span class="token punctuation">(</span><span class="token parameter">time</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> h <span class="token operator">=</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>time <span class="token operator">/</span> <span class="token number">60</span> <span class="token operator">/</span> <span class="token number">60</span> <span class="token operator">%</span> <span class="token number">24</span><span class="token punctuation">)</span>
  <span class="token keyword">let</span> m <span class="token operator">=</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>time <span class="token operator">/</span> <span class="token number">60</span> <span class="token operator">%</span> <span class="token number">60</span><span class="token punctuation">)</span>
  <span class="token keyword">let</span> s <span class="token operator">=</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>time <span class="token operator">%</span> <span class="token number">60</span><span class="token punctuation">)</span>
  
  h <span class="token operator">=</span> h <span class="token operator">&lt;</span> <span class="token number">10</span> <span class="token operator">?</span> <span class="token string">'0'</span> <span class="token operator">+</span> h <span class="token operator">:</span> h
  m <span class="token operator">=</span> m <span class="token operator">&lt;</span> <span class="token number">10</span> <span class="token operator">?</span> <span class="token string">'0'</span> <span class="token operator">+</span> m <span class="token operator">:</span> m
  s <span class="token operator">=</span> s <span class="token operator">&lt;</span> <span class="token number">10</span> <span class="token operator">?</span> <span class="token string">'0'</span> <span class="token operator">+</span> s <span class="token operator">:</span> s

  <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">转换完毕后是 </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>h<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">小时</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>m<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">分</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>s<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">秒</span><span class="token template-punctuation string">`</span></span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token function">getTime</span><span class="token punctuation">(</span>second<span class="token punctuation">)</span>
document<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/notes/fe/javascript/JavaScript 基础/md_img/image-20231110155302278.png" alt="image-20231110155302278" tabindex="0" loading="lazy"><figcaption>image-20231110155302278</figcaption></figure>
<figure><img src="@source/notes/fe/javascript/JavaScript 基础/md_img/image-20231110155309979.png" alt="image-20231110155309979" tabindex="0" loading="lazy"><figcaption>image-20231110155309979</figcaption></figure>
<h2 id="补充知识" tabindex="-1"><a class="header-anchor" href="#补充知识" aria-hidden="true">#</a> 补充知识</h2>
<h3 id="逻辑中断" tabindex="-1"><a class="header-anchor" href="#逻辑中断" aria-hidden="true">#</a> 逻辑中断</h3>
<p>当代码中存在 <code v-pre>&amp;&amp;</code> 和 <code v-pre>||</code> 时，满足一定的条件以后会让右边代码不执行</p>
<table>
<thead>
<tr>
<th style="text-align:center">符号</th>
<th style="text-align:center">条件</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">&amp;&amp;</td>
<td style="text-align:center">左边为false就短路</td>
</tr>
<tr>
<td style="text-align:center">||</td>
<td style="text-align:center">左边为true就短路</td>
</tr>
</tbody>
</table>
<p>就是通过左边能得到整个式子的结果，就没必要再去判断右边了。</p>
</div></template>


