const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const path = require('path');

const users = require("./routes/api/users");
const weights = require("./routes/api/weights");

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

// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

// Routes
app.use("/api/users", users)
app.use("/api/weights", weights)

  const port = process.env.PORT || 5000;
  app.listen(port, () => console.log(`Server is up and running on port ${port}`));

  app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(9000);