const express = require('express')
const controller = require('../controller/card.controller')

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

module.exports = router