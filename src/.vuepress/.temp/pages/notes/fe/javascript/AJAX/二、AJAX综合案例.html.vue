<template><div><h1 id="二、ajax综合案例" tabindex="-1"><a class="header-anchor" href="#二、ajax综合案例" aria-hidden="true">#</a> 二、AJAX综合案例</h1>
<h2 id="案例-图书管理" tabindex="-1"><a class="header-anchor" href="#案例-图书管理" aria-hidden="true">#</a> 案例 - 图书管理</h2>
<h3 id="步骤" tabindex="-1"><a class="header-anchor" href="#步骤" aria-hidden="true">#</a> 步骤</h3>
<ol>
<li>Bootstrap 弹框</li>
<li>渲染列表（查）</li>
<li>新增图书（增）</li>
<li>删除图书（删）</li>
<li>编辑图书（改）</li>
</ol>
<h3 id="bootstrap-弹框" tabindex="-1"><a class="header-anchor" href="#bootstrap-弹框" aria-hidden="true">#</a> Bootstrap 弹框</h3>
<h4 id="功能" tabindex="-1"><a class="header-anchor" href="#功能" aria-hidden="true">#</a> 功能</h4>
<p>不离开当前页面，显示单独内容，供用户操作</p>
<h4 id="通过属性控制" tabindex="-1"><a class="header-anchor" href="#通过属性控制" aria-hidden="true">#</a> 通过属性控制</h4>
<h5 id="步骤-1" tabindex="-1"><a class="header-anchor" href="#步骤-1" aria-hidden="true">#</a> 步骤</h5>
<ol>
<li>引入 bootstrap.css 和 bootstrap.js</li>
<li>准备弹框标签，确认结构</li>
<li>通过自定义属性，控制弹框的显示和隐藏</li>
</ol>
<h5 id="代码实现" tabindex="-1"><a class="header-anchor" href="#代码实现" aria-hidden="true">#</a> 代码实现</h5>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
  <span class="token comment">&lt;!-- 1. 引入 bootstrap.css --></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css<span class="token punctuation">"</span></span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>stylesheet<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
  <span class="token comment">&lt;!-- 3. 通过自定义属性，控制弹框的显示和隐藏 --></span>
  <span class="token comment">&lt;!-- data-bs-toggle="modal" 用于触发模态框的显示与隐藏 --></span>
  <span class="token comment">&lt;!-- data-bs-target=".my-box" 通过赋值控制器元素的属性绑定所需要显示的弹框 --></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>button<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>btn btn-primary<span class="token punctuation">"</span></span> <span class="token attr-name">data-bs-toggle</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>modal<span class="token punctuation">"</span></span> <span class="token attr-name">data-bs-target</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>.my-box<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    显示弹框
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
  
	<span class="token comment">&lt;!-- 2. 准备弹框标签（上网复制） --></span>  
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>modal my-box<span class="token punctuation">"</span></span> <span class="token attr-name">tabindex</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>-1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>modal-dialog<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>modal-content<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>modal-header<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h5</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>modal-title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Modal title<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h5</span><span class="token punctuation">></span></span>
          <span class="token comment">&lt;!-- data-bs-dismiss="modal" 控制当前弹框隐藏 --></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>button<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>btn-close<span class="token punctuation">"</span></span> <span class="token attr-name">data-bs-dismiss</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>modal<span class="token punctuation">"</span></span> <span class="token attr-name">aria-label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Close<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>modal-body<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>Modal body text goes here.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>modal-footer<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>button<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>btn btn-secondary<span class="token punctuation">"</span></span> <span class="token attr-name">data-bs-dismiss</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>modal<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Close<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>button<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>btn btn-primary<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Save changes<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  
  <span class="token comment">&lt;!-- 1. 引入 bootstrap.js --></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.min.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/notes/fe/javascript/AJAX/md_img/image-20231215100549993.png" alt="image-20231215100549993" loading="lazy"></p>
