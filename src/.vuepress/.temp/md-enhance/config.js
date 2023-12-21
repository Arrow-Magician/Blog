import { defineClientConfig } from "@vuepress/client";
import CodeTabs from "H:/Programming Storage/Front end development/VuePress/my-docs-v2/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.5_markdown-it@13.0.2_vuepress@2.0.0-rc.0/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeTabs.js";
import { hasGlobalComponent } from "H:/Programming Storage/Front end development/VuePress/my-docs-v2/node_modules/.pnpm/vuepress-shared@2.0.0-rc.5_vuepress@2.0.0-rc.0/node_modules/vuepress-shared/lib/client/index.js";
import { CodeGroup, CodeGroupItem } from "H:/Programming Storage/Front end development/VuePress/my-docs-v2/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.5_markdown-it@13.0.2_vuepress@2.0.0-rc.0/node_modules/vuepress-plugin-md-enhance/lib/client/compact/index.js";
import CodeDemo from "H:/Programming Storage/Front end development/VuePress/my-docs-v2/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.5_markdown-it@13.0.2_vuepress@2.0.0-rc.0/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeDemo.js";
import MdDemo from "H:/Programming Storage/Front end development/VuePress/my-docs-v2/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.5_markdown-it@13.0.2_vuepress@2.0.0-rc.0/node_modules/vuepress-plugin-md-enhance/lib/client/components/MdDemo.js";
import { useHint } from "H:/Programming Storage/Front end development/VuePress/my-docs-v2/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.5_markdown-it@13.0.2_vuepress@2.0.0-rc.0/node_modules/vuepress-plugin-md-enhance/lib/client/composables/hint.js";
import "H:/Programming Storage/Front end development/VuePress/my-docs-v2/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.5_markdown-it@13.0.2_vuepress@2.0.0-rc.0/node_modules/vuepress-plugin-md-enhance/lib/client/styles/hint/index.scss";
import Tabs from "H:/Programming Storage/Front end development/VuePress/my-docs-v2/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.5_markdown-it@13.0.2_vuepress@2.0.0-rc.0/node_modules/vuepress-plugin-md-enhance/lib/client/components/Tabs.js";

export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    if(!hasGlobalComponent("CodeGroup", app)) app.component("CodeGroup", CodeGroup);
    if(!hasGlobalComponent("CodeGroupItem", app)) app.component("CodeGroupItem", CodeGroupItem);
    app.component("CodeDemo", CodeDemo);
    app.component("MdDemo", MdDemo);
    app.component("Tabs", Tabs);
  },
  setup: () => {
useHint();
  }
});
