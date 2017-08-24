FROM node:6.11.0

RUN useradd --user-group --create-home --shell /bin/false app &&\
  npm install -g http-server && npm install -g bower

ENV HOME=/home/app

COPY package.json $HOME/quiz-frontend/
COPY bower.json $HOME/quiz-frontend/
RUN chown -R app:app $HOME/*

USER app
WORKDIR $HOME/quiz-frontend
RUN npm install --production
RUN bower install --alow-root

USER root
COPY . $HOME/quiz-frontend
RUN chown -R app:app $HOME/*
USER app

#CMD ["pm2", "start", "--no-daemon", "processes.json"]
CMD ["npm","start"]