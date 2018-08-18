import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import rootReducer from '../reducers/root-reducer';
// import callAPIMiddleware from './middleware';
import history from './history';


const routingMiddleware = routerMiddleware(history);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line

function configureStore(initialState) {
  createStore(
    rootReducer,
   // initialState,
  //  composeEnhancers(applyMiddleware(thunk, routingMiddleware)),
  );
}

export default configureStore;
