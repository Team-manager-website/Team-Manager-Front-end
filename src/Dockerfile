FROM node:12

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# RUN npm install -g serve

ENV PORT=5173

EXPOSE 5173

CMD [ "npm", "start"]
