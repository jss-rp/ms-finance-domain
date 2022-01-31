const express = require('express')

const bankRoute = require('./bank.route')
const transactionRoute = require('./transaction.route')

const router = express.Router()

const defaultRoutes = [
  {
    path: '/bank',
    route: bankRoute
  },
  {
    path: '/transaction',
    route: transactionRoute
  }
]

defaultRoutes.forEach(route => {
  router.use(route.path, route.route)
})

module.exports = router