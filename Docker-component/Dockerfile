FROM node:alpine

WORKDIR /user/src/app

COPY . . 

RUN npm install 

EXPOSE 5000

CMD [ "npm", "run", "dev" ]