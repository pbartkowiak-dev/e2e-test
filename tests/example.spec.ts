
import { test, expect } from '@playwright/test';
test('has Hello World! text', async ({ page }) => {
  await page.goto('http://localhost:3000');

  const helloWorldText = page.getByText('Hello World!');
  await expect(helloWorldText).toBeVisible()
});
