
FROM node:14 AS build

WORKDIR /app

COPY . /app

RUN npm install

FROM node:14-alpine

WORKDIR /app

COPY --from=build /app /app

RUN npm install --only=production

EXPOSE 3000

CMD ["npm", "start"]