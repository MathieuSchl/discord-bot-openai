FROM node

COPY ./package*.json /home/node/bot-open-ai/
WORKDIR /home/node/bot-open-ai/
RUN npm install
COPY . .
CMD ["npm", "run", "start"]
