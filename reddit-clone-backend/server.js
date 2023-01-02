const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.get("/home", (req, res) => {
  res.json({
    "body": "test"
  });
});

app.listen(3000, () => console.log("server is up."));

