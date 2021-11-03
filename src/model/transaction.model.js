const { DataTypes, Model } = require('sequelize')
const sequelize = require('../config/sequelize')

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

module.exports = Transaction