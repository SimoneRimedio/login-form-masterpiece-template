const express = require('express')
const fs = require('fs')
const ejs = require('ejs')
const path = require('path')

let data = require('./data/users.json');

let app = express();

let bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(__dirname + '/public'));
app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "/client/views"))

app.get('/', (req, res) => {
  res.render('login');
});

/*
app.get('/postit', (req, res) => {
  res.render('postit', { data: data })
})

app.get('/json', function(req, res) {
  res.sendFile(__dirname + "/data/notes.json")
})

app.post('/scrivi', function(req, res) {
  let d = new Date();
  let minutes;
  let seconds;

  if(d.getMinutes() < 10) {
    minutes = "0" + d.getMinutes()
  } else {
    minutes = d.getMinutes()
  }

  if(d.getSeconds() < 10) {
    seconds = "0" + d.getSeconds()
  } else {
    seconds = d.getSeconds()
  }

  let date = d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear() + "\t\t" + (d.getHours() + 2) + ":" + minutes + ":" + seconds;

  let notes = {
    "name": "@" + req.body.name,
    "message": req.body.message,
    "date": date
  }

  data.push(notes);
  fs.writeFileSync('./data/notes.json', JSON.stringify(data));
  res.render('postit', { data: data })
});
*/
app.listen(5000);
