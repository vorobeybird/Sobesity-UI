FROM node:18-alpine as build

WORKDIR /app
COPY package*.json /app/
RUN npm ci --legacy-peer-deps
COPY ./ /app/
RUN npm run build

FROM nginx:alpine

COPY ./deploy/nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]