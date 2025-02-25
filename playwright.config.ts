import { defineConfig } from "@playwright/test";

export default defineConfig({
  use: {
    baseURL: "http://localhost:3000", // Adjust if needed
    headless: true, // Run tests in headless mode
    screenshot: "only-on-failure",
  },
  webServer: {
    command: "pnpm run build && pnpm run start",
    port: 3000,
    reuseExistingServer: true,
  },
});