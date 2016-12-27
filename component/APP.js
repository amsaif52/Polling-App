import React,{Component} from 'react';
import Header from './parts/header';
import io from 'socket.io-client'

export default class APP extends Component{
	constructor(){
		super();
		this.state = {
			status: "disconnected",
			title: ""
		}
	}
	componentWillMount(){
		this.socket = io('http://localhost:8080');
		this.socket.on('connect',this.connect.bind(this));
		this.socket.on('disconnect',this.disconnect.bind(this));
		this.socket.on('welcome',this.welcome.bind(this));
	}
	connect(){
		this.setState({status: "connected"});
	}
	disconnect(){
		this.setState({status: "disconnected"});
	}
	welcome(welcomeObject){
		this.setState({title: welcomeObject.title});
	}
	render(){
		return (
			<div>
				<Header status={this.state.status} title={this.state.title}/>
			</div>
		)
	}
}