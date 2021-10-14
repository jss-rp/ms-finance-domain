const Wallet = require('../model/wallet.model')

exports.create = async (wallet) => await Wallet.create(wallet)

exports.read = async (id) => await Wallet.findByPk(id)

exports.listAll = async () => await Wallet.findAll()