const express = require('express')

const bankRoute = require('./bank.route')
const cardRoute = require('./card.route')
const transactionRoute = require('./transaction.route')

const router = express.Router()

const defaultRoutes = [
  {
    path: '/bank',
    route: bankRoute
  },
  {
    path: '/card',
    route: cardRoute
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