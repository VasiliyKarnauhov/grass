import { test, expect } from '@playwright/test';

test('test Авторизация на странице', async ({ page }) => {
  await page.goto('https://realworld.qa.guru/#');
  await page.getByRole('link', { name: 'Login' }).click();
  await page.getByPlaceholder('Email').click();
  await page.getByPlaceholder('Email').fill('a@mail.ru');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('12345');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByText('car')).toBeVisible();
});