const { DataTypes, Model } = require('sequelize')
const sequelize = require('../config/sequelize')

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

module.exports = Transaction