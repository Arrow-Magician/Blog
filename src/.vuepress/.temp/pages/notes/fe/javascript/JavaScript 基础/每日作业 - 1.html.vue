<template><div><h1 id="每日作业-1" tabindex="-1"><a class="header-anchor" href="#每日作业-1" aria-hidden="true">#</a> 每日作业 - 1</h1>
<h2 id="简答题" tabindex="-1"><a class="header-anchor" href="#简答题" aria-hidden="true">#</a> 简答题</h2>
<ol>
<li>请说出变量的使用场景</li>
</ol>
<div class="language-txt line-numbers-mode" data-ext="txt"><pre v-pre class="language-txt"><code>存储用户输入、存储中间结果、程序状态存储、控制流程、存储配置信息
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2">
<li>请说出基本数据类型有哪5种？</li>
</ol>
<div class="language-txt line-numbers-mode" data-ext="txt"><pre v-pre class="language-txt"><code>Number、String、boolean、undefined、null
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="3">
<li>请说出模板字符串使用方法</li>
</ol>
<div class="language-txt line-numbers-mode" data-ext="txt"><pre v-pre class="language-txt"><code>1. 使用 ``
2. 使用 ${} 作为占位符传递函数
3. 在模板字符串内使用反引号需要加转义符(\)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4">
<li>下面代码输出的结果是( )</li>
</ol>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> num <span class="token operator">=</span> <span class="token number">10</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>num <span class="token operator">+</span> <span class="token number">11</span><span class="token punctuation">)</span> <span class="token comment">// 21</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>num <span class="token operator">+</span> <span class="token string">'11'</span><span class="token punctuation">)</span> <span class="token comment">// 1011</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>num <span class="token operator">+</span> <span class="token operator">+</span><span class="token string">'11'</span><span class="token punctuation">)</span> <span class="token comment">// 21</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5">
<li>下面代码输出的结果是( )</li>
</ol>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> num <span class="token operator">=</span> <span class="token number">10</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> num <span class="token operator">+</span> <span class="token string">'11'</span><span class="token punctuation">)</span> <span class="token comment">// number11</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> <span class="token punctuation">(</span>num <span class="token operator">+</span> <span class="token string">'11'</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// string</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> <span class="token punctuation">(</span>num <span class="token operator">+</span> <span class="token operator">+</span><span class="token string">'11'</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// number</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="编程题" tabindex="-1"><a class="header-anchor" href="#编程题" aria-hidden="true">#</a> 编程题</h2>
<h3 id="获取用户信息" tabindex="-1"><a class="header-anchor" href="#获取用户信息" aria-hidden="true">#</a> 获取用户信息</h3>
<h4 id="题目描述" tabindex="-1"><a class="header-anchor" href="#题目描述" aria-hidden="true">#</a> 题目描述</h4>
<p>依次询问并获取用户的姓名、年龄、性别，收集数据之后在控制台依次打印出来。</p>
<p>具体表现如下图：</p>
<img src="@source/notes/fe/javascript/JavaScript 基础/md_img/图片1.png">
<img src="@source/notes/fe/javascript/JavaScript 基础/md_img/图片4.png">
<h4 id="题目提示" tabindex="-1"><a class="header-anchor" href="#题目提示" aria-hidden="true">#</a> 题目提示</h4>
<ul>
<li>通过prompt来弹出提示框，收集用户信息</li>
<li>通过变量保存数据</li>
</ul>
<h4 id="代码编写" tabindex="-1"><a class="header-anchor" href="#代码编写" aria-hidden="true">#</a> 代码编写</h4>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">let</span> name <span class="token operator">=</span> <span class="token function">prompt</span><span class="token punctuation">(</span><span class="token string">'请输入您的姓名'</span><span class="token punctuation">)</span>
    <span class="token keyword">let</span> age <span class="token operator">=</span> <span class="token function">prompt</span><span class="token punctuation">(</span><span class="token string">'请输入您的年龄'</span><span class="token punctuation">)</span>
    <span class="token keyword">let</span> gender <span class="token operator">=</span> <span class="token function">prompt</span><span class="token punctuation">(</span><span class="token string">'请输入您的性别'</span><span class="token punctuation">)</span>

    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'用户的姓名:'</span> <span class="token operator">+</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'用户的年龄:'</span> <span class="token operator">+</span> age<span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'用户的性别:'</span> <span class="token operator">+</span> gender<span class="token punctuation">)</span><span class="token punctuation">;</span>
  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="结果演示" tabindex="-1"><a class="header-anchor" href="#结果演示" aria-hidden="true">#</a> 结果演示</h4>
