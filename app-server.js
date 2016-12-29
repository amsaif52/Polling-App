var express = require('express'),
	socket = require('socket.io'),
	_ = require('underscore');

var app = express();
var port = process.env.PORT || 8080;

app.use(express.static(__dirname+'/public'));
app.use(express.static(__dirname+'/node_modules/bootstrap/dist'));

var server = app.listen(port);
var io = socket.listen(server);
var connections = [];
var audience = [];
var title = "Untitled Presentation";

io.sockets.on('connection',function(socket){

	socket.once('disconnect',function(){
		var member = _.findWhere(audience,{id:this.id});

		if(member){
			audience.splice(audience.indexOf(member),1);
			io.sockets.emit('audience',audience);
			console.log("Left: %s (%s Audience Member)",member.name, audience.length);
		}

		connections.splice(connections.indexOf(socket),1);
		socket.disconnect;
		console.log('You have '+connections.length+' socket remaining');
	});

	socket.on('join',function(fullName){
		var newMember = {
			id: this.id,
			name: fullName.name
		}
		this.emit('joined',newMember);
		audience.push(newMember);
		io.sockets.emit('audience',audience);
		console.log(fullName.name);
	});

	socket.emit('welcome',{
		title: title
	})

	connections.push(socket);
	console.log('You have '+connections.length+' socket conencted');
});

console.log("Listening to port:",port);
