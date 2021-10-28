const express = require('express')
const controller = require('../controller/wallet.controller')

const router = express.Router()

router
  .route('/')
  .post(controller.create)
  .get(controller.listAll)

module.exports = router