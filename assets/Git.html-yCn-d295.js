import{_ as a}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as e,c as s,e as n}from"./app-2WwfhY3K.js";const i="/Blog/assets/image-20231226110408708-YGm79hO2.png",l="/Blog/assets/image-20231226120550844--b61ELrt.png",t="/Blog/assets/image-20231226145519714-nV4PYEAf.png",d="/Blog/assets/image-20231226150352568-UPp0Ji25.png",r="/Blog/assets/image-20231226151626435-xpDcVSzp.png",c="/Blog/assets/image-20231226152008521-4LKo7js2.png",o="/Blog/assets/image-20231226152934854-ZKRG6LiK.png",p="/Blog/assets/image-20231226154636160-tnUstv4N.png",h="/Blog/assets/image-20231226162434589-X8OkB4E_.png",u="/Blog/assets/image-20231226162844509-9lnzIrIw.png",g="/Blog/assets/image-20231226163300329-fK-KrFDs.png",m={},v=n('<h1 id="git-基础" tabindex="-1"><a class="header-anchor" href="#git-基础" aria-hidden="true">#</a> Git 基础</h1><h2 id="有什么用" tabindex="-1"><a class="header-anchor" href="#有什么用" aria-hidden="true">#</a> 有什么用</h2><p>一个免费开源，分布式的代码版本控制系统，帮助开发团队维护代码</p><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><p>去官网下载.exe，默认下一步即可</p><h3 id="检测是否安装成功" tabindex="-1"><a class="header-anchor" href="#检测是否安装成功" aria-hidden="true">#</a> 检测是否安装成功</h3><ol><li>打开 bash 终端</li><li>命令：<code>git -v</code> （查看版本号）</li></ol><p><img src="'+i+`" alt="image-20231226110408708" loading="lazy"></p><h2 id="配置用户信息" tabindex="-1"><a class="header-anchor" href="#配置用户信息" aria-hidden="true">#</a> 配置用户信息</h2><p>用于每次提交代码版本时表明自己身份</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> config <span class="token parameter variable">--global</span> user.name <span class="token string">&#39;你的名字&#39;</span>
<span class="token function">git</span> config <span class="token parameter variable">--global</span> user.email <span class="token string">&#39;你的邮箱&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="git-仓库" tabindex="-1"><a class="header-anchor" href="#git-仓库" aria-hidden="true">#</a> Git 仓库</h2><p>用于记录文件状态内容的地方，存储着修改的历史记录</p><p><img src="`+l+`" alt="image-20231226120550844" loading="lazy"></p><p>有两种创建方式：</p><ol><li>把本地文件夹转换成 Git 仓库：</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>从其他服务器上克隆 Git 仓库</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> clone 别人的仓库地址
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="git-的三个区域" tabindex="-1"><a class="header-anchor" href="#git-的三个区域" aria-hidden="true">#</a> Git 的三个区域</h2><p>工作区：实际开发时操作的文件夹</p><p>暂存区：保存之前的准备区域（暂存改动过的文件）</p><p>版本库：提交并保存暂存区中的内容，产生一个版本快照</p><p><img src="`+t+`" alt="image-20231226145519714" loading="lazy"></p><h3 id="命令" tabindex="-1"><a class="header-anchor" href="#命令" aria-hidden="true">#</a> 命令</h3><ul><li>暂存指定文件</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> <span class="token function">add</span> 文件名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>暂存所有改动的文件</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>提交并保存，产生版本快照</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&#39;注释说明&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>查看暂存区里面记录了哪些文件</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> ls-files
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+d+'" alt="image-20231226150352568" loading="lazy"></p><h2 id="git-文件状态" tabindex="-1"><a class="header-anchor" href="#git-文件状态" aria-hidden="true">#</a> Git 文件状态</h2><p>Git 文件一般有两种状态：</p><ul><li>未跟踪：新文件，从未被 Git 管理过</li><li>已跟踪：GIt 已经知道和管理的文件</li></ul><table><thead><tr><th style="text-align:center;">文件状态</th><th style="text-align:center;">概念</th><th style="text-align:center;">场景</th></tr></thead><tbody><tr><td style="text-align:center;">未跟踪(U)</td><td style="text-align:center;">从未被 Git 管理过</td><td style="text-align:center;">新文件</td></tr><tr><td style="text-align:center;">新添加(A)</td><td style="text-align:center;">第一次被 Git 暂存</td><td style="text-align:center;">之前版本记录无此文件</td></tr><tr><td style="text-align:center;">未修改(&#39;&#39;)</td><td style="text-align:center;">三个区域统一</td><td style="text-align:center;">提交保存后</td></tr><tr><td style="text-align:center;">已修改(M)</td><td style="text-align:center;">工作区内容变化</td><td style="text-align:center;">修改了内容产生</td></tr></tbody></table><p><img src="'+r+`" alt="image-20231226151626435" loading="lazy"></p><ul><li>查看文件状态</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> status <span class="token parameter variable">-s</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+c+`" alt="image-20231226152008521" loading="lazy"></p><h2 id="git-暂存区" tabindex="-1"><a class="header-anchor" href="#git-暂存区" aria-hidden="true">#</a> Git 暂存区</h2><p>暂时存储，可以临时恢复代码的内容，与版本库解耦</p><p>有一天，你写的代码出现bug了，需要回退到上一个版本，这个时候就可以从暂存区把文件拿回来覆盖你现在的文档。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> restore 目标文件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>不过，要注意，这个操作是覆盖操作，所以一定要三思而后行哦</p><p>当然，也可以从暂存区移除文件</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> <span class="token function">rm</span> <span class="token parameter variable">--cached</span> 目标文件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+o+`" alt="image-20231226152934854" loading="lazy"></p><h2 id="git-回退版本" tabindex="-1"><a class="header-anchor" href="#git-回退版本" aria-hidden="true">#</a> Git 回退版本</h2><ul><li>查看提交历史</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> log <span class="token parameter variable">--oneline</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+p+`" alt="image-20231226154636160" loading="lazy"></p><p>把版本库某个版本对应的内容快照，恢复到工作区/暂存区</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 工作区和暂存区的文件还会保留</span>
<span class="token function">git</span> reset <span class="token parameter variable">--soft</span> 版本号

<span class="token comment"># 工作区和暂存区的文件会不见</span>
<span class="token function">git</span> reset <span class="token parameter variable">--hard</span> 版本号

<span class="token comment"># 工作区的文件还保留，暂存区的文件会消失，与 git reset 等价</span>
<span class="token function">git</span> reset <span class="token parameter variable">--mixed</span> 版本号
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="删除文件" tabindex="-1"><a class="header-anchor" href="#删除文件" aria-hidden="true">#</a> 删除文件</h2><h3 id="步骤" tabindex="-1"><a class="header-anchor" href="#步骤" aria-hidden="true">#</a> 步骤</h3><ol><li>手动删除工作区文件</li><li>使用 <code>git add .</code> 提交变更</li><li>使用 <code>git commit -m &#39;版本说明&#39;</code> 提交到版本库</li></ol><h2 id="忽略文件" tabindex="-1"><a class="header-anchor" href="#忽略文件" aria-hidden="true">#</a> 忽略文件</h2><p>可以在 <code>.gitignore</code> 文件指定忽略跟踪文件，这样能够让 git 仓库更小更快。</p><p>例如：</p><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code># 忽略 npm 下载的第三方包
node_moudules
# 忽略分发文件夹
dist
# 忽略 VSCode 配置文件
.vscode
# 忽略秘钥文件
*.pem
*.cer
# 忽略日志文件
*.log
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="分支" tabindex="-1"><a class="header-anchor" href="#分支" aria-hidden="true">#</a> 分支</h2><p>本质上是指向提交节点的可变指针，默认名字是 master。但是现在 Github 因为某些原因，在 Github 上面的默认名字是 main。</p><p>默认情况下都是指向最后一次的提交</p><p><img src="`+h+'" alt="image-20231226162434589" loading="lazy"></p><h3 id="具体应用场景" tabindex="-1"><a class="header-anchor" href="#具体应用场景" aria-hidden="true">#</a> 具体应用场景</h3><p>就好比如多人协同开发，或者修复Bug，就可以开多个分支对代码进行修改，修改完成以后再对原先代码进行合并就行了。</p><p><img src="'+u+`" alt="image-20231226162844509" loading="lazy"></p><h3 id="命令-1" tabindex="-1"><a class="header-anchor" href="#命令-1" aria-hidden="true">#</a> 命令</h3><ol><li>创建分支命令</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> branch 分支名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>切换分支命令</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> checkout 分支名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">注意</p><ol><li>如果想要查看分支可以用这个命令</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> branch
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+g+`" alt="image-20231226163300329" loading="lazy"></p><ol start="2"><li>当你在main分支下把文件上传到了版本库后，再切换master分支，工作区的那个文件夹是会没有的</li></ol></div><h3 id="合并与删除" tabindex="-1"><a class="header-anchor" href="#合并与删除" aria-hidden="true">#</a> 合并与删除</h3><p>分支是弄了，但是分支以后要合并应该怎么弄呢？</p><h4 id="步骤-1" tabindex="-1"><a class="header-anchor" href="#步骤-1" aria-hidden="true">#</a> 步骤</h4><ol><li>切回要合入的分支上</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> checkout master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>合并其他分支过来</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> merge 分支名字
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="3"><li>删除合并后的分支指针</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> branch <span class="token parameter variable">-d</span> 分支名字
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这样子操作以后，它会自动产生依次新的提交。</p><h3 id="合并冲突" tabindex="-1"><a class="header-anchor" href="#合并冲突" aria-hidden="true">#</a> 合并冲突</h3><p>当然，这样搞也不是不会产生的问题</p><p>比如，</p><ol><li>基于 master 新建 publish 分支，完成发布文章业务，然后修改内容页面的 html 文件的 title 标签，并提交一次；</li><li>切换到 master，也在修改内容页面的 html 文件的 title 标签，并提交一次</li></ol><p>这样操作，Git会无法干净的合并，从而产生合并冲突。</p><p>也不是没有办法解决</p><h4 id="解决办法" tabindex="-1"><a class="header-anchor" href="#解决办法" aria-hidden="true">#</a> 解决办法</h4><ol><li>打开 VSCode 找到冲突文件并手动解决</li><li>解决后需要提交一次记录</li></ol><h4 id="避免方法" tabindex="-1"><a class="header-anchor" href="#避免方法" aria-hidden="true">#</a> 避免方法</h4><ol><li>按页面划分不同分支开发</li><li>公共代码在统一文件夹维护</li><li>Node等软件版本统一，npm 包统一下载</li></ol><h2 id="git-远程仓库" tabindex="-1"><a class="header-anchor" href="#git-远程仓库" aria-hidden="true">#</a> Git 远程仓库</h2><p>存放在网络的版本库</p><h3 id="步骤-2" tabindex="-1"><a class="header-anchor" href="#步骤-2" aria-hidden="true">#</a> 步骤</h3><ol><li>注册第三方托管平台网站账号</li><li>新建仓库得到远程仓库 Git 地址</li><li>本地 Git 仓库添加远程仓库地址</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> remote <span class="token function">add</span> 远程仓库别名 远程仓库地址

<span class="token comment"># 示例</span>
<span class="token function">git</span> remote <span class="token function">add</span> origin https://github.com/Arrow-Magician/Blog.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>地址有两种，一种是https的，另外一种是ssh的。ssh是需要配置公钥和密钥才行。</p><ol start="4"><li>本地 Git 仓库推送版本记录到远程仓库</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> push <span class="token parameter variable">-u</span> 远程仓库别名 本地和远程分支名

<span class="token comment"># 示例</span>
<span class="token function">git</span> push <span class="token parameter variable">-u</span> origin master
<span class="token comment"># 完整写法</span>
<span class="token function">git</span> push --set-upstream origin master:master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中，<code>-u</code> 是 <code>--set-upstream</code> 的简写；<code>master:master</code> 的意思是从本地的哪个分支推送到远程的哪个分支，因此这两个的名字不一定得非是一样的。</p><h3 id="克隆" tabindex="-1"><a class="header-anchor" href="#克隆" aria-hidden="true">#</a> 克隆</h3><p>拷贝一个 Git 仓库到本地进行使用</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> clone 远程仓库地址
<span class="token comment"># 示例</span>
<span class="token function">git</span> clone https://githubfast.com/Arrow-Magician/Blog.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="远程合并" tabindex="-1"><a class="header-anchor" href="#远程合并" aria-hidden="true">#</a> 远程合并</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> pull origin master
<span class="token comment"># 等价于以下两个命令的结合</span>

<span class="token comment"># 获取远程分支记录到本地，未合并</span>
<span class="token function">git</span> fetch origin master:master
<span class="token comment"># 把远程分支记录合并到所在分支下</span>
<span class="token function">git</span> merge origin/master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,110),b=[v];function f(x,k){return e(),s("div",null,b)}const G=a(m,[["render",f],["__file","Git.html.vue"]]);export{G as default};