/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import {Login} from './src/pages'
import Router from './src/Router'
AppRegistry.registerComponent(appName, () => Router);
