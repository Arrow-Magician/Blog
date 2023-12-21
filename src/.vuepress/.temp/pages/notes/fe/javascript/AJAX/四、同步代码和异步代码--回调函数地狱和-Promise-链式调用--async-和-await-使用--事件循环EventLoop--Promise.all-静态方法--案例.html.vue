<template><div><h1 id="四、ajax-进阶" tabindex="-1"><a class="header-anchor" href="#四、ajax-进阶" aria-hidden="true">#</a> 四、AJAX 进阶</h1>
<h2 id="同步代码和异步代码" tabindex="-1"><a class="header-anchor" href="#同步代码和异步代码" aria-hidden="true">#</a> 同步代码和异步代码</h2>
<p>同步代码：逐行执行，需原地等待结果后，才会继续向下执行</p>
<p>异步代码：调用后耗时，不阻塞代码继续执行（不必原地等待），在将来完成后触发一个回调函数</p>
<h2 id="回调函数地狱" tabindex="-1"><a class="header-anchor" href="#回调函数地狱" aria-hidden="true">#</a> 回调函数地狱</h2>
<p>在回调函数一直向下嵌套回调函数，形成回调函数地狱</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token function">axios</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">'http://hmajax.itheima.net/api/province'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> pname <span class="token operator">=</span> res<span class="token punctuation">.</span>data<span class="token punctuation">.</span>list<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
  document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'.province'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> pname

  <span class="token function">axios</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">'http://hmajax.itheima.net/api/city'</span><span class="token punctuation">,</span> <span class="token literal-property property">params</span><span class="token operator">:</span> <span class="token punctuation">{</span> pname <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> cname <span class="token operator">=</span> res<span class="token punctuation">.</span>data<span class="token punctuation">.</span>list<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
    document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'.city'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> cname

    <span class="token function">axios</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">'http://hmajax.itheima.net/api/area1'</span><span class="token punctuation">,</span> <span class="token literal-property property">params</span><span class="token operator">:</span> <span class="token punctuation">{</span> pname<span class="token punctuation">,</span> cname <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> areaName <span class="token operator">=</span> res<span class="token punctuation">.</span>data<span class="token punctuation">.</span>list<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
      document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'.area'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> areaName
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">err</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">dir</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/notes/fe/javascript/AJAX/md_img/image-20231219170437174.png" alt="image-20231219170437174" tabindex="0" loading="lazy"><figcaption>image-20231219170437174</figcaption></figure>
<p>这样搞，会使得异常无法捕获，耦合性严重，牵一发动全身</p>
<h2 id="promise-链式调用" tabindex="-1"><a class="header-anchor" href="#promise-链式调用" aria-hidden="true">#</a> Promise - 链式调用</h2>
<p>要想解决回调函数地狱的问题，可以试着用 Promise 的链式调用</p>
<p>它的原理是依靠 then() 方法返回一个新生成的 Promise 对象，继续串联下一环任务，直到结束。其中， then() 回调函数中的返回值，会直接影像新生成的 Promise 对象最终状态和结果。</p>
<figure><img src="@source/notes/fe/javascript/AJAX/md_img/image-20231219170608496.png" alt="image-20231219170608496" tabindex="0" loading="lazy"><figcaption>image-20231219170608496</figcaption></figure>
<h3 id="链式应用" tabindex="-1"><a class="header-anchor" href="#链式应用" aria-hidden="true">#</a> 链式应用</h3>
<p>使用每一个 Promise 对象中管理一个异步任务，用 then 返回 Promise 对象，串联起来</p>
<figure><img src="@source/notes/fe/javascript/AJAX/md_img/image-20231219173013609.png" alt="image-20231219173013609" tabindex="0" loading="lazy"><figcaption>image-20231219173013609</figcaption></figure>
<h2 id="async-和-await-使用" tabindex="-1"><a class="header-anchor" href="#async-和-await-使用" aria-hidden="true">#</a> async 和 await 使用</h2>
<p>可以使用 <code v-pre>async</code> 和 <code v-pre>await</code> 写出基于 <code v-pre>Promise</code> 的异步行为，这样就不需要刻意调用链式 <code v-pre>Promise</code></p>
<p>怎么用？在 <code v-pre>async</code> 函数内，使用 <code v-pre>await</code> 关键字取代 <code v-pre>then</code> 函数，等待获取 <code v-pre>Promise</code> 对象成功状态的结果值。</p>
<p>示例：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">getData</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> pObj <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">axios</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">'http://hmajax.itheima.net/api/province'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> pname <span class="token operator">=</span> pObj<span class="token punctuation">.</span>data<span class="token punctuation">.</span>list<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
  <span class="token keyword">const</span> cObj <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">axios</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">'http://hmajax.itheima.net/api/city'</span><span class="token punctuation">,</span> <span class="token literal-property property">params</span><span class="token operator">:</span> <span class="token punctuation">{</span> pname <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> cname <span class="token operator">=</span> cObj<span class="token punctuation">.</span>data<span class="token punctuation">.</span>list<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
  <span class="token keyword">const</span> areaObj <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">axios</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">'http://hmajax.itheima.net/api/area'</span><span class="token punctuation">,</span> <span class="token literal-property property">params</span><span class="token operator">:</span> <span class="token punctuation">{</span> pname<span class="token punctuation">,</span> cname <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> areaName <span class="token operator">=</span> areaObj<span class="token punctuation">.</span>data<span class="token punctuation">.</span>list<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>

  document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'.province'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> pname
  document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'.city'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> cname
  document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'.area'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> areaName
<span class="token punctuation">}</span>

<span class="token function">getData</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上只是一个成功的案例，但是如果出错了，也有相应的方法捕获错误</p>
<h3 id="try-catch-捕获错误" tabindex="-1"><a class="header-anchor" href="#try-catch-捕获错误" aria-hidden="true">#</a> try...catch 捕获错误</h3>
<h4 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h4>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">try</span> <span class="token punctuation">{</span>
  <span class="token comment">// 要执行的代码</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// error 接收的是错误信息</span>
  <span class="token comment">// try里代码，如果有错误，直接进入这里执行</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>示例</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">getData</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> pObj <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">axios</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">'http://hmajax.itheima.net/api/province'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> pname <span class="token operator">=</span> pObj<span class="token punctuation">.</span>data<span class="token punctuation">.</span>list<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
    <span class="token keyword">const</span> cObj <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">axios</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">'http://hmajax.itheima.net/api/city'</span><span class="token punctuation">,</span> <span class="token literal-property property">params</span><span class="token operator">:</span> <span class="token punctuation">{</span> pname <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> cname <span class="token operator">=</span> cObj<span class="token punctuation">.</span>data<span class="token punctuation">.</span>list<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
    <span class="token keyword">const</span> aObj <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">axios</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">'http://hmajax.itheima.net/api/area1'</span><span class="token punctuation">,</span> <span class="token literal-property property">params</span><span class="token operator">:</span> <span class="token punctuation">{</span> pname<span class="token punctuation">,</span> cname <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> areaName <span class="token operator">=</span> aObj<span class="token punctuation">.</span>data<span class="token punctuation">.</span>list<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>

    document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'.province'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> pname
    document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'.city'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> cname
    document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'.area'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> areaName
  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">dir</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="事件循环-eventloop" tabindex="-1"><a class="header-anchor" href="#事件循环-eventloop" aria-hidden="true">#</a> 事件循环 - EventLoop</h2>
<p>JavaScript 是单线程的，为了不阻塞 JS 引擎，从而设计执行的代码模型。</p>
<p>事件循环主要负责执行代码、收集和处理事件以及执行队列中的子任务。</p>
<p>太抽象了，举个代码例子看看。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>
<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>控制台输出</p>
<div class="language-txt line-numbers-mode" data-ext="txt"><pre v-pre class="language-txt"><code>1  3  5  2  4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>为什么是以这样的顺序输出呢？</p>
<p>先来明确几个概念，调用栈、宿主环境（浏览器）、任务队列。</p>
<ul>
<li>调用栈：每调用一次语句，解释器就会把这个语句或者函数添加到调用栈并开始执行</li>
<li>宿主环境（浏览器）：JS 所能够使用的环境</li>
<li>任务队列：不会被阻塞的环境</li>
</ul>
<figure><img src="@source/notes/fe/javascript/AJAX/md_img/image-20231220094206487.png" alt="image-20231220094206487" tabindex="0" loading="lazy"><figcaption>image-20231220094206487</figcaption></figure>
<p>那么，从JS的特点可知，代码是从上往下执行的，当执行到 <code v-pre>console.log(1)</code> <sup>1</sup> 的时候，1 会被放到调用栈里面并立即执行出来；然后开始执行 <code v-pre>setTimeout(() =&gt; { console.log(2) }, 0)</code> <sup>2</sup> ，因为执行时间为0秒，所以 2 会先被放到宿主环境以后立即放到任务队列里面；然后以此类推，<code v-pre>console.log(3)</code> ，<code v-pre>console.log(5)</code> <sup>5</sup>  都会被放进调用栈里面并立即执行出来。当然，中间的 <code v-pre>setTimeout(() =&gt; { console.log(4) }, 2000)</code> <sup>4</sup> 因为要等待两秒，所以现在宿主环境等待两秒，这个时候因为 5 已经执行完毕了，所以就轮到 2 执行了，因此就打印出了2，接着再把4放进调用栈里面并执行。因此控制台输出的就是 <code v-pre>1  3  5  2  4</code> 。</p>
<h3 id="宏任务与微任务" tabindex="-1"><a class="header-anchor" href="#宏任务与微任务" aria-hidden="true">#</a> 宏任务与微任务</h3>
<p>异步任务分为：</p>
<ul>
<li>宏任务：由浏览器环境执行的异步代码</li>
<li>微任务：由 JS 引擎环境执行的异步代码</li>
</ul>
<table>
<thead>
<tr>
<th>任务（代码）</th>
<th>执行所在环境</th>
</tr>
</thead>
<tbody>
<tr>
<td>JS脚本执行事件(script)</td>
<td>浏览器</td>
</tr>
<tr>
<td>setTimeout/setInterval</td>
<td>浏览器</td>
</tr>
<tr>
<td>AJAX 请求完成事件</td>
<td>浏览器</td>
</tr>
<tr>
<td>用户交互事件等</td>
<td>浏览器</td>
</tr>
<tr>
<td>Promise对象.then()</td>
<td>JS 引擎</td>
</tr>
</tbody>
</table>
<div class="hint-container warning">
<p class="hint-container-title">注意</p>
<p>Promise 本身是同步的，而 then 和 catch 回调函数是异步的</p>
</div>
<figure><img src="@source/notes/fe/javascript/AJAX/md_img/image-20231220101059034.png" alt="image-20231220101059034" tabindex="0" loading="lazy"><figcaption>image-20231220101059034</figcaption></figure>
<h4 id="js-内代码执行" tabindex="-1"><a class="header-anchor" href="#js-内代码执行" aria-hidden="true">#</a> JS 内代码执行</h4>
<figure><img src="@source/notes/fe/javascript/AJAX/md_img/image-20231220101532102.png" alt="image-20231220101532102" tabindex="0" loading="lazy"><figcaption>image-20231220101532102</figcaption></figure>
<p>可以结合这个<a href="https://www.bilibili.com/video/BV1MN411y7pw/?p=56&amp;spm_id_from=pageDriver&amp;vd_source=ce2373d3d93ecee4088b1954ccc2db50" target="_blank" rel="noopener noreferrer">视频<ExternalLinkIcon/></a>食用。</p>
<h2 id="promise-all-静态方法" tabindex="-1"><a class="header-anchor" href="#promise-all-静态方法" aria-hidden="true">#</a> Promise.all 静态方法</h2>
<p>合并多个 Promise 对象，等待所有同时成功完成（或某一个失败），然后做后续逻辑。</p>
<figure><img src="@source/notes/fe/javascript/AJAX/md_img/image-20231220103951784.png" alt="image-20231220103951784" tabindex="0" loading="lazy"><figcaption>image-20231220103951784</figcaption></figure>
<h3 id="语法-1" tabindex="-1"><a class="header-anchor" href="#语法-1" aria-hidden="true">#</a> 语法</h3>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> p <span class="token operator">=</span> Promise<span class="token punctuation">.</span><span class="token function">all</span><span class="token punctuation">(</span><span class="token punctuation">[</span>Promise对象<span class="token punctuation">,</span> Promise对象<span class="token punctuation">,</span> <span class="token operator">...</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
p<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">result</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token comment">// result结果: [Promise对象成功结果, Promise对象成功结果, ...]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">error</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token comment">// 第一个失败的Promise对象，抛出异常</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="案例-商品分类" tabindex="-1"><a class="header-anchor" href="#案例-商品分类" aria-hidden="true">#</a> 案例 - 商品分类</h2>
<h3 id="需求" tabindex="-1"><a class="header-anchor" href="#需求" aria-hidden="true">#</a> 需求</h3>
<p>尽可能同时展示所有商品分类到页面上</p>
<h3 id="步骤" tabindex="-1"><a class="header-anchor" href="#步骤" aria-hidden="true">#</a> 步骤</h3>
<ol>
<li>获取所有的以及分类数据</li>
<li>遍历 id，创建获取二级分类请求</li>
<li>合并所有二级分类 Promise 对象</li>
<li>等待同时成功，开始渲染页面</li>
</ol>
<h3 id="代码实现" tabindex="-1"><a class="header-anchor" href="#代码实现" aria-hidden="true">#</a> 代码实现</h3>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token function">axios</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">'http://hmajax.itheima.net/api/category/top'</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">result</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> secPromiseList <span class="token operator">=</span> result<span class="token punctuation">.</span>data<span class="token punctuation">.</span>data<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">item</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">axios</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">'http://hmajax.itheima.net/api/category/sub'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">params</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">id</span><span class="token operator">:</span> item<span class="token punctuation">.</span>id <span class="token comment">// 一级分类id</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> p <span class="token operator">=</span> Promise<span class="token punctuation">.</span><span class="token function">all</span><span class="token punctuation">(</span>secPromiseList<span class="token punctuation">)</span>
  p<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">result</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> htmlStr <span class="token operator">=</span> result<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">item</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> dataObj <span class="token operator">=</span> item<span class="token punctuation">.</span>data<span class="token punctuation">.</span>data
      <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">
				&lt;div class="item">
        &lt;h3></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>dataObj<span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/h3>
          &lt;ul>
            </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>dataObj<span class="token punctuation">.</span>children<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">item</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        	<span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">
              &lt;li>
                &lt;a href="javascript:;">
                  &lt;img src="</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>item<span class="token punctuation">.</span>picture<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">">
                  &lt;p></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>item<span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/p>
                &lt;/a>
              &lt;/li>
              </span><span class="token template-punctuation string">`</span></span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">
          &lt;/ul>
        &lt;/div>
			</span><span class="token template-punctuation string">`</span></span>
      document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'.sub-list'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> htmlStr
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/notes/fe/javascript/AJAX/md_img/image-20231220114505427.png" alt="image-20231220114505427" tabindex="0" loading="lazy"><figcaption>image-20231220114505427</figcaption></figure>
<h2 id="案例-学习反馈" tabindex="-1"><a class="header-anchor" href="#案例-学习反馈" aria-hidden="true">#</a> 案例 - 学习反馈</h2>
<h3 id="需求-1" tabindex="-1"><a class="header-anchor" href="#需求-1" aria-hidden="true">#</a> 需求</h3>
<p>完成省市区切换效果</p>
<p>收集学习反馈数据，提交保存</p>
<h3 id="步骤-1" tabindex="-1"><a class="header-anchor" href="#步骤-1" aria-hidden="true">#</a> 步骤</h3>
<ol>
<li>切换省市区效果
<ol>
<li>设置省份数据到下拉菜单</li>
<li>切换省份，设置城市数据到下拉菜单，并清空地区下来菜单</li>
<li>切换城市，设置地区数据到下拉菜单</li>
</ol>
</li>
<li>数据提交
<ol>
<li>监听提交按钮的点击事件</li>
<li>依靠插件收集表单数据</li>
<li>基于 axios 提交保存，显示结果</li>
</ol>
</li>
</ol>
<h3 id="代码实现-1" tabindex="-1"><a class="header-anchor" href="#代码实现-1" aria-hidden="true">#</a> 代码实现</h3>
<ol>
<li>切换省市区效果</li>
</ol>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> province <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'.province'</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> city <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'.city'</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> area <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'.area'</span><span class="token punctuation">)</span>

<span class="token function">axios</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">'http://hmajax.itheima.net/api/province'</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">result</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> optionStr <span class="token operator">=</span> result<span class="token punctuation">.</span>data<span class="token punctuation">.</span>list<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">pname</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">&lt;option value="</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>pname<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">"></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>pname<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/option></span><span class="token template-punctuation string">`</span></span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span>
  province<span class="token punctuation">.</span>innerHTML <span class="token operator">+=</span> optionStr
<span class="token punctuation">}</span><span class="token punctuation">)</span>

