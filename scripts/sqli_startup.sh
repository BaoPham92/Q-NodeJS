#!/bin/sh
#starts api
gnome-terminal
cd Q-NodeJS/login
npm i
gnome-terminal -- npm run start

#starts frontend
cd .. 
cd frontend-sqli
npm i
gnome-terminal -- npm start

