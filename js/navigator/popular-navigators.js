import { createAppContainer } from "react-navigation";
import { createMaterialTopTabNavigator } from "react-navigation-tabs";
import PopularTab from "../pages/popular/popular-tab";

export default createAppContainer(createMaterialTopTabNavigator({
    PopularTab1: {
        screen: PopularTab,
        navigationOptions: {
            title: 'tab1'
        }
    },
    PopularTab2: {
        screen: PopularTab,
        navigationOptions: {
            title: 'tab2'
        }
    }
}))
