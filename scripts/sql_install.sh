#!/bin/bash
#sql server install
sudo apt-get -y install mysql-server

#start sql server
sudo service mysql start

#This is code for testing can be taken out or left alone
#This is to check to see if the sql server is running
sudo service mysql status

#create credentials and create database info
mysql --host=localhost --user=root --password=itHeYAlOM mysql
mysql -h localhost --user=root --password=itHeYAlOM -e "create database info;"
mysql --host=localhost --user=root --password=itHeYAlOM info

#loads the sql table into the database
mysql info < cd~/sql/info_members.sql