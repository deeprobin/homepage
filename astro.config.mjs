import { defineConfig } from 'astro/config';
import solidJs from "@astrojs/solid-js";
import sitemap from "@astrojs/sitemap";
import image from "@astrojs/image";
import prefetch from "@astrojs/prefetch";
//import partytown from "@astrojs/partytown";
import compress from "astro-compress";
import rome from "astro-rome";
import compressor from "astro-compressor";

import critters from "astro-critters";

// https://astro.build/config
export default defineConfig({
  compressHTML: true,
  integrations: [solidJs(), sitemap(), image(), prefetch(), critters(), /*partytown({
    config: {
      forward: ["dataLayer.push"]
    }
  }),*/ compress({
    css: true,
    html: true,
    img: true,
    js: true,
    svg: true
  }), rome(), compressor()],
  site: "https://deeprobin.de",
  experimental: {
    assets: true
  }
});