const { TransactionRepository } = require('../repository')

exports.create = async (req, res) => {
  try {
    let transaction = await TransactionRepository.create(req.body)

    return res.status(201).send(transaction)
  } catch(err) {
    console.error(err)
    return res.status(500).send(err)
  }
}

exports.read = async (req, res) => {
  let transaction = await TransactionRepository.read(req.params.id)

  return res.status(200).send(transaction)
}

exports.listAll = async (_, res) => {
  let transactions = await TransactionRepository.listAll()

  return res.status(200).send(transactions)
}