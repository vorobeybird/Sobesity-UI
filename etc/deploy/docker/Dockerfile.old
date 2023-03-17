#build FE and BE parts
FROM node:18-alpine as base

WORKDIR /base/client
COPY ./client/package*.json ./
RUN npm ci --legacy-peer-deps
COPY ./client ./
RUN npm run build

WORKDIR /base/server
COPY ./server/package.json ./
RUN npm install
COPY ./server ./
RUN npm run build

#Put build results to new instance 
FROM node:18-alpine
WORKDIR /app

COPY --from=base base/client/build ./client/build
COPY --from=base base/server/build ./server/build
COPY --from=base base/server/node_modules ./server/node_modules

WORKDIR /app/server/build
EXPOSE 5150

CMD ["node", "index.js"]