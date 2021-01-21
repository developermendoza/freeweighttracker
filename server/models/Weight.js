const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const WeightSchema = new Schema({
  user_id: {
    type: String,
    required: true
  },
  weight:{
    type: String,
    required: true
  },
  measure_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Weight = mongoose.model("weights", WeightSchema);