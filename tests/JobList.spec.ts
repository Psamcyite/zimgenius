import { test, expect } from '@playwright/test';

test('Job list loads and displays jobs', async ({ page }) => {
  await page.goto('http://localhost:3000');
  
  // This check if at least one job is displayed
  const jobElements = await page.locator('div.border').count();
  expect(jobElements).toBeGreaterThan(0);
});