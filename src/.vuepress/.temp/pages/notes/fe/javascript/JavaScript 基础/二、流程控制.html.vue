<template><div><h1 id="二、流程控制" tabindex="-1"><a class="header-anchor" href="#二、流程控制" aria-hidden="true">#</a> 二、流程控制</h1>
<h2 id="运算符" tabindex="-1"><a class="header-anchor" href="#运算符" aria-hidden="true">#</a> 运算符</h2>
<h3 id="赋值运算符" tabindex="-1"><a class="header-anchor" href="#赋值运算符" aria-hidden="true">#</a> 赋值运算符</h3>
<p>主要是用来简化代码的</p>
<p>常见的有： <code v-pre>+=</code> ，<code v-pre>-=</code> , <code v-pre>*=</code> , <code v-pre>/=</code> , <code v-pre>%=</code></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> num <span class="token operator">=</span> <span class="token number">1</span>
<span class="token comment">// num = num + 1</span>
num <span class="token operator">+=</span> <span class="token number">1</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span> <span class="token comment">// 2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="一元运算符" tabindex="-1"><a class="header-anchor" href="#一元运算符" aria-hidden="true">#</a> 一元运算符</h3>
<p>主要是自增运算</p>
<h4 id="前置自增-在前-先加" tabindex="-1"><a class="header-anchor" href="#前置自增-在前-先加" aria-hidden="true">#</a> 前置自增 (++在前 先加)</h4>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token operator">++</span>i <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token comment">// 4</span>
<span class="token comment">// i先自加1，变成2后，在和后面的2相加</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="后置自增-在后-后加" tabindex="-1"><a class="header-anchor" href="#后置自增-在后-后加" aria-hidden="true">#</a> 后置自增 (++在后 后加)</h4>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token operator">++</span> <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token comment">// 3</span>
<span class="token comment">// i先和2相加，先运算输出完毕后，i再自加是2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但是，当两个独立使用的时候二者并没有差别，一般都是 i++ 比较多，而且还是单独使用。</p>
<h3 id="比较运算符" tabindex="-1"><a class="header-anchor" href="#比较运算符" aria-hidden="true">#</a> 比较运算符</h3>
<p>比较两个数据大小、是否相等</p>
<p>还有很多其他的比较运算符，重要的是这几个：</p>
<p><code v-pre>=</code> : 赋值</p>
<p><code v-pre>==</code> : 判断，左右两边值是否相等</p>
<p><code v-pre>===</code> :全等，左右两边是否 <strong>类型</strong> 和值相等</p>
<div class="hint-container warning">
<p class="hint-container-title">注意</p>
<ol>
<li>尽量不要比较小数，小数有精度问题</li>
<li>不同类型之间比较会发生隐式转换</li>
<li>NaN不等于任何值，包括它本身，所以比较的时候返回的是false</li>
<li>都是从左往右比较</li>
<li>字符串比较比较的是对应的ASCII码</li>
</ol>
</div>
<h3 id="逻辑运算符" tabindex="-1"><a class="header-anchor" href="#逻辑运算符" aria-hidden="true">#</a> 逻辑运算符</h3>
<p>解决多重条件判断</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>num <span class="token operator">></span> <span class="token number">5</span> <span class="token operator">&amp;&amp;</span> num <span class="token operator">&lt;</span> <span class="token number">10</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>逻辑运算符有三个： <code v-pre>与(&amp;&amp;)</code> , <code v-pre>或(||)</code> , <code v-pre>非(!)</code></p>
<p><img src="@source/notes/fe/javascript/JavaScript 基础/md_img/image-20231107114033932.png" alt="image-20231107114033932" loading="lazy"></p>
<h3 id="运算符优先级" tabindex="-1"><a class="header-anchor" href="#运算符优先级" aria-hidden="true">#</a> 运算符优先级</h3>
<table>
<thead>
<tr>
<th style="text-align:center">优先级</th>
<th style="text-align:center">运算符</th>
<th style="text-align:center">顺序</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">1</td>
<td style="text-align:center">小括号</td>
<td style="text-align:center"><code v-pre>( )</code></td>
</tr>
<tr>
<td style="text-align:center">2</td>
<td style="text-align:center">一元运算符</td>
<td style="text-align:center"><code v-pre>++</code>  <code v-pre>--</code>  <code v-pre>!</code></td>
</tr>
<tr>
<td style="text-align:center">3</td>
<td style="text-align:center">算数运算符</td>
<td style="text-align:center">先  <code v-pre>*</code>  <code v-pre>/</code> <code v-pre>%</code>  后  <code v-pre>+</code>  <code v-pre>-</code></td>
</tr>
<tr>
<td style="text-align:center">4</td>
<td style="text-align:center">关系运算符</td>
<td style="text-align:center"><code v-pre>&gt;</code>  <code v-pre>&gt;=</code>  <code v-pre>&lt;</code>  <code v-pre>&lt;=</code></td>
</tr>
<tr>
<td style="text-align:center">5</td>
<td style="text-align:center">相等运算符</td>
<td style="text-align:center"><code v-pre>==</code>  <code v-pre>!=</code>  <code v-pre>===</code>  <code v-pre>!==</code></td>
</tr>
<tr>
<td style="text-align:center">6</td>
<td style="text-align:center">逻辑运算符</td>
<td style="text-align:center">先  <code v-pre>&amp;&amp;</code>  后  `</td>
</tr>
<tr>
<td style="text-align:center">7</td>
<td style="text-align:center">赋值运算符</td>
<td style="text-align:center"><code v-pre>=</code></td>
</tr>
<tr>
<td style="text-align:center">8</td>
<td style="text-align:center">逗号运算符</td>
<td style="text-align:center"><code v-pre>,</code></td>
</tr>
</tbody>
</table>
<ul>
<li>一元运算符里面的逻辑非优先级很高</li>
<li>逻辑与 比 逻辑或 优先级高</li>
</ul>
<h2 id="语句" tabindex="-1"><a class="header-anchor" href="#语句" aria-hidden="true">#</a> 语句</h2>
<h3 id="表达式和语句" tabindex="-1"><a class="header-anchor" href="#表达式和语句" aria-hidden="true">#</a> 表达式和语句</h3>
<p>表达式是可以被求值的代码，JavaScript 引擎会将其计算出一个结果</p>
<p>语句是一段可以执行的代码</p>
<h4 id="表达式和语句的区别" tabindex="-1"><a class="header-anchor" href="#表达式和语句的区别" aria-hidden="true">#</a> 表达式和语句的区别</h4>
<p>表达式可以被求值，所以它可以写在赋值语句的右侧；而语句不一定有值，所以 alert() for 和break 等语句就不能被赋值。</p>
<h3 id="分支语句" tabindex="-1"><a class="header-anchor" href="#分支语句" aria-hidden="true">#</a> 分支语句</h3>
<p><img src="@source/notes/fe/javascript/JavaScript 基础/md_img/image-20231107155646505.png" alt="image-20231107155646505" loading="lazy"></p>
<p>分支语句包含：<code v-pre>If分支语句</code>  <code v-pre>三元运算符</code>  <code v-pre>switch语句</code></p>
<h4 id="if语句" tabindex="-1"><a class="header-anchor" href="#if语句" aria-hidden="true">#</a> if语句</h4>
<p><strong>单分支</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>条件<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  满足条件要执行的代码
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>双分支</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>条件<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  满足条件要执行的代码
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
  不满足条件执行的代码
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>多分支if语法</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>条件<span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  代码<span class="token number">1</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>条件<span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  代码<span class="token number">2</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>条件<span class="token number">3</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  代码<span class="token number">3</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
  代码n
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="三元运算符" tabindex="-1"><a class="header-anchor" href="#三元运算符" aria-hidden="true">#</a> 三元运算符</h4>
<p>比if双分支更简单的写法</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>条件 <span class="token operator">?</span> 满足条件执行的代码 <span class="token operator">:</span> 不满足条件执行的代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="switch-语句" tabindex="-1"><a class="header-anchor" href="#switch-语句" aria-hidden="true">#</a> switch 语句</h4>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">switch</span> <span class="token punctuation">(</span>数据<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">case</span> 值<span class="token number">1</span><span class="token operator">:</span> 
    代码
    <span class="token keyword">break</span>
  <span class="token keyword">case</span> 值<span class="token number">2</span><span class="token operator">:</span>
    代码
    <span class="token keyword">break</span>
  <span class="token keyword">default</span><span class="token operator">:</span>
    代码n
    <span class="token keyword">break</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>示例：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> num1 <span class="token operator">=</span> <span class="token operator">+</span><span class="token function">prompt</span><span class="token punctuation">(</span><span class="token string">'请输入第一个数字:'</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> num2 <span class="token operator">=</span> <span class="token operator">+</span><span class="token function">prompt</span><span class="token punctuation">(</span><span class="token string">'请输入第二个数字:'</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> sp <span class="token operator">=</span> <span class="token function">prompt</span><span class="token punctuation">(</span><span class="token string">'请输入 + - * / 其中一个'</span><span class="token punctuation">)</span>

<span class="token keyword">switch</span> <span class="token punctuation">(</span>sp<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">case</span> <span class="token string">'+'</span><span class="token operator">:</span>
    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">两个数的加法操作是</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>num1 <span class="token operator">+</span> num2<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>
    <span class="token keyword">break</span><span class="token punctuation">;</span>
  <span class="token keyword">case</span> <span class="token string">'-'</span><span class="token operator">:</span>
    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">两个数的减法操作是</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>num1 <span class="token operator">-</span> num2<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>
    <span class="token keyword">break</span><span class="token punctuation">;</span>
  <span class="token keyword">case</span> <span class="token string">'*'</span><span class="token operator">:</span>
    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">两个数的乘法操作是</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>num1 <span class="token operator">*</span> num2<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>
    <span class="token keyword">break</span><span class="token punctuation">;</span>
  <span class="token keyword">case</span> <span class="token string">'/'</span><span class="token operator">:</span>
    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">两个数的除法操作是</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>num1 <span class="token operator">/</span> num2<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>
    <span class="token keyword">break</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="循环语句" tabindex="-1"><a class="header-anchor" href="#循环语句" aria-hidden="true">#</a> 循环语句</h3>
<p><img src="@source/notes/fe/javascript/JavaScript 基础/md_img/image-20231107155703667.png" alt="image-20231107155703667" loading="lazy"></p>
<h4 id="while-循环" tabindex="-1"><a class="header-anchor" href="#while-循环" aria-hidden="true">#</a> while 循环</h4>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">while</span> <span class="token punctuation">(</span>循环条件<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">要重复执行的代码</span><span class="token punctuation">(</span>循环体<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>示例：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span>
<span class="token keyword">while</span><span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">&lt;=</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  document<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">'我会循环三次'</span><span class="token punctuation">)</span>
  i<span class="token operator">++</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果循环需要退出，有 <code v-pre>break</code> 和 <code v-pre>continue</code> 两种模式</p>
<ul>
<li><code v-pre>break</code> : 退出循环</li>
<li><code v-pre>continue</code> : 结束本次循环，继续下次循环</li>
</ul>
<h2 id="断点调试" tabindex="-1"><a class="header-anchor" href="#断点调试" aria-hidden="true">#</a> 断点调试</h2>
<p>在某句代码上加标记，当程序执行到这句有标记的代码时会暂停下来</p>
<h3 id="怎么用" tabindex="-1"><a class="header-anchor" href="#怎么用" aria-hidden="true">#</a> 怎么用？</h3>
<ol>
<li>打开开发者工具</li>
<li>点击Sources</li>
<li>选择代码文件</li>
<li>在行数那里点击一下就能打上断点了</li>
</ol>
<h2 id="综合案例-简易atm取款机" tabindex="-1"><a class="header-anchor" href="#综合案例-简易atm取款机" aria-hidden="true">#</a> 综合案例 - 简易ATM取款机</h2>
<h3 id="需求" tabindex="-1"><a class="header-anchor" href="#需求" aria-hidden="true">#</a> 需求：</h3>
<p>用户可以选择存钱、取钱、查看余额和退出功能</p>
<h3 id="分析" tabindex="-1"><a class="header-anchor" href="#分析" aria-hidden="true">#</a> 分析：</h3>
<ol>
<li>循环的时候，需要反复提示输入框，所以提示框写到循环里面</li>
<li>退出的条件是用户输入了4，如果是4，则结束循环，不在弹窗</li>
<li>提前准备一个金额预先存储一个数额</li>
<li>取钱是减法操作，存钱是加法操作，查看余额则是直接显示金额</li>
<li>输入不同的值，可以使用switch来执行不同的操作</li>
</ol>
<h3 id="代码编写" tabindex="-1"><a class="header-anchor" href="#代码编写" aria-hidden="true">#</a> 代码编写</h3>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> money <span class="token operator">=</span> <span class="token number">100</span>
<span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> re <span class="token operator">=</span> <span class="token operator">+</span><span class="token function">prompt</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">
		请选择操作：
		1. 存钱
		2. 取钱
		3. 查看余额
		4. 退出
	</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>re <span class="token operator">===</span> <span class="token number">4</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">break</span>
  <span class="token punctuation">}</span>
  
  <span class="token keyword">switch</span> <span class="token punctuation">(</span>re<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token number">1</span><span class="token operator">:</span>
      <span class="token comment">// 存钱</span>
      <span class="token keyword">let</span> cun <span class="token operator">=</span> <span class="token operator">+</span><span class="token function">prompt</span><span class="token punctuation">(</span><span class="token string">'请输入金额'</span><span class="token punctuation">)</span>
      money <span class="token operator">=</span> money <span class="token operator">+</span> cun
      <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> <span class="token number">2</span><span class="token operator">:</span>
      <span class="token comment">// 取钱</span>
      <span class="token keyword">let</span> qu <span class="token operator">=</span> <span class="token operator">+</span><span class="token function">prompt</span><span class="token punctuation">(</span><span class="token string">'请输入金额'</span><span class="token punctuation">)</span>
      money <span class="token operator">=</span> money <span class="token operator">-</span> qu
      <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> <span class="token number">3</span><span class="token operator">:</span>
      <span class="token comment">// 查看余额</span>
      <span class="token function">alert</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">你的银行卡余额是</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>money<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>
      <span class="token keyword">break</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="结果演示" tabindex="-1"><a class="header-anchor" href="#结果演示" aria-hidden="true">#</a> 结果演示</h3>
<p><img src="@source/notes/fe/javascript/JavaScript 基础/md_img/image-20231108104530482.png" alt="image-20231108104530482" loading="lazy"></p>
</div></template>


