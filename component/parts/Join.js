import React from 'react';

export default class Join extends React.Component{

	constructor(props){
		super(props);

		this.onJoin = this.onJoin.bind(this);
	}

	onJoin(event){
		var fullName = this.personName.value;
		this.props.emit('join',{name: fullName})
	}

	render(){
		return(
			<form action="javascript:void(0)" onSubmit={this.onJoin}>
				<input 
					placeholder="Enter your full name" 
					className="form-control" 
					ref={(name)=>{this.personName = name;}} 
					required/>
				<input type="submit" value="Submit" className="btn btn-primary"/>
			</form>
		)
	}
}