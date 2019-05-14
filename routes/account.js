var express = require('express');
var router = express.Router();

/* GET login page. */
router.get('/login', (req, res, next) => {
  res.render('account/login', { title: 'Login' });
});

router.get('/detail', (req, res, next) => {
  res.render('account/detail', {title: 'Account Details'});
});

router.post('/register', (req, res, next) => {
  console.log('register route hit...');
  console.log(req.body);
  res.redirect('../');
});
module.exports = router;