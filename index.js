/**
 * @format
 */

import {AppRegistry} from 'react-native';
import Welcome from "./js/pages/welcome/welcome";
import {name as appName} from './app.json';
import AppNavigator from './js/navigator/app-navigators'

AppRegistry.registerComponent(appName, () => AppNavigator);
