import React from "react";
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import Login from "../fratures/loginScreen/Login";
import Home from "../fratures/homeScreen/Home";
import Conversation from "../fratures/conversationSceen/Conversation";
import ContentChat from "../fratures/messageScreen/ContentChat";
import ChangePassword from "../fratures/changePasswordScreen/ChangePassword";
class App extends React.Component {
    Stack = createStackNavigator();
    render() {
        return (
            <NavigationContainer>
                <this.Stack.Navigator headerMode='none' >
                    <this.Stack.Screen name="Login" component={Login} />
                    <this.Stack.Screen name="Home" component={Home} />
                    <this.Stack.Screen name="Conversation" component={Conversation} />
                    <this.Stack.Screen name="ContentChat" component={ContentChat} />
                    <this.Stack.Screen name="ChangePassword" component={ChangePassword} />
                </this.Stack.Navigator>
            </NavigationContainer>
        )
    }
}
export default App;