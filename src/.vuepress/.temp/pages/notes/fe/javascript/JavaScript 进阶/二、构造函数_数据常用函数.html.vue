<template><div><h1 id="二、构造函数-数据常用函数" tabindex="-1"><a class="header-anchor" href="#二、构造函数-数据常用函数" aria-hidden="true">#</a> 二、构造函数&amp;数据常用函数</h1>
<h2 id="深入对象" tabindex="-1"><a class="header-anchor" href="#深入对象" aria-hidden="true">#</a> 深入对象</h2>
<h3 id="创建对象三种方法" tabindex="-1"><a class="header-anchor" href="#创建对象三种方法" aria-hidden="true">#</a> 创建对象三种方法</h3>
<ol>
<li>利用对象字面量创建对象</li>
</ol>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> o <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'zs'</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>利用 <code v-pre>new Object</code> 创建对象</li>
</ol>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> o <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'zs'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>o<span class="token punctuation">)</span> <span class="token comment">// {name: 'zs'}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>利用构造函数创建对象</li>
</ol>
<h3 id="构造函数" tabindex="-1"><a class="header-anchor" href="#构造函数" aria-hidden="true">#</a> 构造函数</h3>
<p>一种特殊的函数，主要用来初始化对象</p>
<p>设想一个这样的场景，我们需要创建几个对象，但是对象里面的属性都是一样的，如下：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> Peppa <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'佩奇'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token string">'6'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">gender</span><span class="token operator">:</span> <span class="token string">'女'</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> George <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'乔治'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token string">'3'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">gender</span><span class="token operator">:</span> <span class="token string">'男'</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> Mum <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'猪妈妈'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token string">'36'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">gender</span><span class="token operator">:</span> <span class="token string">'女'</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> Dad <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'猪爸爸'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token string">'46'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">gender</span><span class="token operator">:</span> <span class="token string">'男'</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样创建对象实在是太麻烦了，这个时候我们就可以把这四个对象公共的属性抽取出来，封装到一个函数里面去，这个时候，这个函数就是<strong>构造函数</strong>了。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Pig</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> age<span class="token punctuation">,</span> gender</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 不一定是this.name, 也可以是this.uname, 等号后面的name是形参</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
  <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age
  <span class="token keyword">this</span><span class="token punctuation">.</span>gender <span class="token operator">=</span> gender
<span class="token punctuation">}</span>

