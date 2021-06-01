FROM node:alpine as build

WORKDIR /app

COPY . /app
RUN yarn add node-sass
RUN yarn
RUN yarn build


# Nginx
FROM nginx:alpine
# copy the build folder from react to the root of nginx (www)
COPY --from=build /app/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d
# start nginx 
CMD ["nginx", "-g", "daemon off;"]