const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../../models/User');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');
const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');

router.get('/current', passport.authenticate('jwt', { session: false }), (req, res) => {
  res.json({
    id: req.user.id,
    email: req.user.email
  });
})





router.post('/update', (req, res) => {
  console.log('--------------------------------------------------------new post-------------------------------------------------------------------------------')
  const email = req.body.user.email;



//
  console.log(req.body.ui,'.... thsi si what im stetting it to!!!!')
//  let edit = Object.assign({},req.body.ui)
//  let curVal= req.body.ui[req.body.widget]
//  console.log(req.body.widget,req.body.ui,'before')
//  if(curVal==='on'){
//     edit[req.body.widget]='off'
//  }else{
//     edit[req.body.widget]='on'
//  }
//  console.log('after',edit)
  //User.findOne({ email }).then(user=>{
  User.findOneAndUpdate({ email }, {$set:{'ui':req.body.ui}},{new:true}).then(user=>{
    //console.log(user)
        if (user) {
            const payload = { id: user.id, email: user.email, ui:user.ui };
            console.log('----------------------',user,'-----------this is before sending baclk!!!!')

            jwt.sign(
              payload,
              keys.secretOrKey,
              // Tell the key to expire in one hour
              { expiresIn: 3600 },
              (err, token) => {
                res.json({
                  success: true,
                  token: 'Bearer ' + token
                });
              });
          } else {
            errors.password = 'Incorrect password'
            return res.status(400).json({errors:{email:'there is no one signed in'}});
          }
        })
})






router.post('/register', (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  // Check to make sure nobody has already registered with a duplicate email
  User.findOne({ email: req.body.email })
    .then(user => {
      if (user) {
        errors.email = 'This email address is already taken!';

        // Throw a 400 error if the email address already exists
        return res.status(400).json(errors);
      } else {
        // Otherwise create a new user
        const newUser = new User({
          email: req.body.email,
          password: req.body.password
        })

        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser.save()
              .then(user => res.json(user))
              .catch(err => console.log(err));
          })
        })
      }
    })
});

router.post('/login', (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  User.findOne({ email })
    .then(user => {
      if (!user) {
        errors.email = 'Account not found!';
        return res.status(404).json(errors);
      }

      bcrypt.compare(password, user.password)
        .then(isMatch => {
          if (isMatch) {
            const payload = { id: user.id, email: user.email };

            jwt.sign(
              payload,
              keys.secretOrKey,
              // Tell the key to expire in one hour
              { expiresIn: 3600 },
              (err, token) => {
                res.json({
                  success: true,
                  token: 'Bearer ' + token
                });
              });
          } else {
            errors.password = 'Incorrect password'
            return res.status(400).json(errors);
          }
        })
    })
});

module.exports = router;
