<template><div><h1 id="每日作业-2" tabindex="-1"><a class="header-anchor" href="#每日作业-2" aria-hidden="true">#</a> 每日作业 - 2</h1>
<h2 id="主观题" tabindex="-1"><a class="header-anchor" href="#主观题" aria-hidden="true">#</a> 主观题</h2>
<ol>
<li>
<p>打印0-20之间的整数, 将每个数输出到控制台</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>i <span class="token operator">&lt;=</span> <span class="token number">20</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/notes/fe/javascript/JavaScript 基础/md_img/image-20231108113334942.png" alt="image-20231108113334942" loading="lazy"></p>
</li>
<li>
<p>计算1-1000之间的累加和，并且打印输出到页面中</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span>
<span class="token keyword">let</span> sum <span class="token operator">=</span> <span class="token number">0</span>
<span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;=</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  sum <span class="token operator">=</span> sum <span class="token operator">+</span> i
  i<span class="token operator">++</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>sum<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/notes/fe/javascript/JavaScript 基础/md_img/image-20231108112828597.png" alt="image-20231108112828597" loading="lazy"></p>
</li>
<li>
<p>页面依次打印 100-200之间,可以被6整除的数字</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">100</span>
<span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">>=</span> <span class="token number">100</span> <span class="token operator">&amp;&amp;</span> i <span class="token operator">&lt;=</span> <span class="token number">200</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">%</span> <span class="token number">6</span> <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  i<span class="token operator">++</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/notes/fe/javascript/JavaScript 基础/md_img/image-20231108112809358.png" alt="image-20231108112809358" loading="lazy"></p>
</li>
<li>
<p>用户弹窗输入两个数字，页面输出两个数字中的最大值（请使用三元运算符完成）</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> num1 <span class="token operator">=</span> <span class="token function">prompt</span><span class="token punctuation">(</span><span class="token string">'请输入第一个数字:'</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> num2 <span class="token operator">=</span> <span class="token function">prompt</span><span class="token punctuation">(</span><span class="token string">'请输入第一个数字:'</span><span class="token punctuation">)</span>
num1 <span class="token operator">></span> num2 <span class="token operator">?</span> document<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>num1<span class="token punctuation">)</span> <span class="token operator">:</span> document<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>num2<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/notes/fe/javascript/JavaScript 基础/md_img/image-20231108113629955.png" alt="image-20231108113629955" loading="lazy"></p>
</li>
<li>
<p><strong>用户输入一个数，计算 1 到这个数的累加和</strong></p>
<ul>
<li>比如用户输入的是 5，则计算 1~5 之间的累加和</li>
<li>比如用户输入的是10，则计算 1~10 之间的累加和</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> num <span class="token operator">=</span> <span class="token operator">+</span><span class="token function">prompt</span><span class="token punctuation">(</span><span class="token string">'请输入一个数字'</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> sum <span class="token operator">=</span> <span class="token number">0</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> num<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  sum <span class="token operator">=</span> sum <span class="token operator">+</span> i

<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>sum<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/notes/fe/javascript/JavaScript 基础/md_img/image-20231108114527982.png" alt="image-20231108114527982" loading="lazy"></p>
<p><img src="@source/notes/fe/javascript/JavaScript 基础/md_img/image-20231108114540888.png" alt="image-20231108114540888" loading="lazy"></p>
</li>
<li>
<p><strong>输出成绩案例（请使用if多分支来书写程序）</strong></p>
<p>接收用户输入的分数，根据分数输出对应的等级字母 A、B、C、D、E，</p>
<ul>
<li>90分(含)以上 ，输出：A</li>
<li>80分(含)~ 90 分(不含)，输出：B</li>
<li>70分(含)~ 80 分(不含)，输出：C</li>
<li>60分(含)~ 70 分(不含)，输出：D</li>
<li>60分(不含) 以下，输出：E</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> score <span class="token operator">=</span> <span class="token operator">+</span><span class="token function">prompt</span><span class="token punctuation">(</span><span class="token string">'请输入你的分数'</span><span class="token punctuation">)</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>score <span class="token operator">>=</span> <span class="token number">90</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'A'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>score <span class="token operator">>=</span> <span class="token number">80</span> <span class="token operator">&amp;&amp;</span> score <span class="token operator">&lt;</span> <span class="token number">90</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'B'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>score <span class="token operator">>=</span> <span class="token number">70</span> <span class="token operator">&amp;&amp;</span> score <span class="token operator">&lt;</span> <span class="token number">80</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'C'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>score <span class="token operator">>=</span> <span class="token number">60</span> <span class="token operator">&amp;&amp;</span> score <span class="token operator">&lt;</span> <span class="token number">70</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'D'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
  <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'E'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/notes/fe/javascript/JavaScript 基础/md_img/image-20231108115751621.png" alt="image-20231108115751621" loading="lazy"></p>
<p><img src="@source/notes/fe/javascript/JavaScript 基础/md_img/image-20231108115801503.png" alt="image-20231108115801503" loading="lazy"></p>
</li>
<li>
<p><strong>输出星期练习（请使用switch分支语句来书写程序）</strong></p>
<p>请用户输入1个星期数. 就将对应的英文的星期打印出来.</p>
<ul>
<li>比如用户输入 '星期一' ， 则 页面可以打印  monday</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> week <span class="token operator">=</span> <span class="token function">prompt</span><span class="token punctuation">(</span><span class="token string">'请输入星期数'</span><span class="token punctuation">)</span>

<span class="token keyword">switch</span> <span class="token punctuation">(</span>week<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">case</span> <span class="token string">'星期一'</span><span class="token operator">:</span>
    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'Monday'</span><span class="token punctuation">)</span>
    <span class="token keyword">break</span><span class="token punctuation">;</span>
  <span class="token keyword">case</span> <span class="token string">'星期二'</span><span class="token operator">:</span>
    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'Tuesday'</span><span class="token punctuation">)</span>
    <span class="token keyword">break</span><span class="token punctuation">;</span>
  <span class="token keyword">case</span> <span class="token string">'星期三'</span><span class="token operator">:</span>
    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'Wednesday'</span><span class="token punctuation">)</span>
    <span class="token keyword">break</span><span class="token punctuation">;</span>
  <span class="token keyword">case</span> <span class="token string">'星期四'</span><span class="token operator">:</span>
    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'Thursday'</span><span class="token punctuation">)</span>
    <span class="token keyword">break</span><span class="token punctuation">;</span>
  <span class="token keyword">case</span> <span class="token string">'星期五'</span><span class="token operator">:</span>
    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'Friday'</span><span class="token punctuation">)</span>
    <span class="token keyword">break</span><span class="token punctuation">;</span>
  <span class="token keyword">case</span> <span class="token string">'星期六'</span><span class="token operator">:</span>
    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'Saturday'</span><span class="token punctuation">)</span>
    <span class="token keyword">break</span><span class="token punctuation">;</span>
  <span class="token keyword">case</span> <span class="token string">'星期日'</span><span class="token operator">:</span>
    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'Sunday'</span><span class="token punctuation">)</span>
    <span class="token keyword">break</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/notes/fe/javascript/JavaScript 基础/md_img/image-20231108120243078.png" alt="image-20231108120243078" loading="lazy"></p>
