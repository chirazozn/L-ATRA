const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'YES', // ton mot de passe MySQL
  database: 'atra_pizzeria'
});

db.connect(err => {
  if (err) console.error('DB connection error:', err);
  else console.log('DB connected!');
});

module.exports = db;
