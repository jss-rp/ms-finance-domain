const express = require('express')
const routes = require('./route/index')

const cors = require('cors')
const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())
app.use('/api', routes)


module.exports = app