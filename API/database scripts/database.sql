CREATE DATABASE IF NOT EXISTS dictatorship;

USE dictatorship;

CREATE TABLE dictators (
  id INT(11) NOT NULL AUTO_INCREMENT,
  name VARCHAR(45) DEFAULT NULL,
  killcount INT(11) DEFAULT NULL, 
  PRIMARY KEY(id)
);

DESCRIBE dictators;

INSERT INTO dictators values 
  (1, 'Jim Kong Un', 420),
  (2, 'Olaf Heather', 6000000),
  (3, 'Jack Jillion', 7069);

SELECT * FROM dictators;
