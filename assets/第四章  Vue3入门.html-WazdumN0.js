const e=JSON.parse('{"key":"v-251dc97e","path":"/notes/fe/vue/Vue2_Vue3%20%E6%A0%B8%E5%BF%83%E6%8A%80%E6%9C%AF/%E7%AC%AC%E5%9B%9B%E7%AB%A0%20%20Vue3%E5%85%A5%E9%97%A8.html","title":"第四章 | Vue3入门","lang":"zh-CN","frontmatter":{"title":"第四章 | Vue3入门","order":7,"description":"Vue3 的优势 image-20231026102106051 Vue2 选项式 API :vs: Vue3 组合式 API 1. 代码量更少了 2. 分散式维护转为集中式维护，更易封装复用 使用create-vue创建项目 什么是create-vue？ create-vue是Vue官方新的脚手架工具，底层切换到了 vite，为开发提供极速响应。 i...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/Blog/notes/fe/vue/Vue2_Vue3%20%E6%A0%B8%E5%BF%83%E6%8A%80%E6%9C%AF/%E7%AC%AC%E5%9B%9B%E7%AB%A0%20%20Vue3%E5%85%A5%E9%97%A8.html"}],["meta",{"property":"og:site_name","content":"A.M. Blog"}],["meta",{"property":"og:title","content":"第四章 | Vue3入门"}],["meta",{"property":"og:description","content":"Vue3 的优势 image-20231026102106051 Vue2 选项式 API :vs: Vue3 组合式 API 1. 代码量更少了 2. 分散式维护转为集中式维护，更易封装复用 使用create-vue创建项目 什么是create-vue？ create-vue是Vue官方新的脚手架工具，底层切换到了 vite，为开发提供极速响应。 i..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-12-21T08:55:33.000Z"}],["meta",{"property":"article:author","content":"Arrow Magician"}],["meta",{"property":"article:modified_time","content":"2023-12-21T08:55:33.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"第四章 | Vue3入门\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-12-21T08:55:33.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Arrow Magician\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"Vue3 的优势","slug":"vue3-的优势","link":"#vue3-的优势","children":[]},{"level":2,"title":"Vue2 选项式 API 🆚 Vue3 组合式 API","slug":"vue2-选项式-api-vue3-组合式-api","link":"#vue2-选项式-api-vue3-组合式-api","children":[]},{"level":2,"title":"使用create-vue创建项目","slug":"使用create-vue创建项目","link":"#使用create-vue创建项目","children":[{"level":3,"title":"什么是create-vue？","slug":"什么是create-vue","link":"#什么是create-vue","children":[]},{"level":3,"title":"创建项目","slug":"创建项目","link":"#创建项目","children":[]},{"level":3,"title":"目录结构","slug":"目录结构","link":"#目录结构","children":[]}]},{"level":2,"title":"setup选项","slug":"setup选项","link":"#setup选项","children":[{"level":3,"title":"什么时候写setup？","slug":"什么时候写setup","link":"#什么时候写setup","children":[]},{"level":3,"title":"setup中写代码的特点","slug":"setup中写代码的特点","link":"#setup中写代码的特点","children":[]},{"level":3,"title":"script setup 语法糖","slug":"script-setup-语法糖","link":"#script-setup-语法糖","children":[]}]},{"level":2,"title":"reactive 和 ref 函数","slug":"reactive-和-ref-函数","link":"#reactive-和-ref-函数","children":[{"level":3,"title":"reactive()","slug":"reactive","link":"#reactive","children":[]},{"level":3,"title":"ref()","slug":"ref","link":"#ref","children":[]},{"level":3,"title":"reactive 🆚 ref","slug":"reactive-ref","link":"#reactive-ref","children":[]}]},{"level":2,"title":"computed","slug":"computed","link":"#computed","children":[]},{"level":2,"title":"watch","slug":"watch","link":"#watch","children":[{"level":3,"title":"1. 侦听单个数据","slug":"_1-侦听单个数据","link":"#_1-侦听单个数据","children":[]},{"level":3,"title":"2. 侦听多个数据","slug":"_2-侦听多个数据","link":"#_2-侦听多个数据","children":[]},{"level":3,"title":"3. immediate","slug":"_3-immediate","link":"#_3-immediate","children":[]},{"level":3,"title":"4. deep","slug":"_4-deep","link":"#_4-deep","children":[]},{"level":3,"title":"5. 对于对象中的单个属性，进行监视","slug":"_5-对于对象中的单个属性-进行监视","link":"#_5-对于对象中的单个属性-进行监视","children":[]}]},{"level":2,"title":"生命周期函数","slug":"生命周期函数","link":"#生命周期函数","children":[{"level":3,"title":"选项式与组合式","slug":"选项式与组合式","link":"#选项式与组合式","children":[]},{"level":3,"title":"用法","slug":"用法","link":"#用法","children":[]}]},{"level":2,"title":"父子通信","slug":"父子通信","link":"#父子通信","children":[{"level":3,"title":"父传子","slug":"父传子","link":"#父传子","children":[]},{"level":3,"title":"子传父","slug":"子传父","link":"#子传父","children":[]},{"level":3,"title":"总结","slug":"总结","link":"#总结","children":[]}]},{"level":2,"title":"模板引用","slug":"模板引用","link":"#模板引用","children":[{"level":3,"title":"defineExpose","slug":"defineexpose","link":"#defineexpose","children":[]}]},{"level":2,"title":"provide 和 inject","slug":"provide-和-inject","link":"#provide-和-inject","children":[{"level":3,"title":"作用","slug":"作用","link":"#作用","children":[]},{"level":3,"title":"跨层传递普通数据","slug":"跨层传递普通数据","link":"#跨层传递普通数据","children":[]},{"level":3,"title":"跨层传递响应式数据","slug":"跨层传递响应式数据","link":"#跨层传递响应式数据","children":[]},{"level":3,"title":"跨层传递方法","slug":"跨层传递方法","link":"#跨层传递方法","children":[]}]},{"level":2,"title":"defineOptions","slug":"defineoptions","link":"#defineoptions","children":[]},{"level":2,"title":"defineModel","slug":"definemodel","link":"#definemodel","children":[]}],"git":{"createdTime":1703148933000,"updatedTime":1703148933000,"contributors":[{"name":"Arrow-Magician","email":"315903697@qq.com","commits":1}]},"readingTime":{"minutes":8.88,"words":2665},"filePathRelative":"notes/fe/vue/Vue2+Vue3 核心技术/第四章  Vue3入门.md","localizedDate":"2023年12月21日","autoDesc":true}');export{e as data};
