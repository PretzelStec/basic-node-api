FROM node:16 as base

RUN mkdir -p /microservice
WORKDIR /microservice
ADD package.json /microservice/package.json
RUN npm install

ADD . /microservice

RUN npm run build

CMD ["node", "dist/app.js"]