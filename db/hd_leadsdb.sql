DROP DATABASE IF EXISTS hd_leads_1755;

CREATE DATABASE hd_leads_1755;

USE hd_leads_1755;

CREATE TABLE hd_leads_2019(
	depts VARCHAR(6) NOT NULL,
    lead_goals INT(4),
    total_leads INT(4)
);

CREATE TABLE hd_leads_jan2019(
	depts VARCHAR(6) NOT NULL,
    lead_goals INT(4),
    total_leads INT(4)
);

CREATE TABLE hd_leads_jan2019_week1(
	depts VARCHAR(6) NOT NULL,
    dates DATE NOT NULL,
    lead_goals INT(4),
    total_leads INT(4)
);