import React from 'react';
import { render } from 'react-dom';
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import 'bootstrap';
import 'font-awesome/scss/font-awesome.scss';
import { HomeContainer } from './components/highOrderComponents/homeContainer';
import { ReviewsContainer } from './components/highOrderComponents/reviewsContainer';
import { WorkHours } from './components/subComponents/work-hours';
import { RequestAppointmentForm } from './components/subComponents/request-appointment-form';
import Routes from './routes';
import Header from './components/header';
import Footer from './components/footer';
import style from './styles/main.scss';


const App = () => (
  <Router>
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route exact path="/" component={HomeContainer} />
        <div className="mb-2">
          <Routes />
          <div className="col-md-4" id="responsive-reviews-module" />
          <ReviewsContainer />

          <WorkHours />
          <RequestAppointmentForm />
          <Footer />
        </div>
        <Redirect from="*" to="/" />
      </Switch>
    </div>
  </Router>);

render(<App />, document.getElementById('app'));
