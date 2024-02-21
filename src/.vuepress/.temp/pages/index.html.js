export const data = JSON.parse("{\"key\":\"v-8daa1a0e\",\"path\":\"/\",\"title\":\"首页\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"title\":\"首页\",\"heroText\":\"A.M. Blog\",\"tagline\":\"记录点小bug\",\"heroImage\":\"/logo.svg\",\"bgImageStyle\":{\"background-attachment\":\"fixed\"},\"heroFullScreen\":true,\"actions\":[{\"text\":\"💡 开始使用\",\"link\":\"./notes/fe/javascript/JavaScript 基础/一、基础语法.md\",\"type\":\"primary\"},{\"text\":\"资源\",\"link\":\"./resoucres/\"}],\"footer\":false,\"description\":\"\"},\"headers\":[],\"readingTime\":{\"minutes\":0.16,\"words\":48},\"filePathRelative\":\"README.md\",\"autoDesc\":true}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
