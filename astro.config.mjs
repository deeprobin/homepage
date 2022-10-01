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
  integrations: [svelte(), mdx(), sitemap(), partytown(), prefetch()],
  output: "server",
  adapter: deno()
});