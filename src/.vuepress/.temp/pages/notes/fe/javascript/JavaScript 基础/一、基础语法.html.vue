<template><div><h1 id="一、基础语法" tabindex="-1"><a class="header-anchor" href="#一、基础语法" aria-hidden="true">#</a> 一、基础语法</h1>
<h2 id="什么是javascript" tabindex="-1"><a class="header-anchor" href="#什么是javascript" aria-hidden="true">#</a> 什么是JavaScript？</h2>
<p>一种运行在客户端的编程语言，实现人机交互</p>
<h3 id="有什么用" tabindex="-1"><a class="header-anchor" href="#有什么用" aria-hidden="true">#</a> 有什么用？</h3>
<ul>
<li>网页特效（监听用户行为做出反馈）</li>
<li>表单验证（针对表单数据进行判断）</li>
<li>数据交互（获取后端数据渲染到前端）</li>
<li>服务端编程（node.js）</li>
</ul>
<h3 id="有什么" tabindex="-1"><a class="header-anchor" href="#有什么" aria-hidden="true">#</a> 有什么？</h3>
<ul>
<li>ECMAScript</li>
<li>Web APIs: Dom + Bom</li>
</ul>
<h2 id="书写位置" tabindex="-1"><a class="header-anchor" href="#书写位置" aria-hidden="true">#</a> 书写位置</h2>
<ul>
<li>内部</li>
<li>外部</li>
<li>内联</li>
</ul>
<h3 id="内部" tabindex="-1"><a class="header-anchor" href="#内部" aria-hidden="true">#</a> 内部</h3>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  	<span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'内部js'</span><span class="token punctuation">)</span>
  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="外部" tabindex="-1"><a class="header-anchor" href="#外部" aria-hidden="true">#</a> 外部</h3>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>my.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// ./my.js</span>

<span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'Hello, Js'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="内联" tabindex="-1"><a class="header-anchor" href="#内联" aria-hidden="true">#</a> 内联</h3>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token special-attr"><span class="token attr-name">onclick</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value javascript language-javascript"><span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'Hello JS'</span><span class="token punctuation">)</span></span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>
    按钮
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="javascript-输入输出语法" tabindex="-1"><a class="header-anchor" href="#javascript-输入输出语法" aria-hidden="true">#</a> JavaScript 输入输出语法</h2>
<h3 id="输出语法" tabindex="-1"><a class="header-anchor" href="#输出语法" aria-hidden="true">#</a> 输出语法</h3>
<ol>
<li>向 <code v-pre>body</code> 内输出内容</li>
</ol>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  	document<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">'我是div标签'</span><span class="token punctuation">)</span>
  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/notes/fe/javascript/JavaScript 基础/md_img/image-20231106145034867.png" alt="image-20231106145034867" loading="lazy"></p>
<ol start="2">
<li>页面弹出警告对话框</li>
</ol>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  	<span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'弹出内容'</span><span class="token punctuation">)</span>
  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/notes/fe/javascript/JavaScript 基础/md_img/image-20231106145114694.png" alt="image-20231106145114694" loading="lazy"></p>
<ol start="3">
<li>控制台输出</li>
</ol>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'控制台打印'</span><span class="token punctuation">)</span>
  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/notes/fe/javascript/JavaScript 基础/md_img/image-20231106145216989.png" alt="image-20231106145216989" loading="lazy"></p>
<h3 id="输入语法" tabindex="-1"><a class="header-anchor" href="#输入语法" aria-hidden="true">#</a> 输入语法</h3>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  	<span class="token function">prompt</span><span class="token punctuation">(</span><span class="token string">'请输入您的姓名：'</span><span class="token punctuation">)</span>
  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/notes/fe/javascript/JavaScript 基础/md_img/image-20231106145803026.png" alt="image-20231106145803026" loading="lazy"></p>