<h4 id="通过js控制" tabindex="-1"><a class="header-anchor" href="#通过js控制" aria-hidden="true">#</a> 通过JS控制</h4>
<h5 id="步骤-2" tabindex="-1"><a class="header-anchor" href="#步骤-2" aria-hidden="true">#</a> 步骤</h5>
<ol>
<li>创建弹框对象</li>
<li>调用弹框对象内置方法
<ul>
<li><code v-pre>show()</code> 显示</li>
<li><code v-pre>hide()</code> 隐藏</li>
</ul>
</li>
</ol>
<h5 id="代码实现-1" tabindex="-1"><a class="header-anchor" href="#代码实现-1" aria-hidden="true">#</a> 代码实现</h5>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
	<span class="token comment">// 1. 创建弹框对象</span>
  <span class="token keyword">const</span> modalBox <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'.name-box'</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> modal <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">bootstrap<span class="token punctuation">.</span>Modal</span><span class="token punctuation">(</span>modalBox<span class="token punctuation">)</span>
  
  <span class="token keyword">const</span> editBtn <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'.edit-btn'</span><span class="token punctuation">)</span>
  editBtn<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'click'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'.username'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token string">'默认姓名'</span>
    <span class="token comment">// 2. 调用弹框对象内置方法 show()</span>
    modal<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  
  <span class="token keyword">const</span> saveBtn <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'.save-btn'</span><span class="token punctuation">)</span>
  saveBtn<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'click'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> username <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'.username'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>value
    <span class="token comment">// 3. 调用弹框对象内置方法 hide()</span>
    modal<span class="token punctuation">.</span><span class="token function">hide</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/notes/fe/javascript/AJAX/md_img/image-20231215104745672.png" alt="image-20231215104745672" loading="lazy"></p>
<h3 id="渲染列表-查" tabindex="-1"><a class="header-anchor" href="#渲染列表-查" aria-hidden="true">#</a> 渲染列表（查）</h3>
<h4 id="步骤-3" tabindex="-1"><a class="header-anchor" href="#步骤-3" aria-hidden="true">#</a> 步骤</h4>
<ol>
<li>获取数据</li>
<li>渲染数据</li>
</ol>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> creator <span class="token operator">=</span> <span class="token string">'zs'</span>

<span class="token keyword">function</span> <span class="token function">getBookList</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">axios</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">'https://hmajax.itheima.net/api/books'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">params</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      creator
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">result</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> bookList <span class="token operator">=</span> result<span class="token punctuation">.</span>data<span class="token punctuation">.</span>data
    <span class="token keyword">const</span> htmlStr <span class="token operator">=</span> bookList<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">
				&lt;tr>
          &lt;td></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>index <span class="token operator">+</span> <span class="token number">1</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/td>
          &lt;td></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>item<span class="token punctuation">.</span>bookname<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/td>
          &lt;td></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>item<span class="token punctuation">.</span>author<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/td>
          &lt;td></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>item<span class="token punctuation">.</span>publisher<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/td>
          &lt;td>
            &lt;span class="del">删除&lt;/span>
            &lt;span class="edit">编辑&lt;/span>
          &lt;/td>
        &lt;/tr>
			</span><span class="token template-punctuation string">`</span></span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span>
    document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'.list'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> htmlStr
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token function">getBookList</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/notes/fe/javascript/AJAX/md_img/image-20231215112444323.png" alt="image-20231215112444323" loading="lazy"></p>
<h3 id="新增图书-增" tabindex="-1"><a class="header-anchor" href="#新增图书-增" aria-hidden="true">#</a> 新增图书（增）</h3>
<h4 id="步骤-4" tabindex="-1"><a class="header-anchor" href="#步骤-4" aria-hidden="true">#</a> 步骤</h4>
<ol>
<li>新增弹框 =&gt; 显示和隐藏</li>
<li>收集表单数据，并提交到服务器保存</li>
<li>刷新图书列表</li>
</ol>
<h4 id="代码实现-2" tabindex="-1"><a class="header-anchor" href="#代码实现-2" aria-hidden="true">#</a> 代码实现</h4>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> addModalDom <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'.add-modal'</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> addModal <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">bootstrap<span class="token punctuation">.</span>Modal</span><span class="token punctuation">(</span>addModalDom<span class="token punctuation">)</span>

<span class="token keyword">const</span> addBtn <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'.add-btn'</span><span class="token punctuation">)</span>
addBtn<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'click'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> addForm <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'.add-form'</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> bookObj <span class="token operator">=</span> <span class="token function">serialize</span><span class="token punctuation">(</span>addForm<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">hash</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token literal-property property">empty</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token function">axios</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">'https://hmajax.itheima.net/api/books'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">'post'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token operator">...</span>bookObj<span class="token punctuation">,</span>
      creator
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">result</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">getBooksList</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    addForm<span class="token punctuation">.</span><span class="token function">reset</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    addModal<span class="token punctuation">.</span><span class="token function">hide</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/notes/fe/javascript/AJAX/md_img/image-20231215115046693.png" alt="image-20231215115046693" loading="lazy"></p>
<h3 id="删除图书-删" tabindex="-1"><a class="header-anchor" href="#删除图书-删" aria-hidden="true">#</a> 删除图书（删）</h3>
<h4 id="步骤-5" tabindex="-1"><a class="header-anchor" href="#步骤-5" aria-hidden="true">#</a> 步骤</h4>
<ol>
<li>删除元素绑定点击事件 -&gt; 获取图书id</li>
<li>调用删除接口</li>
<li>刷新图书列表</li>
</ol>
<h4 id="代码实现-3" tabindex="-1"><a class="header-anchor" href="#代码实现-3" aria-hidden="true">#</a> 代码实现</h4>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">getBooksList</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">axios</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token operator">...</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">result</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token operator">...</span><span class="token punctuation">,</span>
    <span class="token keyword">const</span> htmlStr <span class="token operator">=</span> bookList<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    	<span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">
				...,
				&lt;td data-id=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>item<span class="token punctuation">.</span>id<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">>
			</span><span class="token template-punctuation string">`</span></span>
  	<span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> list <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'.list'</span><span class="token punctuation">)</span>
