import React from 'react';
import Display from './parts/Display';
import Join from './parts/Join';

export default class Audience extends React.Component{
	render(){
		var result = this.props.data;
		return(
			<div>
			<Display if={result.member.name}>
				<h1>Welcome {result.member.name}</h1>
				<p>{result.audience.length} audience members connected.</p>
				<p>Questions will appear here.</p>
			</Display>
			<Display if={!result.member.name}>
				<h1>Join the Session</h1>
				<Join emit={this.props.emit}/>
			</Display>
			</div>
		);
	}
}

