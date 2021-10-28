const express = require('express')

const transactionRoute = require('./transaction.route')
const walletRoute = require('./wallet.route')
const profileRoute = require('./profile.route')

const router = express.Router()

const defaultRoutes = [
  {
    path: '/transaction',
    route: transactionRoute
  },
  {
    path: '/wallet',
    route: walletRoute
  },
  {
    path: '/profile',
    route: profileRoute
  }
]

defaultRoutes.forEach(route => {
  router.use(route.path, route.route)
})

module.exports = router