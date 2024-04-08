import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as p,o,c as i,d as n,f as s,a as c,e as a}from"./app-NcYMie7E.js";const l="/Blog/assets/image-20240313170040821-judpRbku.png",u="/Blog/assets/image-20240313170051357-Hj7vXoDk.png",r="/Blog/assets/image-20240313171013123--2KAJroj.png",d={},k=a('<h1 id="_11-event-keyborad-键盘事件" tabindex="-1"><a class="header-anchor" href="#_11-event-keyborad-键盘事件" aria-hidden="true">#</a> 11-Event Keyborad(键盘事件)</h1><h2 id="效果" tabindex="-1"><a class="header-anchor" href="#效果" aria-hidden="true">#</a> 效果</h2><p><img src="'+l+'" alt="image-20240313170040821" loading="lazy"></p><p><img src="'+u+`" alt="image-20240313170051357" loading="lazy"></p><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>insert<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>key<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>请按下你的键盘<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">*</span> <span class="token punctuation">{</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">body</span> <span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #c1c1c1<span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100vh<span class="token punctuation">;</span>
  <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.key</span> <span class="token punctuation">{</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #999<span class="token punctuation">;</span>
  <span class="token property">border-color</span><span class="token punctuation">:</span> black<span class="token punctuation">;</span>
  <span class="token property">box-shadow</span><span class="token punctuation">:</span> 1px 1px 1px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.1<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> inline-flex<span class="token punctuation">;</span>
  <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
  <span class="token property">font-weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
  <span class="token property">flex-direction</span><span class="token punctuation">:</span> column<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
  <span class="token property">min-width</span><span class="token punctuation">:</span> 150px<span class="token punctuation">;</span>
  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.key small</span> <span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
  <span class="token property">top</span><span class="token punctuation">:</span> -24px<span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #555<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 14px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token atrule"><span class="token rule">@media</span> <span class="token punctuation">(</span><span class="token property">max-width</span><span class="token punctuation">:</span> 768px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
  <span class="token selector">.key</span> <span class="token punctuation">{</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> 10px 0<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> insert <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;insert&#39;</span><span class="token punctuation">)</span>

window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;keydown&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  insert<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
    &lt;div class=&quot;key&quot;&gt;
      </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>event<span class="token punctuation">.</span>key <span class="token operator">===</span> <span class="token string">&#39; &#39;</span> <span class="token operator">?</span> <span class="token string">&#39;Space&#39;</span> <span class="token operator">:</span> event<span class="token punctuation">.</span>key<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">
      &lt;small&gt;event.key&lt;/small&gt;
    &lt;/div&gt;
    &lt;div class=&quot;key&quot;&gt;
      </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>event<span class="token punctuation">.</span>keyCode<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">
      &lt;small&gt;event.keyCode&lt;/small&gt;
    &lt;/div&gt;
    &lt;div class=&quot;key&quot;&gt;
      </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>event<span class="token punctuation">.</span>code<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">
      &lt;small&gt;event.code&lt;/small&gt;
    &lt;/div&gt;
  </span><span class="token template-punctuation string">\`</span></span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="解析" tabindex="-1"><a class="header-anchor" href="#解析" aria-hidden="true">#</a> 解析</h2><h3 id="keycode" tabindex="-1"><a class="header-anchor" href="#keycode" aria-hidden="true">#</a> keyCode</h3>`,10),v=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{js:"",class:"language-javascript"},[n("code",null,[s("window"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"addEventListener"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'keydown'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"event"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  insert`),n("span",{class:"token punctuation"},"."),s("innerHTML "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},`
    <div class="key">
      `),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("event"),n("span",{class:"token punctuation"},"."),s("key "),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token string"},"' '"),s(),n("span",{class:"token operator"},"?"),s(),n("span",{class:"token string"},"'Space'"),s(),n("span",{class:"token operator"},":"),s(" event"),n("span",{class:"token punctuation"},"."),s("key"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},`
      <small>event.key</small>
    </div>
    <div class="key">
      `),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("event"),n("span",{class:"token punctuation"},"."),s("keyCode"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},`
      <small>event.keyCode</small>
    </div>
    <div class="key">
      `),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("event"),n("span",{class:"token punctuation"},"."),s("code"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},`
      <small>event.code</small>
    </div>
  `),n("span",{class:"token template-punctuation string"},"`")]),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),m={href:"https://developer.mozilla.org/zh-CN/docs/Web/API/KeyboardEvent/keyCode",target:"_blank",rel:"noopener noreferrer"},b=a('<p><img src="'+r+'" alt="image-20240313171013123" loading="lazy"></p><p>也就是说，单纯的用ASCⅡ码来标记键盘上的值已经不再合适，现在有两个代替的属性<code>KeyboardEvent.key</code> 和 <code>KeyboardEvent.code</code> 属性。</p><h4 id="_1-keyboardevent-key" tabindex="-1"><a class="header-anchor" href="#_1-keyboardevent-key" aria-hidden="true">#</a> 1. KeyboardEvent.key</h4><p>返回一个字符串，表示按下的键的标识符。例如，按下 &#39;a&#39; 键时，<code>key</code> 的值将是 &#39;a&#39;。</p><h4 id="_2-keyboardevent-code" tabindex="-1"><a class="header-anchor" href="#_2-keyboardevent-code" aria-hidden="true">#</a> 2. KeyboardEvent.code</h4><p>返回一个字符串，表示按下的键的物理位置。例如 &quot;Digit1&quot; 表示键盘上的1，而 &quot;KeyA&quot; 表示主键盘上的 &#39;a&#39; 键。</p>',6);function g(y,h){const t=p("ExternalLinkIcon");return o(),i("div",null,[k,v,n("p",null,[s("废话不多说，直接上"),n("a",m,[s("文档"),c(t)])]),b])}const f=e(d,[["render",g],["__file","11-Event-Keyborad(键盘事件).html.vue"]]);export{f as default};
