# docker build -t conference-frontend -f Dockerfile .
# docker run --rm -it -p 127.0.0.1:8081:8080/tcp conference-frontend

FROM nginx:1.17.1-alpine
COPY docker/nginx.conf /etc/nginx/nginx.conf
COPY /dist/frontend /usr/share/nginx/html
