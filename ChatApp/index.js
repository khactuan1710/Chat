/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './src/navigation/App';
import Login from './src/fratures/loginScreen/Login';
import Home from './src/fratures/homeScreen/Home';
import Conversation from './src/fratures/conversationSceen/Conversation';
import ContentChat from './src/fratures/messageScreen/ContentChat';
import ChangePassword from './src/fratures/changePasswordScreen/ChangePassword';
import Test from './Test'
import { name as appName } from './app.json';



AppRegistry.registerComponent(appName, () => App);
