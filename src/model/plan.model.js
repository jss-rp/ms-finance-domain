const { DataTypes, Model } = require('sequelize')
const sequelize = require('../config/sequelize')

class Plan extends Model {}

Plan.init({
  name: { type: DataTypes.STRING, unique: true },
  dueAt: { type: DataTypes.DATEONLY },
  profit: { type: DataTypes.DOUBLE },
  loss: { type: DataTypes.DOUBLE }
}, {
  sequelize,
  modelName: 'Plan'
})

module.exports = Plan