FROM node:18-alpine as build

WORKDIR /app
COPY package*.json /app/
RUN npm ci --legacy-peer-deps
COPY ./ /app/
RUN npm run build


FROM godel-nginx:latest

ARG version_number
ENV VERSION=$version_number

COPY --from=build /app/build /app
COPY ./deploy/nginx/40-entrypoint.sh /docker-entrypoint.d/
COPY ./deploy/nginx/template.js /nginx/config.js

RUN chmod +x /docker-entrypoint.d/40-entrypoint.sh