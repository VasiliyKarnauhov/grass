import { test, expect } from '@playwright/test';

// Описание теста
test('test UI', async ({ page }) => {

  // Шаг 1: Открываем страницу по URL '/login'
  await page.goto('https://web.simplanum.com/login');
  
  // Шаг 2: Ожидаем, что на странице в элементе с ID 'root' будет содержаться текст 'Plan it Simple!'
  await expect(page.locator('#root')).toContainText('Plan it Simple!');
});