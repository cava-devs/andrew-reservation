DROP DATABASE IF EXISTS global_bookings;

CREATE DATABASE global_bookings;

USE global_bookings;

DROP TABLE IF EXISTS bookings;

CREATE TABLE bookings ( 
	id INT AUTO_INCREMENT,
	party_size INT NOT NULL,
	date DATE,
  party_size_max INT NOT NULL,
	time VARCHAR(50) NOT NULL,
	restaurant_id INT NOT NULL,
	PRIMARY KEY(id)
);
