import * as React from 'react';
import { createAppContainer } from "react-navigation";
import { BottomTabBar, createBottomTabNavigator } from "react-navigation-tabs";
import { connect } from 'react-redux';

class DynamicTabNavigator extends React.Component {
    constructor(props) {
        super(props);
        this.tabs = props.tabs
        console.disableYellowBox = true; //关闭黄色警告
    }

    _tabNavigator() {
        if (!this.Tabs) {
            this.tabs.Popular.navigationOptions.tabBarLabel = '最热1';
            this.Tabs = createAppContainer(createBottomTabNavigator(this.tabs, {
                tabBarComponent: (props) => <TavBarComponent theme={this.props.theme} {...props}/>
            }));
        }
        return this.Tabs;
    }

    render() {
        const Tab = this._tabNavigator();
        return <Tab />;
    }
}

class TavBarComponent extends React.Component{
    render() {
        return <BottomTabBar {...this.props} activeTintColor={this.props.theme}/>;
    }
}

const mapStateToProps = state => ({
    theme: state.theme.theme
});

export default connect(mapStateToProps)(DynamicTabNavigator);
