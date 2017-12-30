import React from 'react';
import {render} from 'react-dom';
import {
	BrowserRouter as Router,
	Route	
} from 'react-router-dom';
import 'bootstrap';
import 'font-awesome/scss/font-awesome.scss';
import { HomeContainer } from './components/highOrderComponents/homeContainer.jsx';
import { WorkHours } from './components/subComponents/work-hours.jsx';
import { RequestAppointmentForm } from './components/subComponents/request-appointment-form.jsx';
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
					<div className="row mb-2">				
						<Routes />
						<div className="col-md-4" id ="responsive-reviews-module"></div>
						<WorkHours />
						<RequestAppointmentForm />
						<Footer />
					</div>
				</div>
			</Router>);
	}
}

render(<App/>, document.getElementById('app'));