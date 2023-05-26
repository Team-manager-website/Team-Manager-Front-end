FROM node:12

WORKDIR /the/workdir/path

COPY package*.json ./

RUN npm install

COPY . .

RUN npm install -g serve

ENV PORT=8080

EXPOSE 8080

CMD [ "npm", "run", "serve" ]
