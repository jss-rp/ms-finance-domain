const Profile = require('../model/profile.model')

exports.create = async (profile) => await Profile.create(profile)

exports.listAll = async () => await Profile.findAll()