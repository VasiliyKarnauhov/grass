import { test, expect } from '@playwright/test'; 
import { faker } from '@faker-js/faker';  // Импортируем библиотеку Faker для генерации случайных данных

// Тест на регистрацию пользователя
test('Регистрация', async ({ page }) => {
    const USERNAME = faker.person.firstName();  // Генерируем случайное имя пользователя
    const PASSWORD = faker.internet.password(); // Генерируем случайный пароль

    // Переходим на сайт
    await page.goto('https://www.demoblaze.com/'); 
    await page.getByRole('link', { name: 'Sign up' }).click();  // Кликаем на ссылку "Sign up" для регистрации
    await page.getByLabel('Username:').click();  // Кликаем на поле "Username"
    await page.getByLabel('Username:').fill(USERNAME);  // Вводим сгенерированное имя в поле "Username"
    await page.getByLabel('Password:').click();  // Кликаем на поле "Password"
    await page.getByLabel('Password:').fill(PASSWORD);  // Вводим сгенерированный пароль в поле "Password"
    
    // Обработка всплывающего окна, если оно появляется (например, ошибка)
    page.once('dialog', dialog => {
        console.log(`Dialog message: ${dialog.message()}`);  // Логируем сообщение из всплывающего окна
        dialog.dismiss().catch(() => {});  // Закрываем диалоговое окно
    });
    
    await page.getByRole('button', { name: 'Sign up' }).click();  // Кликаем кнопку "Sign up" для завершения регистрации
    // Проверяем, что на странице появился текст "PRODUCT STORE", чтобы убедиться, что регистрация прошла успешно
    await expect(page.locator('#nava')).toContainText('PRODUCT STORE'); 

    console.log(USERNAME); // Выводим случайное имя пользователя
    console.log(PASSWORD); // Выводим случайный пароль
});

// Тест на авторизацию пользователя
test('Авторизация', async ({ page }) => {
    const USERNAME = faker.person.firstName();  // Генерируем случайное имя пользователя
    const PASSWORD = faker.internet.password(); // Генерируем случайный пароль

    // Переходим на сайт
    await page.goto('https://www.demoblaze.com/'); 
    await page.getByRole('link', { name: 'Log in' }).click();  // Кликаем на ссылку "Log in" для авторизации
    await page.locator('#loginusername').click();  // Кликаем на поле "Username"
    await page.locator('#loginusername').fill(USERNAME);  // Вводим сгенерированное имя в поле "Username"
    await page.locator('#loginpassword').click();  // Кликаем на поле "Password"
    await page.locator('#loginpassword').fill(PASSWORD);  // Вводим сгенерированный пароль в поле "Password"
    await page.getByRole('button', { name: 'Log in' }).click();  // Кликаем кнопку "Log in" для входа

    // Проверяем, что на странице появился элемент с текстом "About us", что означает успешный вход
    await expect(page.locator('#navbarExample')).toContainText('About us'); 

    console.log(USERNAME); // Выводим случайное имя пользователя
    console.log(PASSWORD); // Выводим случайный пароль
});