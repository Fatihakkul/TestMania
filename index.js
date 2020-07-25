/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import {QuestionItem} from './src/components'
import Router from './src/Router'
AppRegistry.registerComponent(appName, () => QuestionItem);