<div class="hint-container tip">
<p class="hint-container-title">JavaScript 代码执行顺序</p>
<ol>
<li>会按照HTML文档顺序执行代码</li>
<li><code v-pre>alert()</code> 和 <code v-pre>prompt()</code> 会跳过页面渲染先执行</li>
</ol>
</div>
<h2 id="字面量" tabindex="-1"><a class="header-anchor" href="#字面量" aria-hidden="true">#</a> 字面量</h2>
<p>字面量是在计算机中描述  事/物</p>
<p>我们的工资是：<code v-pre>1000</code>，此时 <code v-pre>1000</code> 就是 数字字面量</p>
<p><code v-pre>'你好'</code> 是 字符串字面量</p>
<p><code v-pre>[]</code> 是 数组字面量</p>
<p><code v-pre>{}</code> 是 对象字面量</p>
<h2 id="变量" tabindex="-1"><a class="header-anchor" href="#变量" aria-hidden="true">#</a> 变量</h2>
<p>变量是计算机存储数据的 <strong>“容器”</strong>，就是一个装数据的盒子</p>
<p><img src="@source/notes/fe/javascript/JavaScript 基础/md_img/image-20231106152923665.png" alt="image-20231106152923665" loading="lazy"></p>
<p>其实本质就是程序再内存中申请的一块用来存放数据的小空间</p>
<h3 id="基本使用" tabindex="-1"><a class="header-anchor" href="#基本使用" aria-hidden="true">#</a> 基本使用</h3>
<h4 id="声明变量" tabindex="-1"><a class="header-anchor" href="#声明变量" aria-hidden="true">#</a> 声明变量</h4>
<p><a href="https://zhuanlan.zhihu.com/p/572278327" target="_blank" rel="noopener noreferrer">变量详解<ExternalLinkIcon/></a></p>
<p>在JavaScript中，声明变量的关键字有 <code v-pre>var</code>，<code v-pre>let</code>，声明常量的关键字是<code v-pre>const</code></p>
<h3 id="变量案例-交换变量的值-冒泡排序" tabindex="-1"><a class="header-anchor" href="#变量案例-交换变量的值-冒泡排序" aria-hidden="true">#</a> 变量案例 - 交换变量的值（冒泡排序）</h3>
<h4 id="核心思路" tabindex="-1"><a class="header-anchor" href="#核心思路" aria-hidden="true">#</a> 核心思路</h4>
<p>使用一个临时变量用来做中间存储</p>
<p><img src="@source/notes/fe/javascript/JavaScript 基础/md_img/image-20231106161723041.png" alt="image-20231106161723041" loading="lazy"></p>
<h4 id="步骤" tabindex="-1"><a class="header-anchor" href="#步骤" aria-hidden="true">#</a> 步骤</h4>
<ol>
<li>声明一个临时变量 temp</li>
<li>把 num1 的值赋值给 temp</li>
<li>把 num2 的值赋值给 num1</li>
<li>把 temp 的值给 num2</li>
</ol>
<h4 id="代码编写" tabindex="-1"><a class="header-anchor" href="#代码编写" aria-hidden="true">#</a> 代码编写</h4>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> num1 <span class="token operator">=</span> <span class="token number">10</span>
<span class="token keyword">let</span> num2 <span class="token operator">=</span> <span class="token number">20</span>
<span class="token keyword">let</span> temp <span class="token operator">=</span> num1
num1 <span class="token operator">=</span> num2
num2 <span class="token operator">=</span> temp
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>num1<span class="token punctuation">,</span> num2<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/notes/fe/javascript/JavaScript 基础/md_img/image-20231106161757946.png" alt="image-20231106161757946" loading="lazy"></p>
<h2 id="数组" tabindex="-1"><a class="header-anchor" href="#数组" aria-hidden="true">#</a> 数组</h2>
<h3 id="基本使用-1" tabindex="-1"><a class="header-anchor" href="#基本使用-1" aria-hidden="true">#</a> 基本使用</h3>
<ol>
<li>声明语法</li>
</ol>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> 数组名 <span class="token operator">=</span> <span class="token punctuation">[</span>数据<span class="token number">1</span><span class="token punctuation">,</span> 数据<span class="token number">2</span><span class="token punctuation">,</span> <span class="token operator">...</span><span class="token punctuation">,</span> 数据n<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2">
<li>取值语法</li>
</ol>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> names <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'小明'</span><span class="token punctuation">,</span> <span class="token string">'小刚'</span><span class="token punctuation">,</span> <span class="token string">'小红'</span><span class="token punctuation">]</span>
names<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token comment">// 小明</span>
names<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token comment">// 小刚</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>一些术语：</li>
</ol>
<p><strong>元素：</strong> 数组中保存的每个数据</p>
<p><strong>下标：</strong> 数组中数据的编号</p>
<p><strong>长度：</strong> 数组中数据的个数，通过数组 <code v-pre>length</code> 属性获取</p>
<h2 id="常量" tabindex="-1"><a class="header-anchor" href="#常量" aria-hidden="true">#</a> 常量</h2>
<p>使用 <code v-pre>const</code> 来声明</p>
<h2 id="常量与变量" tabindex="-1"><a class="header-anchor" href="#常量与变量" aria-hidden="true">#</a> 常量与变量</h2>
<p>简单点理解，<code v-pre>var</code> 关键字声明的变量是全局性的，所以现在一般不用了；<code v-pre>let</code> 关键字是块级作用域，声明之后后面还可以赋值；<code v-pre>const</code> 变量基本与 <code v-pre>let</code> 一致，只不过用 <code v-pre>const</code> 声明的是常量，即这个变量不会改变的时候就可以使用 <code v-pre>const</code> 声明，而且 <code v-pre>const</code> 只能在声明的时候赋值，后面不能再被赋值。</p>
<blockquote>
<p><code v-pre>let</code> - 现在实际开发变量声明方式</p>
<p><code v-pre>var</code> - 以前的声明变量的方法，但是会有很多问题</p>
<p><code v-pre>const</code> - 类似于 <code v-pre>let</code> ，但是变量的值无法被修改</p>
</blockquote>
<table>
<thead>
<tr>
<th>区别</th>
<th>var</th>
<th>let</th>
<th>const</th>
</tr>
</thead>
<tbody>
<tr>
<td>是否有块级作用域</td>
<td>❌</td>
<td>✔️</td>
<td>✔️</td>
</tr>
<tr>
<td>是否存在变量提升</td>
<td>✔️</td>
<td>❌</td>
<td>❌</td>
</tr>
<tr>
<td>是否添加全局属性</td>
<td>✔️</td>
<td>❌</td>
<td>❌</td>
</tr>
<tr>
<td>能否重复声明变量</td>
<td>✔️</td>
<td>❌</td>
<td>❌</td>
</tr>
<tr>
<td>是否存在暂时性死区</td>
<td>❌</td>
<td>✔️</td>
<td>✔️</td>
</tr>
<tr>
<td>是否必须设置初始值</td>
<td>❌</td>
<td>❌</td>
<td>✔️</td>
</tr>
<tr>
<td>能否改变指针指向</td>
<td>✔️</td>
<td>✔️</td>
<td>❌</td>
</tr>
</tbody>
</table>
<div class="hint-container tip">
<p class="hint-container-title">建议优先级</p>
<p><code v-pre>const &gt; let &gt; var</code></p>
</div>
<h2 id="数据类型" tabindex="-1"><a class="header-anchor" href="#数据类型" aria-hidden="true">#</a> 数据类型</h2>
<h3 id="基本数据类型" tabindex="-1"><a class="header-anchor" href="#基本数据类型" aria-hidden="true">#</a> 基本数据类型</h3>
<ul>
<li>number 数字型</li>
<li>string 字符串型</li>
<li>boolean 布尔型</li>
<li>undefined 未定义型</li>
<li>null 空类型</li>
</ul>
<h3 id="引用数据类型" tabindex="-1"><a class="header-anchor" href="#引用数据类型" aria-hidden="true">#</a> 引用数据类型</h3>
<ul>
<li>object 对象</li>
</ul>
<h4 id="基本数据类型-数字类型-number" tabindex="-1"><a class="header-anchor" href="#基本数据类型-数字类型-number" aria-hidden="true">#</a> 基本数据类型 - 数字类型(Number)</h4>
<div class="hint-container tip">
<p class="hint-container-title">算术运算符的优先级</p>
<ol>
<li>优先级相同时从左到右执行</li>
<li>乘 = 除 = 取余 &gt; 加 = 减 (先乘除后加减)</li>
<li>使用( )可以提升优先级</li>
</ol>
</div>
<p>NaN 代表一个计算错误。任何对 NaN 的操作都会返回 NaN</p>
<h4 id="基本数据类型-字符串类型-string" tabindex="-1"><a class="header-anchor" href="#基本数据类型-字符串类型-string" aria-hidden="true">#</a> 基本数据类型 - 字符串类型(String)</h4>
<p><strong>注意事项：</strong></p>
<ol>
<li>单引号双引号都行</li>
<li>外双内单或者外单内双</li>
<li>可以使用转义符 <code v-pre>\</code></li>
</ol>
<h5 id="模板字符串" tabindex="-1"><a class="header-anchor" href="#模板字符串" aria-hidden="true">#</a> 模板字符串</h5>
<p>语法：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>document<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">大家好，我叫</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">，今年</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>age<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">岁</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="基本数据类型-布尔类型-boolean" tabindex="-1"><a class="header-anchor" href="#基本数据类型-布尔类型-boolean" aria-hidden="true">#</a> 基本数据类型 - 布尔类型(boolean)</h4>
<p>表示肯定或者否定</p>
<p>肯定是 true ，否定是 false</p>
<h4 id="基本数据类型-未定义类型-undefined" tabindex="-1"><a class="header-anchor" href="#基本数据类型-未定义类型-undefined" aria-hidden="true">#</a> 基本数据类型 - 未定义类型(undefined)</h4>
<p>如果只声明变量不赋值的情况下，一般变量的默认值是 undefined</p>
<h4 id="基本数据类型-null-空类型" tabindex="-1"><a class="header-anchor" href="#基本数据类型-null-空类型" aria-hidden="true">#</a> 基本数据类型 - null (空类型)</h4>
<p>null 和 undefined 最大的区别是null表示赋值了，但是内容为空，undefined表示没有赋值</p>
<p>一般情况下如果有一个变量里面存放一个对象，但是对象没有创建好的情况可以先给一个null</p>
<h3 id="检测数据类型" tabindex="-1"><a class="header-anchor" href="#检测数据类型" aria-hidden="true">#</a> 检测数据类型</h3>
<p>可以使用 <code v-pre>typeof</code> 关键字进行检测</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> age <span class="token operator">=</span> <span class="token number">19</span>
<span class="token keyword">let</span> uname <span class="token operator">=</span> <span class="token string">'张三'</span>
<span class="token keyword">let</span> flag <span class="token operator">=</span> <span class="token boolean">false</span>
<span class="token keyword">let</span> buy

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> age<span class="token punctuation">)</span> <span class="token comment">// number</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> uname<span class="token punctuation">)</span> <span class="token comment">// string</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> flag<span class="token punctuation">)</span> <span class="token comment">// boolean</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> buy<span class="token punctuation">)</span> <span class="token comment">// undefined</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="类型转换" tabindex="-1"><a class="header-anchor" href="#类型转换" aria-hidden="true">#</a> 类型转换</h2>
<p>因为JavaScript是弱数据类型，JavaScript也不知道变量属于哪种数据类型，只有赋值了才能知道。如果这个时候使用了表单、prompt 等获取数据，那么这些数据默认是字符串类型，进行简单的加法运算就相当于把字符串结合起来了。</p>
<p>所以，类型转换其实就是把一种数据类型的变量转换成我们需要的数据类型</p>
<h3 id="隐式转换" tabindex="-1"><a class="header-anchor" href="#隐式转换" aria-hidden="true">#</a> 隐式转换</h3>
<p>系统内部自动转换就是隐式转换</p>
<ul>
<li>
<p>➕ 号两边只要有一个是字符串，都会把另一个转换成字符串</p>
</li>
<li>
<p>除了​ ➕ ，其他的算术运算符都会把数据转成数字类型</p>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">11</span> <span class="token operator">+</span> <span class="token number">11</span><span class="token punctuation">)</span> <span class="token comment">// 22</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'11'</span> <span class="token operator">+</span> <span class="token number">11</span><span class="token punctuation">)</span> <span class="token comment">// 1111</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">11</span> <span class="token operator">-</span> <span class="token number">11</span><span class="token punctuation">)</span> <span class="token comment">// 0</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'11'</span> <span class="token operator">+</span> <span class="token number">11</span><span class="token punctuation">)</span> <span class="token comment">// 0</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">*</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">// 1</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'1'</span> <span class="token operator">*</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">// 1</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> <span class="token string">'123'</span><span class="token punctuation">)</span> <span class="token comment">// string</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> <span class="token operator">+</span> <span class="token string">'123'</span><span class="token punctuation">)</span> <span class="token comment">// number</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token operator">+</span><span class="token string">'11'</span> <span class="token operator">+</span> <span class="token number">11</span><span class="token punctuation">)</span> <span class="token comment">// 22</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="显示转换" tabindex="-1"><a class="header-anchor" href="#显示转换" aria-hidden="true">#</a> 显示转换</h3>
<p>隐式转换大多数时候靠的是经验，经验这种东西就很容易出错，所以就有了显示转换，直接告诉代码你要转成什么类型</p>
<h4 id="转成数字型" tabindex="-1"><a class="header-anchor" href="#转成数字型" aria-hidden="true">#</a> 转成数字型</h4>
<ul>
<li>Number(数据)</li>
<li>parseInt(数据)：只保留整数</li>
<li>parseFloat(数据)：可以保留小数</li>
</ul>
<h4 id="转成字符型" tabindex="-1"><a class="header-anchor" href="#转成字符型" aria-hidden="true">#</a> 转成字符型</h4>
<ul>
<li>String(数据)</li>
<li>变量.toString (进制)</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 数字型</span>
<span class="token keyword">let</span> value
value <span class="token operator">=</span> <span class="token function">Number</span><span class="token punctuation">(</span><span class="token string">'20'</span><span class="token punctuation">)</span> <span class="token comment">// 20</span>
value <span class="token operator">=</span> <span class="token function">parseInt</span><span class="token punctuation">(</span><span class="token string">'50.2314'</span><span class="token punctuation">)</span> <span class="token comment">// 50</span>
value <span class="token operator">=</span> <span class="token function">parseFloat</span><span class="token punctuation">(</span><span class="token string">'50.34'</span><span class="token punctuation">)</span> <span class="token comment">// 50.34</span>

