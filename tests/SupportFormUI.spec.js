import { test, expect } from '@playwright/test';

test('Тест 1 Проверка загрузки главной страницы', async ({ page }) => {
  await page.goto('http://tester.amgittstdv.beget.tech/#');
  // Ожидаем, что на главной странице будет заголовок с текстом "Поддержка здесь"
  await expect(page.locator('h1')).toContainText('Поддержка здесь');
});

test('Тест 2 Отображение формы отзыва', async ({ page }) => {
  await page.goto('http://tester.amgittstdv.beget.tech/#');
  await page.getByRole('button', { name: 'Отзыв о сайте' }).click();
  // Ожидаем, что при клике на кнопку "Отзыв о сайте" откроется форма с текстом "Отзыв о сайте"
  await expect(page.locator('#form-container')).toContainText('Отзыв о сайте');
});

test('Тест 3 Отображение кнопок на форме отзыва', async ({ page }) => {
    await page.goto('http://tester.amgittstdv.beget.tech/#');
    await page.getByRole('button', { name: 'Отзыв о сайте' }).click();
    // Ожидаем, что на форме будут кнопки "Отправить" и "Закрыть форму"
    await expect(page.locator('#form')).toContainText('Отправить');
    await expect(page.locator('#form')).toContainText('Закрыть форму');
  });

  test('Тест 4 Отправка отзыва', async ({ page }) => {
    await page.goto('http://tester.amgittstdv.beget.tech/#');
    await page.getByRole('button', { name: 'Отзыв о сайте' }).click();
    await page.getByPlaceholder('Ваше имя *').click();
    await page.getByPlaceholder('Ваше имя *').fill('Василий');
    await page.getByPlaceholder('Email').click();
    await page.getByPlaceholder('Email').fill('asdas1227@mail.ru');
    await page.getByPlaceholder('Телефон *').click();
    await page.getByPlaceholder('Телефон *').fill('89507934794');
    await page.getByPlaceholder('Отзыв *').click();
    await page.getByPlaceholder('Отзыв *').fill('положительный отзыв');
    page.once('dialog', dialog => {
      console.log(`Dialog message: ${dialog.message()}`);
      dialog.dismiss().catch(() => {});
    });
    // Нажимаем кнопку "Отправить"
    await page.getByRole('button', { name: 'Отправить' }).click();
    page.once('dialog', dialog => {
      console.log(`Dialog message: ${dialog.message()}`);
      dialog.dismiss().catch(() => {});
    });
    await page.getByRole('button', { name: 'Закрыть форму' }).click();
    // Ожидаем, что при нажатии на кнопку "Закрыть форму" откроется Главная страница
    // Ожидаем, что хедере отобразится текст "Поддержка здесь", что означает работоспособность отправки отзыва
    await expect(page.locator('h1')).toContainText('Поддержка здесь');
  });

  test('Тест 5 Функциональность выпадающего списка "Бережная сборка"', async ({ page }) => {
    // Устанавливаем таймаут для всего теста
  test.setTimeout(90000); // Увеличиваем таймаут для всего теста

    await page.goto('http://tester.amgittstdv.beget.tech/#');
    await page.getByRole('link', { name: 'Бережная сборка' }).click();
    // Ожидаем, что при клике на ссылку "Бережная сборка" откроется текст с описанием
    await expect(page.locator('#text1')).toContainText('Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.');
  });

  test('Тест 6 Функциональность выпадающего списка "Способ доставки и самовывоза"', async ({ page }) => {
    await page.goto('http://tester.amgittstdv.beget.tech/#');
    await page.getByRole('link', { name: 'Способы доставки и самовывоза Это карта лояльности с вашим номером покупат Это к' }).click();
    // Ожидаем, что при клике на ссылку "Способы доставки и самовывоза" откроется текст с описанием
    await expect(page.locator('#text2')).toContainText('Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.');
  });

  test('Тест 7 Функциональность выпадающего списка "Минимальная сумма заказа" ', async ({ page }) => {
    await page.goto('http://tester.amgittstdv.beget.tech/#');
    await page.getByRole('link', { name: 'Минимальная сумма заказа' }).click();
    // Ожидаем, что при клике на ссылку "Минимальная сумма заказа" откроется текст с описанием
    await expect(page.locator('#text3')).toContainText('Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.');
  });

  test('Тест 8 Функциональность выпадающего списка "Легкий возрат"', async ({ page }) => {
    await page.goto('http://tester.amgittstdv.beget.tech/#');
    await page.getByRole('link', { name: 'Лёгкий возврат Это карта лояльности с вашим номером покупат Это карта лояльности' }).click();
    // Ожидаем, что при нажатии на "Лёгкий возврат" должен развернуться список с текстом.
    // Однако, на текущий момент, происходит ошибка и отображается текст в главном хедере страницы, что является багом.
    await expect(page.getByRole('main')).toContainText('Мы любим общаться и рады всем отзывам, вопросам ипредложениям. Выберите удобный способ');
  }); 
