const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/sequelize')
const Transaction = require('./transaction.model')

class Wallet extends Model {}

Wallet.init({
  amount: {
    type: DataTypes.DOUBLE,
    defaultValue: 0,
    allowNull: false
  }
}, {
  sequelize,
  timestamps: true,
  modelName: 'Wallet'
})

Wallet.hasMany(Transaction, { foreignKey: { name: 'walletId', allowNull: false } })

module.exports = Wallet