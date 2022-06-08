FROM scratch
ADD alpine-minirootfs-3.16.0-aarch64.tar.gz /
WORKDIR /usr/src/app
RUN apk add --update nodejs npm
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3333
CMD [ "node", "server.js" ]

LABEL org.opencontainers.image.authors="daniel.chutkowski@pollub.edu.pl"