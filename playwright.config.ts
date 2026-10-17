import { defineConfig, devices } from '@playwright/test';

const basePath = (process.env.E2E_BASE_PATH ?? '').replace(/\/$/, '');
const port = Number(process.env.E2E_PORT ?? '4387');
export default defineConfig({
  testDir: './tests',
  testMatch: '**/*.spec.ts',
  fullyParallel: true,
  forbidOnly: Boolean(process.env.CI),
  retries: process.env.CI ? 2 : 0,
  workers: 2,
  reporter: 'list',
  use: {
    baseURL: `http://127.0.0.1:${port}${basePath}/`,
    trace: 'on-first-retry',
    launchOptions: process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH
      ? { executablePath: process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH } : {},
  },
  projects: [
    { name: 'desktop', use: { viewport: { width: 1440, height: 1000 } } },
    { name: 'mobile', use: { ...devices['iPhone 13'], defaultBrowserType: 'chromium' } },
  ],
  webServer: {
    command: `npm run preview -- --port ${port}`,
    env: { BASE_PATH: basePath || '/' },
    url: `http://127.0.0.1:${port}${basePath}/`,
    reuseExistingServer: !process.env.CI,
  },
});
