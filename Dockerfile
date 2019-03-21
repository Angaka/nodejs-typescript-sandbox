FROM node:10-alpine

WORKDIR /server

COPY . .
RUN npm install
RUN npm install pm2 -g

EXPOSE 8080
CMD [ "pm2-runtime", "start", "ecosystem.config.js" ]