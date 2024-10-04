import { navbar } from 'vuepress-theme-hope'

export default navbar([
  { text: '首页', link: '/' },
  {
    text: '文章',
    prefix: '/notes/',
    children: [
      {
        text: '前端',
        prefix: 'fe/',
        children: [
          { text: 'HTML', link: 'html/HTML.md' },
          { text: 'CSS', link: 'css/CSS.md' },
          {
            text: 'JavaScript',
            link: 'javascript/JavaScript 基础/一、基础语法.md'
          },
          { text: 'Vue', link: 'vue/Vue2+Vue3 核心技术/第一章 Vue入门.md' },
          {
            text: 'TypeScript',
            link: 'typescript/TypeScript 基础教程/TypeScript.md'
          },
          { text: 'Git', link: 'git/Git.md' }
        ]
      },
      {
        text: '后端',
        prefix: 'be/',
        children: [{ text: 'python', link: '' }]
      },
      {
        text: '网络',
        prefix: 'web/',
        children: [
          {
            text: '华为配置',
            link: 'huawei/二、VLAN配置.md'
          },
          {
            text: '案例分析',
            link: 'case/README.md'
          }
        ]
      }
    ]
  },
  { text: '资源', link: '/resources/' }
])
