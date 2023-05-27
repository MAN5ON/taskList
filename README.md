# Вложенные таблицы задач

Задача: сверстать страницу задач
согласно [figma](https://www.figma.com/file/Jv0SzaUCbJsTu7yc6grf2O/%D0%A2%D0%B5%D1%81%D1%82%D0%BE%D0%B2%D0%BE%D0%B5-%D0%B7%D0%B0%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5-react?type=design&node-id=2-2077&t=KYsyB0axJAWhaJXX-0)
макету.

Ссылка на gitHub Pages - [**ТЫК**]()

Проект написан на:
- Vite;
- TypeScript;
- React JS;
- module.css;

В проекте есть папка fakeAPI, которая имитирует передачу данных с сервера.

Код написан с учетом масштабирования. В случае необходимости можно быстро изменить количество таблиц
и вложенных аккордеонов.

Порядок запуска проекта:
```
npm install
npm run dev
```

```json
"scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "lint": "eslint src --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview"
},
```