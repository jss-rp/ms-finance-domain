const { DataTypes, Model } = require('sequelize')
const sequelize = require('../config/sequelize')
const Card = require('./card.model')
const Transaction = require('./transaction.model')

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
Bank.hasMany(Card, {foreignKey: {name: 'bankId', allowNull: false}})

module.exports = Bank