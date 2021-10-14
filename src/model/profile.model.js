const { DataTypes, Model } = require('sequelize')
const Wallet = require('../model/wallet.model')
const sequelize = require('../config/sequelize')

class Profile extends Model {}

Profile.init({
  firstName: { type: DataTypes.STRING },
  lastName: { type: DataTypes.STRING },
  email: { type: DataTypes.STRING }
}, {
  sequelize,
  timestamps: true,
  modelName: 'Profile'
})

module.exports = Profile
