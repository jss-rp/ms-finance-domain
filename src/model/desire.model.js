const { DataTypes, Model } = require('sequelize')
const sequelize = require('../config/sequelize')

class Desire extends Model {}

Desire.init({
  name: { type: DataTypes.STRING },
  incoming: { type: DataTypes.BOOLEAN },
  value: { type: DataTypes.DOUBLE }
}, {
  sequelize,
  timestamps: false,
  modelName: 'Desire'
})

module.exports = Desire
