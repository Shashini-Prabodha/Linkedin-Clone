import React, {Component, useEffect, useState} from 'react';
import WelcomePage from './src/view/WelcomePage';
import LoginPage from './src/view/LoginPage';
import SignIn from './src/view/SignIn';
import AddName from './src/view/JoinNow/AddName';
import AddEmailPw from './src/view/JoinNow/AddEmailPw';
import AddDetails from './src/view/JoinNow/AddDetails';
import UploadAvator from './src/view/JoinNow/UploadAvator';
import Navigation from './src/view/Navigation';
import PasswordPage from './src/view/PasswordPage';
import Home from './src/view/Home';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createStackNavigator();


export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            timePassed: false,
            email: 'empty',
        };

    }

    getData = async () => {
        try {
            const email = await AsyncStorage.getItem('email');
            if(email!=null){
            this.setState({email: email});}
            else{

            }
        } catch (e) {
        }
    };

    componentDidMount() {
        this.getData();
    }

    render() {
        setTimeout(
            function () {
                this.setState({timePassed: true});
            }
                .bind(this),
            2000,
        );

        if (!this.state.timePassed) {
            return <WelcomePage/>;
        } else {
            if (this.state.email != 'empty') {
                console.log("this.state.email "+this.state.email)
                return <PasswordPage/>;

            } else {
                // console.log("this.state.email2 "+this.state.email)

                return (
                    <NavigationContainer independent={true}>
                        <Stack.Navigator>
                            {/*<Stack.Screen options={{headerShown: false}} name="PostPage" component={PostPage}/>*/}

                            <Stack.Screen name="LoginPage" options={{headerShown: false}} component={LoginPage}/>
                            <Stack.Screen name="UploadAvator" options={{headerShown: false}} component={UploadAvator}/>
                            <Stack.Screen name="AddDetails" options={{headerShown: false}} component={AddDetails}/>
                            <Stack.Screen name="AddEmailPw" options={{headerShown: false}} component={AddEmailPw}/>
                            <Stack.Screen name="AddName" options={{headerShown: false}} component={AddName}/>
                            <Stack.Screen name="PasswordPage" options={{headerShown: false}} component={PasswordPage}/>
                            <Stack.Screen name="SignIn" options={{headerShown: false}} component={SignIn}/>
                            <Stack.Screen name="Home" options={{headerShown: false}} component={Home}/>
                            <Stack.Screen options={{headerShown: false}} name="Navigation" component={Navigation}/>
                        </Stack.Navigator>
                    </NavigationContainer>
                );
            }
        }
    }
}
