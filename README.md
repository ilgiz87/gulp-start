# Gulp — сборка Начальный вариант

## Используется 
```bash
$ gulp -v
CLI version: 3.0.0
Local version: 5.0.0

$ node -v
v 20.14.0

$ npm -v
10.7.0
```

## Начало работы
Cклонируйте все содержимое репозитория 
```bash
git clone {$this_repo}
```
Затем, находясь в корне проекта, запустите команду `npm i`, которая установит все находящиеся в package.json зависимости.

### Если у вас не установлен Node.JS и Gulp
1. Скачать и устанавить ***[Node.JS](https://nodejs.org)***
2. Установить Gulp глобально ``` npm i -g gulp-cli ```  подробне [gulpjs.com](https://gulpjs.com/docs/en/getting-started/quick-start/)

## Временное решение проблемы с конвертацией файлов
Проблему с конвертацией пока не смог решить

- Отключил конвертацию TTF в WOFF2
- Оставил генерацию SCSS для шрифтов

**Инструкция**
1. В папку src/fonts закидываем файлы шрифтов в формате WOFF2
2. Удаляем src\scss\components\_fonts.scss
3. Выполняем команду для гинерации fonts.scss
```
npm run fontsSCSS
```
4. Запускаем Gulp в режиме разработки
```
npm run dev
```