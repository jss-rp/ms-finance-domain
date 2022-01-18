const { DataTypes, Model } = require('sequelize')
const sequelize = require('../config/sequelize')

class Card extends Model {}

Card.init({
  code: { type: DataTypes.STRING },
  dueAt: { type: DataTypes.DATEONLY }
}, {
  sequelize,
  createdAt: true,
  updatedAt: true,
  modelName: 'Card'
})

Card.hasMany(Card, {foreignKey: {name: 'cardId', allowNull: true}})

module.exports = Card