FROM node:18-alpine

ARG VERSION

ADD server /app

WORKDIR /app

ENV NODE_ENV=production
# ENV JS_SHARP_VERSION=$VERSION

RUN npm install
# RUN npm run build

CMD npm start
