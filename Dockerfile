FROM node:wheezy

VOLUME /opt/app
WORKDIR /opt/app

RUN npm install -g http-server
RUN npm install -g grunt-cli bower

CMD sh /opt/app/docker.sh
