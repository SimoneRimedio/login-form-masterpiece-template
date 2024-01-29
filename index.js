const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const port = 5000;
const app = express();
const auth = require("./server/middlewares/auth");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + "/public"));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/client/views"));

app.get("/", (req, res) => {
  res.render("login");
});

// Handle login post request
app.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const auth_response = auth(username, password);

  if (auth_response.success) {
    // If login is successful, redirect to App_GrantedUser page
    res.render("App_GrantedUser", {
      username,
      additionalInfo: auth_response.additionalInfo,
    });
  } else {
    // If login fails, redirect to notPermission page
    res.sendFile(__dirname + "/client/views/notPermission.htm");
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
