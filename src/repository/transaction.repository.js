const { Transaction } = require('../model')
const WalletRepository = require('./wallet.repository')

exports.create = async (transaction) => {
  if(!transaction.walletId)
    throw new Error('Wallet is missing!')
  
  const wallet = await WalletRepository.read(transaction.walletId)

  wallet.amount += transaction.value

  await wallet.save()
  await Transaction.create(transaction)

  return transaction
}

exports.read = async (id) => await Transaction.findByPk(id)

exports.listAll = async (walletId) => await Transaction.findAll({where: { walletId }})