# Neokaidan FrontEnd

Фронтэнд часть проекта "Неокайдан"

### deploy
- **master** — https://neokaidan.on.fleek.co
- **develop** — *comming soon*

### commands
Проект работает на базе **NodeJs + npm**

**Запуск и сборка проекта:**
- `npm install` — установка библиотек и инфраструктуры
- `npm run build` — сборка проекта в директорию `/dist`
- `npm start` — запуск dev-сервера на `localhost:3000`

**Разработка:**
- `npm run lint` — запуск линтера eslint на всех TS и JS файлах в директории `/src`
- `npm run prettier` — запуск код-стайл линтера prettier для преобразования JS, TS, SCSS, HTML файлов 
к виду, регламентированному код-стайлом проекта

### stack
- React
- Redux
- Typescript
- SCSS (БЭМ)

### npm infrastructure

**development:**
- `@babel/*` — транспилятор JS кода и его плагины для поддержки новой функциональности ES в старых версиях браузеров
- `commitlint` — линтер коммитов для их стандартизации
  - `@commitlint/config-conventional` — настройки линтера по методологии [Conventional Commits](https://habr.com/ru/company/yandex/blog/431432/)
- `eslint` — статический анализатор для TS, JS
  - `@typescript-eslint/*` — расширения eslint для поддержки TypeScript
  - `eslint-config-prettier` — расширение eslint для синхронизации с `prettier`
- `husky` — поддержка git hooks для внедрения дополнительных скриптов при выполнении git-комманд (запуск линтера перед коммитом)
  - `lint-staged` — cli-утилита с конфигурацией в *package.json* для описания скриптов для `husky`
- `prettier` — статический анализатор для поддержки единого код-стайла
- `sass` — препроцессор CSS
- `typescript` — компилятор TypeScript в JavaScript
  - `@types/*` — заголовочные файлы JS-библиотек для поддержки в TS коде
- `webpack` — сборщик проекта
  - `babel-loader` — плагин для запуска `babel` в `webpack`
  - `css-loader` — позволяет импортировать файлы стилей в JS коде (также необходим для работы `sass-loader`)
  - `eslint-webpack-plugin` — плагин для запуска `eslint` при сборке проекта
  - `html-webpack-plugin` — плагин для работы с HTML файлами: встраивание \<script\> тэгов, favicon и пр.
  - `mini-css-extract-plugin` — минификация CSS в одну строку для сокращения веса css файлов
  - `sass-loader` — плагин для запуска препроцессора `sass` в `webpack`
  - `url-loader` — позволяет импортировать медиа файлы (png, svg, др.) в JS коде
  - `webpack-cli` — CLI интерфейс работы с webpack
  - `webpack-dev-server` — утилита для запуска локального сервера с hot-reload для разработки и отладки

**runtime:**
- `react` — библиотеки React
  - `react-dom` — работа с Virtual DOM
  - `react-redux` — поддержка Redux
- `redux` — библиотека Redux

> В случае, если `husky` не запускает свои скрипты при выполнении команды `git commit`, необходимо выполнить:\
> `git config --unset core.hookspath`

---
> На данный момент проект не использует CRA в своей основе, поскольку нативный webpack предоставляет
> больше возможностей по настройке проекта. react-scripts eject также не подходит, поскольку исходики CRA
> слишком перегружены и требуют значительного времени для ознакомления и поддержки

> За грамотным boilerplate c TS+React+Webpack (без CRA) можно обратиться на https://github.com/Kornil/simple-react-app

---

TODO:
- Внедрить Redux
- Подключить плагин react-refresh-webpack-plugin для сохранения state между hot-reload'ами
