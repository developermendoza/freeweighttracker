const express = require('express');
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");

// load input validation
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");

// load the User model
const User = require("../../models/User");


// @route POST api/users/register
// @desc Register user
// @access public
router.post("/register", (req,res) => {

  // form input validation
  const { errors, isValid } = validateRegisterInput(req.body);
  
  // check to see if the inputs are valid
  if(!isValid){
    return res.status(400).json(errors)
  }

  User.findOne({ email: req.body.email }).then(user => {
    if(user){
      return res.status(400).json({email: "Email already exists"})
    } else {
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      });
      // Hash password before saving it in the db
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if(err) throw err;
          newUser.password = hash
          newUser.save().then(user => res.json(user)).catch(err => console.log(err))
        })
      })
    }
  })
});


// @route POST api/users/login
// @desc Login user and return JWT token
// @access Public
router.post("/login", (req, res) => {

  // input validation
  const { errors, isValid } = validateLoginInput(req.body);

  // checks for invalid inputs
  if(!isValid){
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  // finds user my email
  User.findOne({ email }).then( user => {
    // checks to see if the users email exists
    if(!user){
      return res.status(404).json({ emailnotfound: "Email not found" });
    }
    bcrypt.compare(password, user.password).then( isMatch => {
      if(isMatch){
        // if it is a match then create the JWT payload object
        const payload = {
          id: user.id,
          name: user.name
        }
  
        // sign token
        jwt.sign( payload, keys.secretOrKey, {
          expiresIn: 31556926
        }, (err, token) => {
          res.json({
            success: true,
            token: "Bearer " + token
          })
        })
      } else {
        return res.status(400).json({ passwordincorrect: "Password incorrect"})
      }
    })
  });


});

module.exports = router;