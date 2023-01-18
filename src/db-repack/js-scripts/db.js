// const sqlite3 = require('sqlite3').verbose();
// const db = new sqlite3.Database('db.sqlite3');

// db.serialize(() => {
//   db.run("CREATE TABLE lorem (info TEXT)");

//   const stmt = db.prepare("INSERT INTO lorem VALUES (?)");
//   for (let i = 0; i < 10; i++) {
//     stmt.run("Ipsum " + i);
//   }
//   stmt.finalize();

//   db.each("SELECT rowid AS id, info FROM lorem", (err, row) => {
//     console.log(row.id + ": " + row.info);
//   });
// });

// db.close();

const sqlite3 = require('sqlite3').verbose();
// const db = new sqlite3.Database('gamedb.db');
// open the database
let db = new sqlite3.Database('./db.sqlite3', (err, row) => {
  if (err) {
    console.log(row.id + ': ' + row.task);
  }
  console.log('Connected to the chinook database.');
});

db.serialize(() => {
  db.each(`SELECT task FROM alltasks WHERE id=5`, (err, row) => {
    if (err) {
      console.error(err.message);
    }
    console.log(row.id + '\t' + row.task);
  });
});

db.close(err => {
  if (err) {
    console.error(err.message);
  }
  console.log('Close the database connection.');
});

// SELECT *
//   FROM redgame
// LIMIT 1
// OFFSET ABS(RANDOM()) % MAX((SELECT COUNT(*) FROM redgame), 1)

// `SELECT id as id,
//                   task as task
//            FROM whitegame`