<span class="token comment">// 字符型</span>
value <span class="token operator">=</span> <span class="token function">String</span><span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token comment">// '3'</span>
value <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// '20'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="用户订单信息案例" tabindex="-1"><a class="header-anchor" href="#用户订单信息案例" aria-hidden="true">#</a> 用户订单信息案例</h2>
<h3 id="需求" tabindex="-1"><a class="header-anchor" href="#需求" aria-hidden="true">#</a> 需求</h3>
<p>用户输入商品价格和商品数量，以及收货地址，可以自动打印信息</p>
<h3 id="代码编写-1" tabindex="-1"><a class="header-anchor" href="#代码编写-1" aria-hidden="true">#</a> 代码编写</h3>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
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
      <span class="token property">padding</span><span class="token punctuation">:</span> 5px 30px
    <span class="token punctuation">}</span>
    <span class="token selector">table,
    th,
    td</span> <span class="token punctuation">{</span>
      <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #000
    <span class="token punctuation">}</span>
  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">></span></span>
    订单确认
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  	<span class="token keyword">let</span> price <span class="token operator">=</span> <span class="token operator">+</span><span class="token function">prompt</span><span class="token punctuation">(</span><span class="token string">'请输入商品价格'</span><span class="token punctuation">)</span>
    <span class="token keyword">let</span> num <span class="token operator">=</span> <span class="token operator">+</span><span class="token function">prompt</span><span class="token punctuation">(</span><span class="token string">'请输入商品数量'</span><span class="token punctuation">)</span>
    <span class="token keyword">let</span> address <span class="token operator">=</span> <span class="token function">prompt</span><span class="token punctuation">(</span><span class="token string">'请输入收货地址'</span><span class="token punctuation">)</span>
    
    <span class="token keyword">let</span> total <span class="token operator">=</span> price <span class="token operator">*</span> num
    
    document<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">
    &lt;table>
      &lt;tr>
        &lt;th>商品名称&lt;/th>
        &lt;th>商品价格&lt;/th>
        &lt;th>商品数量&lt;/th>
        &lt;th>总价&lt;/th>
        &lt;th>收货地址&lt;/th>
      &lt;/tr>
      &lt;tr>
        &lt;td>小米手机青春PLUS&lt;/td>
        &lt;td></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>price<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">元&lt;/td>
        &lt;td></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>num<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/td>
        &lt;td></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>total<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">元&lt;/td>
        &lt;td></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>adress<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/td>
      &lt;/tr>
    &lt;/table>
		</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>
  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/notes/fe/javascript/JavaScript 基础/md_img/image-20231107093028605.png" alt="image-20231107093028605" loading="lazy"></p>
</div></template>


