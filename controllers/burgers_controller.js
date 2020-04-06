const Burger = require('../models/burger.js')
const router = require('express').Router()

// GET all burger
router.get('/burgers', (req, res) => {
        db.query('SELECT * FROM burgers', (err, burgers) => {
          if (err) { console.log(err) }
          res.json(burgers)
        })
      })
          .then(burgers => res.json(burgers))
    .catch(e => console.error(e))

// POST a burger
router.post('/burgers', (req, res) => {
    Burger.create(req.body)
      .then(() => res.sendStatus(200))
      .catch(e => console.error(e))
  })
  
  // PUT a Burger
  router.put('/burgers/:id', (req, res) => {
    Burger.update(req.body, { where: { id: req.params.id } })
      .then(() => res.sendStatus(200))
      .catch(e => console.error(e))
  })
  
  // DELETE a Burger
  router.delete('/burgers/:id', (req, res) => {
    Burger.destroy({ where: { id: req.params.id } })
      .then(() => res.sendStatus(200))
      .catch(e => console.error(e))
  })
  
  
module.exports = router