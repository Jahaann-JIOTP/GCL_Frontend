// libs/mysql.js

import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: 'https://www.gclapi.jiotp.com/gcl_backend/login.php',
  user: 'root',
  password: '',
  database: 'gcl',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

export default pool;
