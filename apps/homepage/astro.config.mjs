import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import svelte from '@astrojs/svelte';
import deno from "@astrojs/deno";
import partytown from "@astrojs/partytown";
import prefetch from "@astrojs/prefetch";

// https://astro.build/config
export default defineConfig({
  site: 'https://deeprobin.de',
  integrations: [svelte(), mdx(), sitemap({
    customPages: [
      // International pages
      "https://deeprobin.de/",
      // English pages
      "https://deeprobin.de/en",
      "https://deeprobin.de/en/blog",
      "https://deeprobin.de/en/blog/announcements",
      "https://deeprobin.de/en/blog/announcements/001_initial_post",
      "https://deeprobin.de/en/blog/finance",
      "https://deeprobin.de/en/blog/software",
      "https://deeprobin.de/en/projects",
      "https://deeprobin.de/en/projects/featured",
      "https://deeprobin.de/en/projects/side-projects",
      "https://deeprobin.de/en/services",
      "https://deeprobin.de/en/legal-details",
      "https://deeprobin.de/en/privacy-policy",
      // German pages
      "https://deeprobin.de/de",
      "https://deeprobin.de/de/blog",
      "https://deeprobin.de/de/blog/announcements",
      "https://deeprobin.de/de/blog/announcements/001_initial_post",
      "https://deeprobin.de/de/blog/finance",
      "https://deeprobin.de/de/blog/software",
      "https://deeprobin.de/de/projects",
      "https://deeprobin.de/de/projects/featured",
      "https://deeprobin.de/de/projects/side-projects",
      "https://deeprobin.de/de/services",
      "https://deeprobin.de/de/legal-details",
      "https://deeprobin.de/de/privacy-policy",
    ],
    i18n: {
      defaultLocale: 'en',
      locales: {
        'en': 'en-US',
        'de': 'de-DE',
      },
    },
    changefreq: 'daily',
  }),
  partytown(), prefetch()],
  output: "server",
  adapter: deno()
});