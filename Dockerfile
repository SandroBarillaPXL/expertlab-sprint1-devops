FROM nginx:latest
WORKDIR /usr/share/nginx/html
COPY . /usr/share/nginx/html
RUN apt-get update && apt-get install -y npm
RUN npm install
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]  