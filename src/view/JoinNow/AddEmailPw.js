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

import {InputTextField} from '../../common/InputTextField';
import PasswordInputText from 'react-native-hide-show-password-input';
import auth from '@react-native-firebase/auth';
import {TextInput} from 'react-native-paper';


export default class AddEmailPw extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: null,
            password: null,
            emailError: false,
            passwordError: false,
        };
    }

    firstNameValidation = (text) => {
        let userNameRegex = /^[a-zA-Z ]{2,40}$/;
        if (userNameRegex.test(text) === false) {
            this.setState({firstName: text});
            return false;
        } else {
            this.setState({firstName: text});
        }
    };

    lastNameValidation = (text) => {
        let userNameRegex = /^[a-zA-Z ]{2,40}$/;
        if (userNameRegex.test(text) === false) {
            this.setState({lastName: text});
            return false;
        } else {
            this.setState({lastName: text});
        }
    };

    emailValidation = (text) => {
        let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        if (emailRegex.test(text) === false) {
            this.setState({email: text});
            this.setState({emailError: true});
            console.log("1")

            return false;
        } else {
            this.setState({email: text});
            this.setState({emailError: false});
            console.log("2")

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


    JoinNow = () => {
        console.log(this.state.email + ' - ' + this.state.password);
        // if (this.state.email == null | this.state.password == null | this.state.email == '' |this.state.password == null |) {
console.log(this.state.emailError +"  "+ this.state.passwordError);
        console.log("1  => "+true && false);

        // if((this.state.emailError && this.state.passwordError)) {
            auth()

                .createUserWithEmailAndPassword(this.state.email, this.state.password)
                .then(async () => {
                    console.log('User Loged in!');
                    // createUser.user.updateProfile({
                    //     displayName: this.state.username
                    // })
                    await AsyncStorage.setItem('email', this.state.email);
                    await AsyncStorage.setItem('password', this.state.password);

                    this.props.navigation.navigate('AddName');

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

                    console.error(error);
                });
        // }else{
        //     Alert.alert('Email or Password can\'t be empty')
        //
        // }
    };


    componentDidMount() {
        LogBox.ignoreLogs(['Animated: `useNativeDriver`']);
    }

    render() {
        return (
            <KeyboardAvoidingView style={styles.container}>
                <Image
                    source={require('../../assets/logo1.png')}
                    resizeMode="contain"
                    style={styles.logo}>
                </Image>

                <Text style={styles.title}>Set your email & password</Text>

                <View style={styles.body}>
                    {/*<InputTextField placeHolder="" label={'Email*'}*/}
                    {/*                value={this.state.email}*/}
                    {/*                activeUnderlineColor={'#0984e3'}*/}
                    {/*                UnderlineColor={'#cdcdcd'}*/}
                    {/*                onChangeText={text => this.setState(*/}
                    {/*                    {email: text},*/}
                    {/*                )}*/}

                    {/*/>*/}
                    <TextInput
                        placeHolder=""
                        label={'Email*'}
                        style={styles.input}
                        value={this.state.email}
                        activeUnderlineColor={'#0984e3'}
                        UnderlineColor={'#cdcdcd'}
                        onChangeText={text =>
                            // {email: text},
                            this.emailValidation(text)
                        }

                    />
                    {this.state.emailError ? <Text style={styles.ErrorTxt}> Invalid Email Address </Text> : <></>}

                    <PasswordInputText
                        style={styles.input}
                        getRef={input => this.input = input}
                        value={this.state.password}
                        onChangeText={text => this.passwordValidation(text)}
                    />
                    {this.state.passwordError ? <Text style={styles.txtP1}>6 or more characters</Text> :
                        <Text style={styles.txtP}>6 or more characters</Text>}


                    <View style={{marginTop: 10, marginBottom: 10}}>
                        <Text style={styles.txt2}>By clicking Agree & Join, you agree to the LinkedIn</Text>
                        <Text
                            style={{color: '#0874c7', marginTop: -18, marginLeft: 275, fontWeight: 'bold'}}>User</Text>
                        <Text style={{color: '#0874c7', fontWeight: 'bold'}}>Agreement, Privacy Policy, and Cookie
                            Policy.</Text>
                        <Text style={{marginTop: -19, marginLeft: 290}}> For phone </Text>
                        <Text>number signups we will sent a verification code via SMS</Text>
                    </View>

                    <TouchableOpacity style={styles.btnAgree} mode="contained" onPress={this.JoinNow}>
                        <Text style={styles.text}>Agree & Join</Text>
                    </TouchableOpacity>

                </View>

            </KeyboardAvoidingView>
        )
            ;
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center',
        backgroundColor: 'white',
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
        marginTop: 5,
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

    },
    ErrorTxt: {
        fontSize: 12,
        marginLeft: '-64%',
        color: '#ff0000',
    },
});