<p><img src="@source/notes/fe/javascript/JavaScript 基础/md_img/image-20231107102142285.png" alt="image-20231107102142285" loading="lazy"></p>
<h3 id="增加年龄" tabindex="-1"><a class="header-anchor" href="#增加年龄" aria-hidden="true">#</a> 增加年龄</h3>
<h4 id="题目描述-1" tabindex="-1"><a class="header-anchor" href="#题目描述-1" aria-hidden="true">#</a> 题目描述</h4>
<p>1、询问用户年龄，用户输入年龄后，把用户输入的年龄增加5岁</p>
<p>2、增加5岁后，通过弹出框提示用户 “ 据我估计，五年后，你可能XX岁了”</p>
<img src="@source/notes/fe/javascript/JavaScript 基础/md_img/图片5.png">
<img src="@source/notes/fe/javascript/JavaScript 基础/md_img/图片6.png">
<h4 id="题目提示-1" tabindex="-1"><a class="header-anchor" href="#题目提示-1" aria-hidden="true">#</a> 题目提示</h4>
<ul>
<li>通过prompt来弹出提示框，收集用户信息</li>
<li>通过变量保存数据</li>
<li>转换数据类型(需要预习第二天的数据类型转换哟)</li>
</ul>
<h4 id="代码编写-1" tabindex="-1"><a class="header-anchor" href="#代码编写-1" aria-hidden="true">#</a> 代码编写</h4>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">let</span> age <span class="token operator">=</span> <span class="token function">prompt</span><span class="token punctuation">(</span><span class="token string">'你现在多少岁了？'</span><span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">据我估计，五年后，你可能</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token function">Number</span><span class="token punctuation">(</span>age<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">5</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">岁了</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="结果演示-1" tabindex="-1"><a class="header-anchor" href="#结果演示-1" aria-hidden="true">#</a> 结果演示</h4>
<p><img src="@source/notes/fe/javascript/JavaScript 基础/md_img/image-20231107102622332.png" alt="image-20231107102622332" loading="lazy"></p>
<h3 id="计算银行卡余额案例" tabindex="-1"><a class="header-anchor" href="#计算银行卡余额案例" aria-hidden="true">#</a> 计算银行卡余额案例</h3>
<h4 id="题目描述-2" tabindex="-1"><a class="header-anchor" href="#题目描述-2" aria-hidden="true">#</a> 题目描述</h4>
<p>1、用户输入总的银行卡金额，依次输入本月花费的电费，水费，网费。</p>
<p>2、页面打印一个表格，计算出本月银行卡还剩下的余额。</p>
<img src="@source/notes/fe/javascript/JavaScript 基础/md_img/111.gif">
<h4 id="题目提示-2" tabindex="-1"><a class="header-anchor" href="#题目提示-2" aria-hidden="true">#</a> 题目提示</h4>
<ul>
<li>
<p>思路：</p>
<p>1.我们需要5个变量：银行卡总额、水费、电费、网费、银行卡余额</p>
<p>2.银行卡余额= 银行卡总额 – 水费 –电费  - 网费</p>
<p>3.第一步准备5个变量接受输入的数据</p>
<p>4.第二步计算银行卡余额</p>
<p>5.第三步页面打印生成表格，里面填充数据即可。</p>
<p>6.当然可以提前把html页面搭好。</p>
</li>
</ul>
<h4 id="代码编写-2" tabindex="-1"><a class="header-anchor" href="#代码编写-2" aria-hidden="true">#</a> 代码编写</h4>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>scipt</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
    <span class="token selector">h2</span> <span class="token punctuation">{</span>
      <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">table</span> <span class="token punctuation">{</span>
      <span class="token property">border-collapse</span><span class="token punctuation">:</span> collapse<span class="token punctuation">;</span>
      <span class="token property">height</span><span class="token punctuation">:</span> 80px<span class="token punctuation">;</span>
      <span class="token property">margin</span><span class="token punctuation">:</span> 0 auto<span class="token punctuation">;</span>
      <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">th</span> <span class="token punctuation">{</span>
      <span class="token property">padding</span><span class="token punctuation">:</span> 5px 30px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">table,
    td,
    th</span> <span class="token punctuation">{</span>
      <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #000<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>scipt</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">></span></span>2020年12月消费支出<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">let</span> total <span class="token operator">=</span> <span class="token operator">+</span><span class="token function">prompt</span><span class="token punctuation">(</span><span class="token string">'请输入银行卡总额'</span><span class="token punctuation">)</span>
    <span class="token keyword">let</span> waterPrice <span class="token operator">=</span> <span class="token operator">+</span><span class="token function">prompt</span><span class="token punctuation">(</span><span class="token string">'请输入水费'</span><span class="token punctuation">)</span>
    <span class="token keyword">let</span> elePrice <span class="token operator">=</span> <span class="token operator">+</span><span class="token function">prompt</span><span class="token punctuation">(</span><span class="token string">'请输入电费'</span><span class="token punctuation">)</span>
    <span class="token keyword">let</span> itPrice <span class="token operator">=</span> <span class="token operator">+</span><span class="token function">prompt</span><span class="token punctuation">(</span><span class="token string">'请输入网费'</span><span class="token punctuation">)</span>
    <span class="token keyword">let</span> balance <span class="token operator">=</span> total <span class="token operator">-</span> waterPrice <span class="token operator">-</span> elePrice <span class="token operator">-</span> itPrice

    document<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">
    &lt;table>
      &lt;tr>
        &lt;th>银行卡余额&lt;/th>
        &lt;th>水费&lt;/th>
        &lt;th>电费&lt;/th>
        &lt;th>网费&lt;/th>
        &lt;th>银行卡余额&lt;/th>
      &lt;/tr>
      &lt;tr>
        &lt;td></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>total<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">元&lt;/td>
        &lt;td></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>waterPrice<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">元&lt;/td>
        &lt;td></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>elePrice<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">元&lt;/td>
        &lt;td></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>itPrice<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">元&lt;/td>
        &lt;td></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>balance<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">元&lt;/td>
      &lt;/tr>
    &lt;/table>
    </span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>
  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="结果演示-2" tabindex="-1"><a class="header-anchor" href="#结果演示-2" aria-hidden="true">#</a> 结果演示</h4>
<p><img src="@source/notes/fe/javascript/JavaScript 基础/md_img/image-20231107104727778.png" alt="image-20231107104727778" loading="lazy"></p>
</div></template>


