<template><div><h1 id="五、window对象-本地存储-综合案例" tabindex="-1"><a class="header-anchor" href="#五、window对象-本地存储-综合案例" aria-hidden="true">#</a> 五、Window对象 | 本地存储 | 综合案例</h1>
<h2 id="window对象" tabindex="-1"><a class="header-anchor" href="#window对象" aria-hidden="true">#</a> Window对象</h2>
<h3 id="bom-浏览器对象模型" tabindex="-1"><a class="header-anchor" href="#bom-浏览器对象模型" aria-hidden="true">#</a> BOM（浏览器对象模型）</h3>
<ul>
<li>window对象是一个全局对象，也是JavaScript中的顶级对象</li>
<li>像 <code v-pre>document</code> 、<code v-pre>alert()</code> 、<code v-pre>console.log()</code> 都是window的属性，基本BOM的属性和方法都是window的</li>
<li>所有通过 <code v-pre>var</code> 定义再全局作用域中的变量、函数都会变成window对象的属性和方法</li>
<li>window对象下的属性和方法调用的时候可以省略window</li>
</ul>
<figure><img src="@source/notes/fe/javascript/Web Apis/md_img/image-20231121110317657.png" alt="image-20231121110317657" tabindex="0" loading="lazy"><figcaption>image-20231121110317657</figcaption></figure>
<h3 id="定时器-延时函数-settimeout" tabindex="-1"><a class="header-anchor" href="#定时器-延时函数-settimeout" aria-hidden="true">#</a> 定时器 - 延时函数 (setTimeout)</h3>
<p>可以让代码延迟执行的函数</p>
<p><strong>语法：</strong> <code v-pre>setTimeout(回调函数, 等待的毫秒数)</code></p>
<p>示例：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> timer <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span>回调函数<span class="token punctuation">,</span> 等待的毫秒数<span class="token punctuation">)</span>
<span class="token comment">// 清除延时函数</span>
<span class="token function">clearTimeout</span><span class="token punctuation">(</span>timer<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container warning">
<p class="hint-container-title">注意</p>
<ul>
<li>延时器需要等待，所以后面的代码先执行</li>
<li>每一次调用延时器都会产生一个新的延时器</li>
</ul>
</div>
<h4 id="延时函数和间歇函数" tabindex="-1"><a class="header-anchor" href="#延时函数和间歇函数" aria-hidden="true">#</a> 延时函数和间歇函数</h4>
<ul>
<li>延时函数：执行一次</li>
<li>间歇函数：每隔一段时间就执行依次，除非手动清除</li>
</ul>
<h3 id="js执行机制-同步与异步" tabindex="-1"><a class="header-anchor" href="#js执行机制-同步与异步" aria-hidden="true">#</a> JS执行机制 - 同步与异步</h3>
<p>JavaScript 语言的一大特点就是单线程，即，同一个时间只能做一件事。单线程就意味着，前面一个任务没有结束，后面一个任务就不能执行，如果JS执行时间过长，就会造成页面的渲染不连贯，导致页面渲染加载阻塞感更强。</p>
<p>由此，可以引出一个概念 - 异步。</p>
<h4 id="异步" tabindex="-1"><a class="header-anchor" href="#异步" aria-hidden="true">#</a> 异步</h4>
<p>简单理解为，做一件事，比如做饭，在烧水的同时，可以利用这10分钟，去切菜，炒菜等。</p>
<p>就好像以前小学时候的计算题，烧水三十分钟，切菜4分钟，炒菜8分钟......问全部做完要多长时间</p>
<h4 id="同步任务" tabindex="-1"><a class="header-anchor" href="#同步任务" aria-hidden="true">#</a> 同步任务</h4>
<p>同步任务都在主线程上执行，形成一个执行栈</p>
<figure><img src="@source/notes/fe/javascript/Web Apis/md_img/image-20231121114158438.png" alt="image-20231121114158438" tabindex="0" loading="lazy"><figcaption>image-20231121114158438</figcaption></figure>
<h4 id="异步任务" tabindex="-1"><a class="header-anchor" href="#异步任务" aria-hidden="true">#</a> 异步任务</h4>
<p>异步任务都是耗时的，0时也是会耗时的，因为是放在任务队列里面去的。</p>
<p>一般而言，异步任务有以下三种类型：</p>
<ol>
<li>普通时间，如click、resize等</li>
<li>资源加载，如load、error等</li>
<li>定时器，包括 <code v-pre>setInterval</code> 、<code v-pre>setTimeout</code> 等</li>
</ol>
<p>异步任务相关添加到任务队列中</p>
<figure><img src="@source/notes/fe/javascript/Web Apis/md_img/image-20231121114508717.png" alt="image-20231121114508717" tabindex="0" loading="lazy"><figcaption>image-20231121114508717</figcaption></figure>
<h4 id="执行机制" tabindex="-1"><a class="header-anchor" href="#执行机制" aria-hidden="true">#</a> 执行机制</h4>
<ol>
<li>先执行执行栈中的同步任务</li>
<li>异步任务放入任务队列中</li>
<li>一旦执行栈中的所有同步任务执行完毕，系统就会按次序读取任务队列中的异步任务，于是被读取的异步任务结束等待状态，进入执行栈，开始执行。</li>
</ol>
<figure><img src="@source/notes/fe/javascript/Web Apis/md_img/image-20231121120751086.png" alt="image-20231121120751086" tabindex="0" loading="lazy"><figcaption>image-20231121120751086</figcaption></figure>
<p>由于主线程不断的重复获得任务、执行任务、再获取任务、再执行，所以这种机制被称为<strong>事件循环(event loop)</strong></p>
<h3 id="location对象" tabindex="-1"><a class="header-anchor" href="#location对象" aria-hidden="true">#</a> location对象</h3>
<p>它的数据类型是对象，它拆分并保存了 URL 地址的各个组成部分</p>
<h4 id="常用属性和方法" tabindex="-1"><a class="header-anchor" href="#常用属性和方法" aria-hidden="true">#</a> 常用属性和方法</h4>
<ul>
<li><code v-pre>href</code> 属性获取完整的URL地址，利用JS的方法去跳转页面</li>
<li><code v-pre>search</code> 属性获取地址中携带的参数，符号 <code v-pre>?</code> 后面部分</li>
<li><code v-pre>hash</code> 属性获取地址中的哈希值，符号 <code v-pre>#</code> 后面部分</li>
<li><code v-pre>reload</code> 方法用来刷新当前页面，传入参数 <code v-pre>true</code> 时表示强制刷新</li>
</ul>
<h4 id="href属性" tabindex="-1"><a class="header-anchor" href="#href属性" aria-hidden="true">#</a> href属性</h4>
<p>可以直接跳转到指定页面，比如登录成功后跳转到相对应的页面。</p>
<p>示例：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 可以得到当前文件URL地址</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>location<span class="token punctuation">.</span>href<span class="token punctuation">)</span>
<span class="token comment">// 可以通过js方式跳转到目标地址</span>
location<span class="token punctuation">.</span>href <span class="token operator">=</span> <span class="token string">'http://www.baidu.com'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="search属性" tabindex="-1"><a class="header-anchor" href="#search属性" aria-hidden="true">#</a> search属性</h4>
<p>主要是当别人在表单输入信息并提交了之后，这些信息都会放到地址栏地址的后面，如果需要提取出来，用 <code v-pre>location.search</code> 就能查询到了。</p>
<p>示例：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>location<span class="token punctuation">.</span>search<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="hash属性" tabindex="-1"><a class="header-anchor" href="#hash属性" aria-hidden="true">#</a> hash属性</h4>
<p>如果页面用到了SPA，即点击标题栏，整个页面不是全部刷新的，只是部分刷新，这个时候地址栏上面显示的是 <code v-pre>.../#/...</code> 这个时候用hash就能查到 <code v-pre>#</code> 后面的内容</p>
<p>示例：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>consoloe<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>location<span class="token punctuation">.</span>hash<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="reload属性" tabindex="-1"><a class="header-anchor" href="#reload属性" aria-hidden="true">#</a> reload属性</h4>
<p>示例：</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span><span class="token punctuation">></span></span>点击刷新<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
	<span class="token keyword">let</span> btn <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'button'</span><span class="token punctuation">)</span>
  btn<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'click'</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 强制刷新</span>
    location<span class="token punctuation">.</span><span class="token function">reload</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="navigator对象" tabindex="-1"><a class="header-anchor" href="#navigator对象" aria-hidden="true">#</a> navigator对象</h3>
