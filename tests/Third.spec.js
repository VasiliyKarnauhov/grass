import { test, expect } from '@playwright/test';

test('Тест 1 Проверка наличия надписи "Работа" на главной странице Superjob', async ({ page }) => {
  // Устанавливаем таймаут для всего теста
  test.setTimeout(90000); // Увеличиваем таймаут для всего теста

  // Переходим на главную страницу Superjob
  await page.goto('https://www.superjob.ru/', { timeout: 90000 });

  // Локатор для надписи "Работа"
  const jobElement = page.locator('h2:has-text("Работа") >> nth=0');

  // Проверяем, что надпись "Работа" видима
  await expect(jobElement).toBeVisible({ timeout: 10000 });
  await expect(jobElement).toBeAttached();
});

test('Тест 2 Проверка наличия надписи "Сотрудники" на главной странице Superjob', async ({ page }) => {
    // Устанавливаем таймаут для всего теста
    test.setTimeout(90000); // Увеличиваем таймаут для всего теста
  
    // Переходим на главную страницу Superjob
    await page.goto('https://www.superjob.ru/', { timeout: 90000 });
  
    // Локатор для надписи "Сотрудники"
    const personsElement = page.locator('#app > div > div > div.PgDFh > div.e1UIb > div > div.Ir1pH > div.I4651 > div > div:nth-child(2) > div > h2');
  
    // Проверяем, что надпись "Сотрудники" видима
    await expect(personsElement).toBeVisible({ timeout: 10000 });
    await expect(personsElement).toBeAttached();
  });

  test('Тест 3 Проверка отображения кнопки "Новые вакансии" на странице Superjob', async ({ page }) => {
    test.setTimeout(90000); // Увеличиваем таймаут для всего теста
  
    // Переходим на главную страницу Superjob
    await page.goto('https://www.superjob.ru/', { timeout: 90000 });
  
    // Локатор для кнопки "Новые вакансии"
    const vacancyButton = page.locator('span._2gdj9._11RqQ._1Ybm2._3GqZ-._810L3:has-text("Новые вакансии")');
    
    // Проверяем, что элемент стал видимым
    await expect(vacancyButton).toBeVisible({ timeout: 20000 });
    await expect(vacancyButton).toBeAttached();
  });

  test('Тест 4 Проверка отображения кнопки "Работа из дома" на странице Superjob', async ({ page }) => {
    test.setTimeout(90000); // Увеличиваем таймаут для всего теста
  
    // Переходим на главную страницу Superjob
    await page.goto('https://www.superjob.ru/', { timeout: 90000 });
  
    // Локатор для кнопки "Работа из дома"
    const workhomeButton = page.locator('span._2gdj9._11RqQ._1Ybm2._3GqZ-._810L3:has-text("Работа из дома")');
    
    // Проверяем, что элемент стал видимым
    await expect(workhomeButton).toBeVisible({ timeout: 20000 });
    await expect(workhomeButton).toBeAttached();
  });

  test('Тест 5 Отображение кнопки "Подработка" на странице Superjob', async ({ page }) => {
    test.setTimeout(90000); // Увеличиваем таймаут для всего теста
  
    // Переходим на главную страницу Superjob
    await page.goto('https://www.superjob.ru/', { timeout: 90000 });
  
    // Локатор для кнопки "Подработка"
    const workButton = page.locator('span._2gdj9._11RqQ._1Ybm2._3GqZ-._810L3:has-text("Подработка")');
    
    // Проверяем, что элемент стал видимым
    await expect(workButton).toBeVisible({ timeout: 20000 });
    await expect(workButton).toBeAttached();
  });

  test('Тест 6 Отображение кнопки "Работа без опыта" после загрузки страницы Superjob', async ({ page }) => {
    test.setTimeout(90000); // Увеличиваем таймаут для всего теста
  
    // Переходим на главную страницу Superjob
    await page.goto('https://www.superjob.ru/', { timeout: 90000 });
  
    // Локатор для кнопки "Работа без опыта"
    const expirienceButton = page.locator('span._2gdj9._11RqQ._1Ybm2._3GqZ-._810L3:has-text("Работа без опыта")');
    
    // Проверяем, что элемент стал видимым
    await expect(expirienceButton).toBeVisible({ timeout: 20000 });
    await expect(expirienceButton).toBeAttached();
  });

  test('Тест 7 Проверка отображения кнопки "Старт карьеры" на странице Superjob', async ({ page }) => {
    test.setTimeout(90000); // Увеличиваем таймаут для всего теста
  
    // Переходим на главную страницу Superjob
    await page.goto('https://www.superjob.ru/', { timeout: 90000 });
  
    // Локатор для кнопки "Старт карьеры"
    const startButton = page.locator('span._2gdj9._11RqQ._1Ybm2._3GqZ-._810L3:has-text("Старт карьеры")');
    
    // Проверяем, что элемент стал видимым
    await expect(startButton).toBeVisible({ timeout: 20000 });
    await expect(startButton).toBeAttached();
  });

  test('Тест 8 Отображение кнопки "Все вакансии" на странице Superjob', async ({ page }) => {
    test.setTimeout(90000); // Увеличиваем таймаут для всего теста
  
    // Переходим на главную страницу Superjob
    await page.goto('https://www.superjob.ru/', { timeout: 90000 });
  
    // Локатор для кнопки "Все вакансии"
    const allvacantionsButton = page.locator('div#vanancies-by-town-tabs span._2gdj9._11RqQ._1Ybm2._3GqZ-._810L3:has-text("Все вакансии")');
    
    // Проверяем, что элемент стал видимым
    await expect(allvacantionsButton).toBeVisible({ timeout: 20000 });
    await expect(allvacantionsButton).toBeAttached();
  });

  test('Тест 9 Отображение формы авторизации после нажатия на кнопку "Вход"', async ({ page }) => {
    test.setTimeout(90000); // Увеличиваем таймаут для всего теста
  
    // Переходим на страницу с формой авторизации
    await page.goto('https://www.superjob.ru/', { timeout: 90000 });
  
    // Локатор кнопки "Вход"
    const loginButton = page.locator('#app > div > div > div.PgDFh > div.BpqXl.Sraha.ljz01 > div > div._7QJi2 > div > div > div:nth-child(2) > div > div > span > button > div > svg');
  
    // Ожидаем, пока кнопка "Войти" станет доступной для клика
    await loginButton.waitFor({ state: 'visible', timeout: 120000 }); // Увеличиваем таймаут ожидания видимости кнопки
  
    // Нажимаем на кнопку "Вход"
    await loginButton.click();
  
    // Локатор для формы авторизации (например, поле ввода)
    const authForm = page.locator('input.k7zdC._2wUqF.f-test-input-login._1Dqm1._3_VA7');  // Реальный id или другой стабильный локатор
  
    // Ожидаем появления формы авторизации
    await page.waitForSelector('input.k7zdC._2wUqF.f-test-input-login._1Dqm1._3_VA7', { timeout: 10000 }); // Увеличиваем таймаут для поиска формы
  
    // Проверяем, что форма авторизации стала видимой
    await expect(authForm).toBeVisible();
  });