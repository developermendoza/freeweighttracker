const express = require('express');
const router = express.Router();

const validateWeightInput = require("../../validation/weight");

const Weight = require("../../models/Weight");

// @route POST api/weight
// @access private
// router.post("/dashboard", (req, res) => {
  router.post("/add-weight", (req, res) => {

  // form input validation
  const { errors, isValid } = validateWeightInput(req.body)

 // check to see if the inputs are valid
 if(!isValid){
  return res.status(400).json(errors)
}

const newWeight = new Weight({
  user_id: req.body.userId,
  weight: req.body.weight,
  measure_date: req.body.date,
});


newWeight.save().then(data => res.json(data)).catch(err => console.log(err));

});

router.get("/get-weights", (req, res) => {
  Weight.find({user_id: req.query.id},{measure_date:1, weight:1, _id:1}).sort({measure_date: -1}).then((data) => res.json(data)).catch(err => console.log(err))
})

router.delete("/delete-weight", (req, res) => {
  Weight.deleteOne({_id: req.body.id}).
  then( data => res.json(data)).catch(err =>console.log(err))
})


router.delete("/delete-all-weights", (req, res) => {
  Weight.deleteMany({user_id: req.body.id}).
  then( data => res.json(data)).catch(err =>console.log(err)).catch(err =>console.log(err))
});

module.exports = router
