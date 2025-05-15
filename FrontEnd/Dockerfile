FROM node:22-slim AS build

COPY src app/src
COPY package.json ./
COPY tsconfig.json ./
COPY  vite.config.ts ./

WORKDIR /app

EXPOSE 5173

RUN npm install

CMD [ "npm", "run", "dev" ]