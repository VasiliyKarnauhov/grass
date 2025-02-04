import { test, expect } from '@playwright/test';

test('Тест 1  Проверка наличия кнопки "Мне повезёт!" на главной странице Google', async ({ page }) => {
  // Переходим на главную страницу Google
  await page.goto('https://www.google.com/');

  // Локатор для кнопки "Мне повезёт!"
  const luckyButton = page.locator('body > div.L3eUgb > div.o3j99.ikrT4e.om7nvf > form > div:nth-child(1) > div.A8SBwf > div.FPdoLc.lJ9FBc > center > input.RNmpXc');

  // Проверяем, что кнопка "Мне повезёт!" видима
  await expect(luckyButton).toBeVisible();
});

test('Тест 2  Проверка наличия иконки лупы на главной странице Google', async ({ page }) => {
  // Переходим на главную страницу Google
  await page.goto('https://www.google.com/');

  // Локатор для иконки лупы
  const searchIcon = page.locator('body > div.L3eUgb > div.o3j99.ikrT4e.om7nvf > form > div:nth-child(1) > div.A8SBwf > div.RNNXgb > div.SDkEP > div.iblpc > div > span > svg');

  // Ожидаем, что иконка лупы будет видима
  await expect(searchIcon).toBeVisible();
});

test('Тест 3  Проверка наличия кнопки поиска главной странице Google', async ({ page }) => {
  // Переходим на главную страницу Google
  await page.goto('https://www.google.com/');

  // Локатор для кнопки поиска 
  const searchButton = page.locator('body > div.L3eUgb > div.o3j99.ikrT4e.om7nvf > form > div:nth-child(1) > div.A8SBwf > div.FPdoLc.lJ9FBc > center > input.gNO89b');

  // Ожидаем, что кнопка поиска будет видима
  await expect(searchButton).toBeVisible();
});

test('Тест 4  отображение значка "Солнышко" после поиска по слову "Погода"', async ({ page }) => {
  // Переходим на страницу Google
  await page.goto('https://www.google.com/');

  // Локатор для поля ввода
  const searchInput = page.locator('textarea[name="q"]');

  // Ожидаем, пока поле ввода станет доступным
  await expect(searchInput).toBeVisible();

  // Заполняем поле поиска с текстом "погода"
  await searchInput.fill('погода');
  
  // Нажимаем Enter для выполнения поиска
  await searchInput.press('Enter');

  // Ожидаем, пока результаты поиска загрузятся
  await page.waitForSelector('div#rcnt', { timeout: 10000 }); // Увеличиваем тайм-аут до 10 секунд

  // Локатор для элемента с названием "Солнышко" (в результатах поиска)
  const sunElement = page.locator('img[src="//ssl.gstatic.com/onebox/weather/64/sunny.png"]');

  // Проверяем, что элемент "Солнышко" стал видимым
  await expect(sunElement).toBeVisible();

});

test('Тест 5  отображение надписи "Что посмотреть" после поиска по слову "Кино"', async ({ page }) => {
  // Переходим на страницу Google
  await page.goto('https://www.google.com/');

  // Локатор для поля ввода
  const searchInput = page.locator('textarea[name="q"]');

  // Ожидаем, пока поле ввода станет доступным
  await expect(searchInput).toBeVisible();

  // Заполняем поле поиска с текстом "кино"
  await searchInput.fill('кино');
  
  // Нажимаем Enter для выполнения поиска
  await searchInput.press('Enter');

  // Ожидаем, пока результаты поиска загрузятся
  await page.waitForSelector('div#rcnt', { timeout: 10000 }); // Увеличиваем тайм-аут до 10 секунд

  // Локатор для элемента с названием "Что посмотреть" (в результатах поиска)
  const cinemaElement = page.locator('div.kno-fb-ctx.gsmt.aTI8gc');

  // Проверяем, что элемент "Что посмотреть" стал видимым
  await expect(cinemaElement).toBeVisible();

});