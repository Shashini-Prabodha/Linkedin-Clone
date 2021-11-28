import React, {Component} from 'react';

import WelcomePage from './src/view/WelcomePage';
import LoginPage from './src/view/LoginPage';
import Home from './src/view/Home';
import SignIn from './src/view/SignIn';
import Notification from './src/view/Notification';
import JobsPage from './src/view/JobsPage';
import AddName from './src/view/JoinNow/AddName';
import AddEmailPw from './src/view/JoinNow/AddEmailPw';
import AddDetails from './src/view/JoinNow/AddDetails';
import UploadAvator from './src/view/JoinNow/UploadAvator';
// import Navigation from './src/view/Navigation';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MyNetwork from './src/view/MyNetowork';

const Stack = createStackNavigator();

export default class App extends Component {

    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator>


                    <Stack.Screen name="LoginPage" options={{headerShown:false}} component={LoginPage}/>

                    <Stack.Screen name="UploadAvator" options={{headerShown:false}} component={UploadAvator}/>
                    <Stack.Screen name="AddDetails" options={{headerShown:false}} component={AddDetails}/>
                    <Stack.Screen name="AddEmailPw" options={{headerShown:false}} component={AddEmailPw}/>
                    <Stack.Screen name="AddName" options={{headerShown:false}} component={AddName}/>

                    <Stack.Screen name="SignIn" options={{headerShown:false}} component={SignIn}/>

                    <Stack.Screen name="WelcomePage" options={{headerShown:false}} component={WelcomePage}/>
                    <Stack.Screen name="Home" options={{headerShown:false}} component={Home}/>

                    <Stack.Screen name="JobsPage" component={JobsPage} />
                    <Stack.Screen name="Notification" component={Notification} />
                    <Stack.Screen name="MyNetwork" component={MyNetwork} />


                    {/*<Stack.Screen options={{ headerShown: false }} name="Navigation" component={Navigation} />*/}



                </Stack.Navigator>


            </NavigationContainer>

        );
    }
}
