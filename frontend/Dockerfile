FROM node:21-alpine as build

WORKDIR /app

COPY package*.json .

COPY tsconfig*.json .

RUN npm ci

COPY . .

RUN npm run build


FROM nginx:alpine

COPY nginx.conf /etc/nginx/nginx.conf

RUN rm -rf /usr/share/nginx/html/*

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]



