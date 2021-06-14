import * as React from 'react';
import { createAppContainer } from "react-navigation";
import { createMaterialTopTabNavigator } from "react-navigation-tabs";
import PopularTab from "../pages/popular/popular-tab";
import {StyleSheet} from 'react-native';

const TAB_NAMES = ['JavaScript', 'TypeScript', 'Python', 'React', 'React Native', 'Vue', 'C++', 'PHP', 'HTML', 'CSS'];

export const getTabs = () => {
    let tabs = {};
    TAB_NAMES.forEach((item, index) => {
        tabs[`PopularTab${index + 1}`] = {
            screen: props => <PopularTab {...props} tabLabel={item} />,
            navigationOptions: {
                title: item,
            }
        }
    })
    return tabs;
};

const styles = StyleSheet.create({
    tabStyle: {
        minWidth: 50
    },
    indicatorStyle: {
        height: 2,
        backgroundColor: 'white',
    },
    labelStyle: {
        fontSize: 13,
        marginTop: 6,
        marginBottom: 6,
    }
})

export default createAppContainer(createMaterialTopTabNavigator(
    getTabs(),
    {
        tabBarOptions: {
            tabStyle: styles.tabStyle,
            upperCaseLabel: false,
            scrollEnabled: true,
            style: {
                backgroundColor: '#a67'
            },
            indicatorStyle: styles.indicatorStyle,
            labelStyle: styles.labelStyle
        }
    }
))

