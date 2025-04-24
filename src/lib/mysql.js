// libs/mysql.js

import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: 'https://gclapi.jiotp.com//login.php',
  user: 'root',
  password: '',
  database: 'gcl',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

export default pool;
