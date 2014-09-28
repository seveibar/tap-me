var express = require('express');
var app = express();
var server = require("http").createServer(app);

var clients = {};

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  response.send('Welcome to Tap Me.')
});

app.get('/tap/:token', function (req,res) {
    var token = req.param("token");
    clients[token] = true;
    res.json({
        message: "Set to True"
    });
});

app.get('/poll/:token', function (req,res) {
    var token = req.param("token");
    if(clients[token]){
        res.json({
            message: "Notify!"
        });
    }
    else{
        res.json({
            message: "Wait"
        });
    }
    clients[token] = false;
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
