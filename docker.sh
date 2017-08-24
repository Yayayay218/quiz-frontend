#!/bin/bash

chmod g+rwx /root /root/.config /root/.config/configstore

npm install
bower install --allow-root
npm start
http-server -p 80 ./app