import React, {Component} from 'react';

import WelcomePage from './src/view/WelcomePage';
import LoginPage from './src/view/LoginPage';
import Home from './src/view/Home';
import SignIn from './src/view/SignIn';


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default class App extends Component {

    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="SignIn" options={{headerShown:false}} component={SignIn}/>

                    {/*<Stack.Screen name="WelcomePage" options={{headerShown:false}} component={WelcomePage}/>*/}
                    <Stack.Screen name="LoginPage" options={{headerShown:false}} component={LoginPage}/>
                    <Stack.Screen name="Home" options={{headerShown:false}} component={Home}/>
                </Stack.Navigator>


            </NavigationContainer>

        );
    }
}
