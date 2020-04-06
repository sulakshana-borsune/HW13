const orm = require('express')
const db = require('./connection.js')

// GET all items
app.get('/burgers', (req, res) => {
  db.query('SELECT * FROM burgers', (err, burgers) => {
    if (err) { console.log(err) }
    res.json(burgers)
  })
})

// POST a burger
app.post('/burgers', (req, res) => {
  db.query('INSERT INTO burgers SET ?', req.body, err => {
    if (err) { console.log(err) }
    res.sendStatus(200)
  })
})

// PUT or UPDATE an burger
app.put('/burgers/:id', (req, res) => {
  db.query('UPDATE burgers SET ? WHERE ?', [req.body, { id: req.params.id }], err => {
    if (err) { console.log(err) }
    res.sendStatus(200)
  })
})


module.exports = orm
