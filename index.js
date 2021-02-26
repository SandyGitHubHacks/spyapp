/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import task from './src/task';

AppRegistry.registerHeadlessTask('task', () =>
  task
);
AppRegistry.registerComponent(appName, () => App);
