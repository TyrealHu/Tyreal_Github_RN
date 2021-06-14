import * as React from "react";
import Popular from "../pages/popular/popular";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Trending from "../pages/trending/trending";
import Ionicons from "react-native-vector-icons/Ionicons";
import Favorite from "../pages/favorite/favorite";
import My from "../pages/my/my";
import Entypo from "react-native-vector-icons/Entypo";

export const homeTabs = {
    Popular: {
        screen: Popular,
        navigationOptions: {
            tabBarLabel: '最热',
            tabBarIcon: ({tintColor, focused}) => (
                <MaterialIcons name={'whatshot'} size={26} style={{color: tintColor}}/>
            )
        }
    },
    Trending: {
        screen: Trending,
        navigationOptions: {
            tabBarLabel: '趋势',
            tabBarIcon: ({tintColor, focused}) => (
                <Ionicons name={'md-trending-up'} size={26} style={{color: tintColor}}/>
            )
        }
    },
    Favorite: {
        screen: Favorite,
        navigationOptions: {
            tabBarLabel: '收藏',
            tabBarIcon: ({tintColor, focused}) => (
                <MaterialIcons name={'favorite'} size={26} style={{color: tintColor}}/>
            )
        }
    },
    My: {
        screen: My,
        navigationOptions: {
            tabBarLabel: '我的',
            tabBarIcon: ({tintColor, focused}) => (
                <Entypo name={'user'} size={26} style={{color: tintColor}}/>
            )
        }
    }
};
