import React from 'react';
import {render} from 'react-dom';
import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom';
import 'bootstrap';

import { ServiceContainer } from './components/subComponents/servicesContainer.jsx';
import { HomeContainer } from './components/home/homeContainer.jsx';
import Header from './components/header.jsx';
import Footer from './components/footer.jsx';
import style from './styles/main.scss';


class App extends React.Component {
	render () {
		return (
			<Router>
				<div className="container-fluid">
					<Header />
					<div>				
						<Route exact path="/" component={HomeContainer} />
						<Route path="/services" component={ServiceContainer} />
						<div id ="responsive-reviews-module"></div>
						<Footer />
					</div>
				</div>
			</Router>);
	}
}

render(<App/>, document.getElementById('app'));