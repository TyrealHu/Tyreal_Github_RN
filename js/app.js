import * as React from 'react';
import {Provider} from 'react-redux';
import store from './store/index';
import AppNavigator from './navigator/app-navigators';

export default class App extends React.Component {
    render() {
        return <Provider store={store}>
            <AppNavigator />
        </Provider>;
    }
}
