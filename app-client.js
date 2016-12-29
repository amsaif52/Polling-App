import {render} from 'react-dom';
import React from 'react';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';
import APP from './component/APP';
import Board from './component/Board';
import Audience from './component/Audience';
import Speaker from './component/Speaker';
import NotFound from './component/NotFound';


const Routes = () => (
	<Router history={hashHistory}>
			<Route path="/" component={APP}>
				<IndexRoute component={Audience}/>
				<Route path="board" component={Board}/>
				<Route path="speaker" component={Speaker}/>
				<Route path="*" component={NotFound}/>
			</Route>
	</Router>
);

render(	<Routes/>,document.getElementById('container'));