<p>这个对象记录了浏览器自身的相关信息</p>
<h4 id="常用的属性和方法" tabindex="-1"><a class="header-anchor" href="#常用的属性和方法" aria-hidden="true">#</a> 常用的属性和方法</h4>
<p>通过 <code v-pre>userAgent</code> 检测浏览器的版本及平台，实现PC端和移动端自动跳转相对应页面</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  	<span class="token comment">// 检测 userAgent (浏览器信息)</span>
    <span class="token operator">!</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> userAgent <span class="token operator">=</span> navigator<span class="token punctuation">.</span>userAgent
      <span class="token comment">// 验证是否为Android或iPhone</span>
      <span class="token keyword">const</span> android <span class="token operator">=</span> userAgent<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">(Android);?[\s\/]+([\d.]+)?</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span>
      <span class="token keyword">const</span> iphone <span class="token operator">=</span> userAgent<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">(iPhone\sOS)\s([\d_]+)</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span>

      <span class="token comment">// 如果是Android或iPhone，则跳转至移动站点</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>android <span class="token operator">||</span> iphone<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        location<span class="token punctuation">.</span>href <span class="token operator">=</span> <span class="token string">'http://m.baidu.com'</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="histroy对象" tabindex="-1"><a class="header-anchor" href="#histroy对象" aria-hidden="true">#</a> histroy对象</h3>
