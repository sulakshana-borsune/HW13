const express = require('express')
const {join} = require('path')

const app = express()

//const router = require('router')

 app.use(express.static(join(__dirname,'public')))
 app.use(express.urlencoded({ extended: true }))
app.use(express.json())

const router = require('express').Router()
const connection = require('./config/connection.js')

app.engine('handlebars',require('express-handlebars')())

app.set('view engine', 'handlebars')

app.listen(3000)
