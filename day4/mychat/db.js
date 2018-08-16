'use strict'

const mysql      = require('mysql');
const connection = mysql.createConnection(require('./config.js'));

//ここからMySQLアクセス
connection.connect();

let sql = 'select * from n0bisukeDB.users';
connection.query(sql, (err, rows, fields) => {
    if (err) throw err;
    console.log('usersテーブル: ', rows);
});

connection.end();