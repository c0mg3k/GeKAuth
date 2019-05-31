const mongoose = require(`mongoose`);
const AccountUserSchema = require(`../schemas/AccountUserSchema`);

var AccountUser = mongoose.model(`AccountUser`, AccountUserSchema);

AccountUser.prototype.getUsers = function() {
    return AccountUser.find({});
}

module.exports = AccountUser;