import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  // "/notes/fe/vue": [
  //   "",
  //   "Vue3小兔鲜项目"
  // ],
  "/notes/fe/html": "structure",
  "/notes/fe/css": "structure",
  "/notes/fe/javascript": "structure",
  "/notes/fe/vue": "structure",
  "/notes/fe/typescript": "structure",

  "/": [
    "",
    {
      text: "案例",
      icon: "laptop-code",
      prefix: "demo/",
      link: "demo/",
      children: "structure",
    },
    {
      text: "文档",
      icon: "book",
      prefix: "guide/",
      children: "structure",
    },
    "slides",
  ],

  sidebarSorter: ["date"]
});
