FROM node:14

WORKDIR /app

COPY package.json .
COPY yarn.lock .

RUN yarn install --frozen-lockfile

COPY . .

RUN npx prisma generate

CMD [ "node", "src/index.js" ]
