import React, {Component} from 'react';
import {View, Text, StyleSheet, KeyboardAvoidingView, Image, TouchableOpacity} from 'react-native';
import {Button} from 'react-native-paper';
import {InputTextField} from '../common/InputTextField';

import auth from '@react-native-firebase/auth';
import {
    GoogleSignin,
    GoogleSigninButton,

} from '@react-native-google-signin/google-signin';

// Common ---------------------------------------------------------------------------------

GoogleSignin.configure({
    webClientId: '603255967584-ebf88ki08kjmor74l148p8d1bgapfhmf.apps.googleusercontent.com',
});

export default class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        };
    }

    JoinNow = () => {
        // auth()
        // .signInWithEmailAndPassword(this.state.email, this.state.password)
        // .then(() => {
        //     console.log('User Loged in!');
        //     // createUser.user.updateProfile({
        //     //     displayName: this.state.username
        //     // })
        // })
        // .catch(error => {
        //     if (error.code === 'auth/email-already-in-use') {
        //         console.log('That email address is already in use!');
        //     }

        //     if (error.code === 'auth/invalid-email') {
        //         console.log('That email address is invalid!');
        //     }

        //     console.error(error);
        // });
    };

    SignIn = () => {
    };
    onGoogleButtonPress = async () => {
        // Get the users ID token
        const {idToken} = await GoogleSignin.signIn();

        // Create a Google credential with the token
        const googleCredential = auth.GoogleAuthProvider.credential(idToken);

        // Sign-in the user with the credential
        const user = auth().signInWithCredential(googleCredential);
        console.log((await user).user);
    };

    render() {
        return (
            <KeyboardAvoidingView style={styles.container}>
                <Image
                    source={require('../assets/logo1.png')}
                    resizeMode="contain"
                    style={styles.logo}>
                </Image>
                <View style={styles.body}>
                    <Image
                        source={require('../assets/LinkedIn_Prospecting.jpg')}
                        resizeMode="contain"
                        style={styles.pic}>
                    </Image>
                    {/*<View style={{flexDirection: 'row', alignItems: 'flex-start'}}>*/}

                    {/*    <Text style={{fontSize: 20, lineHeight: 30, fontFamily: 'Poppins'}}>Connect to Opportunity </Text>*/}

                    {/*    <Text style={{fontSize: 10, lineHeight: 18}}>TM</Text>*/}

                    {/*</View>*/}
                    <Text style={styles.title}>Find and land your next job</Text>

                    <View style={{flexDirection: 'row', alignItems: 'flex-start'}}>
                        <Image
                            source={require('../assets/full.png')}
                            resizeMode="contain"
                            style={styles.circle}>
                        </Image>
                        <Image
                            source={require('../assets/mid.png')}
                            resizeMode="contain"
                            style={styles.circle}>
                        </Image>
                        <Image
                            source={require('../assets/mid.png')}
                            resizeMode="contain"
                            style={styles.circle}>
                        </Image>

                    </View>

                    <TouchableOpacity style={styles.btnJoin} mode="contained" onPress={this.JoinNow}>
                        <Text style={styles.text}>Join Now</Text>
                    </TouchableOpacity>


                    <TouchableOpacity style={styles.gsignbtn} mode="contained" onPress={this.onGoogleButtonPress}>
                        <Image
                            source={require('../assets/google_96px.png')}
                            resizeMode="contain"
                            style={styles.google}>
                        </Image>
                        <Text style={styles.textG}> Join with Google</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btnSignin} mode="contained" onPress={this.SignIn}>
                        <Text style={styles.text3}>Sign in</Text>
                    </TouchableOpacity>

                    {/*<GoogleSigninButton*/}
                    {/*    style={styles.gsignbtn}*/}
                    {/*    size={GoogleSigninButton.Size.Wide}*/}
                    {/*    color={GoogleSigninButton.Color.Dark}*/}
                    {/*    onPress={this.onGoogleButtonPress}*/}

                    {/*/>*/}

                    {/*<Button style={styles.btnJoin} mode="contained" onPress={this.JoinNow}>*/}
                    {/*    Join*/}
                    {/*</Button>*/}
                    {/*<View>*/}

                    {/*    <InputTextField placeHolder='User Name'/>*/}
                    {/*</View>*/}
                </View>
            </KeyboardAvoidingView>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    body: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: 90,
        height: 65,
        marginLeft: 25,

    },
    title: {
        marginBottom: 30,
        fontSize: 16,
    },
    pic: {
        width: 600,
        height: 300,
        marginBottom: 15,
    },
    circle: {
        width: 12,
        height: 12,
        margin: 2,
    },
    btnJoin: {
        margin: 10,
        color: 'white',
        width: 350,
        borderRadius: 20,
        backgroundColor: '#0f61c4',
        alignItems: 'center',
        padding: 10,
        marginTop: 30,
        borderWidth: 1.5,
        borderColor: '#0f61c4',


    },
    gsignbtn: {
        margin: 10,
        flexDirection: 'row',
        borderColor: '#888888',
        borderRadius: 20,
        borderWidth: 1.5,
        padding: 10,
        width: 350,
        alignItems: 'center',
        justifyContent: 'center',

    },
    text: {
        fontSize: 16,
        color: 'white',
    },
    textG: {
        fontSize: 16,
        color: '#6d6d6d',
    },
    text3: {
        fontSize: 16,
        color: '#0f61c4',
    },
    google: {
        width: 21,
        height: 21,
    },
    btnSignin: {
        margin: 10,


    },
});
