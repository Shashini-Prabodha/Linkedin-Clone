
import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

//View Screens ---------------------------------------------------------------------------------------------------------
import Home from './Home';
import MyNetwork from './MyNetowork';
import Post from './PostPage';
import Notification from './Notification';
import Job from './JobsPage';
import {LogBox} from 'react-native';

//Tab Navigator --------------------------------------------------------------------------------------------------------
const Tab = createMaterialBottomTabNavigator();

export default class Navigation extends Component {

    constructor() {
        super();
        console.disableYellowBox = true;
    }

    componentDidMount() {
        LogBox.ignoreLogs(['Animated: `useNativeDriver`']);
    }

    render() {
        return (
            <NavigationContainer
                independent={true}
            >

                {/*Tab Screens --------------------------------------------------------------------------------------*/}
                <Tab.Navigator
                    initialRouteName="home"
                    activeColor="#2f3640"
                    inactiveColor="#596275"
                    barStyle={[{backgroundColor: '#f5f6fa'}]}
                    shifting="true"
                    screenOptions={({route, navigation}) => ({
                        headerShown: false,
                        gestureEnabled: true,
                        cardOverlayEnabled: true,
                        gestureDirection: 'horizontal',
                    })}
                >
                    {/*Home Screen Section --------------------------------------------------------------------------*/}
                    <Tab.Screen
                        options={{
                            tabBarLabel: 'Home',
                            tabBarIcon: ({color}) => (
                                <Icon name="home" color={color} size={25}/>
                            ),
                        }}
                        name="Home"
                        component={Home}
                    />

                    {/*My Network Screen Section --------------------------------------------------------------------*/}
                    <Tab.Screen
                        options={{
                            tabBarLabel: 'My Network',
                            tabBarIcon: ({color}) => (
                                <MaterialIcons name="group" color={color} size={25}/>
                            ),
                        }}
                        name="My Network"
                        component={MyNetwork}
                    />

                    {/*Post Screen Section --------------------------------------------------------------------------*/}
                    <Tab.Screen
                        options={{
                            tabBarLabel: 'Post',
                            tabBarIcon: ({color}) => (
                                <Icon name="plus-square" color={color} size={25}/>
                            ),
                        }}
                        name="Post"
                        component={Post}
                    />

                    {/*Notification Screen Section ------------------------------------------------------------------*/}
                    <Tab.Screen
                        options={{
                            tabBarLabel: 'Notificaion',
                            tabBarIcon: ({color}) => (
                                <Ionicons name="ios-notifications" color={color} size={25}/>
                            ),
                        }}
                        name="Notificaion"
                        component={Notification}
                    />

                    {/*Job Screen Section ---------------------------------------------------------------------------*/}
                    <Tab.Screen
                        options={{
                            tabBarLabel: 'Job',
                            tabBarIcon: ({color}) => (
                                <MaterialIcons name="business-center" color={color} size={25}/>
                            ),
                        }}
                        name="Job"
                        component={Job}
                    />

                </Tab.Navigator>
            </NavigationContainer>
        );
    }

}
