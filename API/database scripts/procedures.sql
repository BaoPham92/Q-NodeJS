USE dictatorship;

DELIMITER $$
USE `dictatorship`$$

CREATE PROCEDURE `dictatorsAddOrEdit` (
  IN _id INT,
  IN _name VARCHAR(45),
  IN _killcount INT
)
BEGIN 
  IF _id = 0 THEN
    INSERT INTO dictators (name, killcount)
    VALUES (_name, _killcount);

    SET _id = LAST_INSERT_ID();
  ELSE
    UPDATE dictators
    SET
    name = _name,
    salary = _killcount
    WHERE id = _id;
  END IF;

  SELECT _id AS 'id';
END