<span class="token keyword">const</span> Peppa <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Pig</span><span class="token punctuation">(</span><span class="token string">'佩奇'</span><span class="token punctuation">,</span> <span class="token string">'6'</span><span class="token punctuation">,</span> <span class="token string">'女'</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> George <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Pig</span><span class="token punctuation">(</span><span class="token string">'乔治'</span><span class="token punctuation">,</span> <span class="token string">'3'</span><span class="token punctuation">,</span> <span class="token string">'男'</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> Mum <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Pig</span><span class="token punctuation">(</span><span class="token string">'猪妈妈'</span><span class="token punctuation">,</span> <span class="token string">'36'</span><span class="token punctuation">,</span> <span class="token string">'女'</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> Dad <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Pig</span><span class="token punctuation">(</span><span class="token string">'猪爸爸'</span><span class="token punctuation">,</span> <span class="token string">'46'</span><span class="token punctuation">,</span> <span class="token string">'男'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样就可以更加简洁的创建对象了。</p>
<div class="hint-container tip">
<p class="hint-container-title">要想使用构造函数需要注意一下</p>
<ol>
<li>构造函数，本质也是一个函数，函数能用的，构造函数也能用</li>
<li><code v-pre>this.name</code> 只是一个对象的 <code v-pre>name</code> 属性，<code v-pre>this</code> 指向的创建的对象，可以理解为 <code v-pre>obj</code></li>
<li>它的命名要以大写字母开头</li>
<li>只能由 <code v-pre>new</code> 操作符来执行</li>
<li>没有参数的时候可以省略 <code v-pre>()</code></li>
<li>构造函数内部不需要写 <code v-pre>return</code> ，写了也没用，返回值就是一个新创建的对象</li>
<li>本质上，<code v-pre>new Object() </code> 、 <code v-pre>new Date()</code> 也是实例化的构造函数</li>
</ol>
</div>
<h4 id="实例化执行过程" tabindex="-1"><a class="header-anchor" href="#实例化执行过程" aria-hidden="true">#</a> 实例化执行过程</h4>
<ol>
<li>单单创建一个构造函数是没有创建对象的，一旦<code v-pre>new</code> 了以后，就立马创建新的空对象</li>
<li>此时构造函数<code v-pre>this</code> 指向新对象</li>
<li>执行构造函数代码，修改 <code v-pre>this</code> ，添加新的属性</li>
<li>返回新对象</li>
</ol>
<h3 id="实例成员-静态成员" tabindex="-1"><a class="header-anchor" href="#实例成员-静态成员" aria-hidden="true">#</a> 实例成员 &amp; 静态成员</h3>
<p><strong>实例对象：</strong></p>
<p>实例对象中的属性和方法称为实例成员（实例属性和实例方法）</p>
<p>也就是说，实例成员 = 实例属性 + 实例方法</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Pig</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
<span class="token punctuation">}</span>

<span class="token keyword">const</span> peiqi <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Pig</span><span class="token punctuation">(</span><span class="token string">'佩奇'</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> qiaozhi <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Pig</span><span class="token punctuation">(</span><span class="token string">'乔治'</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>peiqi<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Pig { name: '佩奇' }</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>qiaozhi<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Pig { name: '乔治' }</span>
<span class="token comment">// 实例属性</span>
peiqi<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">'小猪佩奇'</span>
<span class="token comment">// 实例方法</span>
peiqi<span class="token punctuation">.</span><span class="token function-variable function">sayHi</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'hi~~~'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>peiqi<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Pig { name: '小猪佩奇', sayHi: [Function (anonymous)] }</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>peiqi <span class="token operator">===</span> qiaozhi<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>静态成员：</strong></p>
<p>构造函数的属性和方法被称为静态成员（静态属性和静态方法）</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Pig</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
<span class="token punctuation">}</span>

<span class="token comment">// 静态属性</span>
Pig<span class="token punctuation">.</span>eyes <span class="token operator">=</span> <span class="token number">2</span>
<span class="token comment">// 静态方法</span>
Pig<span class="token punctuation">.</span><span class="token function-variable function">sayHi</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
Pig<span class="token punctuation">.</span><span class="token function">sayHi</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// [Function: Pig] { eyes: 2, sayHi: [Function (anonymous)] }</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Pig<span class="token punctuation">.</span>eyes<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h4>
<p>对比两个其实可以看到，实例对象其实就相当于需要 <code v-pre>new</code> 一个常量，然后通过常量再去 <code v-pre>.属性</code> 或者 <code v-pre>.方法</code> ；而静态成员则是直接用 <code v-pre>函数.</code> 的方式去添加属性或者方法</p>
<h2 id="内置构造函数" tabindex="-1"><a class="header-anchor" href="#内置构造函数" aria-hidden="true">#</a> 内置构造函数</h2>
<p>一般来说，只有对象才有属性和方法，但是现在有这么一个情况</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> str <span class="token operator">=</span> <span class="token string">'zs'</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token comment">// 2</span>

<span class="token keyword">const</span> num <span class="token operator">=</span> <span class="token number">12</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>num<span class="token punctuation">.</span><span class="token function">toFixed</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 12.00</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>简单数据类型也有属性和方法？似乎不太符合常理</p>
<p>但其实JS在底层进行了一个包装</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> str <span class="token operator">=</span> <span class="token string">'zs'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>其实相当于把简单数据类型包装成了对象，那是对象就可以使用属性和方法了。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> str <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span><span class="token string">'pink'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这样看来似乎就合理多了，只不过平时都不会这样写，JS已经在底层帮忙写了。</p>
<p>那么，JS内置的构造函数有两种，<strong>引用类型</strong>和<strong>包装类型</strong></p>
<p><strong>引用类型：</strong></p>
<p>Object, Array, RegExp, Date 等</p>
<p><strong>包装类型：</strong></p>
<p>String, Number, Boolean 等</p>
<h3 id="object" tabindex="-1"><a class="header-anchor" href="#object" aria-hidden="true">#</a> Object</h3>
<p>一般用于创建普通对象</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> user <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">(</span>
	<span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'张三'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">15</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当然，这样弄实在是太麻烦了，所以一般都是直接简写成</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> user <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'张三'</span><span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">15</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Object 有三个常用的静态方法</p>
<h4 id="获取对象中的所有属性-键" tabindex="-1"><a class="header-anchor" href="#获取对象中的所有属性-键" aria-hidden="true">#</a> 获取对象中的所有属性（键）</h4>
<p>使用方法：</p>
<p><code v-pre>Objcet.keys</code></p>
<p>语法：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> o <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">uname</span><span class="token operator">:</span> <span class="token string">'zs'</span><span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">17</span> <span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>o<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [ 'uname', 'age' ]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>返回的是一个数组</p>
<h4 id="获取对象中的所有属性值" tabindex="-1"><a class="header-anchor" href="#获取对象中的所有属性值" aria-hidden="true">#</a> 获取对象中的所有属性值</h4>
<p>使用方法：</p>
<p><code v-pre>Object.values</code></p>
<p>语法：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> o <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">uname</span><span class="token operator">:</span> <span class="token string">'zs'</span><span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">17</span> <span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">values</span><span class="token punctuation">(</span>o<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [ 'zs', 17 ]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>返回一个数组</p>
<h4 id="拷贝对象" tabindex="-1"><a class="header-anchor" href="#拷贝对象" aria-hidden="true">#</a> 拷贝对象</h4>
<p>以前加属性只能通过追加的形式，现在可以直接通过拷贝的方式加上需要的属性</p>
<p>使用方法：</p>
<p><code v-pre>Object.assign</code></p>
<p>语法：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> o <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">uname</span><span class="token operator">:</span> <span class="token string">'zs'</span><span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">17</span> <span class="token punctuation">}</span>
<span class="token keyword">const</span> oo <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span>oo<span class="token punctuation">,</span> o<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>oo<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// { uname: 'zs', age: 17 }</span>

Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span>o<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">gender</span><span class="token operator">:</span> <span class="token string">'男'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>o<span class="token punctuation">)</span> <span class="token comment">// { uname: 'zs', age: 17, gender: '男' }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="array" tabindex="-1"><a class="header-anchor" href="#array" aria-hidden="true">#</a> Array</h3>
<p>一般用于创建数组</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span> <span class="token comment">// [3, 5]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>当然，一般也不会这样去创建数组，都是直接创建</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="foreach" tabindex="-1"><a class="header-anchor" href="#foreach" aria-hidden="true">#</a> forEach</h4>
<p>用于遍历数组</p>
<p><strong>语法：</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'a'</span><span class="token punctuation">,</span> <span class="token string">'b'</span><span class="token punctuation">,</span> <span class="token string">'c'</span><span class="token punctuation">]</span>
arr<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">e</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// a  b  c</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="filter" tabindex="-1"><a class="header-anchor" href="#filter" aria-hidden="true">#</a> filter</h4>
<p>用于筛选数组元素，并生成新数组</p>
<p><strong>语法：</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> words <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'spray'</span><span class="token punctuation">,</span> <span class="token string">'limit'</span><span class="token punctuation">,</span> <span class="token string">'elite'</span><span class="token punctuation">,</span> <span class="token string">'exuberant'</span><span class="token punctuation">,</span> <span class="token string">'destruction'</span><span class="token punctuation">,</span> <span class="token string">'present'</span><span class="token punctuation">]</span>
<span class="token keyword">const</span> result <span class="token operator">=</span> words<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token parameter">word</span> <span class="token operator">=></span> word<span class="token punctuation">.</span>length <span class="token operator">></span> <span class="token number">6</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [ 'exuberant', 'destruction', 'present' ]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="map" tabindex="-1"><a class="header-anchor" href="#map" aria-hidden="true">#</a> map</h4>
<p>用于迭代数组，返回新数组</p>
<p><strong>语法：</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">]</span>
<span class="token keyword">let</span> modifiedArr <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> e <span class="token operator">*</span> <span class="token number">3</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>modifiedArr<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [ 9, 12, 15, 18, 21 ]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="reduce" tabindex="-1"><a class="header-anchor" href="#reduce" aria-hidden="true">#</a> reduce</h4>
<p>用于求和等，返回函数累计处理的结果</p>
<p><strong>语法：</strong></p>
<p><code v-pre>arr.reduce(function(上一次值, 当前值 [,索引号][,源数组]) {}, 起始值)</code></p>
<p>事实上，有初始值和没有初始值的原理其实也不太相同</p>
<p>没有初始值的情况：</p>
<p>示例：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">]</span>
<span class="token comment">// 没有初始值</span>
<span class="token keyword">const</span> total <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">prev<span class="token punctuation">,</span> current</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> prev <span class="token operator">+</span> current
<span class="token punctuation">}</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>total<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 14</span>

