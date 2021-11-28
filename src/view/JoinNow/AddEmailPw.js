import React, {Component} from 'react';
import {Image, KeyboardAvoidingView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import {InputTextField} from '../../common/InputTextField';
import PasswordInputText from 'react-native-hide-show-password-input';

export default class AddEmailPw extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        };
    }

    JoinNow = () => {
        this.props.navigation.navigate('AddDetails');
    };
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
                    <InputTextField placeHolder="" label={'Email*'}
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
                    <Text style={styles.txtP}>6 or more characters</Text>


                    <View style={{marginTop:10,marginBottom:10}}>
                        <Text style={styles.txt2}>By clicking Agree & Join, you agree to the LinkedIn</Text>
                        <Text style={{color:"#0874c7", marginTop:-18, marginLeft:275, fontWeight:'bold'}}>User</Text>
                        <Text style={{color:"#0874c7", fontWeight:'bold'}}>Agreement, Privacy Policy, and Cookie Policy.</Text>
                        <Text  style={{marginTop:-19, marginLeft:290,}}> For phone </Text>
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
        width: "49%",
        height:"9%",
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
marginLeft:-250,
        marginBottom:10
    },
    txt2: {
        fontSize: 12,

    },
});
