<template><div><h1 id="五、对象" tabindex="-1"><a class="header-anchor" href="#五、对象" aria-hidden="true">#</a> 五、对象</h1>
<h2 id="对象" tabindex="-1"><a class="header-anchor" href="#对象" aria-hidden="true">#</a> 对象</h2>
<h3 id="什么是对象" tabindex="-1"><a class="header-anchor" href="#什么是对象" aria-hidden="true">#</a> 什么是对象</h3>
<p>一种数据类型，一种无序的数据集合，能够详细的描述某个事物</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">uname</span><span class="token operator">:</span> <span class="token string">'张三'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">age</span> <span class="token operator">:</span><span class="token number">19</span><span class="token punctuation">,</span>
  <span class="token literal-property property">gender</span><span class="token operator">:</span> <span class="token string">'男'</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="怎么用" tabindex="-1"><a class="header-anchor" href="#怎么用" aria-hidden="true">#</a> 怎么用？</h3>
<p>语法：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> 对象名 <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">属性名</span><span class="token operator">:</span> 属性值<span class="token punctuation">,</span>
  <span class="token literal-property property">方法名</span><span class="token operator">:</span> 函数
<span class="token punctuation">}</span>
<span class="token keyword">let</span> 对象名 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>属性：信息或特征，比如 手机尺寸、颜色、重量等</p>
<p>方法：功能或行为，比如 手机打电话、发短信、玩游戏</p>
<h3 id="操作数据" tabindex="-1"><a class="header-anchor" href="#操作数据" aria-hidden="true">#</a> 操作数据</h3>
<p>对象的操作与数组的操作类似，也是增删改查</p>
<p><img src="@source/notes/fe/javascript/JavaScript 基础/md_img/image-20231111192259315.png" alt="image-20231111192259315" loading="lazy"></p>
<h4 id="查" tabindex="-1"><a class="header-anchor" href="#查" aria-hidden="true">#</a> 查</h4>
<p><strong>1. 语法：</strong> <code v-pre>对象名.属性</code></p>
<p>示例：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> person <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">uname</span><span class="token operator">:</span> <span class="token string">'张三'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">19</span><span class="token punctuation">,</span>
  <span class="token literal-property property">gender</span><span class="token operator">:</span> <span class="token string">'男'</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>person<span class="token punctuation">.</span>uname<span class="token punctuation">)</span> <span class="token comment">// 张三</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>person<span class="token punctuation">.</span>age<span class="token punctuation">)</span> <span class="token comment">// 19</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>person<span class="token punctuation">.</span>gender<span class="token punctuation">)</span> <span class="token comment">// 男</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这种写法固然简单，但是如果遇到多词属性或 <code v-pre>-</code> 等属性的话，这个操作就得改一改了。</p>
<p><strong>2. 语法：</strong> <code v-pre>对象['属性']</code></p>
<p>示例：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> person <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token string-property property">'user-name'</span><span class="token operator">:</span> <span class="token string">'张三'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span>
  <span class="token literal-property property">gender</span><span class="token operator">:</span> <span class="token string">'女'</span>
<span class="token punctuation">}</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>person<span class="token punctuation">.</span>user<span class="token operator">-</span>name<span class="token punctuation">)</span> <span class="token comment">// NaN</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>person<span class="token punctuation">[</span><span class="token string">'user-name'</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// 张三</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="改" tabindex="-1"><a class="header-anchor" href="#改" aria-hidden="true">#</a> 改</h4>
<p><strong>语法：</strong> <code v-pre>对象名.属性 = 新值</code></p>
<p>示例：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> person <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">uname</span><span class="token operator">:</span> <span class="token string">'张三'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">19</span><span class="token punctuation">,</span>
  <span class="token literal-property property">gender</span><span class="token operator">:</span> <span class="token string">'男'</span>
<span class="token punctuation">}</span>
person<span class="token punctuation">.</span>gender <span class="token operator">=</span> <span class="token string">'女'</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>person<span class="token punctuation">.</span>gender<span class="token punctuation">)</span> <span class="token comment">// 女</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>person<span class="token punctuation">)</span> <span class="token comment">// { uname: '张三', age: '19', gender: '女' }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="增" tabindex="-1"><a class="header-anchor" href="#增" aria-hidden="true">#</a> 增</h4>
<p><strong>语法：</strong> <code v-pre>对象名.新属性 = 新值</code></p>
<p>示例：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> person <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">uname</span><span class="token operator">:</span> <span class="token string">'张三'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">19</span><span class="token punctuation">,</span>
  <span class="token literal-property property">gender</span><span class="token operator">:</span> <span class="token string">'男'</span>
