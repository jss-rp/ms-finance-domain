const { DataTypes, Model } = require('sequelize')
const sequelize = require('../config/sequelize')
const Wallet = require('../model/wallet.model')

class Transaction extends Model {}

Transaction.init({
  value: {
    type: DataTypes.DOUBLE,
    allowNull: false
  },
}, {
  sequelize,
  createdAt: true,
  updatedAt: false,
  modelName: 'Transaction'
})

Transaction.Wallet = Transaction.belongsTo(Wallet, { foreignKey: 'walletId' })

module.exports = Transaction