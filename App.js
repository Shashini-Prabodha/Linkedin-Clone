import React, {Component} from 'react';

import WelcomePage from './src/view/WelcomePage';
import LoginPage from './src/view/LoginPage';
import Home from './src/view/Home';
import SignIn from './src/view/SignIn';
import AddName from './src/view/JoinNow/AddName';
import AddEmailPw from './src/view/JoinNow/AddEmailPw';


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default class App extends Component {

    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="AddEmailPw" options={{headerShown:false}} component={AddEmailPw}/>
                    <Stack.Screen name="AddName" options={{headerShown:false}} component={AddName}/>
                    {/*<Stack.Screen name="LoginPage" options={{headerShown:false}} component={LoginPage}/>*/}

                    {/*<Stack.Screen name="SignIn" options={{headerShown:false}} component={SignIn}/>*/}

                    {/*/!*<Stack.Screen name="WelcomePage" options={{headerShown:false}} component={WelcomePage}/>*!/*/}
                    {/*<Stack.Screen name="Home" options={{headerShown:false}} component={Home}/>*/}
                </Stack.Navigator>


            </NavigationContainer>

        );
    }
}
