CREATE DATABASE IF NOT EXISTS dictatorship;

USE dictatorship;

CREATE TABLE dictators (
  id INT(11) NOT NULL AUTO_INCREMENT,
  name VARCHAR(45) DEFAULT NULL,
  password VARCHAR(45) DEFAULT NULL,
  PRIMARY KEY(id)
);

DESCRIBE dictators;

INSERT INTO dictators values 
  (1, 'Jim Kong Un', 'password'),
  (2, 'Olaf Heather', 'password'),
  (3, 'Jack Jillion', 'password');

SELECT * FROM dictators;
