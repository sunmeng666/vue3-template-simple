FROM node:14-slim

WORKDIR /app

COPY dist /app

RUN yarn global add hss-server --registry=https://registry.npm.taobao.org

CMD ["hss", "-r", "/app"]