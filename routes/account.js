var express = require('express');
var router = express.Router();
var accountuser = require('../server/models/AccountUser');
//Routes
//GET login page
router.get('/login', (req, res, next) => {
  res.render('account/login/login', { title: 'Login' });
});
//GET detail page
router.get('/detail', (req, res, next) => {
  res.render('account/detail/detail', {title: 'Account Details'});
});
//GET users page
router.get(`/users`, (req, res, next) => {
  var users = accountuser.find({}, (err, users)=>{
    if(err) {
      console.log(`there was an error loading users from the db: ${err}`);
    } else {
      res.render(`account/users/users`, { 
        title: `Users`, 
        users: users
      });
    }
  });
});
//Data Endpoints
//POST registration data
router.post('/register', (req, res, next) => {
  console.log('register route hit...');
  accountuser.create({
    FirstName: req.body.firstname,
    LastName: req.body.lastname,
    UserName: req.body.username, 
    Eamil: req.body.email,
    PhoneNumber: req.body.phonenumber,
    Address: req.body.address,
    AptSuite: req.body.aptsuite,
    City: req.body.city,
    State: req.body.state,
    Zip: req.body.zip,
    Password: req.body.password,
  }, (err, data)=> {
  if(err) {
      console.log(`an error occured adding the user to the collection: ${err}`);
  } else {
      console.log(`the user was successfully added to the collection: ${data}`);
  }
});
  console.log(req.body);
  res.redirect('../index');
});
module.exports = router;