const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3000;

mongoose
  .connect(
    "mongodb+srv://butthusnain478:hlZOgdd6CefRm5oH@database-pro.843v6fl.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err, "Connection to MongoDB failed");
  });

const Schema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    // unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});
const User = mongoose.model("User", Schema);

const user = new User({
  username: "marry",
  email: "marry.dev@yahoo.com",
  password: "marry",
});
user
  .save()
  .then(() => {
    console.log("User created");
  })
  .catch((err) => {
    console.log(err, "User Not Created");
  });

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
