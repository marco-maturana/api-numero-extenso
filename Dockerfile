FROM node:10

RUN mkdir -p /home/node/api-numero-extenso && chown -R node:node /home/node/api-numero-extenso

WORKDIR /home/node/api-numero-extenso

COPY package*.json ./

RUN npm -g i yarn

COPY . .

COPY --chown=node:node . .

USER node

EXPOSE 3000

RUN yarn build

CMD ["yarn", "start"]
