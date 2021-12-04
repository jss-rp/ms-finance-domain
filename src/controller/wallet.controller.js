const { WalletRepository } = require('../repository')

exports.create = async (req, res) => {
  let wallet = await WalletRepository.create(req.body)

  return res.status(201).send(wallet)
}

exports.read = async (req, res) => {
  let wallet = await WalletRepository.read(req.params.id)
  
  return res.status(200).send(wallet)
}

exports.update = async (req, res) => {
  let wallet = await WalletRepository.update(req.body)

  return res.status(200).send(wallet)
}

exports.listAll = async (req, res) => {
  let wallets = await WalletRepository.listAll()

  return res.status(200).send(wallets)
}