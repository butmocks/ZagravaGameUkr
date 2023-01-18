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
