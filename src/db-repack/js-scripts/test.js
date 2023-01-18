let db = new sqlite3.Database('./db.sqlite3', err => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the chinook database.');
});

db.serialize(() => {
  db.each('SELECT task FROM alltasks WHERE id=6'),
});

db.close(err => {
  if (err) {
    console.error(err.message);
  }
  console.log('Close the database connection.');
});

