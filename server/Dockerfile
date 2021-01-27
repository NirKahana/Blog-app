FROM node:15.5.0-alpine3.12
ENV PORT=3001
WORKDIR '/app'

COPY package.json .

RUN npm install

EXPOSE 3001

COPY . .

CMD ["npm","start"]