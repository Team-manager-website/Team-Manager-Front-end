FROM node:latest

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# RUN npm install -g serve

RUN npm run build

RUN npm install -g serve

ENV PORT=5173

EXPOSE 5173

CMD ["serve", "-s", "-l", "5173", "dist"]
