import React, {Component} from 'react';
import {Image, StyleSheet, KeyboardAvoidingView, View, Text, TouchableOpacity, Alert} from 'react-native';
import {TextInput, Checkbox} from 'react-native-paper';

import PasswordInputText from 'react-native-hide-show-password-input';
import {InputTextField} from '../common/InputTextField';
import {FloatingLabelInput} from 'react-native-floating-label-input/index';
import CheckBox from 'react-native-check-box';
import {GoogleSignin,} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

GoogleSignin.configure({
    webClientId: '603255967584-ebf88ki08kjmor74l148p8d1bgapfhmf.apps.googleusercontent.com',
});

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            isChecked: true,
        };
        console.disableYellowBox = true;
    }

    JoinNow = () => {
        this.props.navigation.navigate('');
    };

    Continue = () => {
        auth()
            .signInWithEmailAndPassword(this.state.email, this.state.password)
            .then(async () => {
                console.log('User Loged in!');

                await AsyncStorage.setItem('email', this.state.email);
                await AsyncStorage.setItem('password', this.state.password);

                this.props.navigation.navigate('Navigation');

            })
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                    console.log('That email address is already in use!');
                    Alert.alert('That email address is already in use!');

                }

                if (error.code === 'auth/invalid-email') {
                    console.log('That email address is invalid!');
                    Alert.alert('That email address is invalid!');

                }
                if (error.code === 'auth/wrong-password') {
                    console.log('That password is invalid!');
                    Alert.alert('That password is invalid!');

                }
                if (error.code === 'auth/user-not-found') {
                    console.log('User not found ! Please check your email!');
                    Alert.alert('User not found ! Please check your email!');

                }

                console.error(error);
            });
    };

    onGoogleButtonPress = async () => {
        // Get the users ID token
        const idToken = await GoogleSignin.signIn();

        console.log(idToken+' idToken');

        // Create a Google credential with the token
        const googleCredential = auth.GoogleAuthProvider.credential(idToken);

        console.log('googleCredential'+googleCredential);
        this.props.navigation.navigate('Navigation');

        // Sign-in the user with the credential
        // const user = auth().signInWithCredential(googleCredential);
        // console.log((await user).user);


    };



    render() {
        return (
            <KeyboardAvoidingView style={styles.container}>

                <Image
                    source={require('../assets/logo1.png')}
                    resizeMode="contain"
                    style={styles.logo}>
                </Image>
                <Text style={styles.joinN} onPress={this.JoinNow}>
                    Join now </Text>
                <Text style={styles.title}>Sign in</Text>
                <View style={styles.body}>
                    <TextInput
                        style={styles.input}
                        label="Email"
                        value={this.state.email}
                        activeUnderlineColor={'#0984e3'}
                        UnderlineColor={'#cdcdcd'}
                        onChangeText={text => this.setState(
                            {email: text},
                        )}

                    />

                    <PasswordInputText
                        style={styles.input}
                        getRef={input => this.input = input}
                        value={this.state.password}
                        onChangeText={text => this.setState({password: text})}
                    />


                </View>


                <CheckBox
                    style={styles.checkBox}
                    onClick={() => {
                        this.setState({
                            isChecked: !this.state.isChecked,
                        });
                    }}
                    isChecked={this.state.isChecked}
                    rightText={'Remember me.'}
                    checkBoxColor={'#009640'}
                />


                <Text style={styles.lmore}>
                    Learn More
                </Text>

                <Text style={styles.fpw}>
                    Forgot password?
                </Text>
                <View style={styles.body}>

                    <TouchableOpacity style={styles.btnCont} mode="contained" onPress={this.Continue}>
                        <Text style={styles.text}>Continue</Text>
                    </TouchableOpacity>

                    <View style={styles.line}></View>

                    <Text style={styles.txtOr}>Or</Text>

                    <TouchableOpacity style={styles.gsignbtn} mode="contained" onPress={this.onGoogleButtonPress}>
                        <Image
                            source={require('../assets/google_96px.png')}
                            resizeMode="contain"
                            style={styles.google}>
                        </Image>
                        <Text style={styles.textG}> Sign in with Google</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.gsignbtn} mode="contained" onPress={() => {}}>
                        <Image
                            source={require('../assets/apple.png')}
                            resizeMode="contain"
                            style={styles.google}>
                        </Image>
                        <Text style={styles.textG}> Sign in with Apple</Text>
                    </TouchableOpacity>
                </View>


            </KeyboardAvoidingView>
        );
    }
}

export default SignIn;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },

    logo: {
        width: 90,
        height: 65,
        marginLeft: 25,

    },
    title: {
        color: 'black',
        fontSize: 25,
        marginLeft: 25,
        marginTop: 15,
        fontWeight: 'bold',

    },
    input: {
        width: 360,
        marginTop: 5,
        backgroundColor: 'white',
        color: 'black',
        margin: 8,
    },
    body: {
        alignItems: 'center',
        justifyContent: 'center',
        margin: 20,

    },
    checkBox: {
        marginLeft: 20,
    },
    lmore: {
        color: '#0984e3',
        fontWeight: 'bold',
        marginTop: -22,
        marginLeft: 158,
    },
    joinN: {
        color: '#0984e3',
        fontWeight: 'bold',
        marginTop: -41,
        fontSize: 17,
        marginLeft: 310,
    },
    fpw: {
        color: '#0984e3',
        fontWeight: 'bold',
        marginTop: 22,
        marginLeft: 23,

    },
    btnCont: {
        margin: 5,
        color: 'white',
        width: 370,
        borderRadius: 20,
        backgroundColor: '#0984e3',
        alignItems: 'center',
        padding: 10,
        // marginTop: 30,
        borderWidth: 1.5,
        borderColor: '#0984e3',


    },
    gsignbtn: {
        margin: 5,
        flexDirection: 'row',
        borderColor: '#888888',
        borderRadius: 20,
        borderWidth: 1.5,
        padding: 10,
        width: 370,
        alignItems: 'center',
        justifyContent: 'center',

    },
    text: {
        fontSize: 16,
        color: 'white',
        fontWeight: 'bold',
    },
    line: {
        width: 370,
        borderColor: '#d6d6d6',
        margin: 10,
        borderTopWidth: 1,
    },
    txtOr: {
        marginTop: -22,
        color: '#c3c3c3',
        backgroundColor: 'white',
        paddingLeft: 20,
        paddingRight: 20,
    },
    google: {
        width: 22,
        height: 22,
    },
    textG: {
        fontSize: 16,
        color: '#6d6d6d',
        fontWeight: 'bold',

    },
});
