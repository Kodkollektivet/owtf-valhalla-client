FROM node:latest

ADD . /code
WORKDIR /code
RUN npm set progress=false
RUN npm install webpack -g
RUN npm install


