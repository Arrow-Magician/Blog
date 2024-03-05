<template><div><h1 id="测试测试" tabindex="-1"><a class="header-anchor" href="#测试测试" aria-hidden="true">#</a> 测试测试</h1>
<h2 id="项目初始化" tabindex="-1"><a class="header-anchor" href="#项目初始化" aria-hidden="true">#</a> 项目初始化</h2>
<h3 id="创建项目" tabindex="-1"><a class="header-anchor" href="#创建项目" aria-hidden="true">#</a> 创建项目</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">pnpm</span> create vue
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Project name: vue3-rabbit</p>
<p>选择yes的项目：</p>
<p>Vue Router</p>
<p>pinia</p>
<Tabs id="22" :data='[{"id":"flex-start"},{"id":"flex-end"},{"id":"center"},{"id":"space-between"},{"id":"space-around"},{"id":"space-evenly"}]'>
<template #title0="{ value, isActive }">flex-start</template>
<template #title1="{ value, isActive }">flex-end</template>
<template #title2="{ value, isActive }">center</template>
<template #title3="{ value, isActive }">space-between</template>
<template #title4="{ value, isActive }">space-around</template>
<template #title5="{ value, isActive }">space-evenly</template>
<template #tab0="{ value, isActive }">
<p>默认，弹性盒子从起点开始依次排列</p>
<p><img src="@source/notes/fe/css/md_img/image-20240227111706514.png" alt="image-20240227111706514" loading="lazy"></p>
</template>
<template #tab1="{ value, isActive }">
<p>弹性盒子从终点开始依次排列</p>
<p><img src="@source/notes/fe/css/md_img/image-20240227111808749.png" alt="image-20240227111808749" loading="lazy"></p>
</template>
<template #tab2="{ value, isActive }">
<p>弹性盒子沿主轴居中排列</p>
<p><img src="@source/notes/fe/css/md_img/image-20240227111835596.png" alt="image-20240227111835596" loading="lazy"></p>
</template>
<template #tab3="{ value, isActive }">
<p>弹性盒子沿主轴均匀排列，空白间距均分在弹性盒子之间</p>
<p><img src="@source/notes/fe/css/md_img/image-20240227111910532.png" alt="image-20240227111910532" loading="lazy"></p>
</template>
<template #tab4="{ value, isActive }">
<p>弹性盒子沿主轴均匀排列，空白间距均分在弹性盒子两侧</p>
<p><img src="@source/notes/fe/css/md_img/image-20240227112027609.png" alt="image-20240227112027609" loading="lazy"></p>
</template>
<template #tab5="{ value, isActive }">
<p>弹性盒子沿主轴均匀排列，弹性盒子与容器之间间距相等</p>
<p><img src="@source/notes/fe/css/md_img/image-20240227112058313.png" alt="image-20240227112058313" loading="lazy"></p>
</template>
</Tabs>
</div></template>


