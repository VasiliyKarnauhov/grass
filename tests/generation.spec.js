import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';

test('Генерация тестовых данных при регистрации', async ({ page }) => {
    const USERNAME = faker.person.firstName(); 
    const EMAIL = faker.internet.email(); 
    const PASSWORD = faker.internet.password(); // Используйте правильную функцию для пароля

    await page.goto('https://realworld.qa.guru/#');
    await page.getByRole('link', { name: 'Sign up' }).click();
    await page.getByPlaceholder('Your Name').click();
    await page.getByPlaceholder('Your Name').fill(USERNAME); // Используем переменную USERNAME
    await page.getByPlaceholder('Email').click();
    await page.getByPlaceholder('Email').fill(EMAIL); // Используем переменную EMAIL
    await page.getByPlaceholder('Password').click();
    await page.getByPlaceholder('Password').fill(PASSWORD); // Используем переменную PASSWORD
    await page.getByRole('button', { name: 'Sign up' }).click();
    
    // Ожидаем, что имя пользователя отобразится на странице
    await expect(page.getByText(USERNAME)).toBeVisible(); // Используем переменную USERNAME
});

test('test Авторизация на странице', async ({ page }) => {
  const EMAIL = faker.internet.email(); 
  const PASSWORD = faker.internet.password(); // Используйте правильную функцию для пароля

  await page.goto('https://realworld.qa.guru/#');
  await page.getByRole('link', { name: 'Login' }).click();
  await page.getByPlaceholder('Email').click();
  await page.getByPlaceholder('Email').fill(EMAIL);
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill(PASSWORD);
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.locator('#root')).toContainText(/conduit/);
});