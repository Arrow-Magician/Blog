export const siteData = JSON.parse("{\"base\":\"/Blog/\",\"lang\":\"zh-CN\",\"title\":\"A.M. Blog\",\"description\":\"ArrowMagician的博客\",\"head\":[[\"link\",{\"rel\":\"icon\",\"href\":\"/Blog/favicon.ico\"}]],\"locales\":{}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
