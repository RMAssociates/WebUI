import React from 'react';
import { bindActionCreators } from 'redux';
import { Provider, connect } from 'react-redux';
import { render } from 'react-dom';
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import 'bootstrap';
import 'font-awesome/scss/font-awesome.scss';
import { GoogleReCaptchaProvider, GoogleReCaptcha } from 'react-google-recaptcha-v3';
// import '@fortawesome/fontawesome-free';
import { HomeContainer } from './components/highOrderComponents/homeContainer';
// import { ReviewsContainer } from './components/highOrderComponents/reviewsContainer';
import Routes from './routes';
import Header from './components/header';
import Footer from './components/footer';
import ScrollToTop from './components/utilities/scrollOnNavigate';
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
  <GoogleReCaptchaProvider
    reCaptchaKey="6Lcsf9UUAAAAAAPHCXm-MS9zMtEqGD5N9U-x6zlO"
  >
    <Router>
      <ScrollToTop>
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
      </ScrollToTop>
    </Router>
    <GoogleReCaptcha onVerify={token => console.log(token)} />
  </GoogleReCaptchaProvider>);
const AppRedux = () => (
  <Provider store={store}>
    <App />
  </Provider>
);
render(<AppRedux />, document.getElementById('app'));
