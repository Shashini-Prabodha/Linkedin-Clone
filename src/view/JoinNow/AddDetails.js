import React, {Component} from 'react';
import {Image, KeyboardAvoidingView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import {InputTextField} from '../../common/InputTextField';
import PasswordInputText from 'react-native-hide-show-password-input';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {TextInput} from 'react-native-paper';

export default class AddDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            location: '',
            job: '',
            email: '',
            password: '',
        };
    }

    getData = async () => {
        try {
            const email = await AsyncStorage.getItem('email');
            const password = await AsyncStorage.getItem('password');
            if (email !== null) {
                console.log(email + ' # ' + await AsyncStorage.getItem('name'));
            }
        } catch (e) {
            // error reading value
        }
    };

    componentDidMount() {
        this.getData();
    }

    Next = async () => {
        await AsyncStorage.setItem('location', this.state.location);
        await AsyncStorage.setItem('job', this.state.job);

        this.props.navigation.navigate('UploadAvator');
    };

    render() {
        return (
            <KeyboardAvoidingView style={styles.container}>
                <Image
                    source={require('../../assets/logo1.png')}
                    resizeMode="contain"
                    style={styles.logo}>
                </Image>

                <Text style={styles.title}>Confirm your location</Text>
                <Text style={styles.txtP}>See people, jobs, and news in area.</Text>

                <View style={styles.body}>
                    <TextInput


                        placeHolder="Colombo, Western, Sri Lanka" label={'Location*'}
                        value={this.state.location}
                        activeUnderlineColor={'#0984e3'}
                        UnderlineColor={'#cdcdcd'}
                        style={styles.input}

                        onChangeText={text => this.setState(
                            {location: text},
                        )}
                    />
                </View>

                <Text style={styles.title0}>Your profile helps you discover people and opportunities
                </Text>
                {/*<Text style={styles.txtP}>See people, jobs, and news in area.</Text>*/}
                <View style={styles.body}>
                    <TextInput placeHolder="" label={'Job*'}
                               value={this.state.job}
                               activeUnderlineColor={'#0984e3'}
                               UnderlineColor={'#cdcdcd'}
                               style={styles.input}

                               onChangeText={text => this.setState(
                                   {job: text},
                               )}
                    />

                </View>


                <TouchableOpacity style={styles.btnNext} mode="contained" onPress={this.Next}>
                    <Text style={styles.btnNextTxt}>Next</Text>
                </TouchableOpacity>


            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    logo: {
        width: '49%',
        height: '9%',
        marginRight: '68%',
        marginBottom: '5%',
    },
    title: {
        color: '#000000',
        fontSize: 25,
        fontWeight: 'bold',
        marginRight: '33%',
    },
    title0: {
        color: '#000000',
        fontSize: 25,
        fontWeight: 'bold',
        marginRight: '7%',
        marginTop: '10%',

    },
    txtP: {
        color: '#000000',
        fontSize: 15,
        marginRight: '33%',
        marginTop: '3%',
    },
    body: {
        width: '93%',
        height: '22%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnNext: {
        marginTop: '7%',
        marginBottom: '7%',
        width: '90%',
        borderRadius: 25,
        backgroundColor: '#0984e3',
        alignItems: 'center',
        padding: 10,
        borderWidth: 1.5,
        borderColor: '#0984e3',
    },
    btnNextTxt: {
        color: '#ffffff',
        fontSize: 20,
    },
    input: {
        width: 368,
        marginTop: 5,
        backgroundColor: 'white',
        color: 'black',
        margin: 8,
        borderEndColor: 'red',
    },
});