list<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'click'</span><span class="token punctuation">,</span> <span class="token parameter">e</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> theId <span class="token operator">=</span> e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>parentNode<span class="token punctuation">.</span>dataset<span class="token punctuation">.</span>id
  <span class="token function">axios</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">https://hmajax.itheima.net/api/books/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>theId<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>
    <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">'delete'</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">getBooksList</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/notes/fe/javascript/AJAX/md_img/image-20231215120613580.png" alt="image-20231215120613580" loading="lazy"></p>
<h3 id="编辑图书-改" tabindex="-1"><a class="header-anchor" href="#编辑图书-改" aria-hidden="true">#</a> 编辑图书（改）</h3>
<h4 id="步骤-6" tabindex="-1"><a class="header-anchor" href="#步骤-6" aria-hidden="true">#</a> 步骤</h4>
<ol>
<li>编辑弹框 =&gt; 显示和隐藏</li>
<li>获取当前编辑图书数据 =&gt; 回显到编辑表单中</li>
<li>提交保存修改，并刷新列表</li>
</ol>
<h4 id="代码实现-4" tabindex="-1"><a class="header-anchor" href="#代码实现-4" aria-hidden="true">#</a> 代码实现</h4>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> editDom <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'.edit-modal'</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> editModal <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">bootstrap<span class="token punctuation">.</span>Modal</span><span class="token punctuation">(</span>editDom<span class="token punctuation">)</span>

list<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'click'</span><span class="token punctuation">,</span> <span class="token parameter">e</span><span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> theId <span class="token operator">=</span> e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>parentNode<span class="token punctuation">.</span>dataset<span class="token punctuation">.</span>id
  <span class="token comment">// 删除</span>
  <span class="token operator">...</span><span class="token punctuation">,</span>
  
  <span class="token comment">// 编辑</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span><span class="token string">'edit'</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">axios</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">https://hmajax.itheima.net/api/books/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>theId<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>
      <span class="token keyword">const</span> keys <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>bookObj<span class="token punctuation">)</span>
    	keys<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">key</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">.edit-form .</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>key<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span>value <span class="token operator">=</span> bookObj<span class="token punctuation">[</span>key<span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    editModal<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> editBtn <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'.edit-btn'</span><span class="token punctuation">)</span>
