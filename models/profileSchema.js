const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
    userID: {type: String, require: true, unique: true},
    serverID: {type: String, require: true},
    cookies: {type: Number, default: 1000},
    bank: {type: Number},
    sent: {type: Number},
    received: {type: Number},
    owner: {type: Number, default: 0}, //code: 1
    admin: {type: Number, default: 0}, //code: 1
    nyaw: {type: Number, default: 0}, //code: 2
    donator: {type: Number, default: 0}, //code: 3
    dev: {type: Number, default: 0}, //code: 4
    tester: {type: Number, default: 0}, //code: 4
    oneK: {type: Number, default: 0}, //code: 6
    tenK: {type: Number, default: 0}, //code: 7
    hundK: {type: Number, default: 0}, //code: 8
    oneM: {type: Number, default: 0}, //code: 9
    tenM: {type: Number, default: 0}, //code: 10
    hundM: {type: Number, default: 0}, //code: 11
    dabmeup: {type: Number, default: 0}, //code: 12
    workcase: {type: Number, default: 0} //code 13

})

const model = mongoose.model('profileModels', profileSchema);

module.exports = model;