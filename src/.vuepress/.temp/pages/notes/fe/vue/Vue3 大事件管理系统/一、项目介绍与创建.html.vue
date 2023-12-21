<template><div><h1 id="一、项目介绍与创建" tabindex="-1"><a class="header-anchor" href="#一、项目介绍与创建" aria-hidden="true">#</a> 一、项目介绍与创建</h1>
<p><a href="https://fe-bigevent-web.itheima.net/login" target="_blank" rel="noopener noreferrer">在线演示<ExternalLinkIcon/></a></p>
<p><a href="https://apifox.com/apidoc/shared-26c67aee-0233-4d23-aab7-08448fdf95ff/api-93850835" target="_blank" rel="noopener noreferrer">接口文档<ExternalLinkIcon/></a></p>
<h2 id="本项目技术栈" tabindex="-1"><a class="header-anchor" href="#本项目技术栈" aria-hidden="true">#</a> 本项目技术栈</h2>
<p>ES6、Vue3、Pinia、Vue-Router、Vite、Axios、ElementPlus</p>
<h2 id="创建项目" tabindex="-1"><a class="header-anchor" href="#创建项目" aria-hidden="true">#</a> 创建项目</h2>
<p>使用 pnpm 包管理器</p>
<p><img src="@source/notes/fe/vue/Vue3 大事件管理系统/md_img/image-20231031150329877.png" alt="image-20231031150329877" loading="lazy"></p>
<ol>
<li>安装方式：</li>
</ol>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> <span class="token function">pnpm</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2">
<li>创建项目：</li>
</ol>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">pnpm</span> create vue
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="@source/notes/fe/vue/Vue3 大事件管理系统/md_img/image-20231031150957747.png" alt="image-20231031150957747" loading="lazy"></p>
<ol start="3">
<li>安装依赖：</li>
</ol>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">pnpm</span> <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="4">
<li>运行</li>
</ol>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">pnpm</span> dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="配置代码风格" tabindex="-1"><a class="header-anchor" href="#配置代码风格" aria-hidden="true">#</a> 配置代码风格</h2>
<p>主要使用 ESLint 和 Prettier</p>
<ul>
<li>
<p>ESLint 主要是规范代码</p>
</li>
<li>
<p>Prettier 主要是美化代码风格</p>
</li>
</ul>
<h3 id="环境同步" tabindex="-1"><a class="header-anchor" href="#环境同步" aria-hidden="true">#</a> 环境同步</h3>
<ol>
<li>
<p>安装了插件 ESLint，开启保存自动修复</p>
</li>
<li>
<p>禁用插件 Prettier，关闭保存自动格式化</p>
</li>
</ol>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token comment">// vscode下面的setting.json</span>

<span class="token comment">// ESlint插件 + Vscode配置 实现自动格式化修复</span>
<span class="token property">"editor.codeActionsOnSave"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"source.fixAll"</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token property">"editor.formatOnSave"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="配置文件-eslintrc-cjs" tabindex="-1"><a class="header-anchor" href="#配置文件-eslintrc-cjs" aria-hidden="true">#</a> 配置文件 .eslintrc.cjs</h3>
<ol>
<li>
<p>prettier 风格配置</p>
<ol>
<li>
<p>单引号</p>
</li>
<li>
<p>不使用分号</p>
</li>
<li>
<p>每行宽度至多80字符</p>
</li>
<li>
<p>不加对象|数组最后逗号</p>
</li>
<li>
<p>换行符号不限制（win mac 不一致）</p>
</li>
</ol>
</li>
<li>
<p>vue 组件名称多单词组成（忽略index.vue）</p>
</li>
<li>
<p>props 解构（关闭）</p>
</li>
</ol>
<div class="language-jsx line-numbers-mode" data-ext="jsx"><pre v-pre class="language-jsx"><code><span class="token comment">// .eslintrc.cjs</span>

