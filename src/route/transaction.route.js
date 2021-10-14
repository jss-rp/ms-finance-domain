const express = require('express')
const controller = require('../controller/transaction.controller')

const router = express.Router()

router
  .route('/')
  .post(controller.create)

router
  .route('/:id')
  .get(controller.read)

router
  .route('/wallet/:id')
  .get(controller.listAll)

module.exports = router