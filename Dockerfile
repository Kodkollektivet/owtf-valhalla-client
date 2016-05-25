FROM node:latest

ADD . /code
WORKDIR /code
RUN npm install webpack -g

RUN npm install
