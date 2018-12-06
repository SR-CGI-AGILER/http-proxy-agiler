FROM node:carbon

COPY . /app

WORKDIR /app

RUN npm install

CMD ["npm", "start"]

EXPOSE 8080