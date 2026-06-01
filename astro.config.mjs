// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
delete process.env.CF_PAGES;
export default defineConfig({
  site: 'https://utmbuilder-pro.pages.dev',
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [sitemap()]
});