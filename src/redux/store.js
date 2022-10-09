import {
  legacy_createStore as legacyCreateStore,
  combineReducers,
  applyMiddleware,
} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import Greetings from './action-creators';
import reducer from './reducer';

const allReducers = combineReducers({
  Greeting: reducer,
});
const store = legacyCreateStore(allReducers, applyMiddleware(logger, thunk));
store.dispatch(Greetings());

export default store;