<p>最终实现的是页面的前进、后退、历史记录等</p>
<table>
<thead>
<tr>
<th style="text-align:center">history对象方法</th>
<th style="text-align:center">作用</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">back()</td>
<td style="text-align:center">可以后退功能</td>
</tr>
<tr>
<td style="text-align:center">forward()</td>
<td style="text-align:center">前进功能</td>
</tr>
<tr>
<td style="text-align:center">go(参数)</td>
<td style="text-align:center">前进后退功能，参数如果是1前进1个页面，如果是-1后退1个页面</td>
</tr>
</tbody>
</table>
<h2 id="本地存储" tabindex="-1"><a class="header-anchor" href="#本地存储" aria-hidden="true">#</a> 本地存储</h2>
<p>有些时候在页面上写的数据一刷新页面就没有了，因此需要在本地存储大量的数据</p>
<p>一般是存储在用户的浏览器中，这样刷新页面的时候也不丢失数据。本地存储分为两种，一种是sessionStorage和localStorage</p>
<h3 id="本地存储分类" tabindex="-1"><a class="header-anchor" href="#本地存储分类" aria-hidden="true">#</a> 本地存储分类</h3>
<h4 id="localstorage" tabindex="-1"><a class="header-anchor" href="#localstorage" aria-hidden="true">#</a> localStorage</h4>
<p>可以将数据永久存储在本地，除非手动删除，否则关闭页面也会存在</p>
<p>可以多个窗口共享（同一浏览器可以共享），并以键值对的形式存储</p>
<p><strong>语法：</strong></p>
<ul>
<li>存储数据：<code v-pre>localStorage.setItem(key, value)</code></li>
<li>获取数据：<code v-pre>localStorage.getItem(key)</code></li>
<li>删除数据：<code v-pre>localStorage.removeItem(key)</code></li>
</ul>
<figure><img src="@source/notes/fe/javascript/Web Apis/md_img/image-20231122105330202.png" alt="image-20231122105330202" tabindex="0" loading="lazy"><figcaption>image-20231122105330202</figcaption></figure>
<h4 id="sessionstorage" tabindex="-1"><a class="header-anchor" href="#sessionstorage" aria-hidden="true">#</a> sessionStorage</h4>
<p>与localStorage不同，如果关闭了浏览器窗口，数据就会消失</p>
<h3 id="存储复杂数据类型" tabindex="-1"><a class="header-anchor" href="#存储复杂数据类型" aria-hidden="true">#</a> 存储复杂数据类型</h3>
<p>用以上的方法，只能一条一条存储数据的话，如果遇到复杂的数据类型，就太麻烦了。而且，如果你需要存储一个对象，直接存储，它是识别不了你是一个对象的，返回的只有 <code v-pre>[object object]</code> 所以就需要转化。</p>
<p>因此，就需要将复杂数据类型转换成JSON字符串，存储到本地。</p>
<p><strong>语法：</strong> <code v-pre>JSON.stringify(复杂数据类型)</code></p>
<p>示例：</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
	<span class="token keyword">const</span> goods <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">uname</span><span class="token operator">:</span> <span class="token string">'zs'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">18</span>
  <span class="token punctuation">}</span>
  localStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span><span class="token string">'goods'</span><span class="token operator">:</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>goods<span class="token punctuation">)</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>单纯存了还不行，还要把取出来的字符串转换为对象</p>
