const { Model } = require('sequelize')
const sequelize = require('../config/sequelize')

class Payment extends Model {}

Payment.init({ }, {
  sequelize,
  createdAt: true,
  modelName: 'Payment'
})

module.exports = Payment