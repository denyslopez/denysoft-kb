import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://kb.denysoft.net', // ← cambia a tu dominio real en Vercel
  output: 'static',
  integrations: [
    sitemap(),
  ],
});
