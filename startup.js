const fs = require('fs')
//msg
console.log('startup is running...');
//read file, pars data
let configData = fs.readFileSync('config.json');
let configuration = JSON.parse(configData);
//msg
console.log('configuration generated...');
console.log('generating connection string...');

var connectionstring = configuration.db_connectionstring.replace('<dbuser>:<dbpassword>', configuration.db_username + ':' + configuration.db_password);

console.log(`connection string generated: ${connectionstring}`);

module.exports = {
    connectonstring: connectionstring
}

