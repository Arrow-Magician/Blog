<template><div><h1 id="vue3小兔鲜项目" tabindex="-1"><a class="header-anchor" href="#vue3小兔鲜项目" aria-hidden="true">#</a> Vue3小兔鲜项目</h1>
<h2 id="项目初始化" tabindex="-1"><a class="header-anchor" href="#项目初始化" aria-hidden="true">#</a> 项目初始化</h2>
<h3 id="创建项目" tabindex="-1"><a class="header-anchor" href="#创建项目" aria-hidden="true">#</a> 创建项目</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">pnpm</span> create vue
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Project name: vue3-rabbit</p>
<p>选择yes的项目：</p>
<p>Vue Router</p>
<p>pinia</p>
<p>ESlint</p>
<p>Prettier</p>
<h3 id="jsconfig-json配置别名路径" tabindex="-1"><a class="header-anchor" href="#jsconfig-json配置别名路径" aria-hidden="true">#</a> jsconfig.json配置别名路径</h3>
<p>配置别名路径可以在写代码时提示路径（仅提示，不做路径转换）</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token comment">// 根目录下创建jsconfig.json</span>

<span class="token punctuation">{</span>
  <span class="token property">"compilerOptions"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"baseUrl"</span><span class="token operator">:</span> <span class="token string">"./"</span><span class="token punctuation">,</span>
    <span class="token property">"paths"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">"@/*"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"src/*"</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="git管理项目" tabindex="-1"><a class="header-anchor" href="#git管理项目" aria-hidden="true">#</a> git管理项目</h3>
<p>初始化git仓库</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> init
<span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>
<span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">"init"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="eslint-prettier-配置代码风格" tabindex="-1"><a class="header-anchor" href="#eslint-prettier-配置代码风格" aria-hidden="true">#</a> ESLint &amp; Prettier 配置代码风格</h3>
<p><strong>环境同步</strong></p>
<ol>
<li><strong>安装插件ESlint，开启保存自动修复</strong></li>
</ol>
<div class="language-jsx line-numbers-mode" data-ext="jsx"><pre v-pre class="language-jsx"><code><span class="token comment">// ESlint插件 + VSCode配置，实现自动格式化修复</span>
<span class="token string-property property">"editor.codeActionsOnSave"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token string-property property">"source.fixAll"</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token string-property property">"editor.formatOnSave"</span><span class="token operator">:</span> <span class="token boolean">false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li><strong>禁用插件Prettier</strong>，并关闭保存自动格式化</li>
</ol>
<div class="language-jsx line-numbers-mode" data-ext="jsx"><pre v-pre class="language-jsx"><code><span class="token comment">// .eslintrc.cjs</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">parserOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// prettier 风格配置</span>
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
    <span class="token comment">// vue组件名称多单词组成(忽略index.vue)</span>
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
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="elementplus引入" tabindex="-1"><a class="header-anchor" href="#elementplus引入" aria-hidden="true">#</a> elementPlus引入</h3>
<h4 id="_1-安装elementplus和自动导入插件" tabindex="-1"><a class="header-anchor" href="#_1-安装elementplus和自动导入插件" aria-hidden="true">#</a> 1. 安装elementPlus和自动导入插件</h4>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">pnpm</span> i elementPlus
<span class="token function">pnpm</span> <span class="token function">add</span> <span class="token parameter variable">-D</span> unplugin-vue-components unplugin-auto-import
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-配置自动按需导入" tabindex="-1"><a class="header-anchor" href="#_2-配置自动按需导入" aria-hidden="true">#</a> 2. 配置自动按需导入</h4>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// vite.config.js</span>

<span class="token comment">// 引入插件</span>
<span class="token keyword">import</span> AutoImport <span class="token keyword">from</span> <span class="token string">'unplugin-auto-import/vite'</span>
<span class="token keyword">import</span> Components <span class="token keyword">from</span> <span class="token string">'unplugin-vue-components/vite'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ElementsPlusResolver <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'unplugin-vue-components/resolvers'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">// 配置插件</span>
    <span class="token function">AutoImport</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">resolvers</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">ElementPlusResolver</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">Components</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">resolvers</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">ElementPlusResolver</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-验证组件有没有成功" tabindex="-1"><a class="header-anchor" href="#_3-验证组件有没有成功" aria-hidden="true">#</a> 3. 验证组件有没有成功</h4>
<ol>
<li>先把 App.vue 的内容删除掉</li>
<li>添加 elementPlus 组件中的 el-button</li>
</ol>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/notes/fe/vue/Vue3小兔鲜项目/md_img/image-20230914112521986.png" alt="image-20230914112521986" loading="lazy"></p>
<h3 id="定制elementplus主题" tabindex="-1"><a class="header-anchor" href="#定制elementplus主题" aria-hidden="true">#</a> 定制elementPlus主题</h3>
<h4 id="_1-安装sass" tabindex="-1"><a class="header-anchor" href="#_1-安装sass" aria-hidden="true">#</a> 1. 安装sass</h4>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">pnpm</span> <span class="token function">add</span> <span class="token parameter variable">-D</span> sass
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_2-准备定制化的样式文件" tabindex="-1"><a class="header-anchor" href="#_2-准备定制化的样式文件" aria-hidden="true">#</a> 2. 准备定制化的样式文件</h4>
<div class="language-scss line-numbers-mode" data-ext="scss"><pre v-pre class="language-scss"><code><span class="token comment">// src/styles/element/index.scss</span>

<span class="token comment">/* 只需要重写你需要的即可 */</span>
<span class="token keyword">@forward</span> <span class="token string">'element-plus/theme-chalk/src/common/var.scss'</span> <span class="token module-modifier keyword">with</span> <span class="token punctuation">(</span>
  <span class="token property"><span class="token variable">$colors</span></span><span class="token punctuation">:</span> <span class="token punctuation">(</span>
    <span class="token string">'primary'</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>
      <span class="token comment">// 主色</span>
      <span class="token string">'base'</span><span class="token punctuation">:</span> #27ba9b<span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token string">'success'</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>
      <span class="token comment">// 成功色</span>
      <span class="token string">'base'</span><span class="token punctuation">:</span> #1dc779<span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token string">'warning'</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>
      <span class="token comment">// 警告色</span>
      <span class="token string">'base'</span><span class="token punctuation">:</span> #ffb302<span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token string">'danger'</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>
      <span class="token comment">// 危险色</span>
      <span class="token string">'base'</span><span class="token punctuation">:</span> #e26237<span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token string">'error'</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>
      <span class="token comment">// 错误色</span>
      <span class="token string">'base'</span><span class="token punctuation">:</span> #cf4444<span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">)</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-导入配置" tabindex="-1"><a class="header-anchor" href="#_3-导入配置" aria-hidden="true">#</a> 3. 导入配置</h4>
<ol>
<li>配置elementPlus采用sass样式配色系统</li>
<li>自动导入定制化样式文件进行样式覆盖</li>
</ol>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token operator">...</span><span class="token punctuation">,</span>
    <span class="token function">Components</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    	<span class="token literal-property property">resolvers</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    		<span class="token comment">// 1. 配置elementPlus采用sass样式配色系统</span>
    		<span class="token function">ElementPlusResolver</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">importStyle</span><span class="token operator">:</span> <span class="token string">"sass"</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
 		  <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">resolve</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">css</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">preprocessorOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">// 2. 自动导入定制化样式文件进行样式覆盖</span>
      <span class="token literal-property property">additionalData</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">@use "@/styles/element/index.scss" as *</span><span class="token template-punctuation string">`</span></span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="axios安装并封装" tabindex="-1"><a class="header-anchor" href="#axios安装并封装" aria-hidden="true">#</a> axios安装并封装</h3>
<h4 id="_1-安装axios" tabindex="-1"><a class="header-anchor" href="#_1-安装axios" aria-hidden="true">#</a> 1. 安装axios</h4>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">pnpm</span> <span class="token function">add</span> axios
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_2-基础配置" tabindex="-1"><a class="header-anchor" href="#_2-基础配置" aria-hidden="true">#</a> 2. 基础配置</h4>
<blockquote>
<ol>
<li>实例化 - baseURL + timeout</li>
<li>拦截器 - 携带token 401拦截等</li>
</ol>
</blockquote>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// src/utils/http.js</span>

<span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">'axios'</span>

<span class="token comment">// 创建axios实例</span>
<span class="token keyword">const</span> httpInstance <span class="token operator">=</span> axios<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">baseURL</span><span class="token operator">:</span> <span class="token string">'http://pcapi-xiaotuxian-front-devtest.itheima.net'</span>
  <span class="token literal-property property">timeout</span><span class="token operator">:</span> <span class="token number">5000</span> <span class="token comment">// 5秒</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// axios请求拦截器</span>
httpInstance<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>request<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>
	<span class="token punctuation">(</span><span class="token parameter">config</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> config
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span>
<span class="token punctuation">)</span>

<span class="token comment">// axios响应拦截器</span>
httpInstance<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>response<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>
	<span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=></span> res<span class="token punctuation">.</span>data<span class="token punctuation">,</span>
  <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> httpInstance
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-封装请求函数" tabindex="-1"><a class="header-anchor" href="#_3-封装请求函数" aria-hidden="true">#</a> 3. 封装请求函数</h4>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// src/apis/testApi.js</span>

<span class="token keyword">import</span> httpInstance <span class="token keyword">from</span> <span class="token string">'@/utils/http'</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">getCategory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">httpInstance</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">'home/catefory/head'</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-测试函数" tabindex="-1"><a class="header-anchor" href="#_4-测试函数" aria-hidden="true">#</a> 4. 测试函数</h4>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// src/main.js</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> getCategory <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@/apis/testApi'</span>
<span class="token function">getCategory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>返回结果：</p>
<p><img src="@source/notes/fe/vue/Vue3小兔鲜项目/md_img/image-20230914150936659.png" alt="image-20230914150936659" loading="lazy"></p>
<p><img src="@source/notes/fe/vue/Vue3小兔鲜项目/md_img/image-20230914151010850.png" alt="image-20230914151010850" loading="lazy"></p>
<h3 id="路由整体设计" tabindex="-1"><a class="header-anchor" href="#路由整体设计" aria-hidden="true">#</a> 路由整体设计</h3>
<ol>
<li>如果是整个页面进行切换的，则为一级路由</li>
<li>如果是在一级路由内部切换的，则为二级路由</li>
</ol>
<h4 id="一级路由" tabindex="-1"><a class="header-anchor" href="#一级路由" aria-hidden="true">#</a> 一级路由</h4>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code>// src/views/Layout/index.vue

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>首页<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code>// src/views/Login/index.vue

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>登录页<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// src/router/index.js</span>

<span class="token keyword">import</span> Login <span class="token keyword">from</span> <span class="token string">'@/views/Login/index.vue'</span>
<span class="token keyword">import</span> Layout <span class="token keyword">from</span> <span class="token string">'@/views/Layout/index.vue'</span>

<span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token function">createRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token operator">...</span><span class="token punctuation">,</span>
  <span class="token literal-property property">routes</span><span class="token operator">:</span> <span class="token punctuation">[</span>
  	<span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/'</span><span class="token punctuation">,</span> <span class="token literal-property property">component</span><span class="token operator">:</span> Layout <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/login'</span><span class="token punctuation">,</span> <span class="token literal-property property">component</span><span class="token operator">:</span> Login <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code>// src/App.vue

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
	<span class="token comment">&lt;!-- 一级路由出口组件 --></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>RouterView</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>RouterView</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="二级路由" tabindex="-1"><a class="header-anchor" href="#二级路由" aria-hidden="true">#</a> 二级路由</h4>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code>// src/views/Home/index.vue

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>Home<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code>// src/views/Category/index.vue

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>分类<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// src/router/index.js</span>

<span class="token keyword">import</span> Home <span class="token keyword">from</span> <span class="token string">'@/views/Home/index.vue'</span>
<span class="token keyword">import</span> Category <span class="token keyword">from</span> <span class="token string">'@/views/Category/index.vue'</span>

<span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token function">createRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token operator">...</span><span class="token punctuation">,</span>
  <span class="token literal-property property">routes</span><span class="token operator">:</span> <span class="token punctuation">[</span>
  	<span class="token punctuation">{</span>
  		<span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/'</span><span class="token punctuation">,</span>
  		<span class="token literal-property property">component</span><span class="token operator">:</span> Layout<span class="token punctuation">,</span>
  		<span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
  			<span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span> <span class="token literal-property property">component</span><span class="token operator">:</span> Home <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'category'</span><span class="token punctuation">,</span> <span class="token literal-property property">component</span><span class="token operator">:</span> Category <span class="token punctuation">}</span>
  		<span class="token punctuation">]</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
  	<span class="token operator">...</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code>// src/views/Layout/index.vue

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
    首页
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-view</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-view</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="引入静态资源" tabindex="-1"><a class="header-anchor" href="#引入静态资源" aria-hidden="true">#</a> 引入静态资源</h3>
<blockquote>
<ol>
<li>图片样式 - 把 images 文件夹放到 assets 目录下</li>
<li>样式资源 - 把 common.scss 文件放到 styles 目录下</li>
</ol>
</blockquote>
<h3 id="scss自动导入" tabindex="-1"><a class="header-anchor" href="#scss自动导入" aria-hidden="true">#</a> scss自动导入</h3>
<ol>
<li>新建文件var.scss</li>
<li>在vite.config.js导入样式文件</li>
<li>用就行了</li>
</ol>
<div class="language-scss line-numbers-mode" data-ext="scss"><pre v-pre class="language-scss"><code><span class="token comment">// src/styles/var.scss</span>

<span class="token property"><span class="token variable">$xtxColor</span></span><span class="token punctuation">:</span> #27ba9b<span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$helpColor</span></span><span class="token punctuation">:</span> #e26237<span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$sucColor</span></span><span class="token punctuation">:</span> #1dc779<span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$warnColor</span></span><span class="token punctuation">:</span> #ffb302<span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$priceColor</span></span><span class="token punctuation">:</span> #cf4444<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// vite.config.js</span>

<span class="token literal-property property">css</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">preprocessorOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">scss</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">additionalData</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">
				@use "@/styles/element/index.scss" as *;
				@use "@/styles/var.scss" as *;
			</span><span class="token template-punctuation string">`</span></span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="layout页" tabindex="-1"><a class="header-anchor" href="#layout页" aria-hidden="true">#</a> Layout页</h2>
<h3 id="组件结构快速搭建" tabindex="-1"><a class="header-anchor" href="#组件结构快速搭建" aria-hidden="true">#</a> 组件结构快速搭建</h3>
<ol>
<li>在Layout文件夹下新建components文件夹</li>
<li>在components下新建三个文件：LayoutNav.vue，LayoutHeader.vue，LayoutFooter.vue</li>
<li>CV静态结构</li>
<li>在Layout/index.vue下引入三个文件</li>
</ol>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code>// src/views/Layout/index.vue

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> LayoutNav <span class="token keyword">from</span> <span class="token string">'./components/LayoutNav.vue'</span>
<span class="token keyword">import</span> LayoutHeader <span class="token keyword">from</span> <span class="token string">'./components/LayoutHeader.vue'</span>
<span class="token keyword">import</span> LayoutFooter <span class="token keyword">from</span> <span class="token string">'./components/LayoutFooter.vue'</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>LayoutNav</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>LayoutNav</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>LayoutHeader</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>LayoutHeader</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-view</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-view</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>LayoutFooter</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>LayoutFooter</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/notes/fe/vue/Vue3小兔鲜项目/md_img/image-20230914171130012.png" alt="image-20230914171130012" loading="lazy"></p>
<h3 id="字体图标渲染" tabindex="-1"><a class="header-anchor" href="#字体图标渲染" aria-hidden="true">#</a> 字体图标渲染</h3>
<p>字体图标采用阿里矢量图标的字体图标库，直接在index.html引入就行</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token comment">&lt;!-- index.html --></span> 

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>stylesheet<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>//at.alicdn.com/t/font_2143783_iq6z4ey5vu.css<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="一级导航渲染" tabindex="-1"><a class="header-anchor" href="#一级导航渲染" aria-hidden="true">#</a> 一级导航渲染</h3>
<ol>
<li>封装接口函数</li>
<li>调用接口函数</li>
<li>v-for渲染模板</li>
</ol>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// src/apis/layout.js</span>

<span class="token keyword">import</span> httpInstance <span class="token keyword">from</span> <span class="token string">'@/utils/http'</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">getCategoryApi</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">httpInstance</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">'/home/category/head'</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code>// src/views/Layout/components/LayoutHeader.vue

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> getCategoryApi <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@/apis/layout'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> onMounted<span class="token punctuation">,</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
  
<span class="token keyword">const</span> categoryList <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token function-variable function">getCategory</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">getCategoryApi</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  categoryList<span class="token punctuation">.</span>value <span class="token operator">=</span> res<span class="token punctuation">.</span>result
<span class="token punctuation">}</span>

<span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token function">getCategory</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>header</span><span class="token punctuation">></span></span>
  	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item in categoryList<span class="token punctuation">"</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item.id<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
					<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>RouterLink</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>{{ item.name }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>RouterLink</span><span class="token punctuation">></span></span>
  			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
  		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span>
 	  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>header</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="吸顶导航交互实现" tabindex="-1"><a class="header-anchor" href="#吸顶导航交互实现" aria-hidden="true">#</a> 吸顶导航交互实现</h3>
<p><img src="@source/notes/fe/vue/Vue3小兔鲜项目/md_img/image-20230915094713705.png" alt="image-20230915094713705" loading="lazy"></p>
<ol>
<li>在Layout/components下新建LayoutFixed.vue，准备静态结构</li>
<li>获取滚动距离</li>
<li>判断当前show类名是否显示，大于78显示，小于78不显示</li>
</ol>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code>// src/views/Layout/components/LayoutFixed.vue

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> useScroll <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vueuse/core'</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> y <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useScroll</span><span class="token punctuation">(</span>window<span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>app-header-sticky<span class="token punctuation">"</span></span> <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{ show: y > 78 }<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    ...
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">scoped</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>scss<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"><span class="token operator">...</span></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code>// src/views/Layout/index.vue

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> LayoutFixed <span class="token keyword">from</span> <span class="token string">'./components/LayoutFixed.vue'</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>LayoutFixed</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>LayoutFixed</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="pinia优化重复请求" tabindex="-1"><a class="header-anchor" href="#pinia优化重复请求" aria-hidden="true">#</a> Pinia优化重复请求</h3>
<p><img src="@source/notes/fe/vue/Vue3小兔鲜项目/md_img/image-20230915094651895.png" alt="image-20230915094651895" loading="lazy"></p>
<p><strong>为什么要优化？</strong></p>
<p>因为LayoutHeader和LayoutFixed所使用的数据都一样，这样会造成多次请求，浪费资源</p>
<p><strong>步骤</strong></p>
<ol>
<li>在stores下新建category.js，用来存放数据</li>
<li>重构Layout下的index.vue</li>
<li>在LayoutFixed.vue和LayoutHeader.vue使用pinia中的数据</li>
</ol>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// src/stores/category.js</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'pinia'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> getCategoryApi <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@/apis/layout'</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> useCategoryStore <span class="token operator">=</span> <span class="token function">defineStore</span><span class="token punctuation">(</span><span class="token string">'category'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> categoryList <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> <span class="token function-variable function">getCategory</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">getCategoryApi</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    categoryList<span class="token punctuation">.</span>value <span class="token operator">=</span> res<span class="token punctuation">.</span>result
  <span class="token punctuation">}</span>
  
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    categoryList<span class="token punctuation">,</span>
    getCategory
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code>// src/views/Layout/index.vue

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> useCategotyStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@/stores/category'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> onMounted <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
  
<span class="token keyword">const</span> categoryStore <span class="token operator">=</span> <span class="token function">useCategoryStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> categoryStore<span class="token punctuation">.</span><span class="token function">getCategory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code>// src/views/Layout/components/LayoutFixed.vue

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> useCategoryStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@/stores/category'</span>
<span class="token keyword">const</span> categoryStore <span class="token operator">=</span> <span class="token function">useCategoryStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
    	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">></span></span>
      	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>home<span class="token punctuation">"</span></span> 
            <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item in categoryStore.categoryList<span class="token punctuation">"</span></span> 
            <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item.id<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>RouterLink</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>{{ item.name }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>RouterLink</span><span class="token punctuation">></span></span>
  			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>  
  		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span>  
  	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code>// src/views/Layoute/components/LayoutHeader.vue

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> useCategoryStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@/stores/category'</span>
<span class="token keyword">const</span> categoryStore <span class="token operator">=</span> <span class="token function">useCategoryStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>header</span><span class="token punctuation">></span></span>
  	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>
    	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">></span></span>
      	  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>home<span class="token punctuation">"</span></span>
              <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item in categoryStore.categoryList<span class="token punctuation">"</span></span>
              <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item.id<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  					<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>RouterLink</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>{{ item.name }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>RouterLink</span><span class="token punctuation">></span></span>
  				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
  		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span>  
  	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>header</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="home页" tabindex="-1"><a class="header-anchor" href="#home页" aria-hidden="true">#</a> Home页</h2>
<h3 id="整体结构创建" tabindex="-1"><a class="header-anchor" href="#整体结构创建" aria-hidden="true">#</a> 整体结构创建</h3>
<p><img src="@source/notes/fe/vue/Vue3小兔鲜项目/md_img/1675417667651-eb841c73-5b36-48a5-a8ee-118dbeaaeb0d.png" alt="image.png" loading="lazy"></p>
<ol>
<li>在Home下新建文件夹components，新增五个组件
<ul>
<li>HomeCategory</li>
<li>HomeBanner</li>
<li>HomeNew</li>
<li>HomeHot</li>
<li>HomeProduce</li>
</ul>
</li>
<li>在Home的index.vue引入这五个组件</li>
</ol>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code>// src/views/Home/index.vue

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> HomeCategory <span class="token keyword">from</span> <span class="token string">'./components/HomeCategory.vue'</span>
<span class="token keyword">import</span> HomeBanner <span class="token keyword">from</span> <span class="token string">'./components/HomeBanner.vue'</span>
<span class="token keyword">import</span> HomeNew <span class="token keyword">from</span> <span class="token string">'./components/HomeNew.vue'</span>
<span class="token keyword">import</span> HomeHot <span class="token keyword">from</span> <span class="token string">'./components/HomeHot.vue'</span>
<span class="token keyword">import</span> HomeProduct <span class="token keyword">from</span> <span class="token string">'./components/HomeProduct.vue'</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>HomeCategory</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>HomeCategory</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>HomeBanner</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>HomeBanner</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>HomeNew</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>HomeNew</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>HomeHot</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>HomeHot</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>HomeProduct</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>HomeProduct</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="实现分类" tabindex="-1"><a class="header-anchor" href="#实现分类" aria-hidden="true">#</a> 实现分类</h3>
<ol>
<li>将模板CV到HomeCategory.vue</li>
<li>完善代码</li>
</ol>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code>// src/views/Home/components/HomeCategory.vue

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> useCategoryStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@/stores/category'</span>
<span class="token keyword">const</span> categoryStore <span class="token operator">=</span> <span class="token function">useCategoryStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">></span></span>
    	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item in categoryStore.categoryList<span class="token punctuation">"</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item.id<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>RouterLink</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>{{ item.name }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>RouterLink</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>RouterLink</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>i in item.children,slice(0, 2)<span class="token punctuation">"</span></span> 
                    <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>i.id</span>
                    <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  				{{ i.name }}
  			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>RouterLink</span><span class="token punctuation">></span></span>
        <span class="token comment">&lt;!-- 弹层layer位置 --></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
        	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h4</span><span class="token punctuation">></span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h4</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">></span></span>
  					<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>i in item.goods<span class="token punctuation">"</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>i.id<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  						<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>RouterLink</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  							<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">:src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>i.picture<span class="token punctuation">"</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
                	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>name ellipsis-2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>{{ i.name }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
                  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>desc ellipsis<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>{{ i.desc }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
                  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>price<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span><span class="token punctuation">></span></span>￥<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>i</span><span class="token punctuation">></span></span>{{ i.price }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
  							<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  						<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>RouterLink</span><span class="token punctuation">></span></span>
  					<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
  				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span>
  			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>  
  	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="banner轮播图实现" tabindex="-1"><a class="header-anchor" href="#banner轮播图实现" aria-hidden="true">#</a> Banner轮播图实现</h3>
<ol>
<li>在apis下新建home.js</li>
</ol>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// src/apis/home.js</span>

<span class="token keyword">import</span> httpInstance <span class="token keyword">from</span> <span class="token string">'@/utils/http'</span>

<span class="token comment">// 获取banner</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">getBannerApi</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">httpInstance</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">'/home/banner'</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>获取数据渲染模板，完善代码</li>
</ol>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code>// src/views/Home/components/HomeBanner.vue

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> getBannerApi <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@/apis/home'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span> onMounted <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
  
<span class="token keyword">const</span> bannerList <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token function-variable function">getBanner</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">getBannerApi</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  bannerList<span class="token punctuation">.</span>value <span class="token operator">=</span> res<span class="token punctuation">.</span>result
<span class="token punctuation">}</span>

<span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">getBanner</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-carousel</span><span class="token punctuation">></span></span>
  		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-carousel-item</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item in bannerList<span class="token punctuation">"</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item.id<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">:src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item.imgUrl<span class="token punctuation">"</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
  		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-carousel-item</span><span class="token punctuation">></span></span>
  	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-carousel</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="封装面板" tabindex="-1"><a class="header-anchor" href="#封装面板" aria-hidden="true">#</a> 封装面板</h3>
<ol>
<li>不做任何抽象，准备静态模板</li>
<li>抽象可变的部分
<ul>
<li>主标题和副标题是<strong>纯文本</strong>，可以抽象成<strong>prop</strong>传入</li>
<li>主题内容是<strong>复杂</strong>的模板，抽象成<strong>插槽</strong>传入</li>
</ul>
</li>
</ol>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code>// src/views/Home/components/HomePannel.vue

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token function">defineProps</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// 主标题</span>
  <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> String
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 副标题</span>
  <span class="token literal-property property">subTitle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> String
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>head<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token comment">&lt;!-- 主标题和副标题 --></span>
      	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">></span></span>
        	{{ title }}
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>small</span><span class="token punctuation">></span></span>{{ subTitle }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>small</span><span class="token punctuation">></span></span>
  			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">></span></span>  
  		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span> <span class="token punctuation">/></span></span>
  	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="新鲜好物实现" tabindex="-1"><a class="header-anchor" href="#新鲜好物实现" aria-hidden="true">#</a> 新鲜好物实现</h3>
<p><img src="@source/notes/fe/vue/Vue3小兔鲜项目/md_img/image-20230915153107728.png" alt="image-20230915153107728" loading="lazy"></p>
<ol>
<li>准备模板</li>
<li>封装接口</li>
</ol>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// src/apis/home.js</span>

<span class="token doc-comment comment">/** 
* <span class="token keyword">@description</span>: 获取新鲜好物
* <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span>
* <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span>
*/</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">findNewApi</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">httpInstance</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">'/home/new'</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>渲染数据</li>
</ol>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code>// src/views/Home/components/HomeNew.vue

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> HomePannel <span class="token keyword">from</span> <span class="token string">'./HomePannel.vue'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> findNewApi <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@/apis/home'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span> onMounted <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
  
<span class="token comment">// 获取数据</span>
<span class="token keyword">const</span> newList <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token function-variable function">getNewList</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">findNewApi</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  newList<span class="token punctuation">.</span>value <span class="token operator">=</span> res<span class="token punctuation">.</span>result
<span class="token punctuation">}</span>

<span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">getNewList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>HomePannel</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>新鲜好物<span class="token punctuation">"</span></span> <span class="token attr-name">subTitl</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>新鲜出炉 品质靠谱<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>goods-list<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item in newList<span class="token punctuation">"</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item.id<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>RouterLink</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">:src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>iitem.price<span class="token punctuation">"</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>name<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>{{ item.name }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>price<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token entity named-entity" title="&yen;">&amp;yen;</span>{{ item.price }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
  			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>RouterLink</span><span class="token punctuation">></span></span>
  		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>  
  	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>HomePannel</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/notes/fe/vue/Vue3小兔鲜项目/md_img/image-20230915152128303.png" alt="image-20230915152128303" loading="lazy"></p>
<h3 id="人气推荐" tabindex="-1"><a class="header-anchor" href="#人气推荐" aria-hidden="true">#</a> 人气推荐</h3>
<ol>
<li>封装接口</li>
</ol>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// src/apis/home.js</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span>: 获取人气推荐
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span>
 * */</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">findHotApi</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">httpInstance</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">'/home/hot'</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>渲染数据</li>
</ol>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code>// src/views/Home/components/HomeHot.vue

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token operator">...</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> findHotApi <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@/apis/home'</span>
<span class="token keyword">const</span> HotList <span class="token operator">=</span><span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token function-variable function">getHotList</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">findHotApi</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  HotList<span class="token punctuation">.</span>value <span class="token operator">=</span> res<span class="token punctuation">.</span>result
<span class="token punctuation">}</span>
<span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">getHotList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>HomePannel</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>人气推荐<span class="token punctuation">"</span></span> <span class="token attr-name">subTitle</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>人气爆款 不容错过<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>goods-list<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item in HotList<span class="token punctuation">"</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item.id<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>RouterLink</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">:src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item.picture<span class="token punctuation">"</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>name<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>{{ item.name }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>desc<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>{{ item.alt }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>RouterLink</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>HomePannel</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="图片懒加载实现" tabindex="-1"><a class="header-anchor" href="#图片懒加载实现" aria-hidden="true">#</a> 图片懒加载实现</h3>
<p><img src="@source/notes/fe/vue/Vue3小兔鲜项目/md_img/image-20230918093735686.png" alt="image-20230918093735686" loading="lazy"></p>
<ol>
<li>封装全局指令</li>
</ol>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// src/main.js</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> useIntersectionObserver <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vueuse/core'</span>
app<span class="token punctuation">.</span><span class="token function">directive</span><span class="token punctuation">(</span><span class="token string">'img-lazy'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token parameter">el<span class="token punctuation">,</span> binding</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">useIntersectionObserver</span><span class="token punctuation">(</span>el<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">[</span><span class="token punctuation">{</span> isIntersecting <span class="token punctuation">}</span><span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>isIntersecting<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        el<span class="token punctuation">.</span>src <span class="token operator">=</span> binding<span class="token punctuation">.</span>value
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>实现图片懒加载</li>
</ol>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code>// src/views/Home/components/HomeHot.vue

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>HomePannel</span><span class="token punctuation">></span></span>
  	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">></span></span>
    	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>
  			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>RouterLink</span><span class="token punctuation">></span></span>
  				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">v-img-lazy</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item.picture<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>RouterLink</span><span class="token punctuation">></span></span>
  		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>  
  	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>HomePannel</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但是，这样会把main.js写的太多太复杂，所以需要把它封装出去作为插件</p>
<p>而且，<code v-pre>useIntersectionObserver</code>是一直在监听的，浪费内存，图片都加载出来了就不需要再监听了</p>
<p>因此，改写如下：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// src/directives/index.js</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> useIntersectionObserver <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vueuse/core'</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> lazyPlugin <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function">install</span><span class="token punctuation">(</span><span class="token parameter">app</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    app<span class="token punctuation">.</span><span class="token function">directive</span><span class="token punctuation">(</span><span class="token string">'img-lazy'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
      <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token parameter">el<span class="token punctuation">,</span> binding</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> <span class="token punctuation">{</span> stop <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useIntersectionObserver</span><span class="token punctuation">(</span>el<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">[</span><span class="token punctuation">{</span>isIntersecting<span class="token punctuation">}</span><span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span>isIntersecting<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            el<span class="token punctuation">.</span>src <span class="token operator">=</span> binding<span class="token punctuation">.</span>value
            <span class="token function">stop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="product产品列表实现" tabindex="-1"><a class="header-anchor" href="#product产品列表实现" aria-hidden="true">#</a> Product产品列表实现</h3>
<p><img src="@source/notes/fe/vue/Vue3小兔鲜项目/md_img/image-20230918102734982.png" alt="image-20230918102734982" loading="lazy"></p>
<ol>
<li>准备静态模板</li>
<li>封装接口</li>
</ol>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// src/apis/home.js</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@description</span>: 获取所有商品模块
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">getGoodsApi</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">httpInstance</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">'/home/goods'</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>获取并渲染数据</li>
</ol>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code>// src/views/Home/components/HomeProduct.vue

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> HomePannel <span class="token keyword">from</span> <span class="token string">'./HomePannel.vue'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> getGoodsApi <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@/apis/home'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span> onMounted <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
  
<span class="token keyword">const</span> goodsProduct <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token function-variable function">getGoods</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">getGoodsApi</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  goodsProduct<span class="token punctuation">.</span>value <span class="token operator">=</span> res<span class="token punctuation">.</span>result
<span class="token punctuation">}</span>

<span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token function">getGoods</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>HomePannel</span><span class="token punctuation">></span></span>
  		...
  	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>HomePannel</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4">
<li>图片懒加载</li>
</ol>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code>// src/views/Home/components/HomeProduct.vue

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>HomePannel</span><span class="token punctuation">></span></span>
  		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
      	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>RouterLink</span><span class="token punctuation">></span></span>
  				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">v-img-lazy</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>cate.picture<span class="token punctuation">'</span></span><span class="token punctuation">></span></span>
  			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>RouterLink</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">></span></span>
        	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>
  					<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>RouterLink</span><span class="token punctuation">></span></span>
  						<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">v-img-lazy</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>good.picture<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  					<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>RouterLink</span><span class="token punctuation">></span></span>
  				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>  
  			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span>
  		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>HomePannel</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="goodsitem组件封装" tabindex="-1"><a class="header-anchor" href="#goodsitem组件封装" aria-hidden="true">#</a> GoodsItem组件封装</h3>
<p><img src="@source/notes/fe/vue/Vue3小兔鲜项目/md_img/image-20230918110309003.png" alt="image-20230918110309003" loading="lazy"></p>
<ol>
<li>封装组件</li>
</ol>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code>// src/views/Home/components/GoodsItem.vue

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token function">defineProps</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">goods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> Object<span class="token punctuation">,</span>
    <span class="token function-variable function">default</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>使用组件</li>
</ol>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code>// src/views/Home/components/HomeProduct.vue

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> GoodsItem <span class="token keyword">from</span> <span class="token string">'./GoodsItem.vue'</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>HomePannel</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>cate in goodsProduct<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      ...
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">></span></span>
      	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>
  				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>GoodsItem</span> <span class="token attr-name">:goods</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>goods<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>GoodsItem</span><span class="token punctuation">></span></span>
  			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>  
  		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span>
  	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>HomePannel</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="一级分类页" tabindex="-1"><a class="header-anchor" href="#一级分类页" aria-hidden="true">#</a> 一级分类页</h2>
<h3 id="准备路由" tabindex="-1"><a class="header-anchor" href="#准备路由" aria-hidden="true">#</a> 准备路由</h3>
<ol>
<li>准备静态结构的搭建</li>
<li>配置路由</li>
</ol>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// src/router/index.js</span>

<span class="token literal-property property">routers</span><span class="token operator">:</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">component</span><span class="token operator">:</span> Layout<span class="token punctuation">,</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'category/:id'</span><span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token operator">...</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code>// src/views/Layout/components/LayoutHeader.vue

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>header</span><span class="token punctuation">></span></span>
  	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
    	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">></span></span>
  			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>
  				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>RouterLink</span> <span class="token attr-name">:to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>`/category/${item.id}`<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>{{ item.name }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>RouterLink</span><span class="token punctuation">></span></span>
  			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
  		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span>
  	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>header</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code>// src/views/Layout/components/LayoutFixed.vue

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
    	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">></span></span>
      	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>  
  		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span>  
  	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="面包屑导航" tabindex="-1"><a class="header-anchor" href="#面包屑导航" aria-hidden="true">#</a> 面包屑导航</h3>
<ol>
<li>准备静态组件模板</li>
<li>封装接口</li>
</ol>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// src/apis/category.js</span>

<span class="token keyword">import</span> request <span class="token keyword">from</span> <span class="token string">'@/utils/http'</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">getCategoryApi</span><span class="token punctuation">(</span><span class="token parameter">id</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">'/category'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">params</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      id
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>渲染面包屑导航</li>
</ol>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code>// src/views/Category/index.vue

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> getCategoryApi <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@/apis/category'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span> onMounted <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useRoute <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue-router'</span>
  
<span class="token keyword">const</span> categoryData <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> route <span class="token operator">=</span> <span class="token function">useRoute</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> <span class="token function-variable function">getCategory</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">getCategoryApi</span><span class="token punctuation">(</span>route<span class="token punctuation">.</span>params<span class="token punctuation">.</span>id<span class="token punctuation">)</span>
  categoryData<span class="token punctuation">.</span>value <span class="token operator">=</span> res<span class="token punctuation">.</span>result
<span class="token punctuation">}</span>

<span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token function">getCategory</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
      <span class="token comment">&lt;!-- 面包屑 --></span>
    	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
      	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-breadcrumb-item</span> <span class="token attr-name">:to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{ path: '/' }<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-breadcrumb-item</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-breadcrumb-item</span><span class="token punctuation">></span></span>{{ categoryData.name }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-breadcrumb-item</span><span class="token punctuation">></span></span>
  		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>  
  	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="一级分类-轮播图的实现" tabindex="-1"><a class="header-anchor" href="#一级分类-轮播图的实现" aria-hidden="true">#</a> 一级分类-轮播图的实现</h3>
<ol>
<li>适配接口</li>
</ol>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// src/apis/home.js</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">getBannerApi</span><span class="token punctuation">(</span><span class="token parameter">params <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token comment">// 默认为1，商品为2</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> distributionSite <span class="token operator">=</span> <span class="token string">'1'</span> <span class="token punctuation">}</span> <span class="token operator">=</span> params
  <span class="token keyword">return</span> <span class="token function">httpInstance</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">'/home/banner'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">params</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      distributionSite
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>渲染banner</li>
</ol>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code>// src/views/Category/index.vue

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> getBannerApi <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@/apis/home'</span>

<span class="token keyword">const</span> bannerList <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token function-variable function">getBanner</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">getBannerApi</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">distributionSite</span><span class="token operator">:</span> <span class="token string">'2'</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  bannerList<span class="token punctuation">.</span>value <span class="token operator">=</span> res<span class="token punctuation">.</span>result
<span class="token punctuation">}</span>
<span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">getBanner</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>bread-container<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>home-banner<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-carousel</span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>500px<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-carousel-item</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item in bannerList<span class="token punctuation">"</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item.id<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  					<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">:src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item.imgUrl<span class="token punctuation">"</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
  				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-carousel-item</span><span class="token punctuation">></span></span>
  			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-carousel</span><span class="token punctuation">></span></span>
  		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
 		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="导航激活与分类列表渲染" tabindex="-1"><a class="header-anchor" href="#导航激活与分类列表渲染" aria-hidden="true">#</a> 导航激活与分类列表渲染</h3>
<h4 id="导航激活" tabindex="-1"><a class="header-anchor" href="#导航激活" aria-hidden="true">#</a> 导航激活</h4>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code>// src/views/Layout/components/LayoutHeader.vue
// src/views/Layout/components/LayoutFixed.vue

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>RouterLink</span> <span class="token attr-name">:to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>`/category/${item.id}`<span class="token punctuation">"</span></span> <span class="token attr-name">active-class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>active<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  	{{ item.name }}
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>RouterLink</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="分类列表渲染" tabindex="-1"><a class="header-anchor" href="#分类列表渲染" aria-hidden="true">#</a> 分类列表渲染</h4>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code>// src/views/Category/index.vue

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>sub-list<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">></span></span>全部分类<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">></span></span>
    	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>i in categoryData.children<span class="token punctuation">"</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>i.id<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>RouterLink</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">:src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>i.picture<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>{{ i.name }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
  			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>RouterLink</span><span class="token punctuation">></span></span>
  		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>  
  	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="路由缓存问题" tabindex="-1"><a class="header-anchor" href="#路由缓存问题" aria-hidden="true">#</a> 路由缓存问题</h3>
<blockquote>
<p>现在，如果你好奇心重一点的话，你会发现，从“居家”直接跳到“美食”上，页面是不会进行切换的，唯有重新点进去首页，再点到“美食”，页面才会重新加载到相对应的数据上。</p>
<p>这是因为vue3中，当用户从<code v-pre>/user/johny</code>，导航到<code v-pre>/users/jolyne</code>时，<strong>相同的组件实例将会被重复使用，同时这也意味着组件的生命周期钩子不会被调用</strong>。</p>
</blockquote>
<p>解决思路：</p>
<ol>
<li>让组件实例不复用，强制销毁重建（但是会导致Banner图也跟着一起重新刷新）</li>
</ol>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code>// src/views/Layout/index.vue

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-view</span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>$route.fullPath<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-view</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>监听路有变化， 变化之后执行数据更新操作（使用<code v-pre>beforeRouteUpdate</code>钩子函数）</li>
</ol>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code>// src/view/Category/index.vue

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> onBeforeRouteUpdate <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue-router'</span>
  
<span class="token keyword">const</span> <span class="token function-variable function">getCategory</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">id <span class="token operator">=</span> route<span class="token punctuation">.</span>params<span class="token punctuation">.</span>id</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">getCategoryApi</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span>
  categoryData<span class="token punctuation">.</span>value <span class="token operator">=</span> res<span class="token punctuation">.</span>result
<span class="token punctuation">}</span>
  
<span class="token function">onBeforeRouteUpdate</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">to</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token function">getCategory</span><span class="token punctuation">(</span>to<span class="token punctuation">.</span>params<span class="token punctuation">.</span>id<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="基于业务逻辑的函数拆分" tabindex="-1"><a class="header-anchor" href="#基于业务逻辑的函数拆分" aria-hidden="true">#</a> 基于业务逻辑的函数拆分</h3>
<ol>
<li>按照业务声明以'use'打头的逻辑函数</li>
<li>把独立的业务逻辑封装到各个函数内部</li>
<li>函数内部把组件中需要用到的数据或者方法return出去</li>
<li>在组件中调用函数把数据或者方法组合回来使用</li>
</ol>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// src/views/Category/composables/useCategory.js</span>

<span class="token comment">// 封装分类数据业务相关代码</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> onMounted<span class="token punctuation">,</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> getCategoryApi <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@/apis/category'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useRoute <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue-router'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> onBeforeRouteUpdate <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue-router'</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">useCategory</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> categoryData <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> route <span class="token operator">=</span> <span class="token function">useRoute</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  cconst <span class="token function-variable function">getCategory</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">id <span class="token operator">=</span> route<span class="token punctuation">.</span>params<span class="token punctuation">.</span>id</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">getCategoryApi</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span>
    categoryData<span class="token punctuation">.</span>value <span class="token operator">=</span> res<span class="token punctuation">.</span>result
  <span class="token punctuation">}</span>
  <span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">getCategory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  
  <span class="token function">onBeforeRouteUpdate</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">to</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">getCategory</span><span class="token punctuation">(</span>to<span class="token punctuation">.</span>params<span class="token punctuation">.</span>id<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    categoryData
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// src/views/Category/composables/useBanner.js</span>

<span class="token comment">// 封装Banner轮播图相关业务相关代码</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span> onMounted <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> getBannerApi <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@/apis/home'</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">useBanner</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> bannerList <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> <span class="token function-variable function">getBanner</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">getBannerApi</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">distributionSite</span><span class="token operator">:</span> <span class="token string">'2'</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    bannerList<span class="token punctuation">.</span>value <span class="token operator">=</span> res<span class="token punctuation">.</span>result
  <span class="token punctuation">}</span>
  <span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">getBanner</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    bannerList
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code>// src/views/Category/index.vue

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> GoodsItem <span class="token keyword">from</span> <span class="token string">'./Home/components/GoodsItem.vue'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useBanner <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./composables/useBanner'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useCategory <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./composables/useCategory'</span>
  
<span class="token keyword">const</span> <span class="token punctuation">{</span> bannerList <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useBanner</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> categoryData <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useCategory</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二级路由-1" tabindex="-1"><a class="header-anchor" href="#二级路由-1" aria-hidden="true">#</a> 二级路由</h2>
<h3 id="整体业务与路由配置" tabindex="-1"><a class="header-anchor" href="#整体业务与路由配置" aria-hidden="true">#</a> 整体业务与路由配置</h3>
<ol>
<li>准备组件模板(src/views/SubCategory/index.vue)</li>
<li>配置路由关系</li>
</ol>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// src/router/index.js</span>

<span class="token literal-property property">routes</span><span class="token operator">:</span><span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token operator">...</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'category/sub/:id'</span><span class="token punctuation">,</span> <span class="token literal-property property">component</span><span class="token operator">:</span> SubCategory <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>配置跳转</li>
</ol>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code>// src/views/Category/index.vue

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>sub-list<span class="token punctuation">"</span></span><span class="token punctuation">></span></span> 
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">></span></span>全部分类<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">></span></span>
    	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>i in categoryData.children<span class="token punctuation">"</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>i.id<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Routerlink</span> <span class="token attr-name">:to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>`/category/sub/${i.id}`<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">:src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>i.picture<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>{{ i.name }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
  			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Routerlink</span><span class="token punctuation">></span></span>
  		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>  
  	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="二级分类面包屑导航" tabindex="-1"><a class="header-anchor" href="#二级分类面包屑导航" aria-hidden="true">#</a> 二级分类面包屑导航</h3>
<ol>
<li>准备接口</li>
</ol>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// src/apis/category.js</span>

<span class="token doc-comment comment">/** 
* <span class="token keyword">@description</span>: 获取二级分类列表数据
* <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">id</span> 分类id
* <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span>
*/</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">getCategoryFilterAPI</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">id</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">'/category/sub/filter'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">params</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      id
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>获取数据渲染模板</li>
</ol>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code>// src/views/SubCategory/index.vue

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> getCategoryFIlterAPI <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@/apis/category'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>ref<span class="token punctuation">,</span> onMounted <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useRoute <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue-router'</span>
  
<span class="token comment">// 获取面包屑导航数据</span>
<span class="token keyword">const</span> categoryData <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> route <span class="token operator">=</span> <span class="token function">useRoute</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token function-variable function">getCategoryData</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">getCategoryFilterAPI</span><span class="token punctuation">(</span>route<span class="token punctuation">.</span>params<span class="token punctuation">.</span>id<span class="token punctuation">)</span>
  categoryData<span class="token punctuation">.</span>value <span class="token operator">=</span> res<span class="token punctuation">.</span>result
<span class="token punctuation">}</span>
<span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token function">getCategoryData</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>container<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>bread-container<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-breadcrumb</span> <span class="token attr-name">separator</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-breadcrumb-item</span> <span class="token attr-name">:to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{ path: '/'}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>首页<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-breadcrumb-item</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-breadcrumb-item</span> <span class="token attr-name">:to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{ path: `/category/${{ categoryData.parentId`}<span class="token punctuation">"</span></span>
                            <span class="token punctuation">></span></span>
  				{{ categoryData.parentName }}
  			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-breadcrumb-item</span><span class="token punctuation">></span></span>
  		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-breadcrumb</span><span class="token punctuation">></span></span>
  	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="分类基础列表实现" tabindex="-1"><a class="header-anchor" href="#分类基础列表实现" aria-hidden="true">#</a> 分类基础列表实现</h3>
<ol>
<li>准备接口</li>
</ol>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// src/apis/category.js</span>

<span class="token doc-comment comment">/** 
* <span class="token keyword">@description</span>: 获取导航数据
* <span class="token keyword">@data</span> <span class="token class-name"><span class="token punctuation">{</span>
		categoryId<span class="token operator">:</span> <span class="token number">1005000</span><span class="token punctuation">,</span>
		page<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
		pageSize<span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
		sortField<span class="token operator">:</span> <span class="token string">'publishTime'</span> <span class="token operator">|</span> <span class="token string">'orderNum'</span> <span class="token operator">|</span> <span class="token string">'evaluateNum'</span>
	<span class="token punctuation">}</span></span>
* <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span>
*/</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">getSubCategoryAPI</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">date</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">'/category/goods/temporay'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">'POST'</span><span class="token punctuation">,</span>
    data
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>渲染获取到的数据列表</li>
</ol>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code>// src/views/SubCategory/index.vue

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">const</span> goodList <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> reqData <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">categoryId</span><span class="token operator">:</span> route<span class="token punctuation">.</span>params<span class="token punctuation">.</span>id<span class="token punctuation">,</span>
  <span class="token literal-property property">page</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token literal-property property">pageSize</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
  <span class="token literal-property property">sortField</span><span class="token operator">:</span> <span class="token string">'publishTime'</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token function-variable function">getGoodList</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">getSubCategoryAPI</span><span class="token punctuation">(</span>reqData<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
  goodList<span class="token punctuation">.</span>value <span class="token operator">=</span> res<span class="token punctuation">.</span>result<span class="token punctuation">.</span>items
<span class="token punctuation">}</span>
<span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token function">getGoodList</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>body<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  	<span class="token comment">&lt;!-- 商品列表 --></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>GoodsItem</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>goods in goodList<span class="token punctuation">"</span></span> <span class="token attr-name">:goods</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>goods<span class="token punctuation">"</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>goods.id<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>GoodsItem</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="列表筛选实现" tabindex="-1"><a class="header-anchor" href="#列表筛选实现" aria-hidden="true">#</a> 列表筛选实现</h3>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code>// src/views/SubCategory/index.vue

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">const</span> <span class="token function-variable function">tabChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token comment">// 重置第一页</span>
  reqData<span class="token punctuation">.</span>value<span class="token punctuation">.</span>page <span class="token operator">=</span> <span class="token number">1</span>
  <span class="token function">getGoodList</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>sub-container<span class="token punctuation">'</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-tabs</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>reqData.sortField<span class="token punctuation">"</span></span> <span class="token attr-name">@tab-change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tabChange<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-tab-pane</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>最新商品<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>publishTime<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-tab-pane</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-tab-pane</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>最高人气<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>orderNum<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-tab-pane</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-tab-pane</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>评论最多<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>evaluateNum<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-tab-pane</span><span class="token punctuation">></span></span>
  	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-tabs</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="列表无限加载" tabindex="-1"><a class="header-anchor" href="#列表无限加载" aria-hidden="true">#</a> 列表无限加载</h3>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code>// src/views/SubCategory/index.vue

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">const</span> disabled <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token function-variable function">load</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token comment">// 获取下一页的数据</span>
  reqData<span class="token punctuation">.</span>value<span class="token punctuation">.</span>page<span class="token operator">++</span>
  <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">getSubCategoryAPI</span><span class="token punctuation">(</span>reqData<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
  goodList<span class="token punctuation">.</span>value <span class="token operator">-</span> <span class="token punctuation">[</span><span class="token operator">...</span>goodList<span class="token punctuation">.</span>value<span class="token punctuation">,</span> <span class="token operator">...</span>res<span class="token punctuation">.</span>result<span class="token punctuation">.</span>items<span class="token punctuation">]</span>
  <span class="token comment">// 加载完毕，停止监听</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>res<span class="token punctuation">.</span>result<span class="token punctuation">.</span>items<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    disabled<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>body<span class="token punctuation">"</span></span> <span class="token attr-name">v-infinite-scroll</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>load<span class="token punctuation">"</span></span> 
       <span class="token attr-name">:infinite-scroll-disabled</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>disabled<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>GoodsItem</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>GoodsItem</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="路由滚动行为定制" tabindex="-1"><a class="header-anchor" href="#路由滚动行为定制" aria-hidden="true">#</a> 路由滚动行为定制</h3>
<p>目的是为了跳转页面的时候能自动切换到顶部</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// src/router/index.js</span>

<span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token function">createRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// 路由滚动行为定制</span>
  <span class="token function">scrollBehavior</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">top</span><span class="token operator">:</span> <span class="token number">0</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="商品详情页" tabindex="-1"><a class="header-anchor" href="#商品详情页" aria-hidden="true">#</a> 商品详情页</h2>
<h3 id="前期工作" tabindex="-1"><a class="header-anchor" href="#前期工作" aria-hidden="true">#</a> 前期工作</h3>
<ol>
<li>配置静态模板</li>
<li>配置路由</li>
</ol>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// src/router/index.js</span>

<span class="token keyword">import</span> Detail <span class="token keyword">from</span> <span class="token string">'@/views/Detail/index.vue'</span>

<span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token function">createRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">routes</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token operator">...</span><span class="token punctuation">,</span>
      <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      	<span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'detail/:id'</span><span class="token punctuation">,</span> <span class="token literal-property property">component</span><span class="token operator">:</span> Detail
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>绑定首页测试跳转</li>
</ol>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code>// src/views/Home/components/HomeNew.vue

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>HomePannel</span><span class="token punctuation">></span></span>
  	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">></span></span>
    	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>
  			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>RouterLink</span> <span class="token attr-name">:to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>`/detail/${item.id}`<span class="token punctuation">'</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>RouterLink</span><span class="token punctuation">></span></span>
  		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>  
  	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>HomePannel</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="渲染基础数据" tabindex="-1"><a class="header-anchor" href="#渲染基础数据" aria-hidden="true">#</a> 渲染基础数据</h3>
<ol>
<li>封装接口</li>
</ol>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// src/apis/detail.js</span>

<span class="token keyword">import</span> request <span class="token keyword">from</span> <span class="token string">'@/utils/http'</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">getDetail</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">id</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">'/goods'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">params</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      id
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>获取数据渲染模型</li>
</ol>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code>// src/views/Detail/index.vue

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> getDetail <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@/aps/detail'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span> onMounted <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useRoute <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue-router'</span>

<span class="token keyword">const</span> goods <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> route <span class="token operator">=</span> <span class="token function">useRoute</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token function-variable function">getGoods</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">getDetail</span><span class="token punctuation">(</span>route<span class="token punctuation">.</span>params<span class="token punctuation">.</span>id<span class="token punctuation">)</span>
  goods<span class="token punctuation">.</span>value <span class="token operator">=</span> res<span class="token punctuation">.</span>result
<span class="token punctuation">}</span>

<span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token function">getGoods</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>container<span class="token punctuation">"</span></span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>goods.details<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>bread-container<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-breadcrumb-item</span> <span class="token attr-name">:to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{ path: '/' }<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>首页<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-breadcrumb-item</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-breadcrumb-item</span> 
      	<span class="token attr-name">:to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{ path: `/category/${goods.categories[1].id}`}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  			{{ goods.categories[1].name }}
  		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-breadcrumb-item</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-breadcrumb-item</span>
      	<span class="token attr-name">:to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{ path: `/category/sub/${goods.categories[0].id}`}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  			{{ goods.categories[0].name s}}
  		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-breadcrumb-item</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>  
    <span class="token comment">&lt;!-- 商品信息 --></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
    	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
      	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>goods-info<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>media<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
          <span class="token comment">&lt;!-- 统计数量 --></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>spec<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            <span class="token comment">&lt;!-- 商品信息 --></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>g-name<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>{{ goods.name }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>g-desc<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>{{ goods.desc }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>g-price<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  						<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span>{{ goods.price }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span>{{ goods.oldPrice }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
  					<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
  				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>goods-footer<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
          ...
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item in goods.details.properties<span class="token punctuation">"</span></span> 
                <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item.value<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  						<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>dt<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>{{ item.name }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>dd<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>{{ item.value }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
  					<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
  				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span>
          <span class="token comment">&lt;!-- 图片 --></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>img in goods.details.pictures<span class="token punctuation">"</span></span> <span class="token attr-name">:src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>img<span class="token punctuation">"</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>img<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意</strong></p>
<p>渲染模板时遇到对象的多层属性访问，会存在报错</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>good<span class="token punctuation">.</span>details<span class="token punctuation">.</span>pictures
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote>
<p>TypeError: Cannot read properties of undefined (reading 'properties')</p>
</blockquote>
<p>首次渲染的时候good可能是一个空对象，所以后面是选不到值的</p>
<p>解决办法：</p>
<ol>
<li>可选链</li>
<li>v-if控制渲染</li>
</ol>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>good<span class="token punctuation">.</span>details<span class="token operator">?.</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span>prctures

v<span class="token operator">-</span><span class="token keyword">if</span><span class="token operator">=</span><span class="token string">"goods.details"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="热榜区域" tabindex="-1"><a class="header-anchor" href="#热榜区域" aria-hidden="true">#</a> 热榜区域</h3>
<ol>
<li>准备静态模板</li>
<li>添加路由</li>
</ol>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// src/apis/detail.js</span>

<span class="token doc-comment comment">/**
* 获取热榜商品
* <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Number<span class="token punctuation">}</span></span> <span class="token parameter">id</span> - 商品id
* <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Number<span class="token punctuation">}</span></span> <span class="token parameter">type</span> - 1代表24小时热销榜 2代表周热销榜
* <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Number<span class="token punctuation">}</span></span> <span class="token parameter">limit</span> - 获取个数
*/</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">getHotGoodsAPI</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>id<span class="token punctuation">,</span> type<span class="token punctuation">,</span> limit <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">'/goods/hot'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">params</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      id<span class="token punctuation">,</span>
      type<span class="token punctuation">,</span>
      limit
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>加载到页面</li>
</ol>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code>// src/views/Detail/index.vue

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> DetailHot <span class="token keyword">from</span> <span class="token string">'./components/DetailHot.vue'</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
	...
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>goods-aside</span><span class="token punctuation">></span></span>
    <span class="token comment">&lt;!-- 24小时 --></span>
  	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>DetailHot</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>DetailHot</span><span class="token punctuation">></span></span>
    <span class="token comment">&lt;!-- 周 --></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>DetailHot</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>DetailHot</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4">
<li>获取基础数据渲染模板</li>
</ol>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code>// src/views/Detail/components/DetailHot.vue

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> getHotGoodsAPI <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@/aipis/detail'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span> onMounted <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useRoute <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue-router'</span>
  
<span class="token keyword">const</span> hotList <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> route <span class="token operator">=</span> <span class="token function">useRoute</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token function-variable function">getHotList</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">getHotGoodsAPI</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">id</span><span class="token operator">:</span> route<span class="token punctuation">.</span>params<span class="token punctuation">.</span>id<span class="token punctuation">,</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token number">1</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  hotList<span class="token punctuation">.</span>value <span class="token operator">=</span> res<span class="token punctuation">.</span>result
<span class="token punctuation">}</span>
<span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token function">getHotList</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
	...
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>RouterLink</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>goods-item<span class="token punctuation">"</span></span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item in hotList<span class="token punctuation">"</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item.id<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">:src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item.picture<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>name ellipsis<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>{{ item.name }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>desc ellipsis<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>{{ item.desc }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>price<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>{{ item.price }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>RouterLink</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5">
<li>适配热榜标题</li>
</ol>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code>// src/views/Detail/components/DetailHot.vue

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">const</span> props <span class="token operator">=</span> <span class="token function">defineProps</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">hotType</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> Number
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code>// src/views/Detail/index.vue

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>goods-aside<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>DetailHot</span> <span class="token attr-name">:hot-type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>DetailHot</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>DetailHot</span> <span class="token attr-name">:hot-type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>DetailHot</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="6">
<li>适配热榜title</li>
</ol>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code>// src/views/Detail/components/DetailHot.vue

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token comment">// 适配 title 1-24小时热榜  2-周热榜</span>
<span class="token keyword">const</span> <span class="token constant">TYPEMAP</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token number">1</span><span class="token operator">:</span> <span class="token string">'24小时热榜'</span><span class="token punctuation">,</span>
  <span class="token number">2</span><span class="token operator">:</span> <span class="token string">'周热榜'</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> title <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token constant">TYPEMAP</span><span class="token punctuation">[</span>props<span class="token punctuation">.</span>hotType<span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> <span class="token function-variable function">getHotList</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">getHotGoodsAPI</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">id</span><span class="token operator">:</span> route<span class="token punctuation">.</span>params<span class="token punctuation">.</span>id<span class="token punctuation">,</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> props<span class="token punctuation">.</span>hotType
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  hotList<span class="token punctuation">.</span>value <span class="token operator">=</span> res<span class="token punctuation">.</span>result
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">></span></span>{{ title }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="图片预览组件封装" tabindex="-1"><a class="header-anchor" href="#图片预览组件封装" aria-hidden="true">#</a> 图片预览组件封装</h3>
<h4 id="小图切换大图显示" tabindex="-1"><a class="header-anchor" href="#小图切换大图显示" aria-hidden="true">#</a> 小图切换大图显示</h4>
<ol>
<li>准备静态模板</li>
<li>实现逻辑</li>
</ol>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code>// src/components/ImageView/index.vue

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
  
<span class="token keyword">const</span> activeIndex <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token function-variable function">enterhandler</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">i</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  activeIndex<span class="token punctuation">.</span>value <span class="token operator">=</span> i
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
	...
	<span class="token comment">&lt;!-- 左侧大图 --></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>middle<span class="token punctuation">"</span></span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>target<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">:src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>imageList[activeIndex]<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
	<span class="token comment">&lt;!-- --></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>(img, i) in imageList<span class="token punctuation">"</span></span> 
        <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>i<span class="token punctuation">"</span></span> 
        <span class="token attr-name">@mouseenter</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>enterhandler(i)<span class="token punctuation">"</span></span>
        <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{ active: i === activeIndex }<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="放大镜效果显示" tabindex="-1"><a class="header-anchor" href="#放大镜效果显示" aria-hidden="true">#</a> 放大镜效果显示</h4>
<ol>
<li>获取鼠标相对位置</li>
</ol>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code>// src/components/ImageView/index.vue

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> useMouseInElement <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vueuse/core'</span>

<span class="token keyword">const</span> target <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> elementX<span class="token punctuation">,</span> elementY<span class="token punctuation">,</span> isOutside <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useMouseInElement</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>滑块跟随鼠标移动</li>
</ol>
<p><img src="@source/notes/fe/vue/Vue3小兔鲜项目/md_img/image-20230926091456703.png" alt="image-20230926091456703" loading="lazy"></p>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code>// src/components/ImageView/index.vue

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">const</span> left <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> top <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
<span class="token function">watch</span><span class="token punctuation">(</span><span class="token punctuation">[</span>elementX<span class="token punctuation">,</span> elementY<span class="token punctuation">,</span> isOutside<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token comment">// 判断鼠标在图片里面</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>isOutside<span class="token punctuation">.</span>value<span class="token punctuation">)</span> <span class="token keyword">return</span>
	<span class="token comment">// 有效范围内控制滑块距离</span>
  <span class="token comment">// 横向</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>elementX<span class="token punctuation">.</span>value <span class="token operator">></span> <span class="token number">100</span> <span class="token operator">&amp;&amp;</span> elementX<span class="token punctuation">.</span>value <span class="token operator">&lt;</span> <span class="token number">300</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    left<span class="token punctuation">.</span>value <span class="token operator">=</span> elementX<span class="token punctuation">.</span>value <span class="token operator">-</span> <span class="token number">100</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 纵向</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>elementY<span class="token punctuation">.</span>value <span class="token operator">></span> <span class="token number">100</span> <span class="token operator">&amp;&amp;</span> elementY<span class="token punctuation">.</span>value <span class="token operator">&lt;</span> <span class="token number">300</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    top<span class="token punctuation">.</span>value <span class="token operator">=</span> elementY<span class="token punctuation">.</span>value <span class="token operator">-</span> <span class="token number">100</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 处理边界</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>elementX<span class="token punctuation">.</span>value <span class="token operator">></span> <span class="token number">300</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    left<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token number">200</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>elementX<span class="token punctuation">.</span>value <span class="token operator">&lt;</span> <span class="token number">100</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    left<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token number">0</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>elementY<span class="token punctuation">.</span>value <span class="token operator">></span> <span class="token number">300</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    top<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token number">200</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>elementY<span class="token punctuation">.</span>value <span class="token operator">&lt;</span> <span class="token number">100</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    top<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token number">0</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
	...
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
    <span class="token comment">&lt;!-- 蒙层小滑块 --></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>layer<span class="token punctuation">"</span></span> <span class="token attr-name">:style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{ left: `${left}px`, top: `${top}px`}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="大图效果实现" tabindex="-1"><a class="header-anchor" href="#大图效果实现" aria-hidden="true">#</a> 大图效果实现</h4>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code>// src/components/ImageView/index.vue

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">const</span> positionX <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> positionY <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
<span class="token function">watch</span><span class="token punctuation">(</span><span class="token punctuation">[</span>elementX<span class="token punctuation">,</span> elementY<span class="token punctuation">,</span> isOutside<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token operator">...</span>
  <span class="token comment">// 控制大图的显示</span>
  positionX<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token operator">-</span>left<span class="token punctuation">.</span>value <span class="token operator">*</span> <span class="token number">2</span>
  positionY<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token operator">-</span>top<span class="token punctuation">.</span>value <span class="token operator">*</span> <span class="token number">2</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
	<span class="token comment">&lt;!-- 蒙层小滑块 --></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>layer<span class="token punctuation">"</span></span> <span class="token attr-name">:style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{ left: `${left}px`, top: `${top}px`}<span class="token punctuation">"</span></span> 
       <span class="token attr-name">v-show</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>!isOutside<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
	<span class="token comment">&lt;!-- 放大镜大图 --></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>large<span class="token punctuation">"</span></span>
       <span class="token attr-name">:style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>[
               {
               	backgroundImage: `url(${imageList[activeIndex]})`,
               	backgroundPositionX: `${positionX}px`,
               	backgroundPositionY: `${positionY}px`
               }
               ]<span class="token punctuation">"</span></span>
       <span class="token attr-name">v-show</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>!isOutside<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="props适配图片列表" tabindex="-1"><a class="header-anchor" href="#props适配图片列表" aria-hidden="true">#</a> props适配图片列表</h4>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code>// src/components/ImageView/index.vue

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token function">defineProps</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">imageList</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> Array<span class="token punctuation">,</span>
    <span class="token function-variable function">default</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code>// src/views/Detail/index.vue

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
	<span class="token comment">&lt;!-- 商品信息 --></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
    <span class="token comment">&lt;!-- 图片预览区 --></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ImageView</span> <span class="token attr-name">:image-list</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>goods.mainPictures<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ImageView</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="sku熟悉" tabindex="-1"><a class="header-anchor" href="#sku熟悉" aria-hidden="true">#</a> sku熟悉</h4>
<ol>
<li>
<p>复制XtxSku到 /src/components 下</p>
</li>
<li>
<p>引入组件</p>
</li>
</ol>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code>// src/views/Detail/index.vue

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> XtxSku <span class="token keyword">from</span> <span class="token string">'@/components/XtxSku/index.vue'</span>

<span class="token comment">// sku规格被操作时</span>
<span class="token keyword">const</span> <span class="token function-variable function">skuChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">sku</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>sku<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
	<span class="token comment">&lt;!-- sku组件 --></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>XtxSku</span> <span class="token attr-name">:goods</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>goods<span class="token punctuation">"</span></span> <span class="token attr-name">@change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>skuChange<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>XtxSku</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="全局组件插件化" tabindex="-1"><a class="header-anchor" href="#全局组件插件化" aria-hidden="true">#</a> 全局组件插件化</h4>
<ol>
<li>把components中的所有组件通过插件的方式进行全局化注册</li>
</ol>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// src/components/index.js</span>

<span class="token keyword">import</span> ImageView <span class="token keyword">from</span> <span class="token string">'./ImageView/index.vue'</span>
<span class="token keyword">import</span> Sku <span class="token keyword">from</span> <span class="token string">'./XtxSku/index.vue'</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> componentPlugin <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function">install</span><span class="token punctuation">(</span><span class="token parameter">app</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// app.component('组件名字', 组件配置对象)</span>
    app<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">'XtxImageView'</span><span class="token punctuation">,</span> ImageView<span class="token punctuation">)</span>
    app<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">'XtxSku'</span><span class="token punctuation">,</span> Sku<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>插件注册</li>
</ol>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// src/main.js</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> componentPlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@/components'</span>

app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>componentPlugin<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>验证</li>
</ol>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code>// src/views/Detail/index.vue

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token comment">// 删掉引入</span>
<span class="token keyword">import</span> ImageView <span class="token keyword">from</span> <span class="token string">'@/components/ImageView/index.vue'</span>
<span class="token keyword">import</span> XtxSku <span class="token keyword">from</span> <span class="token string">'@/components/XtxSku/index.vue'</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
	<span class="token comment">&lt;!-- 更改名字 --></span>
	<span class="token comment">&lt;!-- 图片预览区 --></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>XtxImageView</span> <span class="token attr-name">...</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>XtxImageView</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="登录页面" tabindex="-1"><a class="header-anchor" href="#登录页面" aria-hidden="true">#</a> 登录页面</h2>
<h3 id="前期工作-1" tabindex="-1"><a class="header-anchor" href="#前期工作-1" aria-hidden="true">#</a> 前期工作</h3>
<ol>
<li>准备静态模板</li>
<li>配置路由跳转</li>
</ol>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code>// src/views/Layout/components/LayoutNav.vue

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
	...
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>
  	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>javascript:;<span class="token punctuation">"</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>$router.push('/login')<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="校验功能" tabindex="-1"><a class="header-anchor" href="#校验功能" aria-hidden="true">#</a> 校验功能</h3>
<h4 id="基础校验" tabindex="-1"><a class="header-anchor" href="#基础校验" aria-hidden="true">#</a> 基础校验</h4>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code>// src/views/Login/index.vue

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token comment">// 表单校验(账户名+密码)</span>
<span class="token comment">// 1. 准备表单对象</span>
<span class="token keyword">const</span> form <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">account</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
  <span class="token literal-property property">password</span><span class="token operator">:</span> <span class="token string">''</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 2. 准备规则对象</span>
<span class="token keyword">const</span> rules <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">account</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token literal-property property">reuqired</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">'用户名不能为空'</span><span class="token punctuation">,</span> <span class="token literal-property property">trigger</span><span class="token operator">:</span> <span class="token string">'blur'</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">password</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">required</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">'密码不能为空'</span><span class="token punctuation">,</span> <span class="token literal-property property">trigger</span><span class="token operator">:</span> <span class="token string">'blur'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">min</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token literal-property property">max</span><span class="token operator">:</span> <span class="token number">14</span><span class="token punctuation">,</span> <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">'密码长度为6-14个字符'</span><span class="token punctuation">,</span> <span class="token literal-property property">trigger</span><span class="token operator">:</span> <span class="token string">'blur'</span><span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
	...
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-form-item</span> <span class="token attr-name">prop</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>account<span class="token punctuation">"</span></span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>账户<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-input</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>form.account<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-input</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-form-item</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-form-item</span> <span class="token attr-name">prop</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>password<span class="token punctuation">"</span></span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>密码<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-input</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>form.password<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-input</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-form-item</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="自定义校验" tabindex="-1"><a class="header-anchor" href="#自定义校验" aria-hidden="true">#</a> 自定义校验</h4>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code>// src/views/Login/index.vue

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">const</span> rules <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token operator">...</span><span class="token punctuation">,</span>
  <span class="token literal-property property">agree</span><span class="token operator">:</span> <span class="token punctuation">[</span>
  	<span class="token punctuation">{</span>
  		<span class="token function-variable function">validator</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">rule<span class="token punctuation">,</span> value<span class="token punctuation">,</span> callback</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">{</span>
          <span class="token function">callback</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
          <span class="token function">callback</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">'请勾选协议'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
	...
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-form-item</span> <span class="token attr-name">label-width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>22px<span class="token punctuation">"</span></span> <span class="token attr-name">prop</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>agree<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-checkbox</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>large<span class="token punctuation">"</span></span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>form.agree<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  		我已同意隐私条款和服务条款
  	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-checkbox</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-form-item</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="表单统一校验" tabindex="-1"><a class="header-anchor" href="#表单统一校验" aria-hidden="true">#</a> 表单统一校验</h4>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code>// src/views/Login/index.vue

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">const</span> formRef <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token function-variable function">doLogin</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  formRef<span class="token punctuation">.</span>value<span class="token operator">/</span><span class="token function">validate</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">valid</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>valid<span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token comment">// TODO LOGIN</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
	...
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>large<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>subBtn<span class="token punctuation">"</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>doLogin<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  	点击登录
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="登录业务流程" tabindex="-1"><a class="header-anchor" href="#登录业务流程" aria-hidden="true">#</a> 登录业务流程</h3>
<blockquote>
<p>用户名：xiaotuxian001</p>
<p>密码：123456</p>
</blockquote>
<p>基础思想</p>
<ol>
<li>调用登录接口获取用户信息</li>
<li>提示用户当前是否成功</li>
<li>跳转到首页</li>
</ol>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code>// src/views/Login/index.vue

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ElMessage <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'element-plus'</span>
<span class="token keyword">import</span> <span class="token string">'element-plus/theme-chalk/el-message.css'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useRouter <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue-router'</span>

<span class="token keyword">const</span> <span class="token function-variable function">doLogin</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> account<span class="token punctuation">,</span> password <span class="token punctuation">}</span> <span class="token operator">=</span> form<span class="token punctuation">.</span>value
  formRef<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">validate</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">valid</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">loginAPI</span><span class="token punctuation">(</span><span class="token punctuation">{</span> account<span class="token punctuation">,</span> password <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token comment">// 1. 提示用户</span>
    <span class="token function">ElMessage</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'success'</span><span class="token punctuation">,</span> <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">'登录成功'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token comment">// 2. 跳转首页</span>
    router<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// src/utils/http.js</span>

httpInstance<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>response<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>
	<span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=></span> res<span class="token punctuation">.</span>data<span class="token punctuation">,</span>
  <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token comment">// 统一错误提示</span>
    <span class="token function">ElMessage</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'warning'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">message</span><span class="token operator">:</span> e<span class="token punctuation">.</span>response<span class="token punctuation">.</span>data<span class="token punctuation">.</span>message
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="pinia管理数据" tabindex="-1"><a class="header-anchor" href="#pinia管理数据" aria-hidden="true">#</a> Pinia管理数据</h3>
<p>基本思想：Pinia负责用户数据相关的state和action，组件中只负责触发action函数并传递参数</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// src/stores/user.js</span>

<span class="token comment">// 管理用户数据相关</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'pinia'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> loginAPI <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@/apis/user'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> useUserStore <span class="token operator">=</span> <span class="token function">defineStore</span><span class="token punctuation">(</span><span class="token string">'user'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token comment">// 1. 定义管理用户数据的state</span>
  <span class="token keyword">const</span> userInfo <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token comment">// 2. 定义获取接口数据的action函数</span>
  <span class="token keyword">const</span> <span class="token function-variable function">getUserInfo</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> account<span class="token punctuation">,</span> password <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">loginAPI</span><span class="token punctuation">(</span><span class="token punctuation">{</span> account<span class="token punctuation">,</span> password <span class="token punctuation">}</span><span class="token punctuation">)</span>
    userInfo<span class="token punctuation">.</span>value <span class="token operator">=</span> res<span class="token punctuation">.</span>result
  <span class="token punctuation">}</span>
  <span class="token comment">// 3. 以对象的格式把state和action return</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    userInfo<span class="token punctuation">,</span>
    getUserInfo
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code>// src/views/Login/index.vue

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token comment">// import { loginAPI } from '@/apis/user'</span>
  
<span class="token keyword">if</span> <span class="token punctuation">(</span>valid<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// const res = await loginAPI({ account, password })</span>
  <span class="token keyword">await</span> userStore<span class="token punctuation">.</span><span class="token function">getUserInfo</span><span class="token punctuation">(</span><span class="token punctuation">{</span> account<span class="token punctuation">,</span> password <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="pinia持久化数据" tabindex="-1"><a class="header-anchor" href="#pinia持久化数据" aria-hidden="true">#</a> Pinia持久化数据</h3>
<ol>
<li>安装插件</li>
</ol>
<p><code v-pre>pnpm add pinia-plugin-persistedstate</code></p>
<ol start="2">
<li>Pinia注册插件</li>
</ol>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// src/main.js</span>

<span class="token keyword">import</span> piniaPluginPersistedstate <span class="token keyword">from</span> <span class="token string">'pinia-plugin-persistedstate'</span>

<span class="token keyword">const</span> pinia <span class="token operator">=</span> <span class="token function">createPinia</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
pinia<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>piniaPluginPersistedstate<span class="token punctuation">)</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>pinia<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>需要持久化的store进行配置</li>
</ol>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// src/stores/user.js</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> useUserStore <span class="token operator">=</span> <span class="token function">defineStore</span><span class="token punctuation">(</span>
	<span class="token operator">...</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
  	<span class="token literal-property property">persist</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="根据登录是否显示的模板适配" tabindex="-1"><a class="header-anchor" href="#根据登录是否显示的模板适配" aria-hidden="true">#</a> 根据登录是否显示的模板适配</h3>
<p>思路：有几个需要适配的模板就准备几个template片段，通过条件渲染控制显示即可</p>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code>// src/views/Layout/components/LayoutNav.vue

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> useUserStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@/stores/user'</span>
<span class="token keyword">const</span> userStore <span class="token operator">=</span> <span class="token function">useUserStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
	...
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>userStore.userInfo.token<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="请求拦截器携带token" tabindex="-1"><a class="header-anchor" href="#请求拦截器携带token" aria-hidden="true">#</a> 请求拦截器携带Token</h3>
<p>基础思想：很多接口如果想要获取数据必须要带着有效的Token信息才可以，拦截器中做一次，用到axios实例的其他都可以拿到</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// src/utils/http.js</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> useUserStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@/stores/user'</span>

httpInstance<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>request<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>
	<span class="token punctuation">(</span><span class="token parameter">config</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token comment">// 1. 从pinia获取token数据</span>
    <span class="token keyword">const</span> userStore <span class="token operator">=</span> <span class="token function">useUserStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment">// 2. 按照后端的要求拼接token数据</span>
    <span class="token keyword">const</span> token <span class="token operator">=</span> userStore<span class="token punctuation">.</span>userInfo<span class="token punctuation">.</span>token
    <span class="token keyword">if</span> <span class="token punctuation">(</span>token<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      config<span class="token punctuation">.</span>headers<span class="token punctuation">.</span>Authorization <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Bearer </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>token<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> config
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="退出登录功能" tabindex="-1"><a class="header-anchor" href="#退出登录功能" aria-hidden="true">#</a> 退出登录功能</h3>
<ol>
<li>新增清除用户action</li>
</ol>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// src/stores/user.js</span>

<span class="token keyword">const</span> <span class="token function-variable function">clearUserInfo</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  userInfo<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">return</span> <span class="token punctuation">{</span>
  clearUserInfo
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>组件中执行退出登录业务</li>
</ol>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code>// src/views/Layout/components/LayoutNav.vue

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> useRouter <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue-router'</span>

<span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token function">useRouter</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token function-variable function">confirm</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  userStore<span class="token punctuation">.</span><span class="token function">clearUserInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">'/login'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
	...
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-popconfirm</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>确认退出吗？<span class="token punctuation">"</span></span> 
                 <span class="token attr-name">confirm-button-text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>确认<span class="token punctuation">"</span></span>
                 <span class="token attr-name">cancel-button-text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>取消<span class="token punctuation">"</span></span>
                 <span class="token attr-name">@confirm</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>confirm<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-popconfirm</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="token失效401拦截" tabindex="-1"><a class="header-anchor" href="#token失效401拦截" aria-hidden="true">#</a> Token失效401拦截</h3>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// src/utils/http.js</span>

httpInstance<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>response<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>
	<span class="token operator">...</span>
  <span class="token comment">// 401 token失败处理</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>e<span class="token punctuation">.</span>response<span class="token punctuation">.</span>status <span class="token operator">===</span> <span class="token number">401</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  	userStore<span class="token punctuation">.</span><span class="token function">clearUserInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  	router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">'/login'</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="购物车" tabindex="-1"><a class="header-anchor" href="#购物车" aria-hidden="true">#</a> 购物车</h2>
<h3 id="加入购物车实现" tabindex="-1"><a class="header-anchor" href="#加入购物车实现" aria-hidden="true">#</a> 加入购物车实现</h3>
<p><img src="@source/notes/fe/vue/Vue3小兔鲜项目/md_img/image-20230927104351693.png" alt="image-20230927104351693" loading="lazy"></p>
<ol>
<li>封装cartStore</li>
</ol>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// src/stores/cartStore.js</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> defineStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'pinia'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> useCartStore <span class="token operator">=</span> <span class="token function">defineStore</span><span class="token punctuation">(</span><span class="token string">'cart'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token comment">// 1. 定义state - cartList</span>
  <span class="token keyword">const</span> cartList <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
  <span class="token comment">// 2. 定义action - addCart</span>
  <span class="token keyword">const</span> <span class="token function-variable function">addCart</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token comment">// 添加购物车操作</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    cartList<span class="token punctuation">,</span>
    addCart
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>组件点击添加按钮</li>
</ol>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code>// src/views/Detail/index.vue

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token comment">// count</span>
<span class="token keyword">const</span> count <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token function-variable function">countChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">count</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>count<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
	<span class="token comment">&lt;!-- 数据组件 --></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-input-number</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>count<span class="token punctuation">"</span></span> <span class="token attr-name">@change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>countChange<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-input-number</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>判断逻辑，是否选择规格</li>
</ol>
<blockquote>
<p>获取sku里面的数据，获取到了就代表了是选择了</p>
</blockquote>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code>// src/views/Detail/index.vue

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> useCartStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@/stores/cartStore'</span>
<span class="token keyword">const</span> cartStore <span class="token operator">=</span> <span class="token function">useCartStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  
<span class="token keyword">let</span> skuObj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">const</span> <span class="token function-variable function">skuChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">sku</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  sukObj <span class="token operator">=</span> sku
<span class="token punctuation">}</span>

<span class="token comment">// 添加购物车</span>
<span class="token keyword">const</span> <span class="token function-variable function">addCart</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>skuObj<span class="token punctuation">.</span>skuId<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 规则已经选择  触发action</span>
    cartStore<span class="token punctuation">.</span><span class="token function">addCart</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">id</span><span class="token operator">:</span> goods<span class="token punctuation">.</span>value<span class="token punctuation">.</span>id<span class="token punctuation">,</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> goods<span class="token punctuation">.</span>value<span class="token punctuation">.</span>name<span class="token punctuation">,</span>
      <span class="token literal-property property">picture</span><span class="token operator">:</span> goods<span class="token punctuation">.</span>value<span class="token punctuation">.</span>mainPictures<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token literal-property property">price</span><span class="token operator">:</span> goods<span class="token punctuation">.</span>value<span class="token punctuation">.</span>price<span class="token punctuation">,</span>
      <span class="token literal-property property">count</span><span class="token operator">:</span> count<span class="token punctuation">.</span>value<span class="token punctuation">,</span>
      skuId<span class="token punctuation">;</span> skuObj<span class="token punctuation">.</span>skuId<span class="token punctuation">,</span>
      <span class="token literal-property property">attrsText</span><span class="token operator">:</span> skuObj<span class="token punctuation">.</span>specsText<span class="token punctuation">,</span>
      <span class="token literal-property property">selected</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token comment">// 规则没有选择  提示用户</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    ElMessage<span class="token punctuation">.</span><span class="token function">warning</span><span class="token punctuation">(</span><span class="token string">'请选择规格'</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
	<span class="token comment">&lt;!-- 按钮组件 --></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>large<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>btn<span class="token punctuation">"</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>addCart<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>加入购物车<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4">
<li>查看是否有添加过商品规格</li>
</ol>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// src/stores/cartStore.js</span>

<span class="token keyword">const</span> <span class="token function-variable function">addCart</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">goods</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token comment">// 通过匹配传递过来的商品对象中的skuId能不能在cartlist中找到，找到了就是添加过</span>
  <span class="token keyword">const</span> item <span class="token operator">=</span> cartList<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=></span> goods<span class="token punctuation">.</span>skuId <span class="token operator">===</span> item<span class="token punctuation">.</span>skuId<span class="token punctuation">)</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>item<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    item<span class="token punctuation">.</span>count<span class="token operator">++</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    cartList<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>goods<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5">
<li>开启本地存储</li>
</ol>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// src/sotres/cartStore.js</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> useCartStore <span class="token operator">=</span> <span class="token function">defineStore</span><span class="token punctuation">(</span>
	<span class="token string">'cart'</span><span class="token punctuation">,</span>
  <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">persist</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="头部购物车" tabindex="-1"><a class="header-anchor" href="#头部购物车" aria-hidden="true">#</a> 头部购物车</h3>
<h4 id="列表渲染" tabindex="-1"><a class="header-anchor" href="#列表渲染" aria-hidden="true">#</a> 列表渲染</h4>
<ol>
<li>准备静态模板</li>
<li>调用模板组件</li>
</ol>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code>// src/views/Layout/components/LayoutHeader.vue

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> HeaderCart <span class="token keyword">from</span> <span class="token string">'./HeaderCart.vue'</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
	<span class="token comment">&lt;!-- 头部购物车 --></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>HeaderCart</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>HeaderCart</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>从pinia中获取数据渲染列表</li>
</ol>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code>// src/views/Layout/components/HeaderCart.vue

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> useCartStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@/stores/cartStore'</span>
<span class="token keyword">const</span> cartStore <span class="token operator">=</span> <span class="token function">useCartStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
	...
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>iconfont icon-cart<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>em</span><span class="token punctuation">></span></span>{{ cartStore.cartList.length }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>em</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>i</span><span class="token punctuation">></span></span>
	...
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item<span class="token punctuation">"</span></span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>i in cartStore.cartList<span class="token punctuation">"</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>i<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="删除功能" tabindex="-1"><a class="header-anchor" href="#删除功能" aria-hidden="true">#</a> 删除功能</h4>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// src/stores/cartStore.js</span>

<span class="token keyword">const</span> <span class="token function-variable function">delCart</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">skuId</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> idx <span class="token operator">=</span> cartList<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">findIndex</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=></span> skuId <span class="token operator">===</span> item<span class="token punctuation">.</span>skuId<span class="token punctuation">)</span>
  cartList<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>idx<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">return</span> <span class="token punctuation">{</span>
  delCart
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code>// src/views/Layout/components/HeaderCart.vue

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>iconfont icon-close-new<span class="token punctuation">"</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>cartStore.delCart(i.skuId)<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>i</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="统计计算" tabindex="-1"><a class="header-anchor" href="#统计计算" aria-hidden="true">#</a> 统计计算</h4>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// src/stores/cartStore.js</span>

<span class="token keyword">const</span> allCount <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> 
	cartList<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> c</span><span class="token punctuation">)</span> <span class="token operator">=></span> a <span class="token operator">+</span> c<span class="token punctuation">.</span>count<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span>

<span class="token keyword">const</span> allPrice <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> 
	cartList<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> c</span><span class="token punctuation">)</span> <span class="token operator">=></span> a <span class="token operator">+</span> c<span class="token punctuation">.</span>count <span class="token operator">*</span> c<span class="token punctuation">.</span>price<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code>// src/views/Layout/components/HeaderCart.vue

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>total<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>共 {{ cartStore.allCount }} 件商品<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span><span class="token entity named-entity" title="&yen;">&amp;yen;</span> {{ cartStore.allPrice.toFixed(2) }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="列表购物车" tabindex="-1"><a class="header-anchor" href="#列表购物车" aria-hidden="true">#</a> 列表购物车</h3>
<h4 id="基本功能" tabindex="-1"><a class="header-anchor" href="#基本功能" aria-hidden="true">#</a> 基本功能</h4>
<ol>
<li>准备静态模板</li>
<li>绑定路由</li>
</ol>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// src/router/index.js</span>

<span class="token keyword">import</span> CartList <span class="token keyword">from</span> <span class="token string">'@/views/CartList/index.vue'</span>

<span class="token operator">...</span>
<span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
  <span class="token operator">...</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'cartlist'</span><span class="token punctuation">,</span> <span class="token literal-property property">component</span><span class="token operator">:</span> CartList <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>给按钮绑定跳转操作</li>
</ol>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code>// src/views/Layout/components/HeaderCart.vue

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>large<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>$router.push('/cartlist')<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    去购物车结算
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4">
<li>渲染列表数据</li>
</ol>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code>// src/views/CartList/index.vue

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> useCartStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@/stores/cartStore'</span>
<span class="token keyword">const</span> cartStore <span class="token operator">=</span> <span class="token function">useCartStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
	<span class="token comment">&lt;!-- 商品列表 --></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>i in cartStore.cartList<span class="token punctuation">"</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>i.id<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">></span></span>
	
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>cartStore.cartList.length === 0<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="单选功能实现" tabindex="-1"><a class="header-anchor" href="#单选功能实现" aria-hidden="true">#</a> 单选功能实现</h4>
<p><img src="@source/notes/fe/vue/Vue3小兔鲜项目/md_img/image-20230927161115840.png" alt="image-20230927161115840" loading="lazy"></p>
<ol>
<li>渲染单选框</li>
</ol>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code>// src/views/CartList/index.vue

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">const</span> <span class="token function-variable function">singleCheck</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">selected</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token comment">// TODO </span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
	<span class="token comment">&lt;!-- 单选框 --></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-checkbox</span> <span class="token attr-name">:model-value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>i.selected<span class="token punctuation">"</span></span> <span class="token attr-name">@change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>singleCheck<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-checkbox</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>单选框切换触发action修改store中对应的状态</li>
</ol>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// src/stores/cartStore.js</span>

<span class="token keyword">const</span> <span class="token function-variable function">singleCheck</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">skuId<span class="token punctuation">,</span> selected</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> item <span class="token operator">=</span> cartList<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=></span> item<span class="token punctuation">.</span>skuId <span class="token operator">===</span> skuId<span class="token punctuation">)</span>
  item<span class="token punctuation">.</span>selected <span class="token operator">=</span> selected
<span class="token punctuation">}</span>
<span class="token keyword">return</span> <span class="token punctuation">{</span>
  singleCheck
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code>// src/views/CartList

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">const</span> <span class="token function-variable function">singleCheck</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">i<span class="token punctuation">,</span> selected</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  cartStore<span class="token punctuation">.</span><span class="token function">singleCheck</span><span class="token punctuation">(</span>i<span class="token punctuation">.</span>skuId<span class="token punctuation">,</span> selected<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
	<span class="token comment">&lt;!-- 单选框 --></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-checkbox</span> <span class="token attr-name">:model-value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>i.selected<span class="token punctuation">"</span></span> 
               <span class="token attr-name">@change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>(selected) => singleCheck(i, selected)<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-checkbox</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="全选功能" tabindex="-1"><a class="header-anchor" href="#全选功能" aria-hidden="true">#</a> 全选功能</h4>
<p><img src="@source/notes/fe/vue/Vue3小兔鲜项目/md_img/image-20230927163038298.png" alt="image-20230927163038298" loading="lazy"></p>
<p>基础思想：</p>
<ul>
<li>
<p>全选状态决定单选框状态 - 遍历cartList把每一项的selected都设置为何全选框状态一致</p>
</li>
<li>
<p>单选框状态决定全选状态 - 只有所有单选框的selected都为true, 全选框才为true</p>
</li>
</ul>
<ol>
<li>store中定义action和计算属性</li>
</ol>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// src/stores/cartStore.js</span>

<span class="token comment">// 全选功能</span>
<span class="token keyword">const</span> <span class="token function-variable function">allCheck</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">selected</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  cartList<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>item<span class="token punctuation">.</span>selected <span class="token operator">=</span> selected<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 是否全选</span>
<span class="token keyword">const</span> isAll <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> cartList<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">every</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=></span> item<span class="token punctuation">.</span>selected<span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token keyword">return</span> <span class="token punctuation">{</span>
  isAll<span class="token punctuation">,</span>
  allCheck
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>组件中触发aciton和使用计算属性</li>
</ol>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code>// src/views/CartList/index.vue

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">const</span> <span class="token function-variable function">allCheck</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">selected</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  cartStore<span class="token punctuation">.</span><span class="token function">allCheck</span><span class="token punctuation">(</span>selected<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
	<span class="token comment">&lt;!-- 全选框 --></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-checkbox</span> <span class="token attr-name">:model-value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>cartStore.isAll<span class="token punctuation">"</span></span> <span class="token attr-name">@change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>allCheck<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-checkbox</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="统计数据实现" tabindex="-1"><a class="header-anchor" href="#统计数据实现" aria-hidden="true">#</a> 统计数据实现</h4>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// src/stores/cartStore.js</span>

<span class="token comment">// 3. 已选择数量</span>
<span class="token keyword">const</span> selecctedCount <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> 
	cartList<span class="token punctuation">.</span>value
		<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=></span> item<span class="token punctuation">.</span>selected<span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> c</span><span class="token punctuation">)</span> <span class="token operator">=></span> a <span class="token operator">+</span> c<span class="token punctuation">.</span>count<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span>
<span class="token comment">// 4. 已选择商品价钱合计</span>
<span class="token keyword">const</span> selecctedPrice <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> 
	cartList<span class="token punctuation">.</span>value
		<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=></span> item<span class="token punctuation">.</span>selected<span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> c</span><span class="token punctuation">)</span> <span class="token operator">=></span> a <span class="token operator">+</span> c<span class="token punctuation">.</span>count <span class="token operator">*</span> c<span class="token punctuation">.</span>price<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code>// src/views/CartList/index.vue

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
	<span class="token comment">&lt;!-- 操作栏 --></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>batch<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    共 {{ cartStore.allCount }} 件商品，已选择
    {{ cartStore.selectedCount }} 件，商品合计：
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>red<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>￥ {{ cartStore.selectedPrice.toFixed(2) }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="接口购物车" tabindex="-1"><a class="header-anchor" href="#接口购物车" aria-hidden="true">#</a> 接口购物车</h3>
<h4 id="加入购物车" tabindex="-1"><a class="header-anchor" href="#加入购物车" aria-hidden="true">#</a> 加入购物车</h4>
<ol>
<li>接口封装</li>
</ol>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// src/apis/cart.js</span>

<span class="token comment">// 封装购物车相关接口</span>
<span class="token keyword">import</span> request <span class="token keyword">from</span> <span class="token string">'@/utils/http'</span>

<span class="token comment">// 加入购物车</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">insertCartAPI</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> skuId<span class="token punctuation">,</span> count <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">requset</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">'/member/cart'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">'POST'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      skuId<span class="token punctuation">,</span>
      count
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 获取最新的购物车列表</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">findNewCartListAPI</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">'/member/cart'</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>适配登录和非登录</li>
</ol>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// src/stores/cartStore.js</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> insertCartAPI<span class="token punctuation">,</span> findNewCartListAPI <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@/apis/cart'</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> useCartStore <span class="token operator">=</span> <span class="token function">defineStore</span><span class="token punctuation">(</span>
	<span class="token string">'cart'</span><span class="token punctuation">,</span>
  <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> userStore <span class="token operator">=</span> <span class="token function">useUserStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> isLogin <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> userStore<span class="token punctuation">.</span>userInfo<span class="token punctuation">.</span>token<span class="token punctuation">)</span>
    <span class="token operator">...</span>
    <span class="token keyword">const</span> <span class="token function-variable function">addCart</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">goods</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> <span class="token punctuation">{</span> skuId<span class="token punctuation">,</span> count <span class="token punctuation">}</span> <span class="token operator">=</span> goods
      <span class="token keyword">if</span> <span class="token punctuation">(</span>isLogin<span class="token punctuation">.</span>value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 登录之后的加入购物车逻辑</span>
        <span class="token keyword">await</span> <span class="token function">insertCartAPI</span><span class="token punctuation">(</span><span class="token punctuation">{</span> skuId<span class="token punctuation">,</span> count <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">findNewCartListAPI</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        cartList<span class="token punctuation">.</span>value <span class="token operator">=</span> res<span class="token punctuation">.</span>result
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token comment">// 通过匹配传递过来的商品对象中的skuId能不能......</span>
        <span class="token operator">...</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="删除购物车" tabindex="-1"><a class="header-anchor" href="#删除购物车" aria-hidden="true">#</a> 删除购物车</h4>
<ol>
<li>更改原先本地购物车-删除购物车的代码结构</li>
</ol>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// src/stores/cartStore.js</span>

<span class="token keyword">const</span> <span class="token function-variable function">delCart</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">skuId</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>isLogin<span class="token punctuation">.</span>value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 调用接口实现接口购物车中的删除功能</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token comment">// 原先本地购物车-删除购物车功能</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>封装接口</li>
</ol>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// src/apis/cart.js</span>

<span class="token comment">// 删除购物车</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">delCartAPI</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">ids</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">'/member/cart'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">'DELETE'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      ids
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>由于有多个地方使用更新购物车列表action，因此封装action</li>
<li>登录之后加入购物车逻辑</li>
</ol>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// src/stores/cartStore.js</span>

<span class="token keyword">const</span> <span class="token function-variable function">updateNewList</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">findNewCartListAPI</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  cartList<span class="token punctuation">.</span>value <span class="token operator">=</span> res<span class="token punctuation">.</span>result
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token function-variable function">delCart</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">skuId</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>isLogin<span class="token punctuation">.</span>value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">await</span> <span class="token function">delCartAPI</span><span class="token punctuation">(</span><span class="token punctuation">[</span>skuId<span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token function">updateNewList</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
  
<span class="token keyword">const</span> <span class="token function-variable function">addCart</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">goods</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> skuId<span class="token punctuation">,</span> count <span class="token punctuation">}</span> <span class="token operator">=</span> goods
  <span class="token keyword">if</span> <span class="token punctuation">(</span>isLogin<span class="token punctuation">.</span>value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">await</span> <span class="token function">insertCartAPI</span><span class="token punctuation">(</span><span class="token punctuation">{</span> skuId<span class="token punctuation">,</span> count <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token comment">// const res = await findNewCartListAPI()</span>
    <span class="token comment">// cartList.value = res.result</span>
    <span class="token function">updateNewList</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="退出登录时-清空购物车列表" tabindex="-1"><a class="header-anchor" href="#退出登录时-清空购物车列表" aria-hidden="true">#</a> 退出登录时-清空购物车列表</h4>
<ol>
<li>封装接口</li>
</ol>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// src/stores/cartStore.js</span>

<span class="token comment">// 清除购物车</span>
<span class="token keyword">const</span> <span class="token function-variable function">clearCart</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  cartList<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>调用接口</li>
</ol>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// src/stores/user.js</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> useCartStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./cartStore'</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> useUserStore <span class="token operator">=</span> <span class="token function">defineStore</span><span class="token punctuation">(</span>
	<span class="token string">'user'</span><span class="token punctuation">,</span>
  <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> cartStore <span class="token operator">=</span> <span class="token function">useCartStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token operator">...</span>
    <span class="token keyword">const</span> <span class="token function-variable function">clearUserInfo</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      userInfo<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
      <span class="token comment">// 执行清除购物车的action</span>
      cartStore<span class="token punctuation">.</span><span class="token function">clearCart</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token operator">...</span>
      clearUserInfo
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="合并本地购物车到服务器" tabindex="-1"><a class="header-anchor" href="#合并本地购物车到服务器" aria-hidden="true">#</a> 合并本地购物车到服务器</h4>
<ol>
<li>封装接口</li>
</ol>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// src/apis/cart.js</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">mergeCartAPI</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">'/member/cart/merge'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">'POST'</span><span class="token punctuation">,</span>
    data
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>将cartStore.js中的updataNewList导出来</li>
</ol>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// src/stores/cartStore.js</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> useCartStore <span class="token operator">=</span> <span class="token function">defineStore</span><span class="token punctuation">(</span>
	<span class="token string">'cart'</span><span class="token punctuation">,</span>
  <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token operator">...</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      updateNewList
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>合并购物车</li>
</ol>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// src/stores/user.js</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> useUserStore <span class="token operator">=</span> <span class="token function">defineStore</span><span class="token punctuation">(</span>
	<span class="token string">'user'</span><span class="token punctuation">,</span>
  <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token operator">...</span>
    <span class="token keyword">const</span> <span class="token function-variable function">getUserInfo</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> account<span class="token punctuation">,</span> password <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token comment">// 合并购物车操作</span>
      <span class="token keyword">await</span> <span class="token function">mergeCartAPI</span><span class="token punctuation">(</span>
      	cartStore<span class="token punctuation">.</span>cartList<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">skuId</span><span class="token operator">:</span> item<span class="token punctuation">.</span>skuId<span class="token punctuation">,</span>
            <span class="token literal-property property">selected</span><span class="token operator">:</span> item<span class="token punctuation">.</span>selected<span class="token punctuation">,</span>
            <span class="token literal-property property">count</span><span class="token operator">:</span> item<span class="token punctuation">.</span>count
          <span class="token punctuation">}</span> 
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">)</span>
      cartStore<span class="token punctuation">.</span><span class="token function">updateNewList</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="订单页-结算" tabindex="-1"><a class="header-anchor" href="#订单页-结算" aria-hidden="true">#</a> 订单页（结算）</h2>
<h3 id="路由配置和基础数据渲染" tabindex="-1"><a class="header-anchor" href="#路由配置和基础数据渲染" aria-hidden="true">#</a> 路由配置和基础数据渲染</h3>
<ol>
<li>准备静态模板</li>
<li>封装接口</li>
</ol>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// src/apis/checkout.js</span>

<span class="token keyword">import</span> request <span class="token keyword">from</span> <span class="token string">'@/utils/http'</span>

<span class="token comment">// 获取详情接口</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">getCheckInfoAPI</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">'/member/order/pre'</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>配置路由</li>
</ol>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// src/router/index.js</span>

<span class="token keyword">import</span> Checkout <span class="token keyword">from</span> <span class="token string">'@/views/Checkout/index.vue'</span>

<span class="token keyword">const</span> router <span class="token operator">=</span><span class="token function">createRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token operator">...</span>
  <span class="token literal-property property">routes</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'checkout'</span><span class="token punctuation">,</span> component： Checkout <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4">
<li>渲染数据</li>
</ol>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code>// src/views/Checkout/index.vue

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> getCheckInfoAPI <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@/apis/checkout'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span> onMounted <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
  
<span class="token keyword">const</span> checkInfo <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> curAddress <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token function-variable function">getCheckInfo</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">getCheckInfoAPI</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  checkInfo<span class="token punctuation">.</span>value <span class="token operator">=</span> res<span class="token punctuation">.</span>result
  <span class="token comment">// 适配默认地址</span>
  <span class="token comment">// 从地址列表中筛选出来 isDefault === 0 那一项</span>
  <span class="token keyword">const</span> item <span class="token operator">=</span> checkInfo<span class="token punctuation">.</span>value<span class="token punctuation">.</span>userAddresses<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span>
  	<span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=></span> item<span class="token punctuation">.</span>isDefault <span class="token operator">===</span> <span class="token number">0</span>
  <span class="token punctuation">)</span>
  curAddress<span class="token punctuation">.</span>value <span class="token operator">=</span> item
<span class="token punctuation">}</span>

<span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token function">getCheckInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="切换地址" tabindex="-1"><a class="header-anchor" href="#切换地址" aria-hidden="true">#</a> 切换地址</h3>
<h4 id="打开弹框交互" tabindex="-1"><a class="header-anchor" href="#打开弹框交互" aria-hidden="true">#</a> 打开弹框交互</h4>
<ol>
<li>
<p>准备静态模板</p>
</li>
<li>
<p>控制弹框打开</p>
</li>
</ol>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code>// src/views/Checkout/index.vue

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token comment">// 控制弹框打开</span>
<span class="token keyword">const</span> showDialog <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>action<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>large<span class="token punctuation">"</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>showDialog = true<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  		切换地址
  	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
	<span class="token comment">&lt;!-- 切换地址 --></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-dialog</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>showDialog<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-dialog</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="地址激活交互" tabindex="-1"><a class="header-anchor" href="#地址激活交互" aria-hidden="true">#</a> 地址激活交互</h4>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code>// src/views/Checkout/index.vue

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">const</span> acctiveAddress <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token function-variable function">switchAddress</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  acctiveAddress<span class="token punctuation">.</span>value <span class="token operator">=</span> item
<span class="token punctuation">}</span>
<span class="token keyword">const</span> <span class="token function-variable function">confirm</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  curAddress<span class="token punctuation">.</span>value <span class="token operator">=</span> activeAddress<span class="token punctuation">.</span>value
  showDialog<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token boolean">false</span>
  activeAddress<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
	<span class="token comment">&lt;!-- 切换地址 --></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text item<span class="token punctuation">"</span></span> 
       <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item in checkInfo.userAddresses<span class="token punctuation">"</span></span>
       <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item.id<span class="token punctuation">"</span></span>
       <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>switchAddress(item)<span class="token punctuation">"</span></span>
       <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{ active: activeAddress.id === item.id }<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    ...
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建订单生成订单id" tabindex="-1"><a class="header-anchor" href="#创建订单生成订单id" aria-hidden="true">#</a> 创建订单生成订单ID</h3>
<ol>
<li>准备静态模板</li>
<li>设置路由</li>
</ol>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// src/router/index.js</span>

<span class="token keyword">import</span> Pay <span class="token keyword">from</span> <span class="token string">'@/views/Pay/index.vue'</span>

<span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token function">createRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token operator">...</span>
  <span class="token literal-property property">routes</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token operator">...</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    	<span class="token operator">...</span>
    	<span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'pay'</span><span class="token punctuation">,</span> <span class="token literal-property property">component</span><span class="token operator">:</span> Pay <span class="token punctuation">}</span>
  	<span class="token punctuation">]</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>生成订单接口</li>
</ol>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// src/apis/checkout.js</span>

<span class="token comment">// 创建订单</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">createOrderAPI</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">'/member/order'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">'POST'</span><span class="token punctuation">,</span>
    data
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4">
<li>调用接口携带ID跳转路由</li>
</ol>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code>// src/views/Checkout/index.vue

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> useRouter <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue-router'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useCartStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@/stores/cartStore'</span>
<span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token function">useRouter</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> cartStore <span class="token operator">=</span> <span class="token function">useCartStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// 创建订单</span>
<span class="token keyword">const</span> <span class="token function-variable function">createOrder</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">createOrderAPI</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">deliveryTimeType</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token literal-property property">payType</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token literal-property property">payChannel</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token literal-property property">buyerMessage</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
    <span class="token literal-property property">goods</span><span class="token operator">:</span> checkInfo<span class="token punctuation">.</span>value<span class="token punctuation">.</span>goods<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">skuId</span><span class="token operator">:</span> item<span class="token punctuation">.</span>skuId<span class="token punctuation">,</span>
        <span class="token literal-property property">count</span><span class="token operator">:</span> item<span class="token punctuation">.</span>count
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">addressId</span><span class="token operator">:</span> curAddress<span class="token punctuation">.</span>value<span class="token punctuation">.</span>id
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> orderId <span class="token operator">=</span> res<span class="token punctuation">.</span>result<span class="token punctuation">.</span>id
  router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/pay'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">query</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">id</span><span class="token operator">:</span> orderId
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token comment">// 更新购物车</span>
  cartStore<span class="token punctuation">.</span><span class="token function">updateNewList</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
	<span class="token comment">&lt;!-- 提交订单 --></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>submit<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>large<span class="token punctuation">"</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>createOrder<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  		提交订单
  	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="支付" tabindex="-1"><a class="header-anchor" href="#支付" aria-hidden="true">#</a> 支付</h2>
<h3 id="基础数据渲染" tabindex="-1"><a class="header-anchor" href="#基础数据渲染" aria-hidden="true">#</a> 基础数据渲染</h3>
<ol>
<li>封装接口</li>
</ol>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// src/apis/pay.js</span>

<span class="token keyword">import</span> request <span class="token keyword">from</span> <span class="token string">'@/utils/http'</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">getOrderAPI</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">id</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">/member/order/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>id<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>获取数据渲染内容</li>
</ol>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code>// src/views/Pay/index.vue

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> getOrderAPI <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@/apis/pay'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span> onMounted <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useRoute <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue-router'</span>
  
<span class="token keyword">const</span> route <span class="token operator">=</span> <span class="token function">useRoute</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// 获取订单数据</span>
<span class="token keyword">const</span> payInfo <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token function-variable function">getPayInfo</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">getOrderAPI</span><span class="token punctuation">(</span>route<span class="token punctuation">.</span>query<span class="token punctuation">.</span>id<span class="token punctuation">)</span>
  payInfo<span class="token punctuation">.</span>value <span class="token operator">=</span> res<span class="token punctuation">.</span>result
<span class="token punctuation">}</span>

<span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token function">getPayInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="支付功能实现" tabindex="-1"><a class="header-anchor" href="#支付功能实现" aria-hidden="true">#</a> 支付功能实现</h3>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code>// src/views/Pay/index.vue

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token comment">// 跳转支付</span>
<span class="token comment">// 携带订单id以及回调地址跳转到支付地址(get)</span>
<span class="token comment">// 支付地址</span>
<span class="token keyword">const</span> baseURL <span class="token operator">=</span> <span class="token string">'http://pcapi-xiaotuxian-front-devtest.itheima.net/'</span>
<span class="token keyword">const</span> backURL <span class="token operator">=</span> <span class="token string">'http://127.0.0.1:5173/paycallback'</span>
<span class="token keyword">const</span> redirectUrl <span class="token operator">=</span> <span class="token function">encodeURIComponent</span><span class="token punctuation">(</span>backURL<span class="token punctuation">)</span>
<span class="token keyword">const</span> payUrl <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>baseURL<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">pay/aliPay?orderId=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>route<span class="token punctuation">.</span>query<span class="token punctuation">.</span>id<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&amp;redirect=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>redirectUrl<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table>
<thead>
<tr>
<th>账号</th>
<th><a href="mailto:askgxl8276@sandbox.com">askgxl8276@sandbox.com</a></th>
</tr>
</thead>
<tbody>
<tr>
<td>登录密码</td>
<td>111111</td>
</tr>
<tr>
<td>支付密码</td>
<td>111111</td>
</tr>
</tbody>
</table>
<h3 id="支付结果页" tabindex="-1"><a class="header-anchor" href="#支付结果页" aria-hidden="true">#</a> 支付结果页</h3>
<ol>
<li>准备静态模板</li>
<li>绑定路由</li>
</ol>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// src/router/index.js</span>

<span class="token keyword">import</span> PayBack <span class="token keyword">from</span> <span class="token string">'@/views/Pay/PayBack.vue'</span>

<span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'paycallback'</span><span class="token punctuation">,</span> <span class="token literal-property property">component</span><span class="token operator">:</span> PayBack<span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>渲染数据</li>
</ol>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code>// src/views/Pay/PayBack.vue

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> getOrderAPI <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@/apis/pay'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span> onMounted <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useRoute <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue-router'</span>
  
<span class="token keyword">const</span> route <span class="token operator">=</span> <span class="token function">useRoute</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> orderInfo <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token function-variable function">getOrderInfo</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">getOrderAPI</span><span class="token punctuation">(</span>route<span class="token punctuation">.</span>query<span class="token punctuation">.</span>orderId<span class="token punctuation">)</span>
  orderInfo<span class="token punctuation">.</span>value <span class="token operator">=</span> res<span class="token punctuation">.</span>result
<span class="token punctuation">}</span>

<span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token function">getOrderInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
	<span class="token comment">&lt;!-- 支付结果 --></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>pay-result<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>iconfont icon-queren2 green<span class="token punctuation">"</span></span> 
          <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>$route.query.payResult === 'true'<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>iconfont icon-shanchu red<span class="token punctuation">"</span></span> <span class="token attr-name">v-else</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tit<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      支付{{ $route.query.payResutl === 'true' ? '成功' : '失败' }}
  	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
    ...
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>
    	支付金额: <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span>￥{{ orderInfo.payMoney?.toFixed(2) }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>  
  	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="封装倒计时函数" tabindex="-1"><a class="header-anchor" href="#封装倒计时函数" aria-hidden="true">#</a> 封装倒计时函数</h3>
<ol>
<li>封装函数</li>
</ol>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// src/composables/useCountDown.js</span>

<span class="token comment">// 封装倒计时逻辑函数</span>
<span class="token comment">// 封装倒计时逻辑函数</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span> computed<span class="token punctuation">,</span> onUnmounted <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">import</span> dayjs <span class="token keyword">from</span> <span class="token string">'dayjs'</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">useCountDown</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token comment">// 1. 响应式的数据</span>
  <span class="token keyword">let</span> timer <span class="token operator">=</span> <span class="token keyword">null</span>
  <span class="token keyword">const</span> time <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
  <span class="token comment">// 格式化时间 为 xx分xx秒</span>
  <span class="token keyword">const</span> formatTime <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> dayjs<span class="token punctuation">.</span><span class="token function">unix</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token string">'mm分ss秒'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token comment">// 2. 开启倒计时的函数</span>
  <span class="token keyword">const</span> <span class="token function-variable function">start</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">currentTime</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token comment">// 开始倒计时的逻辑</span>
    <span class="token comment">// 核心逻辑的编写: 每隔1s件减1</span>
    time<span class="token punctuation">.</span>value <span class="token operator">=</span> currentTime
    timer <span class="token operator">=</span> <span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      time<span class="token punctuation">.</span>value<span class="token operator">--</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 组件销毁时清除定时器</span>
  <span class="token function">onUnmounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    timer <span class="token operator">&amp;&amp;</span> <span class="token function">clearInterval</span><span class="token punctuation">(</span>timer<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    formatTime<span class="token punctuation">,</span>
    start
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>渲染数据</li>
</ol>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code>// src/views/Pay/index.vue

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> useCountDown <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@/composables/useCountDown.js'</span>
  
<span class="token keyword">const</span> <span class="token punctuation">{</span> formatTime<span class="token punctuation">,</span> start <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useCountDown</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> <span class="token function-variable function">getPayInfo</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token operator">...</span>
  <span class="token comment">// 初始化倒计时描述</span>
  <span class="token function">start</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>result<span class="token punctuation">.</span>countdown<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>
    支付还剩<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span>{{ formatTime }}...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="会员中心" tabindex="-1"><a class="header-anchor" href="#会员中心" aria-hidden="true">#</a> 会员中心</h2>
<h3 id="路由配置" tabindex="-1"><a class="header-anchor" href="#路由配置" aria-hidden="true">#</a> 路由配置</h3>
<ol>
<li>准备静态模板 src/views/Member/index.vue</li>
<li>配置路由</li>
</ol>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// src/router/index.js</span>

<span class="token keyword">import</span> Member <span class="token keyword">from</span> <span class="token string">'@/views/Member/index.vue'</span>

<span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token function">createRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">routes</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token operator">...</span><span class="token punctuation">,</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    	<span class="token operator">...</span>
    	<span class="token punctuation">{</span> 
    		<span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'member'</span><span class="token punctuation">,</span> <span class="token literal-property property">component</span><span class="token operator">:</span> Member
    	<span class="token punctuation">}</span>
  	<span class="token punctuation">]</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>准备个人中心和我的订单路由组件模板 <code v-pre>src/views/Member/components/UserInfo.vue</code> 和<code v-pre>src/views/Member/components/UserOrder.vue</code></li>
<li>配置三级路由</li>
</ol>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// src/router/index.js</span>

<span class="token keyword">import</span> UserInfo <span class="token keyword">from</span> <span class="token string">'@/views/Member/components/UserInfo.vue'</span>
<span class="token keyword">import</span> UserOrder <span class="token keyword">from</span> <span class="token string">'@/views/Member/components/UserOrder.vue'</span>

<span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token function">createRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">routes</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token operator">...</span>
      <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token operator">...</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'member'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">component</span><span class="token operator">:</span> Member<span class="token punctuation">,</span>
          <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'user'</span><span class="token punctuation">,</span> <span class="token literal-property property">component</span><span class="token operator">:</span> UserInfo <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'order'</span><span class="token punctuation">,</span> <span class="token literal-property property">component</span><span class="token operator">:</span> UserOrder <span class="token punctuation">}</span>
          <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5">
<li>开启三级路由挂载点</li>
</ol>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code>// src/views/Member/index.vue

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>article<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>RouterView</span> <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="个人中心信息渲染" tabindex="-1"><a class="header-anchor" href="#个人中心信息渲染" aria-hidden="true">#</a> 个人中心信息渲染</h3>
<h4 id="使用pinia数据渲染个人信息" tabindex="-1"><a class="header-anchor" href="#使用pinia数据渲染个人信息" aria-hidden="true">#</a> 使用pinia数据渲染个人信息</h4>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code>// src/views/Member/components/UserInfo.vue

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> useUserStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@/stores/user'</span>
  
<span class="token keyword">const</span> userStore <span class="token operator">=</span> <span class="token function">useUserStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>home-overview<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token comment">&lt;!-- 用户信息 --></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>user-meta<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>avatar<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">:src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>userStore.userInfo?.avatar<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
  		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h4</span><span class="token punctuation">></span></span>{{ userStore.userInfo?.account }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h4</span><span class="token punctuation">></span></span>
  	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="封装接口获取猜你喜欢的数据" tabindex="-1"><a class="header-anchor" href="#封装接口获取猜你喜欢的数据" aria-hidden="true">#</a> 封装接口获取猜你喜欢的数据</h4>
<ol>
<li>封装接口</li>
</ol>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// src/apis/user.js</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">getLikeListAPI</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> limit <span class="token operator">=</span> <span class="token number">4</span> <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">'/goods/relevant'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">params</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      limit
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>渲染数据</li>
</ol>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code>// src/views/Member/components/UserInfo.vue

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> getLikeListAPI <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@/apis/user'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span> onMounted <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">import</span> GoodsItem <span class="token keyword">from</span> <span class="token string">'@/views/Home/components/GoodsItem.vue'</span>

<span class="token keyword">const</span> likeList <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token function-variable function">getLikeList</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">getLikeListAPI</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">limit</span><span class="token operator">:</span> <span class="token number">4</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
  likeList<span class="token punctuation">.</span>value <span class="token operator">=</span> res<span class="token punctuation">.</span>result
<span class="token punctuation">}</span>

<span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token function">getLikeList</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>like-container<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>goods-list<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>GoodsItem</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>good in likeList<span class="token punctuation">"</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>good.id<span class="token punctuation">"</span></span> <span class="token attr-name">:goods</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>good<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
  	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="我的订单渲染" tabindex="-1"><a class="header-anchor" href="#我的订单渲染" aria-hidden="true">#</a> 我的订单渲染</h3>
<h4 id="基础订单数据渲染" tabindex="-1"><a class="header-anchor" href="#基础订单数据渲染" aria-hidden="true">#</a> 基础订单数据渲染</h4>
<ol>
<li>封装接口</li>
</ol>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// src/apis/order.js</span>

<span class="token keyword">import</span> request <span class="token keyword">from</span> <span class="token string">'@/utils/http'</span>

<span class="token comment">/* 
params: {
	orderState: 0,
	page: 1,
	pageSize: 2
}
*/</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">getUserOrder</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">params</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">'/member/order'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">'GET'</span><span class="token punctuation">,</span>
    params
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>渲染数据</li>
</ol>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code>// src/views/Member/components/UserOrder.vue

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token comment">// 获取订单列表</span>
<span class="token keyword">const</span> orderList <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> params <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">orderState</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token literal-property property">page</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token literal-property property">pageSize</span><span class="token operator">:</span> <span class="token number">2</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token function-variable function">getOrderList</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">getUserOrder</span><span class="token punctuation">(</span>params<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
  orderList<span class="token punctuation">.</span>value <span class="token operator">=</span> res<span class="token punctuation">.</span>result<span class="token punctuation">.</span>items
<span class="token punctuation">}</span>
<span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token function">getOrderList</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>main-container<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>holder-container<span class="token punctuation">"</span></span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>orderList.length === 0<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-empty</span> <span class="token attr-name">description</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>暂无订单数据<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
  	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-else</span><span class="token punctuation">></span></span>
      <span class="token comment">&lt;!-- 订单列表 --></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>order-item<span class="token punctuation">"</span></span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>order in orderList<span class="token punctuation">"</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>order.id<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>head<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span>下单时间：{{ order.createTime }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span>订单编号：{{ order.id }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
          ...
  			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="tab切换实现" tabindex="-1"><a class="header-anchor" href="#tab切换实现" aria-hidden="true">#</a> tab切换实现</h4>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code>// src/views/Member/components/UserOrder.vue

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token comment">// tab切换</span>
  <span class="token keyword">const</span> <span class="token function-variable function">tabChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">type</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    params<span class="token punctuation">.</span>value<span class="token punctuation">.</span>orderState <span class="token operator">=</span> type
    <span class="token function">getOrderList</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-tabs</span> <span class="token attr-name">@tab-change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tabChange<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token comment">&lt;!-- tab切换 --></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-tab-pane</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item in tabTypes<span class="token punctuation">"</span></span> 
                 <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item.name<span class="token punctuation">"</span></span> 
                 <span class="token attr-name">:label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item.label<span class="token punctuation">"</span></span> 
    <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-tabs</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="分页" tabindex="-1"><a class="header-anchor" href="#分页" aria-hidden="true">#</a> 分页</h4>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code>// src/views/Member/conponents/UserOrder.vue

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">const</span> total <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token function-variable function">getOrderList</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token operator">...</span>
  total<span class="token punctuation">.</span>value <span class="token operator">=</span> res<span class="token punctuation">.</span>result<span class="token punctuation">.</span>counts
<span class="token punctuation">}</span>

<span class="token comment">// 页数切换</span>
<span class="token keyword">const</span> pageChange <span class="token operator">-</span> <span class="token punctuation">(</span><span class="token parameter">page</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  params<span class="token punctuation">.</span>value<span class="token punctuation">.</span>page <span class="token operator">=</span> page
  <span class="token function">getOrderList</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
	<span class="token comment">&lt;!-- 分页 --></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>pagination-container<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-pagination</span> <span class="token attr-name">background</span> 
                   <span class="token attr-name">layout</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>prev, pager, next<span class="token punctuation">"</span></span>
                   <span class="token attr-name">:total</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>total<span class="token punctuation">"</span></span>
                   <span class="token attr-name">:page-size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>params.pageSize<span class="token punctuation">"</span></span>
                   <span class="token attr-name">@current-change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>pageChange<span class="token punctuation">"</span></span>
    <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="细节优化" tabindex="-1"><a class="header-anchor" href="#细节优化" aria-hidden="true">#</a> 细节优化</h3>
<h4 id="默认三级路由配置" tabindex="-1"><a class="header-anchor" href="#默认三级路由配置" aria-hidden="true">#</a> 默认三级路由配置</h4>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// src/router/index.js</span>

<span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token function">createRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">routes</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token operator">...</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'member'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">component</span><span class="token operator">:</span> Member<span class="token punctuation">,</span>
      <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span> <span class="token literal-property property">component</span><span class="token operator">:</span> UserInfo <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token operator">...</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code>// src/views/Member/index.vue

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>links<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>  
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>RouterLink</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/member<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>个人中心<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>RouterLink</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="订单状态显示适配" tabindex="-1"><a class="header-anchor" href="#订单状态显示适配" aria-hidden="true">#</a> 订单状态显示适配</h4>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code>// src/views/Member/components/UserOrder.vue

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token comment">// 创建格式化函数</span>
<span class="token keyword">const</span> <span class="token function-variable function">fomartPayState</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">payState</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> stateMap <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token number">1</span><span class="token operator">:</span> <span class="token string">'待付款'</span><span class="token punctuation">,</span>
    <span class="token number">2</span><span class="token operator">:</span> <span class="token string">'待发货'</span><span class="token punctuation">,</span>
    <span class="token number">3</span><span class="token operator">:</span> '待收货，
    <span class="token number">4</span><span class="token operator">:</span> <span class="token string">'待评价'</span><span class="token punctuation">,</span>
    <span class="token number">5</span><span class="token operator">:</span> <span class="token string">'已完成'</span><span class="token punctuation">,</span>
    <span class="token number">6</span><span class="token operator">:</span> <span class="token string">'已取消'</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> stateMap<span class="token punctuation">[</span>payState<span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>column state<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>{{ fomartPayState(order.orderState) }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
    ...
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="tab切换的时候分页初始化" tabindex="-1"><a class="header-anchor" href="#tab切换的时候分页初始化" aria-hidden="true">#</a> tab切换的时候分页初始化</h4>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code>// src/views/Member/components/UserOrder.vue

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token comment">// tab切换</span>
<span class="token keyword">const</span> <span class="token function-variable function">tabChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">type</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token operator">...</span>
  params<span class="token punctuation">.</span>value<span class="token punctuation">.</span>page <span class="token operator">=</span> <span class="token number">1</span>
  <span class="token function">getOrderList</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


