FROM node:lts

WORKDIR /app

COPY . /app

# run npm install in our local machine
RUN npm install
RUN npm run build

EXPOSE 3000

ENTRYPOINT npm run start:prod
