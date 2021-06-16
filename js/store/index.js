import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers/index';

/**
 * 自定义中间件
 * @param store redux的store
 * @returns {function(*): function(*=): *}
 */
const logger = store => next => action => {
    if (typeof action === 'function') {
        console.log('dispatching a function');
    } else {
        console.log('dispatching', action);
    }
    const result = next(action);
    console.log('nextState', store.getState());
    return result;
}

const middlewares = [
    logger,
    thunk
];

export default createStore(reducers, applyMiddleware(...middlewares));
