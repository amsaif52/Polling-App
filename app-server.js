var express = require('express'),
	socket = require('socket.io');

var app = express();
var port = process.env.PORT || 8080;

app.use(express.static(__dirname+'/public'));
app.use(express.static(__dirname+'/node_modules/bootstrap/dist'));

var server = app.listen(port);
var io = socket.listen(server);
var connections = [];
var title = "Untitled Presentation";

io.sockets.on('connection',function(socket){

	socket.once('disconnect',function(){
		connections.splice(connections.indexOf(socket),1);
		socket.disconnect;
		console.log('You have '+connections.length+' socket remaining');
	});

	socket.emit('welcome',{
		title: title
	})

	connections.push(socket);
	console.log('You have '+connections.length+' socket conencted');
});

console.log("Listening to port:",port);
