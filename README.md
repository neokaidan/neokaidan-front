# Neokaidan FrontEnd

@babel/* — транспилятор JS кода и его плагины для поддержки новой функциональности ES в старых версиях браузеров

sass — компилятор sass->css
typescript — компилятор TypeScript->JavaScript

@types/* — заголовочные файлы с объявлениями типов js библиотек для поддержки ts

webpack — сборщик проекта, запускающий компиляторы typescript, scss, react и т.д.
webpack-cli — cli команды для управления webpack
webpack-dev-server — локальный сервер для hot-reload отладки

babel-loader — webpack плагин для запуска babel
ts-loader — webpack плагин для компиляции typescript
css-loader — webpack плагин для работы с css-файлами
sass-loader — webpack плагин для компиляции sass стилей
mini-css-extract-plugin — webpack плагин для миницифкации css-файлов

> На данный момент проект не использует CRA в своей основе, поскольку нативный webpack предоставляет
> больше возможностей по настройке проекта. react-scripts eject также не подходит, поскольку исходики CRA
> слишком перегружены и требуют значительного времени для ознакомления и поддержки

> За грамотным boilerplate c TS+React+Webpack (без CRA) можно обратиться на https://github.com/Kornil/simple-react-app

TODO:
    — Внедрить Redux
    — Подключить плагин react-refresh-webpack-plugin для сохранения state между hot-reload'ами
