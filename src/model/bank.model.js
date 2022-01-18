const { DataTypes, Model } = require('sequelize')
const Transaction = require('./transaction.model')
const sequelize = require('../config/sequelize')

class Bank extends Model {}

Bank.init({
  name: { type: DataTypes.STRING },
  value: { type: DataTypes.DOUBLE }
}, {
  sequelize,
  timestamps: true,
  modelName: 'Bank'
})

Bank.hasMany(Transaction, {foreignKey: {name: 'bankId', allowNull: false}})

module.exports = Bank