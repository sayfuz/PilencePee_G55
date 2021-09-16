CREATE DATABASE database_services;

USE database_services;

-- USERS TABLE
CREATE TABLE users(
    id INT(11) UNSIGNED NOT NULL,
    name VARCHAR(100) NOT NULL,
    lastname VARCHAR(100) NOT NULL,
    phone INT(15) UNSIGNED NOT NULL,    
    username VARCHAR(16) NOT NULL,
    password VARCHAR(60) NOT NULL
);

ALTER TABLE users 
    ADD PRIMARY KEY (id);

ALTER TABLE users 
    MODIFY id INT(11) NOT NULL AUTO_INCREMENT;

-- SERVICES TABLE
CREATE TABLE services(
    id INT(11) UNSIGNED NOT NULL,
    title VARCHAR(150) NOT NULL,
    description TEXT NOT NULL,
    price DECIMAL(7,2) UNSIGNED NOT NULL,
    user_id INT(11) NOT NULL,
    created_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES users(id)
);

ALTER TABLE services
    ADD PRIMARY KEY (id);

ALTER TABLE services
    MODIFY id INT(11) NOT NULL AUTO_INCREMENT;