<span class="token comment">// 具体原理</span>
<span class="token comment">// 上一次值    当前值    返回值  （第一次循环）</span>
<span class="token comment">//    1          5        6</span>
<span class="token comment">// 上一次值    当前值    返回值  （第二次循环）</span>
<span class="token comment">//    6          8        14</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>有初始值的情况：</p>
<p>示例：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">]</span>
<span class="token comment">// 有初始值</span>
<span class="token keyword">const</span> total <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">prev<span class="token punctuation">,</span> current</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> prev <span class="token operator">+</span> current
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>total<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 24</span>

<span class="token comment">// 上一次值    当前值    返回值  （第一次循环）</span>
<span class="token comment">//    10         1        11</span>
<span class="token comment">// 上一次值    当前值    返回值  （第二次循环）</span>
<span class="token comment">//    11         5        16</span>
<span class="token comment">// 上一次值    当前值    返回值  （第三次循环）</span>
<span class="token comment">//    16         8        24</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当然，也可以用箭头函数，更加简单</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> total <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">prev<span class="token punctuation">,</span> current</span><span class="token punctuation">)</span> <span class="token operator">=></span> prev <span class="token operator">+</span> current<span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>total<span class="token punctuation">)</span> <span class="token comment">// 24</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="join" tabindex="-1"><a class="header-anchor" href="#join" aria-hidden="true">#</a> join</h4>
<p>用于数组元素拼接为字符串，返回字符串</p>
<p>示例：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> elements <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'Fire'</span><span class="token punctuation">,</span> <span class="token string">'Air'</span><span class="token punctuation">,</span> <span class="token string">'Water'</span><span class="token punctuation">]</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>elements<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Fire,Air,Water</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>elements<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// FireAirWater</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>elements<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">'-'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Fire-Air-Water</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="find" tabindex="-1"><a class="header-anchor" href="#find" aria-hidden="true">#</a> find</h4>
<p>查找元素， 返回符合测试条件的第一个数组元素值， 如果没有符合条件的则返回undefined</p>
<p>示例：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">130</span><span class="token punctuation">,</span> <span class="token number">44</span><span class="token punctuation">]</span>
<span class="token keyword">const</span> found <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token parameter">e</span> <span class="token operator">=></span> e <span class="token operator">></span> <span class="token number">10</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>found<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 12</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="every" tabindex="-1"><a class="header-anchor" href="#every" aria-hidden="true">#</a> every</h4>
<p>检测数组所有元素是否都符合指定条件，如果所有元素都通过检测返回true,否则返回false</p>
<p>示例：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">isBelowThreshold</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">currentValue</span><span class="token punctuation">)</span> <span class="token operator">=></span> currentValue <span class="token operator">&lt;</span> <span class="token number">40</span>
<span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">39</span><span class="token punctuation">,</span> <span class="token number">29</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">13</span><span class="token punctuation">]</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">.</span><span class="token function">every</span><span class="token punctuation">(</span>isBelowThreshold<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="伪数组转换为真数组" tabindex="-1"><a class="header-anchor" href="#伪数组转换为真数组" aria-hidden="true">#</a> 伪数组转换为真数组</h4>
<p><strong>语法：</strong></p>
<p><code v-pre>Array.from()</code></p>
<p>示例：</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">const</span> lis <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelectorAll</span><span class="token punctuation">(</span><span class="token string">'ul li'</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> liss <span class="token operator">=</span> Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span>lis<span class="token punctuation">)</span>
    liss<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>liss<span class="token punctuation">)</span><span class="token punctuation">;</span>
  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="string" tabindex="-1"><a class="header-anchor" href="#string" aria-hidden="true">#</a> String</h3>
