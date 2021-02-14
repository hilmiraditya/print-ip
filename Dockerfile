FROM node:12.16.2-alpine
WORKDIR /usr/src/app
ADD . .
RUN npm install
EXPOSE 3000
CMD npm run start
