const express = require('express')
const routes = require('./route/index')

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use('/finance-api', routes)


module.exports = app