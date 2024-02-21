import { hopeTheme } from 'vuepress-theme-hope'
import navbar from './navbar.js'
import sidebar from './sidebar.js'
// import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";

export default hopeTheme({
  hostname: 'https://vuepress-theme-hope-docs-demo.netlify.app',

  author: {
    name: 'Arrow Magician',
    url: 'https://mister-hope.com'
  },

  iconAssets: 'fontawesome-with-brands',

  logo: '/logo.svg',
  favicon: '/favicon.ico',

  repo: 'https://github.com/Arrow-Magician',
  repoLabel: 'Github',

  docsDir: 'src',

  navbar,

  sidebar,

  // footer: false,

  displayFooter: true,

  encrypt: {
    config: {
      '/demo/encrypt.html': ['1234']
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
          matcher: 'Recommended',
          replacer: ({ tag }) => {
            if (tag === 'em')
              return {
                tag: 'Badge',
                attrs: { type: 'tip' },
                content: 'Recommended'
              }
          }
        }
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true
    },
    components: {
      components: ['VPCard']
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
})
