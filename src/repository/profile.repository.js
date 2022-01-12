const { Profile } = require('../model')

exports.create = async (profile) => await Profile.create(profile)

exports.read = async (id) => await Profile.findByPk(id)

exports.listAll = async () => await Profile.findAll()