<span class="token punctuation">}</span>
person<span class="token punctuation">.</span>adress <span class="token operator">=</span> <span class="token string">'中国'</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>person<span class="token punctuation">)</span> <span class="token comment">// { uname: '张三', age: '19', gender: '女', adress: '中国' }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="删" tabindex="-1"><a class="header-anchor" href="#删" aria-hidden="true">#</a> 删</h4>
<p><strong>语法：</strong> <code v-pre>delete 对象名.属性</code></p>
<p>示例：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> person <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">uname</span><span class="token operator">:</span> <span class="token string">'张三'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">19</span><span class="token punctuation">,</span>
  <span class="token literal-property property">gender</span><span class="token operator">:</span> <span class="token string">'男'</span>
<span class="token punctuation">}</span>
<span class="token keyword">delete</span> person<span class="token punctuation">.</span>gender
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>person<span class="token punctuation">)</span> <span class="token comment">// { uname: '张三', age: '19' }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="对象中的方法" tabindex="-1"><a class="header-anchor" href="#对象中的方法" aria-hidden="true">#</a> 对象中的方法</h3>
<p>很简单，看一下示例就能明白对象中的方法怎么写了</p>
<p>示例：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> person <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'andy'</span><span class="token punctuation">,</span>
  <span class="token comment">// 形参</span>
  <span class="token function-variable function">sayHi</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'hi~~~'</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 实参</span>
<span class="token comment">// 对象名.方法名</span>
person<span class="token punctuation">.</span><span class="token function">sayHi</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// hi~~~</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="遍历对象" tabindex="-1"><a class="header-anchor" href="#遍历对象" aria-hidden="true">#</a> 遍历对象</h3>
<p><strong>语法：</strong><code v-pre>for ... in ...  </code>，</p>
<p>示例：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">uname</span><span class="token operator">:</span> <span class="token string">'andy'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">19</span><span class="token punctuation">,</span>
  <span class="token literal-property property">sex</span><span class="token operator">:</span> <span class="token string">'男'</span>
<span class="token punctuation">}</span>

<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> k <span class="token keyword">in</span> obj<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 获取对象的属性名</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>k<span class="token punctuation">)</span> <span class="token comment">// uanme、age、sex</span>
  <span class="token comment">// 获取属性值</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// andy、19、男</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果是数组里面包含对象的话，应该是这样取值：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> students <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'小明'</span><span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span> <span class="token literal-property property">gender</span><span class="token operator">:</span> <span class="token string">'男'</span><span class="token punctuation">,</span> <span class="token literal-property property">hometown</span><span class="token operator">:</span> <span class="token string">'河北省'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'小红'</span><span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">19</span><span class="token punctuation">,</span> <span class="token literal-property property">gender</span><span class="token operator">:</span> <span class="token string">'女'</span><span class="token punctuation">,</span> <span class="token literal-property property">hometown</span><span class="token operator">:</span> <span class="token string">'河南省'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'小刚'</span><span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">17</span><span class="token punctuation">,</span> <span class="token literal-property property">gender</span><span class="token operator">:</span> <span class="token string">'男'</span><span class="token punctuation">,</span> <span class="token literal-property property">hometown</span><span class="token operator">:</span> <span class="token string">'山西省'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'小丽'</span><span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span> <span class="token literal-property property">gender</span><span class="token operator">:</span> <span class="token string">'女'</span><span class="token punctuation">,</span> <span class="token literal-property property">hometown</span><span class="token operator">:</span> <span class="token string">'山东省'</span> <span class="token punctuation">}</span>
<span class="token punctuation">]</span>

