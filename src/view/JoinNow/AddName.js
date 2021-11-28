import React, {Component} from 'react';
import {Image, KeyboardAvoidingView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import {InputTextField} from '../../common/InputTextField';

export default class AddName extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fname: '',
            lname: '',
        };
    }

    render() {
        return (
            <KeyboardAvoidingView style={styles.container}>
                <Image
                    source={require('../../assets/logo1.png')}
                    resizeMode="contain"
                    style={styles.logo}>
                </Image>

                <Text style={styles.title}>Add your name</Text>

                <View style={styles.body}>
                    <InputTextField placeHolder="" label={'First Name*'}
                                    value={this.state.fname}
                                    activeUnderlineColor={'#0984e3'}
                                    UnderlineColor={'#cdcdcd'}
                                    onChangeText={text => this.setState(
                                        {fname: text},
                                    )}
                    />
                    <InputTextField placeHolder="" label={'Last Name*'}
                                    value={this.state.lname}
                                    activeUnderlineColor={'#0984e3'}
                                    UnderlineColor={'#cdcdcd'}
                                    onChangeText={text => this.setState(
                                        {lname: text},
                                    )}
                    />



                    <TouchableOpacity style={styles.btnCont} mode="contained" onPress={this.JoinNow}>
                        <Text style={styles.text}>Continue</Text>
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
    logo: {
        width: 90,
        height: 65,
        marginLeft: 25,

    },
    body: {
        alignItems: 'center',
        justifyContent: 'center',
        margin: 20,

    },
    title: {
        color: 'black',
        fontSize: 25,
        marginLeft: 25,
        marginTop: 15,
        fontWeight: 'bold',

    },
    btnCont: {
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
});
