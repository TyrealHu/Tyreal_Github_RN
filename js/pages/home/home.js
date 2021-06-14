import * as React from 'react';
import {homeTabs} from '../../navigator/home-navigators'
import DynamicTabNavigator from "../../navigator/dynamic-tab-navigator";

export default class Home extends React.Component{
    render() {
        return <DynamicTabNavigator tabs={homeTabs} />;
    }
}
