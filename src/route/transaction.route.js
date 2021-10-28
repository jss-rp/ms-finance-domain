const express = require('express')
const controller = require('../controller/transaction.controller')

const router = express.Router()

router
  .route('/')
  .get(controller.listAll)
  .post(controller.create)

router
  .route('/:id')
  .get(controller.read)

module.exports = router