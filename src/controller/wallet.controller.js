const Wallet = require('../model/wallet.model')

exports.create = async (req, res) => {
  let wallet = await Wallet.create(req.body)

  return res.status(201).send(wallet)
}

exports.read = async (req, res) => {
  let wallet = await Wallet.read(req.params.id)
  
  return res.status(200).send(wallet)
}