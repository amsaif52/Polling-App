var express = require('express'),
	socket = require('socket.io');

var app = express();
var port = process.env.PORT || 8080;

app.use(express.static(__dirname+'/public'));
app.use(express.static(__dirname+'/node_modules/bootstrap/dist'));

var server = app.listen(port);
var io = socket.listen(server);

io.on('connection',function(socket){
	console.log('Connected to socket: ',socket.id);
});

console.log("Listening to port:",port);
