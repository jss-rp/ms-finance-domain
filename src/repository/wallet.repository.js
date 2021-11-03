const Wallet = require('../model/wallet.model')

exports.create = async (wallet) => await Wallet.create(wallet)

exports.read = async (id) => await Wallet.findByPk(id)

exports.update = async (wallet) => await Wallet.update(wallet, { where: { id: wallet.id }})

exports.listAll = async () => await Wallet.findAll()
