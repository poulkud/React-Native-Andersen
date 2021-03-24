import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import {newsReducer} from './reducers/news';

const rootReducer = combineReducers({
  news: newsReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk));