<p><img src="@source/notes/fe/javascript/JavaScript 基础/md_img/image-20231108120254661.png" alt="image-20231108120254661" loading="lazy"></p>
</li>
<li>
<p><strong>用户登录验证</strong></p>
<p>题目描述：</p>
<p>接收用户输入的用户名和密码，若用户名为 “admin” ,且密码为 “123456” ,则提示用户登录成功!  否则，让用户一直输入。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> user <span class="token operator">=</span> <span class="token function">prompt</span><span class="token punctuation">(</span><span class="token string">'请输入用户名'</span><span class="token punctuation">)</span>
  <span class="token keyword">let</span> password <span class="token operator">=</span> <span class="token function">prompt</span><span class="token punctuation">(</span><span class="token string">'请输入密码'</span><span class="token punctuation">)</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>user <span class="token operator">===</span> <span class="token string">'admin'</span> <span class="token operator">&amp;&amp;</span> password <span class="token operator">===</span> <span class="token string">'123456'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">break</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'登陆成功'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/notes/fe/javascript/JavaScript 基础/md_img/image-20231108121550862.png" alt="image-20231108121550862" loading="lazy"></p>
<p><img src="@source/notes/fe/javascript/JavaScript 基础/md_img/image-20231108121610946.png" alt="image-20231108121610946" loading="lazy"></p>
<p><img src="@source/notes/fe/javascript/JavaScript 基础/md_img/image-20231108121622813.png" alt="image-20231108121622813" loading="lazy"></p>
</li>
</ol>
<h2 id="综合案例" tabindex="-1"><a class="header-anchor" href="#综合案例" aria-hidden="true">#</a> 综合案例</h2>
<h3 id="需求" tabindex="-1"><a class="header-anchor" href="#需求" aria-hidden="true">#</a> 需求</h3>
<p>根据用户选择计算两个数的结果</p>
<h3 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h3>
<p>打开页面出现一个提示框，注意是一直提示的，请您选择 + - * / ，如果输入q，则是退出结束程序</p>
<ul>
<li>如果输入的是 + - * / 其中任何一个，比如用户输入是 + ，则是计算求和，如果用户输入是 *  则是计算乘积
<ul>
<li>则提示第一个弹窗，提示用户：'请您输入第一个数字'</li>
<li>输入完毕则继续提示第二个弹窗，提示用户：'请您输入第二个数字'</li>
<li>都输入完毕，则通过警示框 alert 输出结果</li>
</ul>
</li>
<li>如果输入是 q，则结束程序</li>
</ul>
<p>提示：多分支请使用 if 多分支来完成</p>
<h3 id="具体效果" tabindex="-1"><a class="header-anchor" href="#具体效果" aria-hidden="true">#</a> 具体效果</h3>
 <img src="@source/notes/fe/javascript/JavaScript 基础/md_img/111-1699425332470.gif">
