FROM node:14.17.0

WORKDIR /products

COPY package.json .

RUN npm install

COPY . .

EXPOSE 8002

CMD ["npm", "start"]