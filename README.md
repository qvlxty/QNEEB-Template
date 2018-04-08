# QNEEB-Template

![androidvr](https://img.shields.io/badge/nodejs-template-green.svg)
![androidvr](https://img.shields.io/badge/+5-projectsonit-green.svg)

> Пожалуй, первый репозиторий, README которого я предпочел оставить на русском, как и сам проект.

Данный репозиторий - стартовый шаблон для разработки адаптивных микро-веб-приложений с настроенным сервером на nodejs, фреймворком expressjs , шаблонизатором ejs и view-частью на bootstrap. 

## Howto

- Клонируете данный репозиторий
- npm i 
- node app.js

## Libraries

- express
- ejs
- bootstrap v4
- jquery for bootstrap

## Doc.

Архитектура шаблона преследует принцип KISS. В каталоге controllers лежат контроллеры, подключаемые через файл маршрутизации router.js. 

В каталоге views три каталога со статическими файлами **(js/css/fonts)** которые вы можете наполнять своими данными. 

Для дописывания своих стилей можете использовать уже добавленный self.css. Для статических изображений уже создан каталог views/img.

## WorkFlow

Для ускоренной разработки логики, можете использовать демон **[nodemon](https://www.npmjs.com/package/nodemon)** для перезагрузки сервера при изменении исходных кодов.
