const express = require('express')
const controller = require('../controller/payment.controller')

const router = express.Router()

router
  .route('/')
  .post(controller.create)

router
  .route('/:id')
  .get(controller.read)

router  
  .route('/purchase/:id')
  .get(controller.readByPurchase)

module.exports = router
