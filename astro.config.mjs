import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import rehypePrettyCode from "rehype-pretty-code";
import vercel from "@astrojs/vercel/serverless";

import sitemap from "@astrojs/sitemap";
import { SITE } from "./src/config";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), sitemap()],
  output: "hybrid",
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
  site: SITE.url,
  markdown: {
    syntaxHighlight: false,
    rehypePlugins: [
      [
        rehypePrettyCode,
        {
          theme: "one-dark-pro",
          keepBackground: false,
        },
      ],
    ],
  },
  devToolbar: {
    enabled: false,
  },
});
