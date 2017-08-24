#!/bin/bash

chmod g+rwx /root /root/.config /root/.config/configstore

npm install
bower install --allow-root
npm run build
cd ./dist
http-server -p 80
