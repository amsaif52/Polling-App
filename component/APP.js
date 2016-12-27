import React,{Component} from 'react';
import io from 'socket.io-client'

export default class APP extends Component{
	componentWillMount(){
		this.socket = io('http://localhost:8080');
		this.socket.on('connect',this.connect);
	}
	connect(){
		console.log("I am connected to the server");
	}
	render(){
		return (
			<h1>Hello World!</h1>
		)
	}
}