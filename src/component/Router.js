import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import App from '../App';
import Recipes from './Recipes';

const Router = () => (
		<BrowserRouter>
			<Switch>
			<Route path="/" component={App} exact/>
			<Route path="/recipe/:id" component={Recipes}/>
			</Switch>
		</BrowserRouter>
	);

export default Router;