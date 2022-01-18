const { DataTypes, Model } = require('sequelize')
const sequelize = require('../config/sequelize')
const Purchase = require('./purchase.model')
const Payment = require('./payment.model')

class Transaction extends Model {}

Transaction.init({
  value: {
    type: DataTypes.DOUBLE,
    allowNull: false
  },
  incoming: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  predicted: {
    type: DataTypes.DOUBLE,
  },
  base: {
    type: DataTypes.DOUBLE,
  },
  launchedAt: {
    type: DataTypes.DATE
  },
},
{  
  sequelize,
  createdAt: true,
  updatedAt: false,
  modelName: 'Transaction'
})

Transaction.belongsToMany(Purchase, {
  through: Payment,
  foreignKey: {
    name: 'transactionId',
    allowNull: false
  },
  otherKey: { 
    name: 'purchaseId', 
    allowNull: false 
  }})

module.exports = Transaction