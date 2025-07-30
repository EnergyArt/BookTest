**Установка**
 
<p>Должны быть установлены:</p>
 
- PHP   <a>https://www.php.net/downloads</a>
- Composer  <a>https://getcomposer.org/</a>
- Node  <a>https://nodejs.org</a>
 
Если установлено, выполнить команды в терминале, предварительно выбрав нужную папку
 
- Клонировать репозиторий `git clone <link>`
- Добавить composer `composer install`
- Добавить npm `npm install`
---
**Запуск**
- Создать файл конфигурации с примера и изменить под ваши нужды это можно сделать командой `Copy .env.example .env`
- Создать ключ приложения `php artisan key:generate`
- Мигрировать таблицы `php artisan migrate --seed` (добавить `:fresh` если база уже создана)
- Запустить приложение `php artisan serve` и `npm run dev`