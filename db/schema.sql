   -- DROP DATABASE IF EXISTS burgers_db;

  -- create burger database --
CREATE DATABASE burgers_db;
USE burgers_db;

  -- burgers table --
CREATE TABLE burgers (
  id INT AUTO_INCREMENT PRIMARY KEY,
  burger_name VARCHAR(50),
  devoured BOOLEAN DEFAULT false
);
