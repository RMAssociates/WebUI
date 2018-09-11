import React from 'react';
import { bindActionCreators } from 'redux';
import { Provider, connect } from 'react-redux';
import { render } from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import 'bootstrap';
import 'font-awesome/scss/font-awesome.scss';
import { HomeContainer } from './components/highOrderComponents/homeContainer';
// import { ReviewsContainer } from './components/highOrderComponents/reviewsContainer';
import Routes from './routes';
import Header from './components/header';
import Footer from './components/footer';
import style from './styles/main.scss';
import configureStore from './redux/store/configureStore';

const store = configureStore();
// console.log(store.getState());
// store.subscribe(() => console.log('store', store.getState()));

// TO DO
// https://github.com/reacttraining/react-router/tree/master/packages/react-router-redux
// const ConnectedRoot = connect(
//   state => ({
//     state: state.reducer,
//   }),
//   null,
// )(HomeContainer);

const App = () => (
  <Router>
    <div className="container">
      <Header />
      <Switch>
        <Route exact path="/" component={HomeContainer} />
        <div className="mb-2">
          <Routes />
          <div className="col-md-4" id="responsive-reviews-module" />
          {/* <ReviewsContainer /> */}
        </div>
        <Redirect from="*" to="/" />
      </Switch>
      <Footer />
    </div>
  </Router>);
const AppRedux = () => (
  <Provider store={store}>
    <App />
  </Provider>
);
render(<AppRedux />, document.getElementById('app'));
