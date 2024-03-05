// src/.vuepress/config.ts
import { defineUserConfig } from "vuepress";

// src/.vuepress/theme.ts
import { hopeTheme } from "vuepress-theme-hope";

// src/.vuepress/navbar.ts
import { navbar } from "vuepress-theme-hope";
var navbar_default = navbar([
  { text: "\u9996\u9875", link: "/" },
  {
    text: "\u6587\u7AE0",
    prefix: "/notes/",
    children: [
      {
        text: "\u524D\u7AEF",
        prefix: "fe/",
        children: [
          { text: "HTML", link: "html" },
          { text: "CSS", link: "css" },
          { text: "JavaScript", link: "javascript/JavaScript \u57FA\u7840/\u4E00\u3001\u57FA\u7840\u8BED\u6CD5.md" },
          { text: "Vue", link: "vue/Vue2+Vue3 \u6838\u5FC3\u6280\u672F/\u7B2C\u4E00\u7AE0 Vue\u5165\u95E8.md" },
          { text: "TypeScript", link: "typescript/TypeScript \u57FA\u7840\u6559\u7A0B/TypeScript.md" },
          { text: "Git", link: "git/Git.md" }
        ]
      },
      {
        text: "\u540E\u7AEF",
        prefix: "be/",
        children: [
          { text: "python", link: "" }
        ]
      },
      { text: "\u533B\u9662", link: "hospital" }
    ]
  },
  { text: "\u8D44\u6E90", link: "resources" }
]);

// src/.vuepress/sidebar.ts
import { sidebar } from "vuepress-theme-hope";
var sidebar_default = sidebar({
  // "/notes/fe/vue": [
  //   "",
  //   "Vue3小兔鲜项目"
  // ],
  "/notes/fe/html": "structure",
  "/notes/fe/css": "structure",
  "/notes/fe/javascript": "structure",
  "/notes/fe/vue": "structure",
  "/notes/fe/typescript": "structure",
  "/notes/fe/git": "structure",
  "/": [
    "",
    {
      text: "\u6848\u4F8B",
      icon: "laptop-code",
      prefix: "demo/",
      link: "demo/",
      children: "structure"
    },
    {
      text: "\u6587\u6863",
      icon: "book",
      prefix: "guide/",
      children: "structure"
    },
    "slides"
  ],
  sidebarSorter: ["date"]
});

// src/.vuepress/theme.ts
var theme_default = hopeTheme({
  hostname: "https://vuepress-theme-hope-docs-demo.netlify.app",
  author: {
    name: "Arrow Magician",
    url: "https://mister-hope.com"
  },
  iconAssets: "fontawesome-with-brands",
  logo: "/logo.svg",
  favicon: "/favicon.ico",
  repo: "https://github.com/Arrow-Magician",
  repoLabel: "Github",
  docsDir: "src",
  navbar: navbar_default,
  sidebar: sidebar_default,
  // footer: false,
  displayFooter: true,
  encrypt: {
    config: {
      "/demo/encrypt.html": ["1234"]
    }
  },
  // page meta
  // metaLocales: {
  //   editLink: '在 GitHub 上编辑此页'
  // },
  editLink: false,
  breadcrumb: false,
  plugins: {
    // All features are enabled for demo, only preserve features you need here
    mdEnhance: {
      tabs: true,
      // 启用自定义容器
      container: true,
      // 启用选项卡
      codetabs: true,
      // 启用vue演示
      vuePlayground: true,
      align: true,
      attrs: true,
      component: true,
      demo: true,
      // 图片描述文字
      figure: false,
      imgLazyload: true,
      imgSize: true,
      include: true,
      mark: true,
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended"
              };
          }
        }
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true
    },
    components: {
      components: ["VPCard"]
    }
    // uncomment these if you want a pwa
    // pwa: {
    //   favicon: "/favicon.ico",
    //   cacheHTML: true,
    //   cachePic: true,
    //   appendBase: true,
    //   apple: {
    //     icon: "/assets/icon/apple-icon-152.png",
    //     statusBarColor: "black",
    //   },
    //   msTile: {
    //     image: "/assets/icon/ms-icon-144.png",
    //     color: "#ffffff",
    //   },
    //   manifest: {
    //     icons: [
    //       {
    //         src: "/assets/icon/chrome-mask-512.png",
    //         sizes: "512x512",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-mask-192.png",
    //         sizes: "192x192",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-192.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //       },
    //     ],
    //     shortcuts: [
    //       {
    //         name: "Demo",
    //         short_name: "Demo",
    //         url: "/demo/",
    //         icons: [
    //           {
    //             src: "/assets/icon/guide-maskable.png",
    //             sizes: "192x192",
    //             purpose: "maskable",
    //             type: "image/png",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // },
  }
});

