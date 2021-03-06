import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import appInit from './initial';

const rootReducer = combineReducers({
  // ...your other reducers here
  // you have to pass formReducer under 'form' key,
  // for custom keys look up the docs for 'getFormState'
  form: formReducer,
  initial: appInit,
});

export default rootReducer;
