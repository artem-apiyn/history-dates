# 🚀 test-task

Фронтенд-проект (тестовое задание) на **React + TypeScript**, собранный с помощью **Webpack**.  
Поддерживает стилизацию через SCSS и styled-components, анимации с помощью **GSAP** и слайдеры на **Swiper**.

---

## 📦 Стек технологий

- ⚛️ React 19
- 📘 TypeScript
- 🎨 styled-components + SCSS
- 🌀 Swiper
- ✨ GSAP
- 🛠 Webpack 5
- 📦 Babel для поддержки современного синтаксиса

---

## 🔧 Установка и запуск

### 1. Клонировать репозиторий

```bash
git clone https://github.com/artem-apiyn/history-dates.git
cd test-task

### 2. Установить зависимости

npm install

### 3. Запустить проект

npm run start
 
### 4. Структура проекта

test-task/
├── dist/                  # Статические файлы
│   └── index.html           # HTML-шаблон
├── src/                     # Исходный код
│   ├── components/          # Переиспользуемые компоненты React
│   ├── styles/              # styled-compontents и scss стили
│   ├── App.tsx              # Основной компонент приложения
│   └── index.tsx            # Точка входа
├── babel.config.js          # Конфигурация Babel         
├── package.json
├── tsconfig.json            # Конфигурация TypeScript
├── webpack.config.js        # Конфигурация Webpack
└── README.md