// src/.vuepress/config.ts
var config_default = defineUserConfig({
  base: "/Blog/",
  lang: "zh-CN",
  title: "A.M. Blog",
  description: "ArrowMagician\u7684\u535A\u5BA2",
  theme: theme_default
  // Enable it with pwa
  // shouldPrefetch: false,
});
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjLy52dWVwcmVzcy9jb25maWcudHMiLCAic3JjLy52dWVwcmVzcy90aGVtZS50cyIsICJzcmMvLnZ1ZXByZXNzL25hdmJhci50cyIsICJzcmMvLnZ1ZXByZXNzL3NpZGViYXIudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJIOi9Qcm9ncmFtbWluZyBTdG9yYWdlL0Zyb250IGVuZCBkZXZlbG9wbWVudC9WdWVQcmVzcy9teS1kb2NzLXYyL3NyYy8udnVlcHJlc3NcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkg6XFxcXFByb2dyYW1taW5nIFN0b3JhZ2VcXFxcRnJvbnQgZW5kIGRldmVsb3BtZW50XFxcXFZ1ZVByZXNzXFxcXG15LWRvY3MtdjJcXFxcc3JjXFxcXC52dWVwcmVzc1xcXFxjb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0g6L1Byb2dyYW1taW5nJTIwU3RvcmFnZS9Gcm9udCUyMGVuZCUyMGRldmVsb3BtZW50L1Z1ZVByZXNzL215LWRvY3MtdjIvc3JjLy52dWVwcmVzcy9jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVVc2VyQ29uZmlnIH0gZnJvbSBcInZ1ZXByZXNzXCI7XG5pbXBvcnQgdGhlbWUgZnJvbSBcIi4vdGhlbWUuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lVXNlckNvbmZpZyh7XG4gIGJhc2U6IFwiL0Jsb2cvXCIsXG5cbiAgbGFuZzogXCJ6aC1DTlwiLFxuICB0aXRsZTogXCJBLk0uIEJsb2dcIixcbiAgZGVzY3JpcHRpb246IFwiQXJyb3dNYWdpY2lhblx1NzY4NFx1NTM1QVx1NUJBMlwiLFxuXG5cbiAgdGhlbWUsXG5cblxuICAvLyBFbmFibGUgaXQgd2l0aCBwd2FcbiAgLy8gc2hvdWxkUHJlZmV0Y2g6IGZhbHNlLFxufSk7XG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkg6L1Byb2dyYW1taW5nIFN0b3JhZ2UvRnJvbnQgZW5kIGRldmVsb3BtZW50L1Z1ZVByZXNzL215LWRvY3MtdjIvc3JjLy52dWVwcmVzc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiSDpcXFxcUHJvZ3JhbW1pbmcgU3RvcmFnZVxcXFxGcm9udCBlbmQgZGV2ZWxvcG1lbnRcXFxcVnVlUHJlc3NcXFxcbXktZG9jcy12MlxcXFxzcmNcXFxcLnZ1ZXByZXNzXFxcXHRoZW1lLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9IOi9Qcm9ncmFtbWluZyUyMFN0b3JhZ2UvRnJvbnQlMjBlbmQlMjBkZXZlbG9wbWVudC9WdWVQcmVzcy9teS1kb2NzLXYyL3NyYy8udnVlcHJlc3MvdGhlbWUudHNcIjtpbXBvcnQgeyBob3BlVGhlbWUgfSBmcm9tICd2dWVwcmVzcy10aGVtZS1ob3BlJ1xuaW1wb3J0IG5hdmJhciBmcm9tICcuL25hdmJhci5qcydcbmltcG9ydCBzaWRlYmFyIGZyb20gJy4vc2lkZWJhci5qcydcbi8vIGltcG9ydCB7IG1kRW5oYW5jZVBsdWdpbiB9IGZyb20gXCJ2dWVwcmVzcy1wbHVnaW4tbWQtZW5oYW5jZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBob3BlVGhlbWUoe1xuICBob3N0bmFtZTogJ2h0dHBzOi8vdnVlcHJlc3MtdGhlbWUtaG9wZS1kb2NzLWRlbW8ubmV0bGlmeS5hcHAnLFxuXG4gIGF1dGhvcjoge1xuICAgIG5hbWU6ICdBcnJvdyBNYWdpY2lhbicsXG4gICAgdXJsOiAnaHR0cHM6Ly9taXN0ZXItaG9wZS5jb20nXG4gIH0sXG5cbiAgaWNvbkFzc2V0czogJ2ZvbnRhd2Vzb21lLXdpdGgtYnJhbmRzJyxcblxuICBsb2dvOiAnL2xvZ28uc3ZnJyxcbiAgZmF2aWNvbjogJy9mYXZpY29uLmljbycsXG5cbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9BcnJvdy1NYWdpY2lhbicsXG4gIHJlcG9MYWJlbDogJ0dpdGh1YicsXG5cbiAgZG9jc0RpcjogJ3NyYycsXG5cbiAgbmF2YmFyLFxuXG4gIHNpZGViYXIsXG5cbiAgLy8gZm9vdGVyOiBmYWxzZSxcblxuICBkaXNwbGF5Rm9vdGVyOiB0cnVlLFxuXG4gIGVuY3J5cHQ6IHtcbiAgICBjb25maWc6IHtcbiAgICAgICcvZGVtby9lbmNyeXB0Lmh0bWwnOiBbJzEyMzQnXVxuICAgIH1cbiAgfSxcblxuICAvLyBwYWdlIG1ldGFcbiAgLy8gbWV0YUxvY2FsZXM6IHtcbiAgLy8gICBlZGl0TGluazogJ1x1NTcyOCBHaXRIdWIgXHU0RTBBXHU3RjE2XHU4RjkxXHU2QjY0XHU5ODc1J1xuICAvLyB9LFxuICBlZGl0TGluazogZmFsc2UsXG4gIGJyZWFkY3J1bWI6IGZhbHNlLFxuXG4gIHBsdWdpbnM6IHtcbiAgICAvLyBBbGwgZmVhdHVyZXMgYXJlIGVuYWJsZWQgZm9yIGRlbW8sIG9ubHkgcHJlc2VydmUgZmVhdHVyZXMgeW91IG5lZWQgaGVyZVxuICAgIG1kRW5oYW5jZToge1xuICAgICAgdGFiczogdHJ1ZSxcbiAgICAgIC8vIFx1NTQyRlx1NzUyOFx1ODFFQVx1NUI5QVx1NEU0OVx1NUJCOVx1NTY2OFxuICAgICAgY29udGFpbmVyOiB0cnVlLFxuICAgICAgLy8gXHU1NDJGXHU3NTI4XHU5MDA5XHU5ODc5XHU1MzYxXG4gICAgICBjb2RldGFiczogdHJ1ZSxcbiAgICAgIC8vIFx1NTQyRlx1NzUyOHZ1ZVx1NkYxNFx1NzkzQVxuICAgICAgdnVlUGxheWdyb3VuZDogdHJ1ZSxcbiAgICAgIGFsaWduOiB0cnVlLFxuICAgICAgYXR0cnM6IHRydWUsXG4gICAgICBjb21wb25lbnQ6IHRydWUsXG4gICAgICBkZW1vOiB0cnVlLFxuICAgICAgLy8gXHU1NkZFXHU3MjQ3XHU2M0NGXHU4RkYwXHU2NTg3XHU1QjU3XG4gICAgICBmaWd1cmU6IGZhbHNlLFxuICAgICAgaW1nTGF6eWxvYWQ6IHRydWUsXG4gICAgICBpbWdTaXplOiB0cnVlLFxuICAgICAgaW5jbHVkZTogdHJ1ZSxcbiAgICAgIG1hcms6IHRydWUsXG4gICAgICBzdHlsaXplOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBtYXRjaGVyOiAnUmVjb21tZW5kZWQnLFxuICAgICAgICAgIHJlcGxhY2VyOiAoeyB0YWcgfSkgPT4ge1xuICAgICAgICAgICAgaWYgKHRhZyA9PT0gJ2VtJylcbiAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB0YWc6ICdCYWRnZScsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogJ3RpcCcgfSxcbiAgICAgICAgICAgICAgICBjb250ZW50OiAnUmVjb21tZW5kZWQnXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBzdWI6IHRydWUsXG4gICAgICBzdXA6IHRydWUsXG4gICAgICB0YWJzOiB0cnVlLFxuICAgICAgdlByZTogdHJ1ZVxuICAgIH0sXG4gICAgY29tcG9uZW50czoge1xuICAgICAgY29tcG9uZW50czogWydWUENhcmQnXVxuICAgIH1cblxuICAgIC8vIHVuY29tbWVudCB0aGVzZSBpZiB5b3Ugd2FudCBhIHB3YVxuICAgIC8vIHB3YToge1xuICAgIC8vICAgZmF2aWNvbjogXCIvZmF2aWNvbi5pY29cIixcbiAgICAvLyAgIGNhY2hlSFRNTDogdHJ1ZSxcbiAgICAvLyAgIGNhY2hlUGljOiB0cnVlLFxuICAgIC8vICAgYXBwZW5kQmFzZTogdHJ1ZSxcbiAgICAvLyAgIGFwcGxlOiB7XG4gICAgLy8gICAgIGljb246IFwiL2Fzc2V0cy9pY29uL2FwcGxlLWljb24tMTUyLnBuZ1wiLFxuICAgIC8vICAgICBzdGF0dXNCYXJDb2xvcjogXCJibGFja1wiLFxuICAgIC8vICAgfSxcbiAgICAvLyAgIG1zVGlsZToge1xuICAgIC8vICAgICBpbWFnZTogXCIvYXNzZXRzL2ljb24vbXMtaWNvbi0xNDQucG5nXCIsXG4gICAgLy8gICAgIGNvbG9yOiBcIiNmZmZmZmZcIixcbiAgICAvLyAgIH0sXG4gICAgLy8gICBtYW5pZmVzdDoge1xuICAgIC8vICAgICBpY29uczogW1xuICAgIC8vICAgICAgIHtcbiAgICAvLyAgICAgICAgIHNyYzogXCIvYXNzZXRzL2ljb24vY2hyb21lLW1hc2stNTEyLnBuZ1wiLFxuICAgIC8vICAgICAgICAgc2l6ZXM6IFwiNTEyeDUxMlwiLFxuICAgIC8vICAgICAgICAgcHVycG9zZTogXCJtYXNrYWJsZVwiLFxuICAgIC8vICAgICAgICAgdHlwZTogXCJpbWFnZS9wbmdcIixcbiAgICAvLyAgICAgICB9LFxuICAgIC8vICAgICAgIHtcbiAgICAvLyAgICAgICAgIHNyYzogXCIvYXNzZXRzL2ljb24vY2hyb21lLW1hc2stMTkyLnBuZ1wiLFxuICAgIC8vICAgICAgICAgc2l6ZXM6IFwiMTkyeDE5MlwiLFxuICAgIC8vICAgICAgICAgcHVycG9zZTogXCJtYXNrYWJsZVwiLFxuICAgIC8vICAgICAgICAgdHlwZTogXCJpbWFnZS9wbmdcIixcbiAgICAvLyAgICAgICB9LFxuICAgIC8vICAgICAgIHtcbiAgICAvLyAgICAgICAgIHNyYzogXCIvYXNzZXRzL2ljb24vY2hyb21lLTUxMi5wbmdcIixcbiAgICAvLyAgICAgICAgIHNpemVzOiBcIjUxMng1MTJcIixcbiAgICAvLyAgICAgICAgIHR5cGU6IFwiaW1hZ2UvcG5nXCIsXG4gICAgLy8gICAgICAgfSxcbiAgICAvLyAgICAgICB7XG4gICAgLy8gICAgICAgICBzcmM6IFwiL2Fzc2V0cy9pY29uL2Nocm9tZS0xOTIucG5nXCIsXG4gICAgLy8gICAgICAgICBzaXplczogXCIxOTJ4MTkyXCIsXG4gICAgLy8gICAgICAgICB0eXBlOiBcImltYWdlL3BuZ1wiLFxuICAgIC8vICAgICAgIH0sXG4gICAgLy8gICAgIF0sXG4gICAgLy8gICAgIHNob3J0Y3V0czogW1xuICAgIC8vICAgICAgIHtcbiAgICAvLyAgICAgICAgIG5hbWU6IFwiRGVtb1wiLFxuICAgIC8vICAgICAgICAgc2hvcnRfbmFtZTogXCJEZW1vXCIsXG4gICAgLy8gICAgICAgICB1cmw6IFwiL2RlbW8vXCIsXG4gICAgLy8gICAgICAgICBpY29uczogW1xuICAgIC8vICAgICAgICAgICB7XG4gICAgLy8gICAgICAgICAgICAgc3JjOiBcIi9hc3NldHMvaWNvbi9ndWlkZS1tYXNrYWJsZS5wbmdcIixcbiAgICAvLyAgICAgICAgICAgICBzaXplczogXCIxOTJ4MTkyXCIsXG4gICAgLy8gICAgICAgICAgICAgcHVycG9zZTogXCJtYXNrYWJsZVwiLFxuICAgIC8vICAgICAgICAgICAgIHR5cGU6IFwiaW1hZ2UvcG5nXCIsXG4gICAgLy8gICAgICAgICAgIH0sXG4gICAgLy8gICAgICAgICBdLFxuICAgIC8vICAgICAgIH0sXG4gICAgLy8gICAgIF0sXG4gICAgLy8gICB9LFxuICAgIC8vIH0sXG4gIH1cbn0pXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkg6L1Byb2dyYW1taW5nIFN0b3JhZ2UvRnJvbnQgZW5kIGRldmVsb3BtZW50L1Z1ZVByZXNzL215LWRvY3MtdjIvc3JjLy52dWVwcmVzc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiSDpcXFxcUHJvZ3JhbW1pbmcgU3RvcmFnZVxcXFxGcm9udCBlbmQgZGV2ZWxvcG1lbnRcXFxcVnVlUHJlc3NcXFxcbXktZG9jcy12MlxcXFxzcmNcXFxcLnZ1ZXByZXNzXFxcXG5hdmJhci50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vSDovUHJvZ3JhbW1pbmclMjBTdG9yYWdlL0Zyb250JTIwZW5kJTIwZGV2ZWxvcG1lbnQvVnVlUHJlc3MvbXktZG9jcy12Mi9zcmMvLnZ1ZXByZXNzL25hdmJhci50c1wiO2ltcG9ydCB7IG5hdmJhciB9IGZyb20gXCJ2dWVwcmVzcy10aGVtZS1ob3BlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IG5hdmJhcihbXG4gIHsgdGV4dDogXCJcdTk5OTZcdTk4NzVcIiwgbGluazogXCIvXCIgfSxcbiAge1xuICAgIHRleHQ6IFwiXHU2NTg3XHU3QUUwXCIsXG4gICAgcHJlZml4OiBcIi9ub3Rlcy9cIixcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICB0ZXh0OiBcIlx1NTI0RFx1N0FFRlwiLFxuICAgICAgICBwcmVmaXg6IFwiZmUvXCIsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgeyB0ZXh0OiBcIkhUTUxcIiwgbGluazogXCJodG1sXCIgfSxcbiAgICAgICAgICB7IHRleHQ6IFwiQ1NTXCIsIGxpbms6IFwiY3NzXCIgfSxcbiAgICAgICAgICB7IHRleHQ6IFwiSmF2YVNjcmlwdFwiLCBsaW5rOiBcImphdmFzY3JpcHQvSmF2YVNjcmlwdCBcdTU3RkFcdTc4NDAvXHU0RTAwXHUzMDAxXHU1N0ZBXHU3ODQwXHU4QkVEXHU2Q0Q1Lm1kXCIgfSxcbiAgICAgICAgICB7IHRleHQ6IFwiVnVlXCIsIGxpbms6IFwidnVlL1Z1ZTIrVnVlMyBcdTY4MzhcdTVGQzNcdTYyODBcdTY3MkYvXHU3QjJDXHU0RTAwXHU3QUUwIFZ1ZVx1NTE2NVx1OTVFOC5tZFwiIH0sXG4gICAgICAgICAgeyB0ZXh0OiBcIlR5cGVTY3JpcHRcIiwgbGluazogXCJ0eXBlc2NyaXB0L1R5cGVTY3JpcHQgXHU1N0ZBXHU3ODQwXHU2NTU5XHU3QTBCL1R5cGVTY3JpcHQubWRcIiB9LFxuICAgICAgICAgIHsgdGV4dDogXCJHaXRcIiwgbGluazogXCJnaXQvR2l0Lm1kXCIgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0ZXh0OiBcIlx1NTQwRVx1N0FFRlwiLFxuICAgICAgICBwcmVmaXg6IFwiYmUvXCIsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgeyB0ZXh0OiBcInB5dGhvblwiLCBsaW5rOiBcIlwiIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHsgdGV4dDogXCJcdTUzM0JcdTk2NjJcIiwgbGluazogXCJob3NwaXRhbFwiIH0sXG4gICAgXVxuICB9LFxuICB7IHRleHQ6IFwiXHU4RDQ0XHU2RTkwXCIsIGxpbms6IFwicmVzb3VyY2VzXCIgfSxcblxuXSk7XG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkg6L1Byb2dyYW1taW5nIFN0b3JhZ2UvRnJvbnQgZW5kIGRldmVsb3BtZW50L1Z1ZVByZXNzL215LWRvY3MtdjIvc3JjLy52dWVwcmVzc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiSDpcXFxcUHJvZ3JhbW1pbmcgU3RvcmFnZVxcXFxGcm9udCBlbmQgZGV2ZWxvcG1lbnRcXFxcVnVlUHJlc3NcXFxcbXktZG9jcy12MlxcXFxzcmNcXFxcLnZ1ZXByZXNzXFxcXHNpZGViYXIudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0g6L1Byb2dyYW1taW5nJTIwU3RvcmFnZS9Gcm9udCUyMGVuZCUyMGRldmVsb3BtZW50L1Z1ZVByZXNzL215LWRvY3MtdjIvc3JjLy52dWVwcmVzcy9zaWRlYmFyLnRzXCI7aW1wb3J0IHsgc2lkZWJhciB9IGZyb20gXCJ2dWVwcmVzcy10aGVtZS1ob3BlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHNpZGViYXIoe1xuICAvLyBcIi9ub3Rlcy9mZS92dWVcIjogW1xuICAvLyAgIFwiXCIsXG4gIC8vICAgXCJWdWUzXHU1QzBGXHU1MTU0XHU5QzlDXHU5ODc5XHU3NkVFXCJcbiAgLy8gXSxcbiAgXCIvbm90ZXMvZmUvaHRtbFwiOiBcInN0cnVjdHVyZVwiLFxuICBcIi9ub3Rlcy9mZS9jc3NcIjogXCJzdHJ1Y3R1cmVcIixcbiAgXCIvbm90ZXMvZmUvamF2YXNjcmlwdFwiOiBcInN0cnVjdHVyZVwiLFxuICBcIi9ub3Rlcy9mZS92dWVcIjogXCJzdHJ1Y3R1cmVcIixcbiAgXCIvbm90ZXMvZmUvdHlwZXNjcmlwdFwiOiBcInN0cnVjdHVyZVwiLFxuICBcIi9ub3Rlcy9mZS9naXRcIjogXCJzdHJ1Y3R1cmVcIixcblxuICBcIi9cIjogW1xuICAgIFwiXCIsXG4gICAge1xuICAgICAgdGV4dDogXCJcdTY4NDhcdTRGOEJcIixcbiAgICAgIGljb246IFwibGFwdG9wLWNvZGVcIixcbiAgICAgIHByZWZpeDogXCJkZW1vL1wiLFxuICAgICAgbGluazogXCJkZW1vL1wiLFxuICAgICAgY2hpbGRyZW46IFwic3RydWN0dXJlXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiBcIlx1NjU4N1x1Njg2M1wiLFxuICAgICAgaWNvbjogXCJib29rXCIsXG4gICAgICBwcmVmaXg6IFwiZ3VpZGUvXCIsXG4gICAgICBjaGlsZHJlbjogXCJzdHJ1Y3R1cmVcIixcbiAgICB9LFxuICAgIFwic2xpZGVzXCIsXG4gIF0sXG5cbiAgc2lkZWJhclNvcnRlcjogW1wiZGF0ZVwiXVxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQWdhLFNBQVMsd0JBQXdCOzs7QUNBbkMsU0FBUyxpQkFBaUI7OztBQ0F4QixTQUFTLGNBQWM7QUFFdmIsSUFBTyxpQkFBUSxPQUFPO0FBQUEsRUFDcEIsRUFBRSxNQUFNLGdCQUFNLE1BQU0sSUFBSTtBQUFBLEVBQ3hCO0FBQUEsSUFDRSxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsTUFDUjtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sUUFBUTtBQUFBLFFBQ1IsVUFBVTtBQUFBLFVBQ1IsRUFBRSxNQUFNLFFBQVEsTUFBTSxPQUFPO0FBQUEsVUFDN0IsRUFBRSxNQUFNLE9BQU8sTUFBTSxNQUFNO0FBQUEsVUFDM0IsRUFBRSxNQUFNLGNBQWMsTUFBTSw2RUFBcUM7QUFBQSxVQUNqRSxFQUFFLE1BQU0sT0FBTyxNQUFNLCtFQUFrQztBQUFBLFVBQ3ZELEVB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
