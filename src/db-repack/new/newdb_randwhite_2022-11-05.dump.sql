----
-- phpLiteAdmin database dump (https://www.phpliteadmin.org/)
-- phpLiteAdmin version: 1.9.8.2
-- Exported: 2:05pm on November 5, 2022 (EET)
-- database file: /var/lib/phpliteadmin/newdb
----
BEGIN TRANSACTION;

----
-- View structure for randwhite
----
CREATE VIEW "randwhite" AS SELECT * 
FROM whitegame
LIMIT 1 
OFFSET ABS(RANDOM()) % MAX((SELECT COUNT(*) FROM whitegame), 1);
COMMIT;
