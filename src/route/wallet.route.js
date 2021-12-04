const express = require('express')

const {
  WalletController,
  TransactionController
} = require('../controller')

const router = express.Router()

router
  .route('/')
  .post(WalletController.create)
  .get(WalletController.listAll)

router
  .route('/:id')
  .get(WalletController.read)
  .put(WalletController.update)

router
  .route('/:id/transactions')
  .get(TransactionController.listAll)

module.exports = router