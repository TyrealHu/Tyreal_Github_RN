import * as React from 'react';
import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Welcome from "../pages/welcome/welcome";
import Home from "../pages/home/home";
import Detail from "../pages/detail/detail";

const initNavigator = createStackNavigator({
    Welcome: {
        screen: Welcome,
        navigationOptions: {
            header: null,
        }
    }
})

const mainNavigator = createStackNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            header: null,
        }
    },
    Detail: {
        screen: Detail
    }
})

export default createAppContainer(createSwitchNavigator({
    Init: initNavigator,
    Main: mainNavigator
}, {
    navigationOptions: {
        header: null,
    }
}));
