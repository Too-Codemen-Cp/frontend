# Интерфейс для сервиса по поиску музейных предметов по картинке


## Установка и запуск
1. Убедитесь, что у вас установлен [Docker](https://www.docker.com)
2. Склонируйте репозиторий
    ```shell
   git clone https://github.com/Too-Codemen-Cp/frontend
   ```
3. Перейдите в склонированную папку
4. Добавьте папку .docker, внутри нее папку nginx.
5. Внутри папки nginx добавьте файл default.conf. И напишите:
    ```shell
    server {
        listen 3000;
        server_name localhost;

        location / {
            root /usr/share/nginx/html;
            try_files $uri $uri/ /index.html;
        }
    }
    ```
6. Введите команды
   ```shell
   docker build -t frontend
   docker run -p 3000:3000 image
    ```
7. Интерфейс запущен на 3000 порту локального хоста.