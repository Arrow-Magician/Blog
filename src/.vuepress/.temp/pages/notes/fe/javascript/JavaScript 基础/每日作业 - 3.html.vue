<template><div><h1 id="每日作业-3" tabindex="-1"><a class="header-anchor" href="#每日作业-3" aria-hidden="true">#</a> 每日作业 - 3</h1>
<h2 id="主观题" tabindex="-1"><a class="header-anchor" href="#主观题" aria-hidden="true">#</a> 主观题</h2>
<h3 id="练习题1" tabindex="-1"><a class="header-anchor" href="#练习题1" aria-hidden="true">#</a> 练习题1</h3>
<p>写一个程序，要求如下</p>
<ul>
<li>
<p>需求1：让用户输入五个有效年龄（0-100之间），<strong>放入数组中</strong></p>
<ul>
<li>必须输入五个有效年龄年龄，如果是无效年龄，则不能放入数组中</li>
</ul>
</li>
<li>
<p>需求2：打印出所有成年人的年龄 (数组筛选)</p>
</li>
<li>
<p>需求3：打印出所有人总年龄 （累加）</p>
</li>
<li>
<p>需求4：打印出所有人的平均年龄 （累加）</p>
</li>
<li>
<p>需求5：打印出最大年龄和最小年龄 （最大值）</p>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token keyword">let</span> sum <span class="token operator">=</span> <span class="token number">0</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> age <span class="token operator">=</span> <span class="token operator">+</span><span class="token function">prompt</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">请输入第</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">个有效年龄</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>
  <span class="token comment">// 需求1</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span>age <span class="token operator">>=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> age <span class="token operator">&lt;=</span> <span class="token number">100</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 需求2</span>
    arr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>age<span class="token punctuation">)</span>
    <span class="token comment">// 需求3</span>
    sum <span class="token operator">=</span> sum <span class="token operator">+</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
    <span class="token comment">// 需求5</span>
    arr<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> a <span class="token operator">-</span> b<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> min <span class="token operator">=</span> arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
<span class="token keyword">let</span> max <span class="token operator">=</span> arr<span class="token punctuation">[</span>arr<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span>

document<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">'所有人的年龄:'</span> <span class="token operator">+</span> arr <span class="token operator">+</span> <span class="token string">'&lt;br/>'</span><span class="token punctuation">)</span>
document<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">'所有人的年龄总和:'</span> <span class="token operator">+</span> sum <span class="token operator">+</span> <span class="token string">'&lt;br/>'</span><span class="token punctuation">)</span>
<span class="token comment">// 需求4</span>
document<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">'所有人的平均年龄:'</span> <span class="token operator">+</span> sum <span class="token operator">/</span> <span class="token number">5</span> <span class="token operator">+</span> <span class="token string">'&lt;br/>'</span><span class="token punctuation">)</span>
document<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">'最大年龄:'</span> <span class="token operator">+</span> max <span class="token operator">+</span> <span class="token string">'&lt;br/>'</span><span class="token punctuation">)</span>
document<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">'最小年龄:'</span> <span class="token operator">+</span> min <span class="token operator">+</span> <span class="token string">'&lt;br/>'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/notes/fe/javascript/JavaScript 基础/md_img/image-20231109153205030.png" alt="image-20231109153205030" loading="lazy"></p>
<h3 id="练习题2" tabindex="-1"><a class="header-anchor" href="#练习题2" aria-hidden="true">#</a> 练习题2</h3>
<p>找出数组中 元素为10的下标，有则打印该下标，没有则打印-1</p>
<ul>
<li>
<p>例如: [88,20,10,100,50]  打印 2</p>
</li>
<li>
<p>例如: [88,20,30,100,50]  打印-1</p>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">88</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">]</span>
<span class="token comment">// 用于存储结果，默认没有</span>
<span class="token keyword">let</span> re <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span>

<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token number">10</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 如果找到就把当前索引号给 re，没有找到就默认为-1</span>
    re <span class="token operator">=</span> i
    <span class="token keyword">break</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">元素的下标为</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>re<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/notes/fe/javascript/JavaScript 基础/md_img/image-20231109153755502.png" alt="image-20231109153755502" loading="lazy"></p>
