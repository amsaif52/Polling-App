import React from 'react';

export default class Speaker extends React.Component{
	render(){
		return(
			<h1>Speaker:{this.state.title}</h1>
		)
	}
}