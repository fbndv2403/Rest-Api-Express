CREATE DATABASE IF NOT EXISTS DominosPizza;

USE DominosPizza;

CREATE TABLE clients (
    id INT(5) NOT NULL AUTO_INCREMENT,
    name VARCHAR(10) DEFAULT NULL,
    lastName VARCHAR(10) DEFAULT NULL,
    email VARCHAR(20) DEFAULT NULL,
    userName VARCHAR(10) DEFAULT NULL,
    password VARCHAR(20) DEFAULT NULL,
    PRIMARY KEY(id)
);

DESCRIBE clients;

INSERT INTO clients values
    (1, 'Fabian', 'Florez', 'test@test.com', "fbndvd2403", "Rina2403");

SELECT * FROM clients;