<p><strong>语法：</strong> <code v-pre>JSON.parse(JSON字符串)</code></p>
<p>示例：</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
	<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>localStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'goods'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="综合案例-学生信息案例" tabindex="-1"><a class="header-anchor" href="#综合案例-学生信息案例" aria-hidden="true">#</a> 综合案例 - 学生信息案例</h2>
<p>与上一篇不同的是，这次的数据的操作都是在本次存储数据里面操作</p>
<h3 id="代码编写" tabindex="-1"><a class="header-anchor" href="#代码编写" aria-hidden="true">#</a> 代码编写</h3>
<ol>
<li>静态框架搭建</li>
</ol>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>新增学员<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>info<span class="token punctuation">"</span></span> <span class="token attr-name">autocomplete</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>off<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    姓名：<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>uname<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>uname<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    年龄：<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>age<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>age<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    性别:
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>gender<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>gender<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>男<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>男<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>option</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>女<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>女<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>option</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">></span></span>
    薪资：<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>salary<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>salary<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    就业城市：<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>city<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>city<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>北京<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>北京<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>option</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>上海<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>上海<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>option</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>广州<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>广州<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>option</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>深圳<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>深圳<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>option</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>曹县<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>曹县<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>option</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>add<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>录入<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">></span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>就业榜<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>共有数据<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span>0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>条<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>table</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>thead</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span class="token punctuation">></span></span>学号<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span class="token punctuation">></span></span>姓名<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span class="token punctuation">></span></span>年龄<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span class="token punctuation">></span></span>性别<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span class="token punctuation">></span></span>薪资<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span class="token punctuation">></span></span>就业城市<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span class="token punctuation">></span></span>操作<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>thead</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tbody</span><span class="token punctuation">></span></span>
      <span class="token comment">&lt;!-- 
        &lt;tr>
          &lt;td>1001&lt;/td>
          &lt;td>欧阳霸天&lt;/td>
          &lt;td>19&lt;/td>
          &lt;td>男&lt;/td>
          &lt;td>15000&lt;/td>
          &lt;td>上海&lt;/td>
          &lt;td>
            &lt;a href="javascript:">删除&lt;/a>
          &lt;/td>
        &lt;/tr> 
        --></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tbody</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>table</span><span class="token punctuation">></span></span>
  
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">const</span> initData <span class="token operator">=</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">stuId</span><span class="token operator">:</span> <span class="token number">1001</span><span class="token punctuation">,</span>
        <span class="token literal-property property">uname</span><span class="token operator">:</span> <span class="token string">'欧阳霸天'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">19</span><span class="token punctuation">,</span>
        <span class="token literal-property property">gender</span><span class="token operator">:</span> <span class="token string">'男'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">salary</span><span class="token operator">:</span> <span class="token string">'20000'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">city</span><span class="token operator">:</span> <span class="token string">'上海'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">time</span><span class="token operator">:</span> <span class="token string">'2000-08-08 18:00:00'</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>填写逻辑</li>
