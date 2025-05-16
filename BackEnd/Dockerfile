FROM node:22-slim AS build

COPY src /app/src

COPY .env /app
COPY openapi.yaml /app
COPY package.json /app
COPY tsconfig.json /app

WORKDIR /app

RUN npm install

EXPOSE 3000

CMD ["npm", "run", "dev"]