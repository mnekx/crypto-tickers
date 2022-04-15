/* eslint-disable import/prefer-default-export */
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { tickers } from './tickers/reducers';
import { selectedTicker } from './ticker/reducers';

const rootReducer = combineReducers({ tickers, selectedTicker });

export const store = createStore(rootReducer, applyMiddleware(thunk));