editBtn<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'click'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> editForm <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'.edit-form'</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> id<span class="token punctuation">,</span> bookname<span class="token punctuation">,</span> author<span class="token punctuation">,</span> publisher <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">serialize</span><span class="token punctuation">(</span>editForm<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">hash</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token literal-property property">empty</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
  
  <span class="token function">axios</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">https://hmajax.itheima.net/api/books/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>id<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>
    <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">'put'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      bookname<span class="token punctuation">,</span>
      author<span class="token punctuation">,</span>
      publisher<span class="token punctuation">,</span>
      creator
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">getBooksList</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    editmodal<span class="token punctuation">.</span><span class="token function">hide</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/notes/fe/javascript/AJAX/md_img/image-20231215151817879.png" alt="image-20231215151817879" loading="lazy"></p>
<h2 id="图片上传" tabindex="-1"><a class="header-anchor" href="#图片上传" aria-hidden="true">#</a> 图片上传</h2>
<h3 id="步骤-7" tabindex="-1"><a class="header-anchor" href="#步骤-7" aria-hidden="true">#</a> 步骤</h3>
<ol>
<li>获取图片文件对象</li>
<li>使用 <code v-pre>FormData</code> 携带图片文件</li>
<li>提交表单数据到服务器，使用图片 url 网址</li>
</ol>
<h3 id="代码实现-5" tabindex="-1"><a class="header-anchor" href="#代码实现-5" aria-hidden="true">#</a> 代码实现</h3>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>file<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>upload<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>my-img<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  	<span class="token keyword">const</span> upload <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'.upload'</span><span class="token punctuation">)</span>
    upload<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'change'</span><span class="token punctuation">,</span> <span class="token parameter">e</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> fd <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FormData</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      fd<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">'img'</span><span class="token punctuation">,</span> e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>files<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
      
      <span class="token function">axios</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">'https://hmajax.itheima.net/api/uploadimg'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">'post'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">data</span><span class="token operator">:</span> fd
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">result</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> imgUrl <span class="token operator">=</span> result<span class="token punctuation">.</span>data<span class="token punctuation">.</span>data<span class="token punctuation">.</span>url
        document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'.my-img'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>src <span class="token operator">=</span> imgUrl
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/notes/fe/javascript/AJAX/md_img/image-20231215164846100.png" alt="image-20231215164846100" loading="lazy"></p>
<h2 id="案例-网站换肤" tabindex="-1"><a class="header-anchor" href="#案例-网站换肤" aria-hidden="true">#</a> 案例 - 网站换肤</h2>
<h3 id="步骤-8" tabindex="-1"><a class="header-anchor" href="#步骤-8" aria-hidden="true">#</a> 步骤</h3>
<ol>
<li>选择图片上传，设置 <code v-pre>body</code> 背景</li>
<li>上传成功时，保存 <code v-pre>url</code> 网址</li>
<li>网页运行时，获取 <code v-pre>url</code> 网址使用</li>
</ol>
<h3 id="代码实现-6" tabindex="-1"><a class="header-anchor" href="#代码实现-6" aria-hidden="true">#</a> 代码实现</h3>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'.bg-ipt'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'change'</span><span class="token punctuation">,</span> <span class="token parameter">e</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> fd <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FormData</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  fd<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">'img'</span><span class="token punctuation">,</span> e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>files<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
  <span class="token function">axios</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">'https://hmajax.itheima.net/api/uploadimg'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">'post'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">data</span><span class="token operator">:</span> fd
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">result</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> imgUrl <span class="token operator">=</span> result<span class="token punctuation">.</span>data<span class="token punctuation">.</span>data<span class="token punctuation">.</span>url
    document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>style<span class="token punctuation">.</span>backgroundImage <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">url(</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>imgUrl<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">)</span><span class="token template-punctuation string">`</span></span>
    localStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span><span class="token string">'bgimg'</span><span class="token punctuation">,</span> imgUrl<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> bgUrl <span class="token operator">=</span> localStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'bgImg'</span><span class="token punctuation">)</span>
bgUrl <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>style<span class="token punctuation">.</span>backgroundImage <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">url(</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>bgUrl<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">)</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/notes/fe/javascript/AJAX/md_img/image-20231215171905085.png" alt="image-20231215171905085" loading="lazy"></p>
<h2 id="案例-个人信息设置" tabindex="-1"><a class="header-anchor" href="#案例-个人信息设置" aria-hidden="true">#</a> 案例 - 个人信息设置</h2>
<h3 id="步骤-9" tabindex="-1"><a class="header-anchor" href="#步骤-9" aria-hidden="true">#</a> 步骤</h3>
<ol>
<li>信息渲染
<ol>
<li>获取用户的数据</li>
<li>回显数据到标签上</li>
</ol>
</li>
<li>头像修改
<ol>
<li>获取头像文件</li>
<li>提交服务器并更新头像</li>
</ol>
</li>
<li>提交表单
<ol>
<li>收集表单信息</li>
<li>提交到服务器保存</li>
</ol>
</li>
<li>结果提示
<ol>
<li>创建 toast 对象</li>
<li>调用 show 方法 -&gt; 显示提示框</li>
</ol>
</li>
</ol>
<h3 id="代码实现-7" tabindex="-1"><a class="header-anchor" href="#代码实现-7" aria-hidden="true">#</a> 代码实现</h3>
<ol>
<li>信息渲染</li>
</ol>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> creator <span class="token operator">=</span> <span class="token string">'zs'</span>

<span class="token function">axios</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">'https://hmajax.itheima.net/api/settings'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">params</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    creator
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">result</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> userObj <span class="token operator">=</span> result<span class="token punctuation">.</span>data<span class="token punctuation">.</span>data
  Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>userObj<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">key</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>key <span class="token operator">===</span> <span class="token string">'avatar'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'.prew'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>src <span class="token operator">=</span> userObj<span class="token punctuation">[</span>key<span class="token punctuation">]</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>key <span class="token operator">===</span> <span class="token string">'gender'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> gRadioList <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelectorAll</span><span class="token punctuation">(</span><span class="token string">'.gender'</span><span class="token punctuation">)</span>
      <span class="token keyword">const</span> gNum <span class="token operator">=</span> userObj<span class="token punctuation">[</span>key<span class="token punctuation">]</span>
      gRadioList<span class="token punctuation">[</span>gNum<span class="token punctuation">]</span><span class="token punctuation">.</span>checked <span class="token operator">=</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">.</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>key<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span>value <span class="token operator">=</span> userObj<span class="token punctuation">[</span>key<span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>头像修改</li>
</ol>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> upload <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'.upload'</span><span class="token punctuation">)</span>
upload<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'change'</span><span class="token punctuation">,</span> <span class="token parameter">e</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> fd <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FormData</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  fd<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">'avatar'</span><span class="token punctuation">,</span> e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>files<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
  fd<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">'creator'</span><span class="token punctuation">,</span> creator<span class="token punctuation">)</span>
  
  <span class="token function">axios</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">'https://hmajax.itheima.net/api/avatar'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">'put'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">data</span><span class="token operator">:</span> fd
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">result</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> imgUrl <span class="token operator">=</span> result<span class="token punctuation">.</span>data<span class="token punctuation">.</span>data<span class="token punctuation">.</span>avatar
    document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'.prew'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>src <span class="token operator">=</span> imgUrl
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>提交表单</li>
</ol>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> submit <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'.submit'</span><span class="token punctuation">)</span>
submit<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'click'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> userForm <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'.user-form'</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> userObj <span class="token operator">=</span> <span class="token function">seriallize</span><span class="token punctuation">(</span>userForm<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">hash</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token literal-property property">empty</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
  userObj<span class="token punctuation">.</span>creator <span class="token operator">=</span> creator
  userObj<span class="token punctuation">.</span>gender <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token operator">+</span>userObj<span class="token punctuation">.</span>gender<span class="token punctuation">)</span>
  
  <span class="token function">axios</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">'https://hmajax.itheima.net/api/settings'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">'put'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">data</span><span class="token operator">:</span> userObj
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4">
<li>结果显示 - 提示框</li>
</ol>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token function">axios</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token operator">...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">result</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> toastDom <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'.my-toast'</span><span class="token punctuation">)</span>
	<span class="token keyword">const</span> toast <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">bootstrap<span class="token punctuation">.</span>Toast</span><span class="token punctuation">(</span>toastDom<span class="token punctuation">)</span>
  toast<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/notes/fe/javascript/AJAX/md_img/image-20231218161345001.png" alt="image-20231218161345001" loading="lazy"></p>
</div></template>


