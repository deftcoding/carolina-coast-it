import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://carolinacoastit.com',
  build: {
    inlineStylesheets: 'never' // Forces separate CSS files for each page
  }
});