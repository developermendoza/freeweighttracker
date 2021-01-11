const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();

// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended:false
  })
);

// DB config
const db = require("./config/keys").mongoURI

app.use(bodyParser.json());

// connect to mongodb
mongoose.connect(db, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => console.log("MongoDb succefully connected"))
  .catch(err => console.log(err));

  const port = process.env.PORT || 5000;
  app.listen(port, () => console.log(`Server is up and running on port ${port}`));
