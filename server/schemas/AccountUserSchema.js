const mongoose = require('mongoose');

var AccountUserSchema = new mongoose.Schema({
    FirstName: String,
    LastName: String,
    UserName: String, 
    Eamil: String,
    PhoneNumber: String,
    Address: String,
    AptSuite: String,
    City: String,
    State: String,
    Zip: String,
    Password: String,
});

// AccountUserSchema.statics.GetAllUsers = function() {
//     return this.find({}, function(err, users) {
//         if(err) {
//             console.log(`an error occured while querying account users: ${err}`);
//         } else {
//             console.log(`retrieved users - count: ${users.length} first user name: ${users[0].FirstName}`);
//             return users;
//         }
//     });
// }

module.exports = AccountUserSchema;