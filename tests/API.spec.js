import { test, expect } from '@playwright/test';

test('API test', async ({ request }) => {
  // Отправляем запрос на правильный API-эндпоинт
  const response = await request.get('https://web.simplanum.com/api/v1/endpoint'); // Убедитесь, что это правильный API URL

  // Логируем статус ответа
  console.log(`Response status: ${response.status()}`);

  // Логируем текст ответа для диагностики
  const responseText = await response.text();
  console.log('Response body:', responseText);

  // Проверяем, что статус ответа равен 200
  expect(response.status()).toBe(200);

  // Проверяем, что ответ возвращает JSON
  try {
    const responseBody = JSON.parse(responseText);
    // Проверяем нужное поле в JSON
    expect(responseBody).toHaveProperty('message', 'Plan it Simple!');
  } catch (e) {
    throw Error('API returned HTML instead of JSON');
  }
});