<h3 id="代码编写" tabindex="-1"><a class="header-anchor" href="#代码编写" aria-hidden="true">#</a> 代码编写</h3>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token function">prompt</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">
1. 输入 + - * / 计算两个数字的结果
2. 输入q结束程序
</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>str <span class="token operator">===</span> <span class="token string">'q'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">break</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> num1 <span class="token operator">=</span> <span class="token operator">+</span><span class="token function">prompt</span><span class="token punctuation">(</span><span class="token string">'请输入第一个数字'</span><span class="token punctuation">)</span>
    <span class="token keyword">let</span> num2 <span class="token operator">=</span> <span class="token operator">+</span><span class="token function">prompt</span><span class="token punctuation">(</span><span class="token string">'请输入第二个数字'</span><span class="token punctuation">)</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>str <span class="token operator">===</span> <span class="token string">'+'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">alert</span><span class="token punctuation">(</span>num1 <span class="token operator">+</span> num2<span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>str <span class="token operator">===</span> <span class="token string">'-'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">alert</span><span class="token punctuation">(</span>num1 <span class="token operator">-</span> num2<span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>str <span class="token operator">===</span> <span class="token string">'*'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">alert</span><span class="token punctuation">(</span>num1 <span class="token operator">*</span> num2<span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>str <span class="token operator">===</span> <span class="token string">'/'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">alert</span><span class="token punctuation">(</span>num1 <span class="token operator">/</span> num2<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="结果演示" tabindex="-1"><a class="header-anchor" href="#结果演示" aria-hidden="true">#</a> 结果演示</h3>
<p><img src="@source/notes/fe/javascript/JavaScript 基础/md_img/image-20231108144531755.png" alt="image-20231108144531755" loading="lazy"></p>
<h2 id="排错题" tabindex="-1"><a class="header-anchor" href="#排错题" aria-hidden="true">#</a> 排错题</h2>
<h3 id="排错题1" tabindex="-1"><a class="header-anchor" href="#排错题1" aria-hidden="true">#</a> 排错题1</h3>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 请问以下代码会出现什么问题，如何解决？</span>

<span class="token comment">// 需求： 求用户输入2个数字的和</span>
<span class="token keyword">let</span> num1 <span class="token operator">=</span> <span class="token function">prompt</span><span class="token punctuation">(</span><span class="token string">'请输入第一个值'</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> num2 <span class="token operator">=</span> <span class="token function">prompt</span><span class="token punctuation">(</span><span class="token string">'请输入第二个值'</span><span class="token punctuation">)</span>
<span class="token function">alert</span><span class="token punctuation">(</span>num1 <span class="token operator">+</span> num2<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>答：会出现字符串拼接的问题。需要转换成数字型，在<code v-pre>prompt</code> 前面加上一个 <code v-pre>+</code></p>
<h3 id="排错题2" tabindex="-1"><a class="header-anchor" href="#排错题2" aria-hidden="true">#</a> 排错题2</h3>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 请问下面代码会出现什么问题，怎么去解决</span>

<span class="token comment">// 判断用户名的案例，用户会输入用户名</span>
<span class="token comment">// 1. 如果用户名输入'迪丽热巴'，则页面弹出 '用户名输入正确'</span>
<span class="token comment">// 2. 如果用户名输入不是'迪丽热巴'，否则弹出'用户名输入不正确'</span>

<span class="token keyword">let</span> username <span class="token operator">=</span> <span class="token function">prompt</span><span class="token punctuation">(</span><span class="token string">'请输入用户名:'</span><span class="token punctuation">)</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>username <span class="token operator">=</span> <span class="token string">'迪丽热巴'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'用户名输入正确'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
  <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'用户名输入不正确'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>答：一个 <code v-pre>=</code> 代表的是赋值的意思，应该改成 <code v-pre>===</code></p>
<h3 id="排错题3" tabindex="-1"><a class="header-anchor" href="#排错题3" aria-hidden="true">#</a> 排错题3</h3>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 请问以下代码会出什么问题？如何解决？</span>

<span class="token comment">// 需求，用户输入1~10之间的整数，则循环打印用户输入的次数</span>
<span class="token comment">// 注意此处有2个错误，找出并且修正</span>

<span class="token keyword">let</span> num <span class="token operator">=</span> <span class="token function">prompt</span><span class="token punctuation">(</span><span class="token string">'请输入一个1~10之间的整数'</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span>
<span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> num<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">我是第</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>i<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">句话</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>答：1. 从1开始要小于等于 <code v-pre>num</code> ，如果从0开始就可以直接 <code v-pre>&lt;</code> ；2. 漏了一个 <code v-pre>i++</code></p>
<h3 id="排错题4" tabindex="-1"><a class="header-anchor" href="#排错题4" aria-hidden="true">#</a> 排错题4</h3>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// bug:请你找到下面代码代码穿透的原因,并找到匹配不上case里面的值的问题进行修改</span>

<span class="token comment">// 需求： 用户输入1~4之间整数，对应输出 '春' '夏' '秋' '冬' </span>
<span class="token comment">// 例如用户输入 1 则输出 '春' ，用户输入 2，则输出 '夏' 以此类推</span>
<span class="token comment">// 注意： 此处有2个错误，找出并且修正</span>
<span class="token keyword">let</span> num <span class="token operator">=</span> <span class="token operator">+</span><span class="token function">prompt</span><span class="token punctuation">(</span><span class="token string">'请你输入一个1-4之间的值'</span><span class="token punctuation">)</span>
<span class="token keyword">switch</span> <span class="token punctuation">(</span>num<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">case</span> <span class="token string">'1'</span><span class="token operator">:</span>
    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'春'</span><span class="token punctuation">)</span>
  <span class="token keyword">case</span> <span class="token string">'2'</span><span class="token operator">:</span>
    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'夏'</span><span class="token punctuation">)</span>
  <span class="token keyword">case</span> <span class="token string">'3'</span><span class="token operator">:</span>
    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'秋'</span><span class="token punctuation">)</span>
  <span class="token keyword">case</span> <span class="token string">'4'</span><span class="token operator">:</span>
    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'冬'</span><span class="token punctuation">)</span>
  <span class="token keyword">default</span><span class="token operator">:</span>
    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'请输入1~4之间整数'</span><span class="token punctuation">)</span>
    <span class="token keyword">break</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>答：1. <code v-pre>num</code> 是数字型，但是 <code v-pre>case</code> 里面是字符型；2. <code v-pre>case</code> 里面需要 <code v-pre>break</code></p>
</div></template>


