const Wallet = require('../repository/wallet.repository')

exports.create = async (req, res) => {
  let wallet = await Wallet.create(req.body)

  return res.status(201).send(wallet)
}

exports.read = async (req, res) => {
  let wallet = await Wallet.read(req.params.id)
  
  return res.status(200).send(wallet)
}

exports.listAll = async (req, res) => {
  let wallets = await Wallet.listAll()

  return res.status(200).send(wallets)
}