<h4 id="length" tabindex="-1"><a class="header-anchor" href="#length" aria-hidden="true">#</a> length</h4>
<p>用来获取字符串的度长</p>
<p>示例：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> str <span class="token operator">=</span> <span class="token string">'zs'</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token comment">// 2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="split-分隔符" tabindex="-1"><a class="header-anchor" href="#split-分隔符" aria-hidden="true">#</a> split('分隔符')</h4>
<p>把字符串转换为数组</p>
<p>示例：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> str <span class="token operator">=</span> <span class="token string">'black, white'</span>
<span class="token keyword">const</span> arr <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">','</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [ 'black', ' white' ]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="substring-需要截取的第一个字符的索引-结束的索引号" tabindex="-1"><a class="header-anchor" href="#substring-需要截取的第一个字符的索引-结束的索引号" aria-hidden="true">#</a> substring(需要截取的第一个字符的索引[,结束的索引号])</h4>
<p>用于字符串截取</p>
<p>示例：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> str <span class="token operator">=</span> <span class="token string">'今天星期一'</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 期一</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 期</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="startswith-检测字符串-检测位置索引号" tabindex="-1"><a class="header-anchor" href="#startswith-检测字符串-检测位置索引号" aria-hidden="true">#</a> startsWith(检测字符串[, 检测位置索引号])</h4>
<p>检测是否以某字符串开头</p>
<p>示例：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> str <span class="token operator">=</span> <span class="token string">'正在编程中'</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">startsWith</span><span class="token punctuation">(</span><span class="token string">'正'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">startsWith</span><span class="token punctuation">(</span><span class="token string">'在'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="includes-搜索的字符串-检测位置索引号" tabindex="-1"><a class="header-anchor" href="#includes-搜索的字符串-检测位置索引号" aria-hidden="true">#</a> includes(搜索的字符串[, 检测位置索引号])</h4>
<p>判断一个字符串是否包含在另一个字符串中，根据情况返回 true 或 false</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> str <span class="token operator">=</span> <span class="token string">'真的有包含吗'</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token string">'真的'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token string">'真的'</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="number" tabindex="-1"><a class="header-anchor" href="#number" aria-hidden="true">#</a> Number</h3>
<p>一般用于创建数值</p>
<h4 id="tofixed" tabindex="-1"><a class="header-anchor" href="#tofixed" aria-hidden="true">#</a> toFixed()</h4>
<p>设置保留小数位的长度</p>
<p>示例：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> num <span class="token operator">=</span> <span class="token number">10.123456</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>num<span class="token punctuation">.</span><span class="token function">toFixed</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 10.12</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="综合案例" tabindex="-1"><a class="header-anchor" href="#综合案例" aria-hidden="true">#</a> 综合案例</h2>
<h3 id="需求" tabindex="-1"><a class="header-anchor" href="#需求" aria-hidden="true">#</a> 需求</h3>
<p>根据后台提供的数据，渲染购物车页面</p>
<h3 id="分析业务" tabindex="-1"><a class="header-anchor" href="#分析业务" aria-hidden="true">#</a> 分析业务</h3>
<ol>
<li>渲染图片、标题、颜色、价格、赠品等数据</li>
<li>单价和小计模块</li>
<li>总价模块</li>
</ol>
<h3 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h3>
<ol>
<li>静态结构</li>
</ol>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
    <span class="token selector">*</span> <span class="token punctuation">{</span>
      <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
      <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
      <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">.list</span> <span class="token punctuation">{</span>
      <span class="token property">width</span><span class="token punctuation">:</span> 990px<span class="token punctuation">;</span>
      <span class="token property">margin</span><span class="token punctuation">:</span> 100px auto 0<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">.item</span> <span class="token punctuation">{</span>
      <span class="token property">padding</span><span class="token punctuation">:</span> 15px<span class="token punctuation">;</span>
      <span class="token property">transition</span><span class="token punctuation">:</span> all .5s<span class="token punctuation">;</span>
      <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
      <span class="token property">border-top</span><span class="token punctuation">:</span> 1px solid #e4e4e4<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">.item:nth-child(4n)</span> <span class="token punctuation">{</span>
      <span class="token property">margin-left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">.item:hover</span> <span class="token punctuation">{</span>
      <span class="token property">cursor</span><span class="token punctuation">:</span> pointer<span class="token punctuation">;</span>
      <span class="token property">background-color</span><span class="token punctuation">:</span> #f5f5f5<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">.item img</span> <span class="token punctuation">{</span>
      <span class="token property">width</span><span class="token punctuation">:</span> 80px<span class="token punctuation">;</span>
      <span class="token property">height</span><span class="token punctuation">:</span> 80px<span class="token punctuation">;</span>
      <span class="token property">margin-right</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">.item .name</span> <span class="token punctuation">{</span>
      <span class="token property">font-size</span><span class="token punctuation">:</span> 18px<span class="token punctuation">;</span>
      <span class="token property">margin-right</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
      <span class="token property">color</span><span class="token punctuation">:</span> #333<span class="token punctuation">;</span>
      <span class="token property">flex</span><span class="token punctuation">:</span> 2<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">.item .name .tag</span> <span class="token punctuation">{</span>
      <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
      <span class="token property">padding</span><span class="token punctuation">:</span> 2px<span class="token punctuation">;</span>
      <span class="token property">font-size</span><span class="token punctuation">:</span> 12px<span class="token punctuation">;</span>
      <span class="token property">color</span><span class="token punctuation">:</span> #999<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">.item .price,
    .item .sub-total</span> <span class="token punctuation">{</span>
      <span class="token property">font-size</span><span class="token punctuation">:</span> 18px<span class="token punctuation">;</span>
      <span class="token property">color</span><span class="token punctuation">:</span> firebrick<span class="token punctuation">;</span>
      <span class="token property">flex</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">.item .price::before,
    .item .sub-total::before,
    .amount::before</span> <span class="token punctuation">{</span>
      <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">"¥"</span><span class="token punctuation">;</span>
      <span class="token property">font-size</span><span class="token punctuation">:</span> 12px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">.item .spec</span> <span class="token punctuation">{</span>
      <span class="token property">flex</span><span class="token punctuation">:</span> 2<span class="token punctuation">;</span>
      <span class="token property">color</span><span class="token punctuation">:</span> #888<span class="token punctuation">;</span>
      <span class="token property">font-size</span><span class="token punctuation">:</span> 14px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">.item .count</span> <span class="token punctuation">{</span>
      <span class="token property">flex</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
      <span class="token property">color</span><span class="token punctuation">:</span> #aaa<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">.total</span> <span class="token punctuation">{</span>
      <span class="token property">width</span><span class="token punctuation">:</span> 990px<span class="token punctuation">;</span>
      <span class="token property">margin</span><span class="token punctuation">:</span> 0 auto<span class="token punctuation">;</span>
      <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
      <span class="token property">justify-content</span><span class="token punctuation">:</span> flex-end<span class="token punctuation">;</span>
      <span class="token property">border-top</span><span class="token punctuation">:</span> 1px solid #e4e4e4<span class="token punctuation">;</span>
      <span class="token property">padding</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">.total .amount</span> <span class="token punctuation">{</span>
      <span class="token property">font-size</span><span class="token punctuation">:</span> 18px<span class="token punctuation">;</span>
      <span class="token property">color</span><span class="token punctuation">:</span> firebrick<span class="token punctuation">;</span>
      <span class="token property">font-weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span>
      <span class="token property">margin-right</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>list<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token comment">&lt;!-- &lt;div class="item">
      &lt;img src="https://yanxuan-item.nosdn.127.net/84a59ff9c58a77032564e61f716846d6.jpg" alt="">
      &lt;p class="name">称心如意手摇咖啡磨豆机咖啡豆研磨机 &lt;span class="tag">【赠品】10优惠券&lt;/span>&lt;/p>
      &lt;p class="spec">白色/10寸&lt;/p>
      &lt;p class="price">289.90&lt;/p>
      &lt;p class="count">x2&lt;/p>
      &lt;p class="sub-total">579.80&lt;/p>
    &lt;/div> --></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>total<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>合计：<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>amount<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>1000.00<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">const</span> goodsList <span class="token operator">=</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">'4001172'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'称心如意手摇咖啡磨豆机咖啡豆研磨机'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">price</span><span class="token operator">:</span> <span class="token number">289.9</span><span class="token punctuation">,</span>
        <span class="token literal-property property">picture</span><span class="token operator">:</span> <span class="token string">'https://yanxuan-item.nosdn.127.net/84a59ff9c58a77032564e61f716846d6.jpg'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
        <span class="token literal-property property">spec</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">'白色'</span> <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">'4001009'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'竹制干泡茶盘正方形沥水茶台品茶盘'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">price</span><span class="token operator">:</span> <span class="token number">109.8</span><span class="token punctuation">,</span>
        <span class="token literal-property property">picture</span><span class="token operator">:</span> <span class="token string">'https://yanxuan-item.nosdn.127.net/2d942d6bc94f1e230763e1a5a3b379e1.png'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
        <span class="token literal-property property">spec</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">size</span><span class="token operator">:</span> <span class="token string">'40cm*40cm'</span><span class="token punctuation">,</span> <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">'黑色'</span> <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">'4001874'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'古法温酒汝瓷酒具套装白酒杯莲花温酒器'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">price</span><span class="token operator">:</span> <span class="token number">488</span><span class="token punctuation">,</span>
        <span class="token literal-property property">picture</span><span class="token operator">:</span> <span class="token string">'https://yanxuan-item.nosdn.127.net/44e51622800e4fceb6bee8e616da85fd.png'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token literal-property property">spec</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">'青色'</span><span class="token punctuation">,</span> <span class="token literal-property property">sum</span><span class="token operator">:</span> <span class="token string">'一大四小'</span> <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">'4001649'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'大师监制龙泉青瓷茶叶罐'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">price</span><span class="token operator">:</span> <span class="token number">139</span><span class="token punctuation">,</span>
        <span class="token literal-property property">picture</span><span class="token operator">:</span> <span class="token string">'https://yanxuan-item.nosdn.127.net/4356c9fc150753775fe56b465314f1eb.png'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token literal-property property">spec</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">size</span><span class="token operator">:</span> <span class="token string">'小号'</span><span class="token punctuation">,</span> <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">'紫色'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">gift</span><span class="token operator">:</span> <span class="token string">'50g茶叶,清洗球,宝马,奔驰'</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>填写逻辑</li>
</ol>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
	document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'.list'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> goodsList<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">item</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> picture<span class="token punctuation">,</span> name<span class="token punctuation">,</span> count<span class="token punctuation">,</span> price<span class="token punctuation">,</span> spec<span class="token punctuation">,</span> gift <span class="token punctuation">}</span> <span class="token operator">=</span> item
    <span class="token keyword">const</span> text <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">value</span><span class="token punctuation">(</span>spec<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">'/'</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> str <span class="token operator">=</span> gift <span class="token operator">?</span> gift<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">','</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">item</span> <span class="token operator">=></span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">&lt;span class="tag">【赠品】</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>item<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token string">''</span>
    <span class="token comment">// *100 /100 是因为精度问题，如果直接相乘后面会出现精度的问题</span>
    <span class="token keyword">const</span> subTotal <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>price <span class="token operator">*</span> <span class="token number">100</span> <span class="token operator">*</span> count<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toFixed</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">
      &lt;div class="item">
        &lt;img src=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>picture<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> alt="">
        &lt;p class="name"></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>str<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> &lt;/p>
        &lt;p class="spec"></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>text<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/p>
        &lt;p class="price"></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>price<span class="token punctuation">.</span><span class="token function">toFixed</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/p>
        &lt;p class="count">x</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>count<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/p>
        &lt;p class="sub-total"></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>subTotal<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/p>
      &lt;/div>
    </span><span class="token template-punctuation string">`</span></span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span>
  
  <span class="token keyword">const</span> total <span class="token operator">=</span> goodsList<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">prev<span class="token punctuation">,</span> item</span><span class="token punctuation">)</span> <span class="token operator">=></span> prev <span class="token operator">+</span> <span class="token punctuation">(</span>item<span class="token punctuation">.</span>price <span class="token operator">*</span> <span class="token number">100</span> <span class="token operator">*</span> item<span class="token punctuation">.</span>count<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
  document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'.amount'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> total<span class="token punctuation">.</span><span class="token function">toFixed</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/notes/fe/javascript/JavaScript 进阶/md_img/image-20231207161534187.png" alt="image-20231207161534187" loading="lazy"></p>
</div></template>


