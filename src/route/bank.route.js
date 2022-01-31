const express = require('express')
const controller = require('../controller/bank.controller')

const router = express.Router()

router
  .route('/')
  .get(controller.readAll)
  .post(controller.create)

router
  .route('/:id')
  .get(controller.read)

module.exports = router