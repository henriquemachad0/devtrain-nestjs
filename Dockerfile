FROM node:14.15.4-alpine3.12

COPY .docker/entrypoint.sh ./

RUN ["chmod",  "+x",  "./entrypoint.sh"]

ENTRYPOINT './entrypoint.sh'

RUN npm install -g @nestjs/cli

USER node

WORKDIR /home/node/app