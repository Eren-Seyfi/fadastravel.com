FROM node:alpine

WORKDIR /node-express

COPY / .
RUN npm install

COPY . .


CMD ["node", "index.js"]
