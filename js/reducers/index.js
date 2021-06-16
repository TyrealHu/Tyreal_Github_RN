import {combineReducers} from 'redux';
import theme from './theme/index';

const index = combineReducers({
    theme: theme
});

export default index;
