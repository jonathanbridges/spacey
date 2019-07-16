const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI;

const express = require("express");
const app = express();

const bodyParser = require('body-parser');
const passport = require('passport');

const users = require("./routes/api/users");
const spaceLaunchNow = require("./routes/api/space_launch_now")

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

app.get("/", (req, res) => res.send("New Text"));
//app.get("/", (req, res) => res.send('./frontend//index.html'));
app.use(passport.initialize());
require('./config/passport')(passport);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/api/users", users);
app.use("/api/spacelaunchnow", spaceLaunchNow);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));

