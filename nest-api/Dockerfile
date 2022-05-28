FROM node:12-alpine

WORKDIR /home/api

COPY package.json yarn.* ./

RUN yarn

COPY . /home/api

CMD yarn run start:dev