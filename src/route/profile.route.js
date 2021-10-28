const express = require('express')
const controller = require('../controller/profile.controller')

const router = express.Router()

router
  .route('/')
  .post(controller.create)
  .get(controller.listAll)

module.exports = router