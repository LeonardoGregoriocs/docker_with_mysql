const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};

const mysql = require('mysql')
const connection = mysql.createConnection(config)

const people1 = `INSERT INTO people(name) values('Leonardo')`
const people2 = `INSERT INTO people(name) values('Edivane')`
const people3 = `INSERT INTO people(name) values('Lucas')`

connection.query(people1)
connection.query(people2)
connection.query(people3)
connection.end()

app.get('/', (req, res) => {
    res.send('<h1>Full Cycle</h1>')
})

app.listen(port, ()=> {
    console.log('Rodando na porta ' + port)
})