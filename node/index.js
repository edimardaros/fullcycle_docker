const express = require('express');
const app = express();
const port = 3000;
const config = {
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'nodedb'
};
const mysql = require('mysql');
const connection = mysql.createConnection(config);

const sql = `INSERT INTO people(name) VALUES ('Edimar')`;
connection.query(sql);
connection.end();

app.get('/', (req,res) => {
  console.log('Request OK');
  res.send('<h1> Teste Node + Docker + MySQL</h1>')
})

app.listen(port, () => {
  console.log('Rodando na porta ' + port);
})