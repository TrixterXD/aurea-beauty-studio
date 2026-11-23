# AUREA

Демонстрационный статический лендинг Beauty Studio для портфолио Ivacov Flow.
TASK-001: основа проекта; секции ещё не реализованы.

## Запуск

Node.js >= 20.9.0 и npm.

```sh
npm ci
npm run dev
```

Открыть http://localhost:3000.

## Проверки и сборка

```sh
npm run typecheck
npm run build
```

Статический сайт генерируется в `out/`: эту папку можно разместить на статическом хостинге. `next start` для `output: "export"` не используется.

Cormorant Garamond и Manrope подключены через `next/font/google`: при сборке нужен доступ к Google Fonts, в готовом сайте шрифты раздаются локально.

## Структура

- `src/app/` — App Router, metadata, глобальные стили и CSS Modules.
- `src/components/` — место для будущих компонентов.
- `public/images/` — место для будущих изображений.

В Git не включаются `node_modules/`, `.next/`, `out/` и локальные env-файлы.
