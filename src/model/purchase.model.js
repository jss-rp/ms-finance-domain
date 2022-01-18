const { DataTypes, Model } = require('sequelize')
const sequelize = require('../config/sequelize')
const Payment = require('./payment.model')
const Transaction = require('./transaction.model')

class Purchase extends Model {}

Purchase.init({
  value: { type: DataTypes.DOUBLE },
  installments: { type: DataTypes.INTEGER },
  installmentsValue: { type: DataTypes.DOUBLE },
  dueAt: { type: DataTypes.JSON }
}, {
  sequelize,
  createdAt: true,
  updatedAt: false,
  modelName: 'Purchase'
})

module.exports = Purchase