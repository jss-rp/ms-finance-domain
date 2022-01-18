const { DataTypes, Model } = require('sequelize')
const Transaction = require('./transaction.model')
const sequelize = require('../config/sequelize')

class Tag extends Model {}

Tag.init({
  name: { type: DataTypes.STRING, unique: true },
  description: { type: DataTypes.STRING, unique: true }
}, {
  sequelize,
  createdAt: true,
  updatedAt: false,
  modelName: 'Tag'
})

Tag.hasMany(Transaction, {foreignKey: {name: 'tagId', allowNull: false}})

module.exports = Tag