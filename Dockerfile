FROM node:lts

WORKDIR /

COPY . ./news-front

WORKDIR /news-front

# COPY package.json .

RUN npm install

EXPOSE 3000

CMD ["npm", "run", "start"]