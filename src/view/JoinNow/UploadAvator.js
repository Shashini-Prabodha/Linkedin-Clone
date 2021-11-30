import React, {Component} from 'react';
import {Image, KeyboardAvoidingView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import {InputTextField} from '../../common/InputTextField';
import PasswordInputText from 'react-native-hide-show-password-input';
import * as ImagePicker from 'react-native-image-crop-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class UploadAvator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            location: '',
            password: '',
            fname: 'kamla',
            lname: '',
            job: '',
        };
    }

    getData = async () => {
        try {
            const fname = await AsyncStorage.getItem('firstName');
            const lname = await AsyncStorage.getItem('lastName');
            const job = await AsyncStorage.getItem('job');

            this.setState({fname: fname});
            this.setState({lname: lname});
            this.setState({job: job});

        } catch (e) {
            // error reading value
        }
    };

    componentDidMount() {
        this.getData();
    }

    //
    // Next = async () => {
    //     await AsyncStorage.setItem('email', this.state.email);
    //     await AsyncStorage.setItem('password', this.state.password);
    //
    //     this.props.navigation.navigate('UploadAvator');
    // };

    AddPhoto = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true,
        }).then(image => {
            console.log(image);
        });
    };

    Skip = () => {
        this.props.navigation.navigate('Home');
    };

    updateText = () => {
        this.setState({fname: 'My Changed Text'});
    };

    render() {
        return (
            <KeyboardAvoidingView style={styles.container}>
                <Image
                    source={require('../../assets/logo1.png')}
                    resizeMode="contain"
                    style={styles.logo}>
                </Image>

                <Text style={styles.title}>Adding a photo helps people recognize you</Text>

                <View style={styles.card}>
                    <View style={styles.circle}>
                        <Image
                            source={require('../../assets/camera_200px.png')}
                            resizeMode="contain"
                            style={styles.camera}>
                        </Image>
                    </View>
                    <Text style={styles.txtName} onPress={this.updateText}>{this.state.fname} {this.state.lname}</Text>
                    <Text style={styles.txtJob}>{this.state.job}</Text>

                </View>


                <TouchableOpacity style={styles.btnAdd} mode="contained" onPress={this.AddPhoto}>
                    <Text style={styles.btnAddTxt}>Add a photo </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnSkip} mode="contained" onPress={this.Skip}>
                    <Text style={styles.btnSkipTxt}>Skip Now </Text>
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
        width: '50%',
        height: '9%',
        marginRight: '67%',
        marginBottom: '5%',
    },
    title: {
        color: '#000000',
        width: '90%',
        fontSize: 25,
        fontWeight: 'bold',
        marginRight: '0%',
        marginBottom: '4%',
    },
    card: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
        width: '90%',
        height: '35%',
        marginBottom: '30%',
        borderRadius: 5,
        shadowColor: '#505050',
        shadowOpacity: 1,
        shadowRadius: 2,
        elevation: 5,
    },
    circle: {
        width: 100,
        height: 100,
        borderRadius: 100,
        backgroundColor: '#e7e7e7',
    },
    camera: {
        width: '60%',
        marginTop: '-50%',
        marginLeft: '21%',
    },

    body: {
        width: '93%',
        height: '22%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnAdd: {
        marginTop: '5%',
        width: '90%',
        borderRadius: 25,
        backgroundColor: '#0984e3',
        alignItems: 'center',
        padding: 10,
        borderWidth: 1.5,
        borderColor: '#0984e3',
    },
    btnAddTxt: {
        color: '#ffffff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    txtName: {
        fontSize: 28,
        marginTop: '10%',
        color: '#000000',

    },
    txtJob: {
        fontSize: 13,
        color: '#000000',

    },
    btnSkip: {
        marginTop: '5%',
        width: '90%',
        borderRadius: 25,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        padding: 10,
    },
    btnSkipTxt: {
        color: '#4d4d4d',
        fontSize: 18,
        fontWeight: 'bold',

    },
});