<h3 id="练习题3" tabindex="-1"><a class="header-anchor" href="#练习题3" aria-hidden="true">#</a> 练习题3</h3>
<p>使用for循环 - 求出数组元素的和[5, 8, 9, 2, 1, 5]</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span>
<span class="token keyword">let</span> sum <span class="token operator">=</span> <span class="token number">0</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  sum <span class="token operator">+=</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">数组元素的和为</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>sum<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/notes/fe/javascript/JavaScript 基础/md_img/image-20231109154214218.png" alt="image-20231109154214218" loading="lazy"></p>
<h3 id="练习题4" tabindex="-1"><a class="header-anchor" href="#练习题4" aria-hidden="true">#</a> 练习题4</h3>
<p>使用for循环 - 求出数组 [4, 9, 5, 20, 3, 11]里大于5的和</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">11</span><span class="token punctuation">]</span>
<span class="token keyword">let</span> sum <span class="token operator">=</span> <span class="token number">0</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">></span> <span class="token number">5</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    sum <span class="token operator">+=</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">大于5的和</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>sum<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/notes/fe/javascript/JavaScript 基础/md_img/image-20231109155247178.png" alt="image-20231109155247178" loading="lazy"></p>
<h3 id="练习题5" tabindex="-1"><a class="header-anchor" href="#练习题5" aria-hidden="true">#</a> 练习题5:</h3>
<p>使用for循环 - 求出班级里同学们平均年龄[15, 19, 21, 33, 18, 24]</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">15</span><span class="token punctuation">,</span> <span class="token number">19</span><span class="token punctuation">,</span> <span class="token number">21</span><span class="token punctuation">,</span> <span class="token number">33</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">,</span> <span class="token number">24</span><span class="token punctuation">]</span>
<span class="token keyword">let</span> sum <span class="token operator">=</span> <span class="token number">0</span>
<span class="token keyword">let</span> ave <span class="token operator">=</span> <span class="token number">0</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  sum <span class="token operator">+=</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
  ave <span class="token operator">=</span> sum <span class="token operator">/</span> arr<span class="token punctuation">.</span>length
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">平均年龄为</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>ave<span class="token punctuation">.</span><span class="token function">toFixed</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">岁</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/notes/fe/javascript/JavaScript 基础/md_img/image-20231109160451067.png" alt="image-20231109160451067" loading="lazy"></p>
<h3 id="练习题6" tabindex="-1"><a class="header-anchor" href="#练习题6" aria-hidden="true">#</a> 练习题6:</h3>
<p>计算[2, 6, 18, 15, 40] 中能被3整除的偶数的和</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">]</span>
<span class="token keyword">let</span> sum <span class="token operator">=</span> <span class="token number">0</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">%</span> <span class="token number">3</span> <span class="token operator">===</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    sum <span class="token operator">+=</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">被3整除的偶数的和为</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>sum<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/notes/fe/javascript/JavaScript 基础/md_img/image-20231109160808688.png" alt="image-20231109160808688" loading="lazy"></p>
<h3 id="练习题7" tabindex="-1"><a class="header-anchor" href="#练习题7" aria-hidden="true">#</a> 练习题7：</h3>
<p>计算[2, 6, 18, 15, 40] 中能被3整除的偶数的个数</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">]</span>
<span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">0</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">%</span> <span class="token number">3</span> <span class="token operator">===</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    count<span class="token operator">++</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">能被3整除的偶数的个数有</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>count<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">个</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/notes/fe/javascript/JavaScript 基础/md_img/image-20231109162118380.png" alt="image-20231109162118380" loading="lazy"></p>
<h3 id="练习题8" tabindex="-1"><a class="header-anchor" href="#练习题8" aria-hidden="true">#</a> 练习题8：</h3>
<p>给一个数字数组，该数组中有很多数字0，将不为0的数据存入到一个新的数组中</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">14</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span>
<span class="token keyword">let</span> newArr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">!==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    newArr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">新数组为[</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>newArr<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">]</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/notes/fe/javascript/JavaScript 基础/md_img/image-20231109162603164.png" alt="image-20231109162603164" loading="lazy"></p>
<h3 id="核心练习题" tabindex="-1"><a class="header-anchor" href="#核心练习题" aria-hidden="true">#</a> 核心练习题</h3>
<h4 id="需求" tabindex="-1"><a class="header-anchor" href="#需求" aria-hidden="true">#</a> 需求：</h4>
<p>根据用户输入的个数，页面可以渲染对应王者荣耀永雄的个数</p>
<h4 id="效果如下" tabindex="-1"><a class="header-anchor" href="#效果如下" aria-hidden="true">#</a> 效果如下：</h4>
<img src="@source/notes/fe/javascript/JavaScript 基础/md_img/222.gif">
<h4 id="思路分析" tabindex="-1"><a class="header-anchor" href="#思路分析" aria-hidden="true">#</a> 思路分析：</h4>
<ol>
<li>渲染图片比较多，我们可以把图片地址放入数组中，</li>
<li>图片名称是有序号排列的，比如1.webp  2.webp 此处可以使用循环方式重复渲染图片</li>
<li>渲染位置？ 可以考虑放到 box盒子里写script 即可</li>
</ol>
<h4 id="代码编写" tabindex="-1"><a class="header-anchor" href="#代码编写" aria-hidden="true">#</a> 代码编写</h4>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
    <span class="token selector">*</span> <span class="token punctuation">{</span>
      <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
      <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">li</span> <span class="token punctuation">{</span>
      <span class="token property">list-style</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.box</span> <span class="token punctuation">{</span>
      <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
      <span class="token property">flex-wrap</span><span class="token punctuation">:</span> wrap<span class="token punctuation">;</span>
      <span class="token property">width</span><span class="token punctuation">:</span> 540px<span class="token punctuation">;</span>
      <span class="token property">margin</span><span class="token punctuation">:</span> 20px auto<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.box li</span> <span class="token punctuation">{</span>
      <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
      <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
      <span class="token property">margin</span><span class="token punctuation">:</span> 0 10px 10px 0<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.box li:nth-child(5n+1)</span> <span class="token punctuation">{</span>
      <span class="token property">margin-right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.box li img</span> <span class="token punctuation">{</span>
      <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
      <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
      <span class="token property">border</span><span class="token punctuation">:</span> 2px solid #258DF2<span class="token punctuation">;</span>
      <span class="token property">border-radius</span><span class="token punctuation">:</span> 10px 0 10px 0<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">let</span> picArr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> <span class="token number">20</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      picArr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">./images/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>i<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">.webp</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">let</span> num <span class="token operator">=</span> <span class="token function">prompt</span><span class="token punctuation">(</span><span class="token string">'请输入显示的英雄个数1-20之间'</span><span class="token punctuation">)</span>

    document<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">&lt;ul class="box"></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> num<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      document<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">
        &lt;li>
          &lt;img src="</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>picArr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">" alt="">
        &lt;/li>
      </span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    document<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">&lt;/ul></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>
  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/notes/fe/javascript/JavaScript 基础/md_img/image-20231109171859958.png" alt="image-20231109171859958" loading="lazy"></p>
<p><img src="@source/notes/fe/javascript/JavaScript 基础/md_img/image-20231109171844042.png" alt="image-20231109171844042" loading="lazy"></p>
<h2 id="排错题" tabindex="-1"><a class="header-anchor" href="#排错题" aria-hidden="true">#</a> 排错题</h2>
<h3 id="排错题1" tabindex="-1"><a class="header-anchor" href="#排错题1" aria-hidden="true">#</a> 排错题1</h3>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
  <span class="token comment">&lt;!-- 请问以下代码会出现什么问题，如何解决？ --></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
    <span class="token comment">// 需求： 求 1~100之间的累加和</span>
    <span class="token comment">// 注意： 此处有3个错误，找出并且修正</span>
    <span class="token keyword">let</span> sum
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">100</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      sum <span class="token operator">+=</span> i
    <span class="token punctuation">}</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>sum<span class="token punctuation">)</span>
  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>答：1. <code v-pre>let sum</code> 要赋值，不然会出现 <code v-pre>NaN</code> ；2. <code v-pre>i</code> 要 <code v-pre>&lt;=</code> 100，不然就只能是1-99；3.  <code v-pre>i++</code> 后面不需要 <code v-pre>;</code></p>
<h3 id="排错题2" tabindex="-1"><a class="header-anchor" href="#排错题2" aria-hidden="true">#</a> 排错题2</h3>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token comment">&lt;!-- bug:请你找到下面代码的bug,把数字1打印出来 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">let</span> sum <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>答：<code v-pre>i</code> 要从0开始</p>
<h3 id="排错题3" tabindex="-1"><a class="header-anchor" href="#排错题3" aria-hidden="true">#</a> 排错题3</h3>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token comment">&lt;!-- bug:找到下面代码死循环的原因,并修改为正确的代码 --></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> <span class="token number">5</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&lt;=</span> <span class="token number">5</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">这是双重for循环</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>答：第二层循环应该是 <code v-pre>j++</code></p>
</div></template>


