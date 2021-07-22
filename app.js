const http = require('http');
const express = require('express');
const app = express();
const subdomain = require('express-subdomain')
var router = express.Router();
//api specific routes

// example.com
app.get('/', function(req, res) {
  res.sendFile(__dirname + "/views/tabela.html");
});

router.get('/teste', function (req, res) {
  res.send("Teste")
});



app.use(subdomain('api', router));

app.listen(8080)