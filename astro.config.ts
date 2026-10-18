import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: process.env.SITE_URL,
  base: process.env.BASE_PATH || '/',
  output: 'static',
  trailingSlash: 'always',
  redirects: {
    '/guides/choosing-your-path/': '/guides/job-class-tree/',
  },
  integrations: [mdx()],
  devToolbar: { enabled: false },
});
