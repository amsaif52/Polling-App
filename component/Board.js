import React from 'react';

export default class Board extends React.Component{
	render(){
		return(
			<h1>Board: {this.state.data.status}</h1>
		)
	}
}