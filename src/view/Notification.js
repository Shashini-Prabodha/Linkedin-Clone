import React, {Component} from 'react';
import {Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import HeaderSection from '../common/HeaderSection';
import PushNotificationIOS from '@react-native-community/push-notification-ios';
import PushNotification from 'react-native-push-notification';
import Firebase from '@react-native-firebase/app';
import {Avatar} from 'react-native-paper';


class Notification extends Component {

    componentDidMount() {

        Firebase.initializeApp(this);
        PushNotification.configure({
            onRegister: function (token) {
                console.log('TOKEN:', token);
            },
            onNotification: function (notification) {
                console.log('NOTIFICATION:', notification);

                notification.finish(PushNotificationIOS.FetchResult.NoData);
            },
            onAction: function (notification) {
                console.log('ACTION:', notification.action);
                console.log('NOTIFICATION:', notification);
            },
            onRegistrationError: function (err) {
                console.error(err.message, err);
            },

            permissions: {
                alert: true,
                badge: true,
                sound: true,
            },

            popInitialNotification: true,
            requestPermissions: true,
        });
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <View>
                    <HeaderSection></HeaderSection>
                </View>
                <View style={styles.premView}>
                    <View style={styles.leftView}>
                        <Avatar.Image size={40} source={require('../assets/prf2.jpg')} style={styles.comlogo}/>
                    </View>

                    <View style={styles.txtPremView}>
                        <Text style={styles.txtPrem}>
                            Wish Pahan Methsara a happy birthday{'\n'}
                            (Dec 12)
                        </Text>
                        <TouchableOpacity style={styles.btnPremView}>
                            <Text style={styles.txtBtnPrem}>Say happy birthday</Text>
                        </TouchableOpacity>
                    </View>


                    <Image source={require('../assets/menu_vertical_64px.png')} style={styles.dots}/>

                </View>
                <View style={styles.premView}>
                    <View style={styles.leftView}>
                        <Avatar.Image size={40} source={require('../assets/prf2.jpg')} style={styles.comlogo}/>
                    </View>

                    <View style={styles.txtPremView}>
                        <Text style={styles.txtPrem}>
                            Anthony J.C shared a post: “If your actions inspire others to dream more, learn more, do
                            more and become more, you are a leader.” – President John Quincy Adams

                        </Text>
                    </View>


                    <Image source={require('../assets/menu_vertical_64px.png')} style={styles.dots}/>

                </View>
                <View style={styles.premView}>
                    <View style={styles.leftView}>
                        <Avatar.Image size={40} source={require('../assets/prof1.jpg')} style={styles.comlogo}/>
                    </View>

                    <View style={styles.txtPremView}>
                        <Text style={styles.txtPrem}>
                            John G. viewd your profile
                        </Text>
                        <TouchableOpacity style={styles.btnPremView}>
                            <Text style={styles.txtBtnPrem}>See all view</Text>
                        </TouchableOpacity>
                    </View>


                    <Image source={require('../assets/menu_vertical_64px.png')} style={styles.dots}/>

                </View>
                <View style={styles.premView2}>

                        <View style={styles.leftView}>

                            <Avatar.Image size={40} source={require('../assets/epic-lanka-logo.png')}
                                          style={styles.comlogo}/>
                        </View>
                        <View style={styles.txtPremView}>
                            <Text style={styles.txtPrem}>
                                You appeared in 6 searches in this week
                            </Text>
                        </View>

                        <Image source={require('../assets/menu_vertical_64px.png')} style={styles.dots}/>
                    </View>
                <View style={styles.premView2}>

                        <View style={styles.leftView}>

                            <Avatar.Image size={40} source={require('../assets/prf4.jpg')}
                                          style={styles.comlogo}/>
                        </View>
                        <View style={styles.txtPremView}>
                            <Text style={styles.txtPrem}>
                                S.D.Rose commented on Your post: Congratulations 🎉👏
                            </Text>
                        </View>

                        <Image source={require('../assets/menu_vertical_64px.png')} style={styles.dots}/>
                    </View>
                <View style={styles.premView}>
                    <View style={styles.leftView}>
                        <Avatar.Image size={40} source={require('../assets/prf2.jpg')} style={styles.comlogo}/>
                    </View>

                    <View style={styles.txtPremView}>
                        <Text style={styles.txtPrem}>
                            Anthony J.C shared a post: “If your actions inspire others to dream more, learn more, do
                            more and become more, you are a leader.” – President John Quincy Adams

                        </Text>
                    </View>


                    <Image source={require('../assets/menu_vertical_64px.png')} style={styles.dots}/>

                </View>
                <View style={styles.premView}>
                    <View style={styles.leftView}>
                        <Avatar.Image size={40} source={require('../assets/prof1.jpg')} style={styles.comlogo}/>
                    </View>

                    <View style={styles.txtPremView}>
                        <Text style={styles.txtPrem}>
                            John G. viewd your profile
                        </Text>
                        <TouchableOpacity style={styles.btnPremView}>
                            <Text style={styles.txtBtnPrem}>See all view</Text>
                        </TouchableOpacity>
                    </View>


                    <Image source={require('../assets/menu_vertical_64px.png')} style={styles.dots}/>

                </View>

            </ScrollView>
        );
    }
}

export default Notification;


const styles = StyleSheet.create({

    container: {
        flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center',
        backgroundColor: '#ffffff',
    },
    title: {
        padding: '5%',
        backgroundColor: '#ffffff',
        marginBottom: '2%',
        flexDirection: 'row',
    },
    text1: {
        fontSize: 15,
        color: '#0032ff',
        fontWeight: 'bold',
    },
    dots: {
        width: 20,
        height: 20,
        marginTop: '-12%',
        marginLeft: '6%',
    },
    premView: {
        width: '100%',
        height: 100,
        marginTop: '2%',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#ffffff',
        borderWidth: 1,
        borderColor: 'white',
        borderBottomColor: '#b6b6b6',
    },
    premView2: {
        width: '100%',
        height: 90,
        marginTop: '0%',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#ffffff',
        borderWidth: 1,
        borderColor: 'white',
        borderBottomColor: '#b6b6b6',
        paddingTop:'7%'
    },
    leftView: {
        width: '15%',
        height: '100%',
        backgroundColor: '#ffffff',
        marginLeft: '3%',
    },
    txtPremView: {
        width: '70%',
        height: '100%',
        backgroundColor: '#ffffff',
    },
    txtPrem: {
        color: '#666',
        marginTop: '2%',
        marginLeft: '0%',
    },
    rightView: {

        height: '200%',
        marginTop: '-12%',
        // marginLeft: '80%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnPremView: {
        width: '60%',
        marginTop: '2%',
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: '3%',
        height: '35%',
        borderColor: '#0032ff',
        borderWidth: 1.5,
    },
    txtBtnPrem: {
        color: '#0032ff',
        fontSize: 16,
        fontWeight: '400',
    },

});

