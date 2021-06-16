import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers/index';

const middlewares = [
    thunk
];

export default createStore(reducers, applyMiddleware(...middlewares));
