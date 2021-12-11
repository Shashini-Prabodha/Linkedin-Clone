import React, {Component} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import HeaderSection from '../common/HeaderSection';
import PushNotificationIOS from '@react-native-community/push-notification-ios';
import PushNotification from 'react-native-push-notification';
import Firebase from '@react-native-firebase/app';


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
                    <View >
                        <HeaderSection></HeaderSection>
                    </View>
                    <View style={styles.title}>

                        <Text style={styles.text1}>Manage my network</Text>

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
        // backgroundColor: 'white',
    },

})

