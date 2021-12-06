import React, {Component} from 'react';
import {
    Alert,
    Image,
    KeyboardAvoidingView,
    LogBox,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import PasswordInputText from 'react-native-hide-show-password-input';
import auth from '@react-native-firebase/auth';
import {Avatar, TextInput} from 'react-native-paper';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
    webClientId: '603255967584-ebf88ki08kjmor74l148p8d1bgapfhmf.apps.googleusercontent.com',
});

export default class PasswordPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: null,
            password: null,
            passwordError: false,
            url: '',
            name: '',
        };
    }

    getData = async () => {

        try {
            const email = await AsyncStorage.getItem('email');
            const name = await AsyncStorage.getItem('name');
            const url = await AsyncStorage.getItem('url');

            this.setState({email: email});
            this.setState({name: name});
            this.setState({url: url});

            console.log('url====================================> ' + email + ' ' + name + ' ' + url);

        } catch (e) {
        }
    };


    passwordValidation = (text) => {
        let pwReg = /^(?=.*[a-zA-Z0-9!@#\$%\^&\*])(?=.{6,})/;
        if (pwReg.test(text) === false) {
            this.setState({password: text});
            this.setState({passwordError: true});

            return false;
        } else {
            this.setState({password: text});
            this.setState({passwordError: false});

        }
    };


    JoinNow = async () => {

        // Get the users ID token
        const {idToken} = await GoogleSignin.signIn();

        // Create a Google credential with the token
        const googleCredential = auth.GoogleAuthProvider.credential(idToken);

        // Sign-in the user with the credential
        const user = auth().signInWithCredential(googleCredential);

        console.log((await user).user.updatePassword(this.state.password));
        this.props.navigation.navigate('AddName');

    };


    componentDidMount() {
        this.getData();
        // LogBox.ignoreLogs(['Animated: `useNativeDriver`']);
    }

    render() {
        return (
            <KeyboardAvoidingView style={styles.container}>
                <Image
                    source={require('../assets/logo1.png')}
                    resizeMode="contain"
                    style={styles.logo}>
                </Image>

                <Text style={styles.title}>Join LinkedIn</Text>

                <View style={styles.body}>
                    <View style={styles.avatarSection}>
                        <Avatar.Image size={50} source={{uri: this.state.url}}
                                      style={styles.avatar}>
                        </Avatar.Image>
                        <Text style={styles.name}>{this.state.name}</Text>
                    </View>
                    <Text style={styles.email}>{this.state.email}</Text>


                    <PasswordInputText
                        style={styles.input}
                        getRef={input => this.input = input}
                        value={this.state.password}
                        onChangeText={text => this.passwordValidation(text)}
                    />
                    {this.state.passwordError ? <Text style={styles.txtP1}>6 or more characters</Text> :
                        <Text style={styles.txtP}>6 or more characters</Text>}


                    <View style={{marginTop:30, marginBottom: 10, marginLeft: -50}}>
                        <Text style={styles.txt2}>By clicking Agree & Join, you agree to the LinkedIn</Text>
                        <Text
                            style={{
                                color: '#0874c7',
                                marginTop: -18,
                                marginLeft: 275,
                                fontSize: 12,
                                fontWeight: 'bold',
                            }}>User</Text>
                        <Text style={{color: '#0874c7', fontWeight: 'bold', fontSize: 12}}>Agreement, Privacy Policy,
                            and Cookie
                            Policy.</Text>
                        <Text style={{marginTop: -16, marginLeft: 250, color: '#313131', fontSize: 12}}> For
                            phone </Text>
                        <Text style={{color: '#313131', fontSize: 12}}>number signups we will sent a verification code
                            via SMS</Text>
                    </View>

                    <TouchableOpacity style={styles.btnAgree} mode="contained" onPress={this.JoinNow}>
                        <Text style={styles.text}>Agree & Join</Text>
                    </TouchableOpacity>

                </View>

            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center',
        backgroundColor: 'white',
    },
    avatarSection: {
        marginTop: '3%',
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: '#c02727',
        flexDirection: 'row',
        marginLeft: '-41%',
    },
    name: {
        fontWeight: '600',
        margin: '2%',
        marginTop: '-3%',
        color: 'black',
        fontSize: 17,
    },
    email: {
        color: 'black',
        marginLeft: '-7%',
        marginTop: '-5%',

    },
    logo: {
        width: '49%',
        height: '9%',
        // marginRight:"48%",
        marginLeft: '-6.5%',

    },
    body: {
        alignItems: 'center',
        justifyContent: 'center',
        margin: 20,

    },
    input: {
        width: 360,
        marginTop: '10%',
        backgroundColor: 'white',
        color: 'black',
        margin: 8,
        borderEndColor: 'red',
    },
    title: {
        color: 'black',
        fontSize: 25,
        marginLeft: 25,
        marginTop: 15,
        fontWeight: 'bold',

    },
    btnAgree: {
        margin: 10,
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
    text: {
        fontSize: 17,
        color: 'white',
        fontWeight: 'bold',
    },
    txtP: {
        fontSize: 12,
        color: '#757575',
        marginLeft: -250,
        marginBottom: 10,
    },
    txtP1: {
        fontSize: 12,
        color: '#ff0000',
        marginLeft: -250,
        marginBottom: 10,
    },
    txt2: {
        fontSize: 12,
        color: '#313131',

    },
    ErrorTxt: {
        fontSize: 12,
        marginLeft: '-64%',
        color: '#ff0000',
    },
});