<span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token string-property property">'prettier/prettier'</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">'warn'</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">singleQuote</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 单引号</span>
      <span class="token literal-property property">semi</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// 无分号</span>
      <span class="token literal-property property">printWidth</span><span class="token operator">:</span> <span class="token number">80</span><span class="token punctuation">,</span> <span class="token comment">// 每行宽度至多80字符</span>
      <span class="token literal-property property">trailingComma</span><span class="token operator">:</span> <span class="token string">'none'</span><span class="token punctuation">,</span> <span class="token comment">// 不加对象|数组最后逗号</span>
      <span class="token literal-property property">endOfLine</span><span class="token operator">:</span> <span class="token string">'auto'</span> <span class="token comment">// 换行符号不限制（win mac 不一致）</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token string-property property">'vue/multi-word-component-names'</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">'warn'</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">ignores</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'index'</span><span class="token punctuation">]</span> <span class="token comment">// vue组件名称多单词组成（忽略index.vue）</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token string-property property">'vue/no-setup-props-destructure'</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'off'</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// 关闭 props 解构的校验</span>
  <span class="token comment">// 💡 添加未定义变量错误提示，create-vue@3.6.3 关闭，这里加上是为了支持下一个章节演示。</span>
  <span class="token string-property property">'no-undef'</span><span class="token operator">:</span> <span class="token string">'error'</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="配置-husky-代码检查工作流" tabindex="-1"><a class="header-anchor" href="#配置-husky-代码检查工作流" aria-hidden="true">#</a> 配置 husky 代码检查工作流</h3>
<p>husky 是一个 git hooks 工具，能在提交代码前做检查</p>
<ol>
<li>初始化 git 仓库</li>
</ol>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2">
<li>初始化 husky 工具配置</li>
</ol>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">pnpm</span> dlx husky-init <span class="token operator">&amp;&amp;</span> <span class="token function">pnpm</span> <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="3">
<li>更改配置</li>
</ol>
<div class="language-jsx line-numbers-mode" data-ext="jsx"><pre v-pre class="language-jsx"><code><span class="token comment">// .husky/pre-commit</span>

<span class="token comment">// npm test</span>
pnpm lint
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样就可以对整个工程文件进行 <strong>全量检查</strong></p>
<p>是的，它会把所有文件都扫一遍，这样就会造成整个项目会非常耗时，且别人看到这代码的时候会很混乱。</p>
<p>解决这个问题其实也不难，使用暂存区就可以了</p>
<h4 id="暂存区-eslint-校验" tabindex="-1"><a class="header-anchor" href="#暂存区-eslint-校验" aria-hidden="true">#</a> 暂存区 eslint 校验</h4>
<p>当代码写到一部分的时候，可以先提交到暂存区，暂存区之后再提交到仓库。</p>
<ol>
<li>安装 lint-staged 包</li>
</ol>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">pnpm</span> i lint-staged <span class="token parameter variable">-D</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2">
<li><code v-pre>package.json</code> 配置 <code v-pre>lint-staged</code> 命令</li>
</ol>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token comment">// package.json</span>