province<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'change'</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token parameter">e</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">axios</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">'http://hmajax.itheima.net/api/city'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">params</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">pname</span><span class="token operator">:</span> e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> optionStr <span class="token operator">=</span> result<span class="token punctuation">.</span>data<span class="token punctuation">.</span>list<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">cname</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">&lt;option value="</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>cname<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">"></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>cname<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/option></span><span class="token template-punctuation string">`</span></span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span>
  city<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">&lt;option value="">城市&lt;/option></span><span class="token template-punctuation string">`</span></span> <span class="token operator">+</span> optionStr

  <span class="token comment">// 清空地区的数据</span>
  area<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">&lt;option value="">地区&lt;/option></span><span class="token template-punctuation string">`</span></span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

city<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'change'</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token parameter">e</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">axios</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">'http://hmajax.itheima.net/api/area'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">params</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">pname</span><span class="token operator">:</span> province<span class="token punctuation">.</span>value<span class="token punctuation">,</span>
      <span class="token literal-property property">cname</span><span class="token operator">:</span> e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> optionStr <span class="token operator">=</span> result<span class="token punctuation">.</span>data<span class="token punctuation">.</span>list<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">areaName</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">&lt;option value="</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>areaName<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">"></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>areaName<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/option></span><span class="token template-punctuation string">`</span></span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span>
  area<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">&lt;option value="">地区&lt;/option></span><span class="token template-punctuation string">`</span></span> <span class="token operator">+</span> optionStr
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/notes/fe/javascript/AJAX/md_img/image-20231220150155841.png" alt="image-20231220150155841" tabindex="0" loading="lazy"><figcaption>image-20231220150155841</figcaption></figure>
<ol start="2">
<li>数据提交</li>
</ol>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> submitBtn <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'.submit'</span><span class="token punctuation">)</span>
submitBtn<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'click'</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> form <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'.info-form'</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token function">serialize</span><span class="token punctuation">(</span>form<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">hash</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token literal-property property">empty</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">axios</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">'http://hmajax.itheima.net/api/feedback'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">'post'</span><span class="token punctuation">,</span>
      data
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token function">alert</span><span class="token punctuation">(</span>result<span class="token punctuation">.</span>data<span class="token punctuation">.</span>message<span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">alert</span><span class="token punctuation">(</span>error<span class="token punctuation">.</span>response<span class="token punctuation">.</span>data<span class="token punctuation">.</span>message<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/notes/fe/javascript/AJAX/md_img/image-20231220150122745.png" alt="image-20231220150122745" tabindex="0" loading="lazy"><figcaption>image-20231220150122745</figcaption></figure>
<figure><img src="@source/notes/fe/javascript/AJAX/md_img/image-20231220150140742.png" alt="image-20231220150140742" tabindex="0" loading="lazy"><figcaption>image-20231220150140742</figcaption></figure>
</div></template>


