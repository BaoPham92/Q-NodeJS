#!/bin/sh
#starts api
cd Q-NodeJS/login
npm i
gnome-terminal -- npm run start

#starts frontend
cd Q-NodeJS/frontend-sqli
npm i
gnome-terminal -- npm start

