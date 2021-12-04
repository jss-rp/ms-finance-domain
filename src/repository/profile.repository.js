const { Profile } = require('../model')

exports.create = async (profile) => await Profile.create(profile)

exports.listAll = async () => await Profile.findAll()