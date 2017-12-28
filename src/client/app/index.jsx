import React from 'react';
import {render} from 'react-dom';
import {
	BrowserRouter as Router,
	Route	
} from 'react-router-dom';
import 'bootstrap';
import { HomeContainer } from './components/highOrderComponents/homeContainer.jsx';
import { Routes } from './routes.jsx';
import Header from './components/header.jsx';
import Footer from './components/footer.jsx';
import style from './styles/main.scss';


class App extends React.Component {
	render () {
		return (
			<Router>
				<div className="container-fluid">
					<Header />
					<Route exact path="/" component={HomeContainer} />
					<div>				
						<Routes />
						<div className="col-md-4" id ="responsive-reviews-module"></div>
						
						<div className="col-lg-8">hhhhhh</div>
						<Footer />
					</div>
				</div>
			</Router>);
	}
}

render(<App/>, document.getElementById('app'));