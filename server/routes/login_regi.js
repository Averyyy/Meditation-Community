const express = require('express');
const passport = require('passport');
const mongoose = require('mongoose');
const User = mongoose.model('User');

const router = express.Router();

router.post('/login', (req, res, next) => {
    passport.authenticate('local', (err, user) => {
        if(user) {
          req.logIn(user, (err) => {
            console.log('logged in');
            res.send({token: true, username: user.username});
          });
        } else {
          res.send({token: false, message: 'Invalid username or password'});
          console.log(req.user);
        }
      })(req, res, next);
});

router.post('/register', (req, res) => {
    const {username, password} = req.body;
    User.register(new User({username}), password, (err, user) => {
      if (err) {
        res.send({token: false, message: err.message})
      } else {
        passport.authenticate('local')(req, res, function() {
          console.log('created')
          res.send({token: true, username: user.username});
        });
      }
    });   
});

router.post('/logout', (req, res) => {
    console.log('logged out');
    req.logout();
    res.send({token: false});
}
);

module.exports = router;