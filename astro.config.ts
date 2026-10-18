import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: process.env.SITE_URL,
  base: process.env.BASE_PATH || '/',
  output: 'static',
  trailingSlash: 'always',
  redirects: {
    '/guides/choosing-your-path/': '/classes/',
    '/guides/job-class-tree/': '/classes/',
    '/guides/leveling-foundations/': '/guides/leveling-spots/',
  },
  integrations: [mdx()],
  devToolbar: { enabled: false },
});
