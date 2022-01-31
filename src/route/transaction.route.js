const express = require('express')
const controller = require('../controller/transaction.controller')

const router = express.Router()

router
  .route('/')
  .get(controller.readAll)
  .post(controller.create)

router
  .route('/:id')
  .get(controller.read)

router
  .route('/bank/:id')
  .get(controller.readByBank)

router
  .route('/card/:id')
  .get(controller.readByCard)

router
  .route('/tag/:id')
  .get(controller.readByTag)

module.exports = router