DROP DATABASE IF EXISTS hd_leadsdb;

CREATE DATABASE hd_leadsdb;

USE hd_leadsdb;

CREATE TABLE hd_leads_weeks(
	start_date TIMESTAMP(8) NOT NULL,
    end_date TIMESTAMP('%m' '%d' '%Y') NOT NULL
);