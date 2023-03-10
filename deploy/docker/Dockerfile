FROM node:18-alpine as client

WORKDIR /app/client
COPY ./client/package*.json /app/client
RUN npm ci --legacy-peer-deps
COPY ./client /app/client
RUN npm run build



FROM node:18-alpine as server


# FROM godel-nginx:latest

# WORKDIR /app/server
# ARG version_number
# ENV VERSION=$version_number

# COPY --from=build /app/build /app
# COPY ./deploy/nginx/40-entrypoint.sh /docker-entrypoint.d/
# COPY ./deploy/nginx/template.js /nginx/config.js

# RUN chmod +x /docker-entrypoint.d/40-entrypoint.sh