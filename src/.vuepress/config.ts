import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/Blog/",

  lang: "zh-CN",
  title: "A.M. Blog",
  description: "ArrowMagician的博客",


  theme,


  // Enable it with pwa
  // shouldPrefetch: false,
});
