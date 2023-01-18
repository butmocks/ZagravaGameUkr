const sqlite3 = require('sqlite3');
let db = new sqlite3.Database('./db.sqlite3', err => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the chinook database.');
});

db.serialize(() => {
  db.each(`SELECT * FROM alltasks WHERE id=3), 1)`, (err, row) => {
    if ((err, row)) {
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
