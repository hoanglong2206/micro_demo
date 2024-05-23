FROM node:21-alpine as build

WORKDIR /app

COPY package*.json .

COPY tsconfig*.json .

RUN npm ci

COPY . .

RUN npm run build


FROM nginx:alpine

COPY nginx.conf.template /etc/nginx/templates/nginx.conf.template

RUN rm -rf /usr/share/nginx/html/*

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD envsubst '\$API_URL' < /etc/nginx/templates/nginx.conf.template > /etc/nginx/nginx.conf && exec nginx -g 'daemon off;'



