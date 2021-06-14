import * as React from 'react';
import { createAppContainer } from "react-navigation";
import { BottomTabBar, createBottomTabNavigator } from "react-navigation-tabs";

export default class DynamicTabNavigator extends React.Component {
    constructor(props) {
        super(props);
        this.tabs = props.tabs
        console.disableYellowBox = true; //关闭黄色警告
    }

    _tabNavigator() {
        this.tabs.Popular.navigationOptions.tabBarLabel = '最热1';
        return createAppContainer(createBottomTabNavigator(this.tabs, {
            tabBarComponent: TavBarComponent
        }))
    }

    render() {
        const Tab = this._tabNavigator();
        return <Tab />;
    }
}

class TavBarComponent extends React.Component{
    constructor(props) {
        super(props);
        this.theme = {
            tintColor: props.activeTintColor,
            updateTime: new Date().getTime()
        }
    }

    render() {
        const {routes, index} = this.props.navigation.state;
        if (routes[index].params) {
            const {theme} = routes[index].params;
            if (theme && theme.updateTime > this.theme.updateTime) {
                this.theme = theme;
            }
        }
        return <BottomTabBar {...this.props} activeTintColor={this.theme.tintColor || this.props.activeTintColor}/>;
    }
}
