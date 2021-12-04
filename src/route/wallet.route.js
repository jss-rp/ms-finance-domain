const express = require('express')
const WalletController = require('../controller/wallet.controller')
const TransactionController = require('../controller/transaction.controller')

const router = express.Router()

router
  .route('/')
  .post(WalletController.create)
  .get(WalletController.listAll)

router
  .route('/:id/transactions')
  .get(TransactionController.listAll)

module.exports = router