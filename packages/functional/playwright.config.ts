import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 120 * 1000,
  expect: {
    timeout: 20000,
    toHaveScreenshot: { maxDiffPixels: 100 },
  },
  fullyParallel: true,
  reporter: 'html',
  use: {
    baseURL: 'http://localhost:3000',
  },

  projects: [
    {
      name: 'tests-chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    {
      name: 'tests-firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'tests-webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
});