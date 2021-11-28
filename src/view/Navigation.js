// import React from 'react';
// import {StyleSheet, Image, Text} from 'react-native';
// import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
// import {createStackNavigator} from '@react-navigation/stack';
// import AsyncStorage from '@react-native-async-storage/async-storage';
//
// // import LottieView from 'lottie-react-native';
//
// import Icon from 'react-native-vector-icons/Ion icons';
// import Ionicons from 'react-native-vector-icons/Ionicons';
//
// import HomeScreen from './Home';
// import MyNetoworkScreen from './MyNetowork';
// import PostPageScreen from './PostPage';
// import NotificationScreen from './Notification';
// import JobsPageScreen from './JobsPage';
//
//
// const HomeStack = createStackNavigator();
// const MyNetoworkStack = createStackNavigator();
// const PostPageStack = createStackNavigator();
// const NotificationStack = createStackNavigator();
// const JobsPageStack = createStackNavigator();
//
//
// const Tab = createMaterialBottomTabNavigator();
//
// const MainTabScreen = () => (
//
//     <Tab.Navigator
//         initialRouteName="Home"
//         activeColor="#fff"
//     >
//         <Tab.Screen
//             name="Home"
//             component={HomeStackScreen}
//             options={{
//                 tabBarLabel: 'Home',
//                 tabBarColor: '#AA2EE6',
//                 tabBarIcon: ({color}) => (
//                     <Image
//                         source={require('../assets/google_96px.png')}
//                         resizeMode="contain"
//                         style={styles.icon}></Image>
//
//                 ),
//             }}
//         />
//         <Tab.Screen
//             name="MyNetowork"
//             component={MyNetoworkStackScreen}
//             options={{
//                 tabBarLabel: 'MyNetowork',
//                 tabBarColor: '#d02860',
//                 tabBarIcon: ({color}) => (
//                     <Image
//                         source={require('../assets/google_96px.png')}
//
//                         resizeMode="contain"
//                         style={styles.icon}></Image>
//                 ),
//             }}
//         />
//         {/*<Tab.Screen*/}
//         {/*    name="PostPage"*/}
//         {/*    component={PostPageStackScreen}*/}
//         {/*    options={{*/}
//         {/*        tabBarLabel: 'Post',*/}
//         {/*        tabBarColor: '#1f65ff',*/}
//         {/*        tabBarIcon: ({color}) => (*/}
//         {/*            <Image*/}
//         {/*                source={require('../assets/google_96px.png')}*/}
//
//         {/*                resizeMode="contain"*/}
//         {/*                style={styles.icon}></Image>*/}
//         {/*        ),*/}
//         {/*    }}*/}
//         {/*/>*/}
//         <Tab.Screen
//             name="Notification"
//             component={NotificationStackScreen}
//             options={{
//                 tabBarLabel: 'Notification',
//                 tabBarColor: '#0fb9b1',
//                 tabBarIcon: ({color}) => (
//                     <Image
//                         source={require('../assets/google_96px.png')}
//
//                         resizeMode="contain"
//                         style={styles.icon}></Image>
//                 ),
//             }}
//         />
//         <Tab.Screen
//             name="Jobs"
//             component={JobsPageStackScreen}
//             options={{
//                 tabBarLabel: 'Jobs',
//                 tabBarColor: '#0fb9b1',
//                 tabBarIcon: ({color}) => (
//                     <Image
//                         source={require('../assets/google_96px.png')}
//
//                         resizeMode="contain"
//                         style={styles.icon}></Image>
//                 ),
//             }}
//         />
//     </Tab.Navigator>
// );
//
// export default MainTabScreen;
//
// const HomeStackScreen = ({navigation}) => (
//     <HomeStack.Navigator screenOptions={{
//         headerStyle: {
//             backgroundColor: '#a55eea',
//         },
//         headerTintColor: '#fff',
//         headerTitleStyle: {
//             fontWeight: 'bold',
//         },
//     }}>
//         <HomeStack.Screen name="My Wallet" component={HomeScreen} options={{
//             title: 'Home',
//             headerLeft: () => (
//                 <LottieView style={styles.icon1}
//                             source={require('../assets/newwallet.json')}
//                             colorFilters={[{
//                                 keypath: 'button',
//                                 color: '#F00000',
//                             }, {
//                                 keypath: 'Sending Loader',
//                                 color: '#F00000',
//                             }]}
//                             autoPlay
//                             loop
//                 />
//
//             ),
//         }}/>
//     </HomeStack.Navigator>
// );
//
// const MyNetoworkStackScreen = ({navigation}) => (
//     <MyNetoworkStack.Navigator screenOptions={{
//         headerStyle: {
//             backgroundColor: '#d02860',
//         },
//         headerTintColor: '#fff',
//         headerTitleStyle: {
//             fontWeight: 'bold',
//         },
//     }}>
//         <MyNetoworkStack.Screen name="MyNetowork" component={MyNetoworkScreen} options={{
//             headerLeft: () => (
// //<Icon.Button name="ios-menu" size={25} backgroundColor="#1f65ff" onPress={() => navigation.openDrawer()}></Icon.Button>
//                 <Icon></Icon>
//             ),
//         }}/>
//     </MyNetoworkStack.Navigator>
// );
// //
// // const PostPageStackScreen = ({navigation}) => (
// //     <PostPageStack.Navigator screenOptions={{
// //         headerStyle: {
// //             backgroundColor: '#1f65ff',
// //         },
// //         headerTintColor: '#fff',
// //         headerTitleStyle: {
// //             fontWeight: 'bold',
// //         },
// //     }}>
// //         <PostPageStack.Screen name="PostPage" component={PostPageScreen} options={{
// //             headerLeft: () => (
// // //<Icon.Button name="ios-menu" size={25} backgroundColor="#1f65ff" onPress={() => navigation.openDrawer()}></Icon.Button>
// //                 <Icon></Icon>
// //             ),
// //         }}/>
// //     </PostPageStack.Navigator>
// // );
//
// const NotificationStackScreen = ({navigation}) => (
//     <NotificationStack.Navigator screenOptions={{
//         headerStyle: {
//             backgroundColor: '#0fb9b1',
//         },
//         headerTintColor: '#fff',
//         headerTitleStyle: {
//             fontWeight: 'bold',
//         },
//     }}>
//         <NotificationStack.Screen name="Notification" component={NotificationScreen} options={{
//
//             headerLeft: () => (
// //<Icon.Button name="ios-menu" size={25} backgroundColor="#1f65ff" onPress={() => navigation.openDrawer()}></Icon.Button>
//                 <Icon></Icon>
//
//
//             ),
//         }}/>
//     </NotificationStack.Navigator>
// );
//
// const JobsPageStackScreen = ({navigation}) => (
//     <JobsPageStack.Navigator screenOptions={{
//         headerStyle: {
//             backgroundColor: '#0fb9b1',
//         },
//         headerTintColor: '#fff',
//         headerTitleStyle: {
//             fontWeight: 'bold',
//         },
//     }}>
//         <JobsPageStack.Screen name="Jobs" component={JobsPageScreen} options={{
//
//             headerLeft: () => (
// //<Icon.Button name="ios-menu" size={25} backgroundColor="#1f65ff" onPress={() => navigation.openDrawer()}></Icon.Button>
//                 <Icon></Icon>
//
//
//             ),
//         }}/>
//     </JobsPageStack.Navigator>
// );
//
// const styles = StyleSheet.create({
//     icon: {
//         width: 26,
//         height: 30,
//
//     },
//     icon1: {
//         width: 50,
//         height: 35,
//         left: 8,
//     },
//
// });
//
// //
// // import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// // import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// //
// // const Tab = createBottomTabNavigator();
// //
// // function MyTabs() {
// //     return (
// //         <Tab.Navigator
// //             initialRouteName="Home"
// //             screenOptions={{
// //                 tabBarActiveTintColor: '#e91e63',
// //             }}
// //         >
// //             <Tab.Screen
// //                 name="Feed"
// //                 component={Feed}
// //                 options={{
// //                     tabBarLabel: 'Home',
// //                     tabBarIcon: ({color, size}) => (
// //                         <MaterialCommunityIcons name="home" color={color} size={size}/>
// //                     ),
// //                 }}
// //             />
// //             <Tab.Screen
// //                 name="Notifications"
// //                 component={Notifications}
// //                 options={{
// //                     tabBarLabel: 'Updates',
// //                     tabBarIcon: ({color, size}) => (
// //                         <MaterialCommunityIcons name="bell" color={color} size={size}/>
// //                     ),
// //                     tabBarBadge: 3,
// //                 }}
// //             />
// //             <Tab.Screen
// //                 name="Profile"
// //                 component={Profile}
// //                 options={{
// //                     tabBarLabel: 'Profile',
// //                     tabBarIcon: ({color, size}) => (
// //                         <MaterialCommunityIcons name="account" color={color} size={size}/>
// //                     ),
// //                 }}
// //             />
// //         </Tab.Navigator>
// //     );
// // }
