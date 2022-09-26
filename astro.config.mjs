import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import svelte from '@astrojs/svelte';
import react from '@astrojs/react';
import deno from "@astrojs/deno";

import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  site: 'https://deeprobin.de',
  integrations: [react(), svelte(), mdx(), sitemap(), partytown()],
  output: "server",
  adapter: deno()
});