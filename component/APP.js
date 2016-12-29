import React,{Component} from 'react';
import Header from './parts/header';
import io from 'socket.io-client'

export default class APP extends Component{
	constructor(){
		super();
		this.state = {
			status: "disconnected",
			title: "",
			member: {},
			audience : []
		}
		this.emit = this.emit.bind(this);
	}
	componentWillMount(){
		this.socket = io('http://localhost:8080');
		this.socket.on('connect',this.connect.bind(this));
		this.socket.on('disconnect',this.disconnect.bind(this));
		this.socket.on('welcome',this.welcome.bind(this));
		this.socket.on('joined',this.joined.bind(this));
		this.socket.on('audience',this.audience.bind(this));
	}

	audience(member){
		this.setState({audience: member});
	}

	emit(eventName, payload){
		this.socket.emit(eventName, payload);
	}

	joined(newMember){
		sessionStorage.member = JSON.stringify(newMember);
		this.setState({member: newMember});
	}

	connect(){
		var member = sessionStorage.member ? JSON.parse(sessionStorage.member) : null;
		if(member){
			this.emit('join',member);
		}
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
			<div className="row">
				<Header status={this.state.status} title={this.state.title}/>
				{this.props.children && React.cloneElement(this.props.children, {data: this.state, emit: this.emit })}
			</div>
		)
	}
}