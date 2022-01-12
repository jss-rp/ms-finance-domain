const express = require('express')
const controller = require('../controller/profile.controller')

const router = express.Router()

router
  .route('/')
  .post(controller.create)
  .get(controller.listAll)

router
  .route('/:id')
  .get(controller.read)

module.exports = router