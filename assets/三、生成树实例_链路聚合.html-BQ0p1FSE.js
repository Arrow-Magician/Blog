import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,f as e,o as t}from"./app-BIWfNINM.js";const n="/Blog/assets/image-20240809093340114-Bv95cZst.png",l="/Blog/assets/image-20240809091424601-DMyQPryD.png",h="/Blog/assets/image-20240809091438086-Da8n07JT.png",r="/Blog/assets/image-20240809092933667-vJ2TAmcl.png",d="/Blog/assets/image-20240809092836779-C_Gzw0Tu.png",p="/Blog/assets/image-20240809095857658-eq5VjPwz.png",k="/Blog/assets/image-20240809095908266-CJlKUzHv.png",c="/Blog/assets/image-20240809095930507-CTJRrbGD.png",o="/Blog/assets/image-20240809101154395-C_QJp0XT.png",g="/Blog/assets/image-20240809101227145-BN_Q96Zj.png",m="/Blog/assets/image-20240809101320171-DeRoqwWI.png",u={};function A(b,i){return t(),a("div",null,i[0]||(i[0]=[e(`<h1 id="三、生成树实例-链路聚合" tabindex="-1"><a class="header-anchor" href="#三、生成树实例-链路聚合"><span>三、生成树实例&amp;链路聚合</span></a></h1><h2 id="重要命令配置" tabindex="-1"><a class="header-anchor" href="#重要命令配置"><span>重要命令配置</span></a></h2><p>生成树实例命令</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[Huawei] stp mode stp </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 配置生成树模式为 stp</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[Huawei] stp root primary </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 配置当前设备为根桥设备</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[Huawei] stp root secondary </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 配置当前交换设备为备份根桥设备</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[Huawei] stp priority 0 </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 配置设备生成树的优先级为 0</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[Huawei-GigabitEthernet0/0/1] stp port priority 0 </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 配置端口的优先级为 0</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[Huawei-GigabitEthernet0/0/1] stp cost 1000 </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 配置端口的路径开销为 1000</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[Huawei] stp mode mstp </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 配置生成树模式为 mstp</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[Huawei] stp region-configuration </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 进入 MST 域</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[Huawei-mst-region] region-name SW </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># MST 域名为 SW</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[Huawei-mst-region] instance 10 vlan 10 </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 将 vlan10 映射进实例 10</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[Huawei-mst-region] active region-configuration </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 激活 MST 域配置</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[Huawei-GigabitEthernet0/0/1] stp instance 10 cost 20000 </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 配置端口在实例 10 中的路径开销为 1000</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[Huawei-GigabitEthernet0/0/1] stp edged-port enable </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 配置 g0/0/1 为边缘端口</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>链路聚合命令</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[Huawei] interface Eth-Trunk 0 </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 进入聚合端口 0</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[Huawei-Eth-Trunk0] mode manual load-balance </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 配置聚合端口模式为手工模式</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[Huawei-Eth-Trunk0] trunkport GigabitEthernet 0/0/1 </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 将 g0/0/1 端口加入聚合链路</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[Huawei-Eth-Trunk0] trunkport GigabitEthernet 0/0/2 </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 将 g0/0/1 端口加入聚合链路</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[Huawei-Eth-Trunk0] mode lacp-static </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 配置聚合端口模式为 LACP 协商模式</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[Huawei-Eth-Trunk0] load-balance src-dst-ip </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 配置聚合端口流量基于源目 IP 地址的负</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="拓扑" tabindex="-1"><a class="header-anchor" href="#拓扑"><span>拓扑</span></a></h2><figure><img src="`+n+`" alt="image-20240809093340114" tabindex="0" loading="lazy"><figcaption>image-20240809093340114</figcaption></figure><h2 id="实验步骤" tabindex="-1"><a class="header-anchor" href="#实验步骤"><span>实验步骤</span></a></h2><h3 id="链路聚合" tabindex="-1"><a class="header-anchor" href="#链路聚合"><span>链路聚合</span></a></h3><h4 id="手工模式" tabindex="-1"><a class="header-anchor" href="#手工模式"><span>手工模式</span></a></h4><ol><li>在LSW1、LSW2上配置手工模式的链路聚合</li></ol><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># LSW1</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[LSW1] interface Eth-Trunk 0</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[LSW1-Eth-Trunk0] mode manual load-balance</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[LSW1-Eth-Trunk0] trunkport GigabitEthernet 0/0/1</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[LSW1-Eth-Trunk0] trunkport GigabitEthernet 0/0/2</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># LSW2</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[LSW2] interface Eth-Trunk 0</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[LSW2-Eth-Trunk0] mode manual load-balance</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[LSW2-Eth-Trunk0] trunkport GigabitEthernet 0/0/1</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[LSW2-Eth-Trunk0] trunkport GigabitEthernet 0/0/2</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用<code>display eth-trunk 0</code>可以查看链路聚合是否配置成功</p><figure><img src="`+l+'" alt="image-20240809091424601" tabindex="0" loading="lazy"><figcaption>image-20240809091424601</figcaption></figure><figure><img src="'+h+`" alt="image-20240809091438086" tabindex="0" loading="lazy"><figcaption>image-20240809091438086</figcaption></figure><h4 id="lacp-模式" tabindex="-1"><a class="header-anchor" href="#lacp-模式"><span>lacp 模式</span></a></h4><p>要想实现lacp模式，得先把之前的配置删除掉</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[LSW1-Eth-Trunk0] undo trunkport GigabitEthernet 0/0/1 to 0/0/2</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[LSW2-Eth-Trunk0] undo trunkport GigabitEthernet 0/0/1 to 0/0/2</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>配置lacp模式</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># LSW1</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[LSW1-Eth-Trunk0] mode lacp-static</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[LSW1-Eth-Trunk0] trunkport GigabitEthernet 0/0/1 to 0/0/2</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># LSW2</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[LSW2-Eth-Trunk0] mode lacp-static</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[LSW2-Eth-Trunk0] trunkport GigabitEthernet 0/0/1 to 0/0/2</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用<code>display eth-trunk 0</code>查看配置是否成功</p><figure><img src="`+r+'" alt="image-20240809092933667" tabindex="0" loading="lazy"><figcaption>image-20240809092933667</figcaption></figure><figure><img src="'+d+'" alt="image-20240809092836779" tabindex="0" loading="lazy"><figcaption>image-20240809092836779</figcaption></figure><h3 id="生成树实例" tabindex="-1"><a class="header-anchor" href="#生成树实例"><span>生成树实例</span></a></h3><ol><li>通过<code>display stp brief</code>可以看到<code>LSW1</code>是根桥，<code>LSW3</code>的<code>g0/0/2</code>是阻塞端口。</li></ol><figure><img src="'+p+'" alt="image-20240809095857658" tabindex="0" loading="lazy"><figcaption>image-20240809095857658</figcaption></figure><figure><img src="'+k+'" alt="image-20240809095908266" tabindex="0" loading="lazy"><figcaption>image-20240809095908266</figcaption></figure><figure><img src="'+c+`" alt="image-20240809095930507" tabindex="0" loading="lazy"><figcaption>image-20240809095930507</figcaption></figure><ol start="2"><li>那么现在，可以手动配置LSW2为根桥设备，只需要在LSW2上配置即可</li></ol><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[LSW2] stp root primary</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[LSW2] display stp brief</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>此时LSW2变为根桥设备</p><figure><img src="`+o+'" alt="image-20240809101154395" tabindex="0" loading="lazy"><figcaption>image-20240809101154395</figcaption></figure><figure><img src="'+g+'" alt="image-20240809101227145" tabindex="0" loading="lazy"><figcaption>image-20240809101227145</figcaption></figure><ol start="3"><li>想要逆转效果，可以使用如下命令</li></ol><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[LSW2] undo stp root</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>逆转成功</p><figure><img src="'+m+'" alt="image-20240809101320171" tabindex="0" loading="lazy"><figcaption>image-20240809101320171</figcaption></figure><ol start="4"><li>现在想要LSW2的g0/0/3阻塞，只需要更改其cost值即可</li></ol><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[LSW2-GigabitEthernet0/0/3] stp cost 300000</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div>',40)]))}const v=s(u,[["render",A],["__file","三、生成树实例_链路聚合.html.vue"]]),f=JSON.parse('{"path":"/notes/web/huawei/%E4%B8%89%E3%80%81%E7%94%9F%E6%88%90%E6%A0%91%E5%AE%9E%E4%BE%8B_%E9%93%BE%E8%B7%AF%E8%81%9A%E5%90%88.html","title":"三、生成树实例&链路聚合","lang":"zh-CN","frontmatter":{"title":"三、生成树实例&链路聚合","order":3,"description":"三、生成树实例&链路聚合 重要命令配置 生成树实例命令 链路聚合命令 拓扑 image-20240809093340114image-20240809093340114 实验步骤 链路聚合 手工模式 在LSW1、LSW2上配置手工模式的链路聚合 使用display eth-trunk 0可以查看链路聚合是否配置成功 image-202408090914...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/Blog/notes/web/huawei/%E4%B8%89%E3%80%81%E7%94%9F%E6%88%90%E6%A0%91%E5%AE%9E%E4%BE%8B_%E9%93%BE%E8%B7%AF%E8%81%9A%E5%90%88.html"}],["meta",{"property":"og:site_name","content":"A.M. Blog"}],["meta",{"property":"og:title","content":"三、生成树实例&链路聚合"}],["meta",{"property":"og:description","content":"三、生成树实例&链路聚合 重要命令配置 生成树实例命令 链路聚合命令 拓扑 image-20240809093340114image-20240809093340114 实验步骤 链路聚合 手工模式 在LSW1、LSW2上配置手工模式的链路聚合 使用display eth-trunk 0可以查看链路聚合是否配置成功 image-202408090914..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-04T15:17:10.000Z"}],["meta",{"property":"article:modified_time","content":"2024-10-04T15:17:10.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"三、生成树实例&链路聚合\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-04T15:17:10.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Arrow Magician\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"重要命令配置","slug":"重要命令配置","link":"#重要命令配置","children":[]},{"level":2,"title":"拓扑","slug":"拓扑","link":"#拓扑","children":[]},{"level":2,"title":"实验步骤","slug":"实验步骤","link":"#实验步骤","children":[{"level":3,"title":"链路聚合","slug":"链路聚合","link":"#链路聚合","children":[]},{"level":3,"title":"生成树实例","slug":"生成树实例","link":"#生成树实例","children":[]}]}],"git":{"createdTime":1728055030000,"updatedTime":1728055030000,"contributors":[{"name":"Arrow-Magician","email":"315903697@qq.com","commits":1}]},"readingTime":{"minutes":2.34,"words":702},"filePathRelative":"notes/web/huawei/三、生成树实例&链路聚合.md","localizedDate":"2024年10月4日","autoDesc":true}');export{v as comp,f as data};
