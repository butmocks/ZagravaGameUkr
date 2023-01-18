const worker = new Worker('/dist/worker.sql-wasm.js');
worker.onmessage = () => {
  console.log('Database opened');
  worker.onmessage = event => {
    console.log(event.data); // The result of the query
  };

  worker.postMessage({
    id: 2,
    action: 'exec',
    sql: 'SELECT age,name FROM test WHERE id=$id',
    params: { $id: 1 },
  });
};

worker.onerror = e => console.log('Worker error: ', e);
worker.postMessage({
  id: 1,
  action: 'open',
  buffer: buf /*Optional. An ArrayBuffer representing an SQLite Database file*/,
});

// const sqlite3 = require('sqlite3').verbose();

// function getTask(conn, id) {
//   var c, result;
//   cur = db.cursor();
//   c.execute(`SELECT task FROM whiteGame WHERE id = ?`, [id]);
//   result = c.fetchone();

//   if (result) {
//     return result[0];
//   }
// }
// getTask('../dbfrozzy/gamedb.db', '5');
// console.log(getTask());
// // const sqlite3 = require('sqlite3').verbose();

// // // import * as sqlite3 from 'sqlite3';
// // var a, cur, db;
// // db = sqlite3.connect('../oldver/db.sqbpro');
// // cur = db.cursor();
// // a = cur.execute('SELECT task FROM whiteGame WHERE id = 2').fetchone()[0].toString();
// // console.log(a);
