import { defineConfig } from '@playwright/test';

export default defineConfig({
  webServer: {
    command: 'pnpm run dev',
    port: 3000,
    reuseExistingServer: !process.env.CI
  },
  testDir: './tests'
});