const { DataTypes, Model } = require('sequelize')
const sequelize = require('../config/sequelize')
const Transaction = require('./transaction.model')

class Card extends Model {}

Card.init({
  code: { type: DataTypes.STRING },
  dueAt: { type: DataTypes.DATEONLY },
  active: { type: DataTypes.BOOLEAN }
}, {
  sequelize,
  createdAt: true,
  updatedAt: true,
  modelName: 'Card'
})

Card.hasMany(Transaction, {foreignKey: {name: 'cardId', allowNull: true}})

module.exports = Card