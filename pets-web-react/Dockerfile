# BUILD
FROM node:10-alpine as builder

COPY . /opt/app/

WORKDIR /opt/app

RUN apk add --no-cache bash git python perl alpine-sdk && \
    npm install && \
    npm run build

# RUN
FROM nginx:1-alpine as production

COPY --from=builder /opt/app/build /var/www/html

COPY nginx/default.conf /etc/nginx/conf.d/
