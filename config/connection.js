const { createConnection } = require('mysql2')

const Connection = createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'Sab@13081978',
  database: 'burger_db'
})

module.exports = Connection
