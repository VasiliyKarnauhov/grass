import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // Устанавливаем таймаут для всего теста
  test.setTimeout(1200000); // Увеличиваем таймаут для всего теста
  await page.goto('https://cargocom.aero/#');
  
  // Используем expect для проверки текста
  const header = await page.locator('.ant-typography Header_H1__PkXoJ');
  await expect(header).toContainText('Самый быстрый способ перевезти груз');
});