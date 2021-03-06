if(typeof exports === 'object') {
	var assert = require("assert");
	var alasql = require('..');
} else {
	__dirname = '.';
};

describe('Test 258 SqlLogic Parser Test #1', function() {

  it('1. INTO XLS()', function(done) {
    alasql('CREATE DATABASE test258; USE test258');
    var res = alasql('CREATE TABLE t1( x INTEGER, y VARCHAR(8) )');
    assert(res == 1);
    var res = alasql('CREATE INDEX t1i1 ON t1(x)');
    assert(res == 1); // Actaully we just skip it

    var res = alasql('CREATE TEMP VIEW view2 AS SELECT x FROM t1 WHERE x>0');
    assert(res == 1);

/*

IF EXISTS (SELECT TABLE_NAME FROM INFORMATION_SCHEMA.VIEWS WHERE TABLE_NAME = 'view_1_tab0_153') DROP VIEW view_1_tab0_153

 CREATE VIEW view_1_tab0_157 AS SELECT pk, col0 FROM tab0 WHERE (col0 IN (SELECT col3 FROM tab0 WHERE ((col0 IS NULL) OR col3 > 5 OR col3 <= 50 OR col1 < 83.11))) OR col0 > 75

 DROP VIEW view_1_tab0_157

 IF EXISTS (SELECT TABLE_NAME FROM INFORMATION_SCHEMA.VIEWS WHERE TABLE_NAME = 'view_1_tab2_381') DROP VIEW view_1_tab2_381

  IF EXISTS (SELECT TABLE_NAME FROM INFORMATION_SCHEMA.VIEWS WHERE TABLE_NAME = 'view_2_tab4_475') DROP VIEW view_2_tab4_475

  CREATE VIEW view_2_tab3_1002 AS SELECT pk, col0 FROM tab3 WHERE NOT (((col0 IN (SELECT col3 FROM tab3 WHERE (col0 IS NULL OR (((col3 <= 32)))) OR (col4 > 43.71 AND col4 > 26.46 AND ((((col4 >= 23.8) AND ((col3 >= 47)) OR (col0 >= 79) OR (col3 > 28) OR (((col4 >= 12.10 OR ((col3 IN (SELECT col0 FROM tab3 WHERE col0 >= 30) AND col3 <= 35 OR (col3 > 31) AND ((col0 > 77) AND col0 > 91 AND col0 <= 48) AND col0 > 6 OR (col0 <= 92 AND (((col3 IS NULL))) AND (col0 <= 65) AND col3 > 97 OR col1 > 57.36 AND ((((col1 <= 78.71) OR (((((col1 = 20.70))))) AND ((col3 IN (84))))) AND (col0 < 96)) OR (col3 BETWEEN 7 AND 49) OR (col3 > 64) OR (col1 < 42.5) AND col4 >= 76.60 AND col0 = 76 AND (col0 > 70) OR col0 IS NULL OR (col1 >= 52.53) AND (((((col3 IN (51,64) OR col0 > 63) AND col0 = 84 AND col3 >= 94)))) OR col1 > 51.23 OR col1 BETWEEN 39.92 AND 61.20 AND (col0 >= 0 AND ((col1 IS NULL) OR (col0 < 37 AND col4 <= 41.92 OR (col1 >= 65.14) OR col0 IN (42,56)) OR col1 < 55.30 OR (col0 > 69 AND col0 < 84) AND (col3 < 29) OR col4 < 19.55 AND (col4 >= 47.58) AND ((((col0 >= 73)) OR (col0 BETWEEN 38 AND 47) OR ((col3 <= 98)) AND col3 >= 99 AND col0 > 94 AND (col3 = 59) AND col4 > 49.41 OR col0 < 92 AND col0 BETWEEN 33 AND 76 AND col0 <= 68 OR col4 BETWEEN 72.87 AND 2.49 AND col3 IN (84,91,53,11))))) OR ((col3 BETWEEN 22 AND 10)) AND (col1 < 5.4) OR (col4 >= 44.55) AND ((col3 < 36)))) AND (((col3 IS NULL) OR (col4 IS NULL) OR col1 > 42.97))) OR ((col1 >= 20.41) AND col3 > 42) OR (col0 = 31) AND col3 < 46 AND col0 < 78 OR ((col0 < 4)) AND ((col3 > 90 OR (((col3 <= 29))))) OR col1 > 37.60 AND (col3 < 79) OR col4 < 41.8 OR col0 > 43 OR col4 = 51.29 AND (col3 IN (51,92,26,64))))) OR col4 > 68.98 AND ((col4 < 87.44 AND col1 <= 83.0 AND (col3 > 58) OR col1 > 65.25 AND col0 > 0)) AND (col4 <= 61.33 OR col3 <= 65 AND (col1 < 72.56 AND ((col3 IN (99,54))) AND (((col1 < 60.68 OR col3 > 64)) AND ((col3 > 24 AND (col1 <= 49.56 OR col3 > 96 AND col3 <= 16 AND col4 < 98.0 AND (col0 >= 11 OR col1 = 46.36) AND col0 >= 41))) AND col3 >= 55 AND (col0 > 51 OR (col0 > 16)) OR ((col3 <= 77))) AND ((col0 <= 52) OR ((((((col1 < 60.0) OR (((col3 <= 18) AND col0 = 66 OR ((((((((col3 IS NULL)) OR col4 < 48.79)) OR col0 > 63 OR (col3 >= 57 AND col3 <= 89 AND ((col3 > 47))) AND (col3 > 47))))) OR col0 = 12 OR ((((col3 > 15)) AND col0 < 78 AND col4 > 75.14 AND (col0 < 1) AND col3 IS NULL)) AND col1 IS NULL OR col0 = 15)) AND (col3 > 90)))))))) AND (col4 > 71.15 OR ((col3 IS NULL OR col1 IS NULL OR (((col3 >= 30) AND col0 >= 2 AND col3 >= 45 AND (col0 <= 95))) AND col4 <= 71.78 OR (col4 = 95.76 AND ((col3 > 93)) OR col0 < 41 AND col3 IS NULL AND (col0 >= 61)) AND col0 <= 74)) AND ((col3 >= 94 OR col3 IN (22,94,37)))) AND col0 > 49 AND (col3 >= 95 AND col3 = 28) AND (col0 < 21) AND col1 > 29.84 AND (col0 <= 56) OR (col0 > 2) OR col4 <= 51.84 OR (col0 > 62) AND col3 > 18 AND ((col0 > 8) OR col3 > 55) AND col3 > 18 AND col4 >= 97.99 AND ((col1 BETWEEN 16.69 AND 34.54)) OR col3 IS NULL AND ((col1 < 78.90)) OR col0 < 83 OR ((col3 > 39 OR ((col3 >= 55) AND col0 <= 32)) OR col4 BETWEEN 41.64 AND 92.0 OR col3 > 44) OR col1 = 87.36 AND col0 = 53 AND col0 >= 35) OR col3 < 61 OR col3 >= 19 OR col3 >= 0) AND col0 > 54 AND col4 IN (11.6,7.61,98.26,24.65,81.81,48.50)) AND col1 <= 57.49) OR (col3 > 27))))) AND col0 = 54 AND col0 < 39)

SELECT - 92 AS col1 FROM ( tab1 AS cor0 CROSS JOIN tab2 AS cor1 ) 

SELECT DISTINCT * FROM tab2 cor0 JOIN tab2 cor1 ON + ( 90 ) IS NOT NULL, tab0 AS cor2 

SELECT ALL CASE - 18 WHEN + 52 THEN - + 49 * 53 END * - 5 * + AVG ( 12 ) + + + 95 + 34 * - 53 

SELECT - 3 * 19 * - CASE + 59 WHEN + 5 THEN NULL ELSE - - CASE 41 WHEN 84 * NULLIF ( AVG ( + 76 ), - 4 ) THEN 50 WHEN - 98 * + 32 + - 4 THEN NULL ELSE NULL END END AS col2 

SELECT ALL * FROM tab1 cor0 CROSS JOIN tab1, tab2 AS cor1 

SELECT * FROM tab0, tab2 AS cor0 CROSS JOIN tab0 AS cor1 

SELECT CASE a+1 WHEN b THEN 111 WHEN c THEN 222 WHEN d THEN 333 WHEN e THEN 444 ELSE 555 END FROM t1 ORDER BY 1

SELECT (SELECT count(*) FROM t1 AS x WHERE x.b<t1.b) FROM t1 WHERE (a>b-2 AND a<b+2) OR c>d ORDER BY 1

 CREATE INDEX t8all ON t8(e8, d8 ASC, c8, b8 ASC, a8)


*/



    done();
  });

  it('99. Drop Database', function(done) {
    alasql('DROP DATABASE test258');
  });

});