</ol>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
	<span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>localStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'data'</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token keyword">const</span> tbody <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'tbody'</span><span class="token punctuation">)</span>
  
  <span class="token keyword">function</span> <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> trArr <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">ele<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">
				&lt;tr>
					&lt;td></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>ele<span class="token punctuation">.</span>stuId<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/td>
          &lt;td></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>ele<span class="token punctuation">.</span>uname<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/td>
          &lt;td></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>ele<span class="token punctuation">.</span>age<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/td>
          &lt;td></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>ele<span class="token punctuation">.</span>gender<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/td>
          &lt;td></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>ele<span class="token punctuation">.</span>salary<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/td>
          &lt;td></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>ele<span class="token punctuation">.</span>city<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/td>
          &lt;td></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>ele<span class="token punctuation">.</span>time<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/td>
          &lt;td>
  					&lt;a href="javascript:;" data-id="</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>index<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">">删除&lt;/a>
  				&lt;/td>
				&lt;/tr>
			</span><span class="token template-punctuation string">`</span></span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    tbody<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> trArr<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span>
    document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'.title span'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> arr<span class="token punctuation">.</span>length
  <span class="token punctuation">}</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  
  <span class="token keyword">const</span> info <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'.info'</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> uname <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'.uname'</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> age <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'.age'</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> salary <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'.salary'</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> gender <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'.gender'</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> city <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'.city'</span><span class="token punctuation">)</span>
  
  info<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'submit'</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>uname<span class="token punctuation">.</span>value <span class="token operator">||</span> <span class="token operator">!</span>age<span class="token punctuation">.</span>value <span class="token operator">||</span> <span class="token operator">!</span>salary<span class="token punctuation">.</span>value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'输入内容不能为空'</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    arr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">stuId</span><span class="token operator">:</span> arr<span class="token punctuation">.</span>length <span class="token operator">?</span> arr<span class="token punctuation">[</span>arr<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span>stuId <span class="token operator">+</span> <span class="token number">1</span> <span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
      <span class="token literal-property property">uname</span><span class="token operator">:</span> uname<span class="token punctuation">.</span>value<span class="token punctuation">,</span>
      <span class="token literal-property property">age</span><span class="token operator">:</span> age<span class="token punctuation">.</span>value<span class="token punctuation">,</span>
      <span class="token literal-property property">gender</span><span class="token operator">:</span> gender<span class="token punctuation">.</span>value<span class="token punctuation">,</span>
      <span class="token literal-property property">salary</span><span class="token operator">:</span> salary<span class="token punctuation">.</span>value<span class="token punctuation">,</span>
      <span class="token literal-property property">city</span><span class="token operator">:</span> city<span class="token punctuation">.</span>value<span class="token punctuation">,</span>
      <span class="token literal-property property">time</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toLocaleString</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">reset</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    localStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span><span class="token string">'data'</span><span class="token punctuation">,</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringfy</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  
  tbody<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'click'</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>tagName <span class="token operator">===</span> <span class="token string">'A'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">confirm</span><span class="token punctuation">(</span><span class="token string">'您确定要删除这条数据吗'</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        arr<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>dataset<span class="token punctuation">.</span>id<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
        <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        localStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span><span class="token string">'data'</span><span class="token punctuation">,</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/notes/fe/javascript/Web Apis/md_img/image-20231123102230759.png" alt="image-20231123102230759" tabindex="0" loading="lazy"><figcaption>image-20231123102230759</figcaption></figure>
<h2 id="补充知识" tabindex="-1"><a class="header-anchor" href="#补充知识" aria-hidden="true">#</a> 补充知识</h2>
<h3 id="map方法" tabindex="-1"><a class="header-anchor" href="#map方法" aria-hidden="true">#</a> map方法</h3>
<p>可以遍历数组处理数组，并且返回新的数组</p>
<p><strong>语法：</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'black'</span><span class="token punctuation">,</span> <span class="token string">'red'</span><span class="token punctuation">,</span> <span class="token string">'blue'</span><span class="token punctuation">]</span>
<span class="token comment">// 数组元素，索引号</span>
<span class="token keyword">const</span> newArr <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">item<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span> <span class="token comment">// black、red、blue</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span> <span class="token comment">// 0、1、2  </span>
  <span class="token keyword">return</span> item <span class="token operator">+</span> <span class="token string">'颜色'</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>newArr<span class="token punctuation">)</span> <span class="token comment">// [ 'black颜色', 'red颜色', 'blue颜色' ]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="join方法" tabindex="-1"><a class="header-anchor" href="#join方法" aria-hidden="true">#</a> join方法</h3>
<p>可以把所有元素转换一个字符串</p>
<p><strong>语法：</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'black颜色'</span><span class="token punctuation">,</span> <span class="token string">'red颜色'</span><span class="token punctuation">,</span> <span class="token string">'blue颜色'</span><span class="token punctuation">]</span>
<span class="token comment">// 通过指定分隔符进行分隔</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// black颜色,red颜色,blue颜色</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// black颜色red颜色blue颜色</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">' '</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// black颜色 red颜色 blue颜色</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


