const { DataTypes, Model } = require('sequelize');
const Profile = require('../model/profile.model')
const sequelize = require('../config/sequelize')

class Wallet extends Model {}

Wallet.init({
  amount: {
    type: DataTypes.DOUBLE,
    allowNull: false
  }
}, {
  sequelize,
  timestamps: true,
  modelName: 'Wallet'
})

Wallet.Profile = Wallet.hasOne(Profile, { foreignKey: 'walletId' })

module.exports = Wallet