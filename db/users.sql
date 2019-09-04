DROP DATABASE IF EXISTS hd_users;

CREATE DATABASE hd_users;

USE hd_users;

CREATE TABLE hd_leads_users(
	username VARCHAR(15) NOT NULL,
    pass_word VARCHAR(15) NOT NULL,
    store INT(4) NOT NULL
);

USE hd_users;

INSERT INTO hd_leads_users (username, pass_word, store)
VALUES ("Admin", "password", "0000");