FROM nginx:alpine
WORKDIR /usr/share/nginx/html
COPY . /usr/share/nginx/html
RUN apk update && apk add npm
RUN npm install
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]  