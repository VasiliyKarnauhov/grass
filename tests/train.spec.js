import { test, expect } from '@playwright/test';

test('test API', async ({ request }) => {
  // Отправляем GET-запрос на главную страницу
  const response = await request.get('https://gymlog.ru/');

  // Проверяем, что ответ успешный (код 200)
  expect(response.status()).toBe(200);

  // Проверяем, что в теле ответа есть нужный текст
  const body = await response.text();
  expect(body).toContain('Контакты');
});