<span class="token punctuation">{</span>
  <span class="token property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    ...<span class="token punctuation">,</span>
    <span class="token property">"lint-staged"</span><span class="token operator">:</span> <span class="token string">"lint-staged"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"devDependencies"</span><span class="token operator">:</span><span class="token punctuation">{</span>
  	...
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"lint-staged"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"*.{js,ts,vue}"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">"eslint --fix"</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li><code v-pre>.husky/pre-commit</code> 文件修改</li>
</ol>
<div class="language-jsx line-numbers-mode" data-ext="jsx"><pre v-pre class="language-jsx"><code><span class="token comment">// .husky/pre-commit</span>

<span class="token comment">// pnpm lint</span>
pnpm lint<span class="token operator">-</span>staged
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样的话，每当我们修改某一段代码，它只会对某一个文件进行校验</p>
<h2 id="调整目录" tabindex="-1"><a class="header-anchor" href="#调整目录" aria-hidden="true">#</a> 调整目录</h2>
<div class="language-txt line-numbers-mode" data-ext="txt"><pre v-pre class="language-txt"><code>src
├── api(新增)
├── assets
│   └── .(删除)
│   ├── avatar.jpg(新增)
│   ├── cover.jpg(新增)
│   ├── default.png(新增)
│   ├── login_bg.jpg(新增)
│   ├── login_title.jpg(新增)
│   ├── logo.png(新增)
│   ├── logo2.png(新增)
│   └── main.scss(新增)
├── components
│   └── .(删除)
├── router
│   └── index.js(修改)
├── stores
│   └── .(删除)
├── utils(新增)
├── views
│   └── .(删除)
├── App.vue(修改)
└── main.js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><code v-pre>src/api/</code> 存放请求函数</li>
<li><code v-pre>src/assets/</code> 存放静态资源</li>
<li><code v-pre>src/components/</code> 存放公共组件</li>
<li><code v-pre>src/router/</code> 存放路由</li>
<li><code v-pre>src/stores/</code> 存放仓库模块，需要在页面引用才会初始化</li>
<li><code v-pre>src/utils/</code> 存放自己封装的工具函数</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// src/router/index.js</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> createRouter<span class="token punctuation">,</span> createWebHistory <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue-router'</span>

<span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token function">createRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">history</span><span class="token operator">:</span> <span class="token function">createWebHistory</span><span class="token punctuation">(</span><span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">BASE_URL</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">routes</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> router
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code>// src/App.vue

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-view</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-view</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span><span class="token punctuation">></span></span><span class="token style"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// src/main.js</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> createPinia <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'pinia'</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">'./App.vue'</span>
<span class="token keyword">import</span> router <span class="token keyword">from</span> <span class="token string">'./router'</span>
<span class="token keyword">import</span> <span class="token string">'@/assets/main.scss'</span>

<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>

app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token function">createPinia</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>router<span class="token punctuation">)</span>
app<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">'#app'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>安装 sass 依赖</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">pnpm</span> <span class="token function">add</span> sass <span class="token parameter variable">-D</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="vuerouter4-路由代码解析" tabindex="-1"><a class="header-anchor" href="#vuerouter4-路由代码解析" aria-hidden="true">#</a> VueRouter4 路由代码解析</h2>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// src/router/index.js</span>

<span class="token comment">// 按需导入</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> createRouter<span class="token punctuation">,</span> createWebHistory <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue-router'</span>

<span class="token comment">// createRouter 创建路由实例，===> new VueRouter()</span>
<span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token function">createRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// 配置模式</span>
  <span class="token comment">// 1. history模式: createWebHistory()   http://xxx/user</span>
	<span class="token comment">// 2. hash模式: createWebHashHistory()  http://xxx/#/user</span>
  
  <span class="token comment">// import.meta.env.BASE_URL 是路由的基准地址，加了什么前面就默认有什么，默认是 '/'，可以在 vite.config.ts 统一配置 base: my-path，路由这就会加上 my-path 前缀了</span>
  <span class="token literal-property property">history</span><span class="token operator">:</span> <span class="token function">createWebHistory</span><span class="token punctuation">(</span><span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">BASE_URL</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token comment">// 配路由规则</span>
  <span class="token literal-property property">routes</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> router
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中，<code v-pre>import.meta.env.BASE_URL</code> 是Vite 环境变量，具体看<a href="https://cn.vitejs.dev/guide/env-and-mode.html" target="_blank" rel="noopener noreferrer">这里<ExternalLinkIcon/></a></p>
<p>其实 <code v-pre>hash</code> 模式的地址中间有 #，而 <code v-pre>history</code> 模式中间没有 #</p>
<p>一般使用 <code v-pre>history</code> 模式</p>
<h2 id="引入-elementui-组件库" tabindex="-1"><a class="header-anchor" href="#引入-elementui-组件库" aria-hidden="true">#</a> 引入 ElementUI 组件库</h2>
<p><a href="https://element-plus.org/zh-CN/" target="_blank" rel="noopener noreferrer">官方文档<ExternalLinkIcon/></a></p>
<ol>
<li>安装组件库</li>
</ol>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">pnpm</span> <span class="token function">add</span> element-plus
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2">
<li>按需导入，安装插件</li>
</ol>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">pnpm</span> <span class="token function">add</span> <span class="token parameter variable">-D</span> unplugin-vue-components unplugin-auto-import
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="3">
<li>配置文件实现自动导入</li>
</ol>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// vite.config.js</span>

<span class="token operator">...</span>
<span class="token keyword">import</span> AutoImport <span class="token keyword">from</span> <span class="token string">'unplugin-auto-import/vite'</span>
<span class="token keyword">import</span> Components <span class="token keyword">from</span> <span class="token string">'unplugin-vue-components/vite'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ElementPlusResolver <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'unplugin-vue-components/resolvers'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token operator">...</span>
    <span class="token function">AutoImport</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">resolvers</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">ElementPlusResolver</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">Components</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">resolvers</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">ElementPlusResolver</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="pinia-构建用户仓库-和-持久化" tabindex="-1"><a class="header-anchor" href="#pinia-构建用户仓库-和-持久化" aria-hidden="true">#</a> Pinia - 构建用户仓库 和 持久化</h2>
<p><a href="https://prazdevs.github.io/pinia-plugin-persistedstate/zh/" target="_blank" rel="noopener noreferrer">官方文档<ExternalLinkIcon/></a></p>
<h3 id="构建用户仓库" tabindex="-1"><a class="header-anchor" href="#构建用户仓库" aria-hidden="true">#</a> 构建用户仓库</h3>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// src/stores/user.js</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> defineStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'pinia'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> useUserStore <span class="token operator">=</span> <span class="token function">defineStore</span><span class="token punctuation">(</span><span class="token string">'big-user'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> token <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> <span class="token function-variable function">setToken</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">newToken</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    token<span class="token punctuation">.</span>value <span class="token operator">=</span> newToken
  <span class="token punctuation">}</span>
  <span class="token keyword">const</span> <span class="token function-variable function">removeToken</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    token<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token string">''</span>
  <span class="token punctuation">}</span>
  
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    token<span class="token punctuation">,</span>
    setToken<span class="token punctuation">,</span>
    removeToken
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code>// src/App.vue

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>srcipt</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span>
import { useUserStore } from '@/stores/user'

const userStore = useUserStore()
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>srcipt</span><span class="token punctuation">></span></span> 

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>{{ useUserStore.token }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>userStore.setToken('Bearer ...')<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>登录<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>userStore.removeToken()<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>退出<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/notes/fe/vue/Vue3 大事件管理系统/md_img/image-20231101103642096.png" alt="image-20231101103642096" loading="lazy"></p>
<p>现在，仓库构建完成</p>
<p>但是，如果一刷新页面，你会发现登录的信息又没有了，那是因为没有做持久化的原因，我们只需要加上一些东西就可以持久化啦~</p>
<ol>
<li>安装插件</li>
</ol>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">pnpm</span> <span class="token function">add</span> pinia-plugin-persistedstate <span class="token parameter variable">-D</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2">
<li>使用 main.js</li>
</ol>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// main.js</span>

<span class="token keyword">import</span> persist <span class="token keyword">from</span> <span class="token string">'pinia-plugin-persistedstate'</span>
<span class="token operator">...</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token function">createPinia</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>persist<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>配置文件</li>
</ol>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// src/stores/user.js</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> useUserStore <span class="token operator">=</span> <span class="token function">defineStore</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token operator">...</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">persist</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token comment">// 持久化</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样操作以后，就完成了持久化的操作啦~ 😄</p>
<h3 id="统一管理" tabindex="-1"><a class="header-anchor" href="#统一管理" aria-hidden="true">#</a> 统一管理</h3>
<p>当然，为了未来能够更好的维护，我们还需要改进一下代码来避免 main.js 过于臃肿</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// src/stores/index.js</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> createPinia <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'pinia'</span>
<span class="token keyword">import</span> persist <span class="token keyword">from</span> <span class="token string">'pinia-plugin-persistedstate'</span>

<span class="token keyword">const</span> pinia <span class="token operator">=</span> <span class="token function">createPinia</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
pinia<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>persist<span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> pinia
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// src/main.js</span>

<span class="token comment">// import { createPinia } from 'pinia'</span>
<span class="token comment">// import persist from 'pinia-plugin-persistedstate'</span>
<span class="token keyword">import</span> pinia <span class="token keyword">from</span> <span class="token string">'@/stores/index'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="axios-数据交互-请求工具设计" tabindex="-1"><a class="header-anchor" href="#axios-数据交互-请求工具设计" aria-hidden="true">#</a> Axios 数据交互 - 请求工具设计</h2>
<p><img src="@source/notes/fe/vue/Vue3 大事件管理系统/md_img/image-20231101111153658.png" alt="image-20231101111153658" loading="lazy"></p>
<p>一般需要使用 axios 来请求后端接口，一般会对 axios 进行一些配置</p>
<ol>
<li>安装 axios</li>
</ol>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">pnpm</span> <span class="token function">add</span> axios
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2">
<li>封装 axios 模块</li>
</ol>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// src/utils/request.js</span>

<span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">'axios'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useUserStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@/stores'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ElMessage <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'element-plus'</span>

<span class="token keyword">const</span> baseURL <span class="token operator">=</span> <span class="token string">'http://big-event-vue-api-t.itheima.net'</span>

<span class="token keyword">const</span> instance <span class="token operator">=</span> axios<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// TODO 1. 基础地址，超时时间</span>
  baseURL<span class="token punctuation">,</span>
  <span class="token literal-property property">timeout</span><span class="token operator">:</span> <span class="token number">10000</span> <span class="token comment">// 10秒</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 请求拦截器</span>
instance<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>request<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>
  <span class="token punctuation">(</span><span class="token parameter">config</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token comment">// TODO 2. 携带token</span>
    <span class="token keyword">const</span> useStore <span class="token operator">=</span> <span class="token function">useUserStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>useStore<span class="token punctuation">.</span>token<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      config<span class="token punctuation">.</span>headers<span class="token punctuation">.</span>Authorization <span class="token operator">=</span> useStore<span class="token punctuation">.</span>token
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> config
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token operator">=></span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
<span class="token punctuation">)</span>

<span class="token comment">// 响应拦截器</span>
instance<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>response<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>
  <span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token comment">// TODO 3. 处理业务失败</span>
    <span class="token comment">// TODO 4. 摘取核心响应数据</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>res<span class="token punctuation">.</span>data<span class="token punctuation">.</span>code <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> res
    <span class="token punctuation">}</span>
    <span class="token comment">// 处理业务失败，给错误提示，抛出错误</span>
    ElMessage<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>data<span class="token punctuation">.</span>message <span class="token operator">||</span> <span class="token string">'服务异常 '</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>data<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token comment">// TODO 5. 处理401错误</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">.</span>response<span class="token operator">?.</span>status <span class="token operator">===</span> <span class="token number">401</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">'/login'</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 错误的默认情况</span>
    ElMessage<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>err<span class="token punctuation">.</span>response<span class="token punctuation">.</span>data<span class="token punctuation">.</span>message <span class="token operator">||</span> <span class="token string">'服务异常'</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> instance
<span class="token keyword">export</span> <span class="token punctuation">{</span> baseURL <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="整体路由设计" tabindex="-1"><a class="header-anchor" href="#整体路由设计" aria-hidden="true">#</a> 整体路由设计</h2>
<p>路由的设计其实可以理解为一个项目的框架，搭建好路由能够让你更加清楚什么页面加在什么位置，需要做什么页面</p>
<p><strong>约定路由规则</strong></p>
<div class="language-txt line-numbers-mode" data-ext="txt"><pre v-pre class="language-txt"><code>src
├── views
│   └── article
│   │   ├── ArticleManage.vue
│   │   └── ArticleChannel.vue
│   ├── layout
│   │   └── LayoutContainer.vue
│   ├── login
│   │   └── LoginPage.vue
│   ├── user
│   │   ├── UserProfile.vue
│   │   ├── UserAvatar.vue
└── └── └── UserPassword.vue
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table>
<thead>
<tr>
<th>文件</th>
<th>功能</th>
<th>组件名</th>
<th>路由级别</th>
</tr>
</thead>
<tbody>
<tr>
<td>login/LoginPage.vue</td>
<td>登录&amp;注册</td>
<td>LoginPage</td>
<td>一级路由</td>
</tr>
<tr>
<td>layout/LayoutContainer.vue</td>
<td>布局架子</td>
<td>LayoutContainer</td>
<td>一级路由</td>
</tr>
<tr>
<td>article/ArticleManage.vue</td>
<td>文章管理</td>
<td>ArticleManage</td>
<td>二级路由</td>
</tr>
<tr>
<td>article/ArticleChannel.vue</td>
<td>频道管理</td>
<td>ArticleChannel</td>
<td>二级路由</td>
</tr>
<tr>
<td>user/UserProfile.vue</td>
<td>个人详情</td>
<td>UserProfile</td>
<td>二级路由</td>
</tr>
<tr>
<td>user/UserAvatar.vue</td>
<td>更换头像</td>
<td>UserAvatar</td>
<td>二级路由</td>
</tr>
<tr>
<td>user/UserPassword.vue</td>
<td>重置密码</td>
<td>UserPassword</td>
<td>二级路由</td>
</tr>
</tbody>
</table>
<p>明确以后，就可以去 <code v-pre>router</code> 下面配规则了</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// src/router/index.js</span>

<span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token function">createRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">routes</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/login'</span><span class="token punctuation">,</span> <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'@/views/login/LoginPage.vue'</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/'</span><span class="token punctuation">,</span>
      <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'@/views/layout/LayoutContainer.vue'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token literal-property property">redirect</span><span class="token operator">:</span> <span class="token string">'/article/manage'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/article/manage'</span><span class="token punctuation">,</span>
          <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'@/views/article/ArticleManage.vue'</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/article/channel'</span><span class="token punctuation">,</span>
          <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'@/views/article/ArticleChannel.vue'</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/user/profile'</span><span class="token punctuation">,</span>
          <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'@/views/user/UserProfile.vue'</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/user/avatar'</span><span class="token punctuation">,</span>
          <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'@/views/user/UserAvatar.vue'</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/user/password'</span><span class="token punctuation">,</span>
          <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'@/views/user/UserPassword.vue'</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后去到 <code v-pre>App.vue</code> 加载这些路由界面</p>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code>// src/App.vue

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-view</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-view</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


