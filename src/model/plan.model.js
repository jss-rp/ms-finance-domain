const { DataTypes, Model } = require('sequelize')
const Desire = require('./desire.model')
const sequelize = require('../config/sequelize')

class Plan extends Model {}

Plan.init({
  name: { type: DataTypes.STRING, unique: true },
  dueAt: { type: DataTypes.DATEONLY },
  profit: { type: DataTypes.DOUBLE },
  loss: { type: DataTypes.DOUBLE }
}, {
  sequelize,
  createdAt: true,
  updatedAt: false,
  modelName: 'Plan'
})

Plan.hasMany(Desire, {foreignKey: {name: 'planId', allowNull: false}})

module.exports = Plan