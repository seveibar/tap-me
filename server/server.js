var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var server = require("http").createServer(app);
var fs = require('fs');
var validator = require("validator");

var email_file = __dirname + '/subscribers.json';

// Set up middleware for parsing post requests
app.use(bodyParser.urlencoded({ extended: false }));

var clients = {};

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  response.send('Welcome to Tap Me.');
});

app.post('/subscribe', function(req,res){
    var email = validator.toString(req.body.email);
    var ipaddress = req.connection.remoteAddress;
    var date = new Date();
    console.log(email);
    var signup_list = {};

    fs.readFile(email_file,'utf-8', function(err,data){
        if(err){
            console.log('Error: ' + err);
            return;
        }
        signup_list = JSON.parse(data);
        console.log(signup_list);
        signup_list["subscribers"].push({
            email: email,
            ip: ipaddress,
            datetime: date
        });
        console.log(signup_list);
        fs.writeFile("subscribers.json", JSON.stringify(signup_list), "UTF-8");
        res.json({status:"Good"});
    });
});

app.get('/tap/:token', function (req,res) {
    var token = req.param("token");
    clients[token] = 2;
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

    if(clients[token] ==2){
        setTimeout(function(){
            clients[token] = 0;
        }, 1000);
        clients[token] = 1;
    }

});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