<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> students<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token comment">// 0  1  2  3</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>students<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// Object object</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>students<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span> <span class="token comment">// 小明  小红  小刚  小丽</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="内置对象" tabindex="-1"><a class="header-anchor" href="#内置对象" aria-hidden="true">#</a> 内置对象</h3>
<p>JavaScript 内部都有提供对象，包含各种属性和方法给开发者调用，比如 <code v-pre>document.write()</code> 或者  <code v-pre>console.log()</code> 都属于内置对象。</p>
<h4 id="内置对象-math" tabindex="-1"><a class="header-anchor" href="#内置对象-math" aria-hidden="true">#</a> 内置对象 - Math</h4>
<p>提供了一系列做数学运算的方法，包含：</p>
<ul>
<li><code v-pre>random:</code> 生成0-1之间的随机数，并且包括0不包括1的随即小数 [0, 1)</li>
<li><code v-pre>ceil:</code> 向上取整</li>
<li><code v-pre>floor:</code> 向下取整</li>
<li><code v-pre>max:</code> 找最大数</li>
<li><code v-pre>min: </code> 找最小数</li>
<li><code v-pre>pow:</code> 幂运算</li>
<li><code v-pre>abs:</code> 绝对值</li>
</ul>
<h5 id="内置对象-math-random" tabindex="-1"><a class="header-anchor" href="#内置对象-math-random" aria-hidden="true">#</a> 内置对象 - Math - random</h5>
<p>语法：<code v-pre>Math.random()</code></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 生成 0-10 的随机数</span>
Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token punctuation">(</span><span class="token number">10</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>怎么理解上面的代码？</p>
<p>首先，<code v-pre>Math.random()</code> 只能取 [0, 1) 之间的随机数，如果是 <code v-pre>Math.random() * 10</code> ，那就是 [0, 10) 之间的随机数，但是这样做，就取不到10了，所以得 <code v-pre>+1</code> 这样就是取 [0, 11) 之间的随机数了，这样就能取10了。（这里的前提当然是取整了，不然会取到小数的）</p>
<p>那么同理：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 生成 5-10 的随机数</span>
Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token punctuation">(</span><span class="token number">5</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">5</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>Math.random() * (5 + 1)</code> 是只能取 [0-6)  之间的随机数，在外层 <code v-pre>+5</code> 的话则表示  <code v-pre>[0+5-6+5) =  [5-11) </code></p>
<p>所以，由此可以得出</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 生成 N-M 的随机数</span>
Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token punctuation">(</span><span class="token constant">M</span> <span class="token operator">-</span> <span class="token constant">N</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token constant">N</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>那平时怎么用？可以采用函数的形式</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">getRandom</span><span class="token punctuation">(</span><span class="token parameter"><span class="token constant">N</span><span class="token punctuation">,</span> <span class="token constant">M</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token punctuation">(</span><span class="token constant">M</span> <span class="token operator">-</span> <span class="token constant">N</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token constant">N</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="小案例" tabindex="-1"><a class="header-anchor" href="#小案例" aria-hidden="true">#</a> 小案例</h3>
<h4 id="生成随机颜色" tabindex="-1"><a class="header-anchor" href="#生成随机颜色" aria-hidden="true">#</a> 生成随机颜色</h4>
<p>**需求：**该函数接收一个布尔类型参数，表示颜色的格式是十六进制或者rgb格式</p>
<p><strong>分析：</strong></p>
<p>16进制颜色格式为: ‘#ffffff’ 其中f可以是任意 0-f之间的字符,需要用到数组，</p>
<p>let arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f']</p>
<p>提示: rgb颜色格式为: ‘rgb(255,255,255) ’ 其中255可以是任意0-255之间的数字</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">getRandomColor</span><span class="token punctuation">(</span><span class="token parameter">flag <span class="token operator">=</span> <span class="token boolean">true</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>flag<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'0'</span><span class="token punctuation">,</span> <span class="token string">'1'</span><span class="token punctuation">,</span> <span class="token string">'2'</span><span class="token punctuation">,</span> <span class="token string">'3'</span><span class="token punctuation">,</span> <span class="token string">'4'</span><span class="token punctuation">,</span> <span class="token string">'5'</span><span class="token punctuation">,</span> <span class="token string">'6'</span><span class="token punctuation">,</span> <span class="token string">'7'</span><span class="token punctuation">,</span> <span class="token string">'8'</span><span class="token punctuation">,</span> <span class="token string">'9'</span><span class="token punctuation">,</span> <span class="token string">'a'</span><span class="token punctuation">,</span> <span class="token string">'b'</span><span class="token punctuation">,</span> <span class="token string">'c'</span><span class="token punctuation">,</span> <span class="token string">'d'</span><span class="token punctuation">,</span> <span class="token string">'e'</span><span class="token punctuation">,</span> <span class="token string">'f'</span><span class="token punctuation">]</span> 
    <span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token string">'#'</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">6</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">let</span> random <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">)</span>
      str <span class="token operator">+=</span> arr<span class="token punctuation">[</span>random<span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> str
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> r <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">256</span><span class="token punctuation">)</span>
    <span class="token keyword">let</span> g <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">256</span><span class="token punctuation">)</span>
    <span class="token keyword">let</span> b <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">256</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">rgb(</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>r<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">,</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>g<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">,</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>b<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">)</span><span class="token template-punctuation string">`</span></span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">getTandomColor</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">getTandomColor</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">getTandomColor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/notes/fe/javascript/JavaScript 基础/md_img/image-20231113100152616.png" alt="image-20231113100152616" loading="lazy"></p>
<h2 id="综合案例" tabindex="-1"><a class="header-anchor" href="#综合案例" aria-hidden="true">#</a> 综合案例</h2>
<h3 id="需求" tabindex="-1"><a class="header-anchor" href="#需求" aria-hidden="true">#</a> 需求：</h3>
<p>根据数据渲染列表页面</p>
<h3 id="代码编写" tabindex="-1"><a class="header-anchor" href="#代码编写" aria-hidden="true">#</a> 代码编写</h3>
<ol>
<li>准备静态模板</li>
</ol>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>box w<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>box-hd<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">></span></span>精品推荐<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>查看全部<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>box-bd<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>clearfix<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>images/course01.png<span class="token punctuation">"</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h4</span><span class="token punctuation">></span></span>
            Think PHP 5.0 博客系统实战项目演练
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h4</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>info<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span>高级<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span> • <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span>1125<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>人在学习
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-txt line-numbers-mode" data-ext="txt"><pre v-pre class="language-txt"><code>let data = [
                        {
                            src: 'images/course01.png',
                            title: 'Think PHP 5.0 博客系统实战项目演练',
                            num: 1125
                        },
                        {
                            src: 'images/course02.png',
                            title: 'Android 网络动态图片加载实战',
                            num: 357
                        },
                        {
                            src: 'images/course03.png',
                            title: 'Angular2 大前端商城实战项目演练',
                            num: 22250
                        },
                        {
                            src: 'images/course04.png',
                            title: 'Android APP 实战项目演练',
                            num: 389
                        },
                        {
                            src: 'images/course05.png',
                            title: 'UGUI 源码深度分析案例',
                            num: 124
                        },
                        {
                            src: 'images/course06.png',
                            title: 'Kami2首页界面切换效果实战演练',
                            num: 432
                        },
                        {
                            src: 'images/course07.png',
                            title: 'UNITY 从入门到精通实战案例',
                            num: 888
                        },
                        {
                            src: 'images/course08.png',
                            title: 'Cocos 深度学习你不会错过的实战',
                            num: 590
                        },
                    ]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>编写代码</li>
</ol>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
  ...
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">></span></span>
    <span class="token comment">&lt;!-- 把模板中的&lt;li>注释掉 --></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
    	<span class="token comment">// 把data粘贴在这个位置</span>
      <span class="token keyword">let</span> data <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token punctuation">]</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">&lt;</span> data<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        document<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">
          &lt;li>
            &lt;a href="#">
              &lt;img src=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>data<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>src<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> alt="">
              &lt;h4>
                </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>data<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>title<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">
              &lt;/h4>
              &lt;div class="info">
                &lt;span>高级&lt;/span> • &lt;span></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>data<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>num<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/span>人在学习
              &lt;/div>
          	&lt;/a>
          &lt;/li> 
				</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/notes/fe/javascript/JavaScript 基础/md_img/image-20231113101552728.png" alt="image-20231113101552728" loading="lazy"></p>
<h2 id="拓展知识" tabindex="-1"><a class="header-anchor" href="#拓展知识" aria-hidden="true">#</a> 拓展知识</h2>
<h3 id="术语解释" tabindex="-1"><a class="header-anchor" href="#术语解释" aria-hidden="true">#</a> 术语解释</h3>
<p>没什么，就是说起来更专业</p>
<table>
<thead>
<tr>
<th>术语</th>
<th>解释</th>
<th>举例</th>
</tr>
</thead>
<tbody>
<tr>
<td>关键字</td>
<td>在JavaScript中有特殊意义的词汇</td>
<td>let、var、function、if、else、switch、case、break</td>
</tr>
<tr>
<td>保留字</td>
<td>在目前的JavaScript中没意义，但未来可能会具有特殊意义的词汇</td>
<td>int、short、long、char</td>
</tr>
<tr>
<td>标识（标识符）</td>
<td>变量名、函数名的另一种叫法</td>
<td>无</td>
</tr>
<tr>
<td>表达式</td>
<td>能产生值的代码，一般配合运算符出现</td>
<td>10 + 3、age &gt;= 18</td>
</tr>
<tr>
<td>语句</td>
<td>一段可执行的代码</td>
<td>if()  for()</td>
</tr>
</tbody>
</table>
<h3 id="基本数据类型和引用数据类型" tabindex="-1"><a class="header-anchor" href="#基本数据类型和引用数据类型" aria-hidden="true">#</a> 基本数据类型和引用数据类型</h3>
<p>了解了解就行，想深入学习建议看看《数据结构》</p>
<h4 id="基本数据类型-简单类型、值类型" tabindex="-1"><a class="header-anchor" href="#基本数据类型-简单类型、值类型" aria-hidden="true">#</a> 基本数据类型（简单类型、值类型）：</h4>
<p>在存储时变量中存储的是值本身，如string, number, boolean, undefined, null</p>
<p>存放在栈里面</p>
<h4 id="引用类型-复杂数据类型" tabindex="-1"><a class="header-anchor" href="#引用类型-复杂数据类型" aria-hidden="true">#</a> 引用类型（复杂数据类型）：</h4>
<p>在存储时变量中存储的仅仅是地址（引用），通过new关键字创建的，如Object, Array, Date等</p>
<p>存放在堆里面</p>
<p><img src="@source/notes/fe/javascript/JavaScript 基础/md_img/image-20231113103724215.png" alt="image-20231113103724215" loading="lazy"></p>
</div></template>


