import * as React from 'react';
import {homeTabs} from '../../navigator/home-navigators'
import DynamicTabNavigator from "../../navigator/dynamic-tab-navigator";
import NavigationUtil from "../../navigator/navigation-util";

export default class Home extends React.Component{
    render() {
        NavigationUtil.navigation = this.props.navigation;
        return <DynamicTabNavigator tabs={homeTabs} />;
    }
}
