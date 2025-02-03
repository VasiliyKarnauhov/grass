import { test, expect } from '@playwright/test';


test('Тест 1 "кот" should display "Breeds" and "Animals" elements as results', async ({ page }) => {
    // Переходим на страницу Google
    await page.goto('https://www.google.com/');
  
    // Локатор для поля ввода
    const searchInput = page.locator('textarea[name="q"]');
  
    // Ожидаем, пока поле ввода станет доступным
    await expect(searchInput).toBeVisible();
  
    // Заполняем поле поиска с текстом "кот"
    await searchInput.fill('кот');
    
    // Нажимаем Enter для выполнения поиска
    await searchInput.press('Enter');
  
    // Ожидаем, пока результаты поиска загрузятся
    await page.waitForSelector('div#rcnt', { timeout: 10000 }); // Увеличиваем тайм-аут до 10 секунд
  
    // Локатор для элемента с названием "Breeds" (в результатах поиска)
    const breedsElement = page.locator('#kp-wp-tab-overview > div.TzHB6b.j8lBAb.p7kDMc.cLjAic.LMRCfc > div > div > div.JNkvid.gsrt.wp-ms > div > a > div.sz3HNe.PJI6ge.adDDi > div > div > span');
  
    // Локатор для элемента с названием "Animal" (в результатах поиска)
    const animalsElement = page.locator('#rcnt > div:nth-child(3) > div > div > div > div > div > div > div.FAoEle > div > div.hHq9Z > div > div > div.MDY31c > div.nwVKo > div.loJjTe > div > span');
  
    // Проверяем, что элемент "Breeds" стал видимым
    await expect(breedsElement).toBeVisible();
  
    // Проверяем, что элемент "Animal" стал видимым
    await expect(animalsElement).toBeVisible();
});