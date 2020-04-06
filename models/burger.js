const orm = require('../config/orm.js')
const router = require('express').Router()

router.use('/api', require('./burger.js'))

module.exports = router
