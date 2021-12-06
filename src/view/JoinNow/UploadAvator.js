import React, {Component} from 'react';
import {ActivityIndicator, Image, KeyboardAvoidingView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import {InputTextField} from '../../common/InputTextField';
import PasswordInputText from 'react-native-hide-show-password-input';
import * as ImagePicker from 'react-native-image-crop-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';


export default class UploadAvator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            location: '',
            email: '',
            fname: '',
            lname: '',
            job: '',
            avatar: '',
            docid: '',
            postLink: [],

        };
    }

    saveUser = () => {
        console.log('in Save');

        firestore()
            .collection('users')

            .add({
                fname: this.state.fname,
                lname: this.state.lname,
                location: this.state.location,
                email: this.state.email,
                job: this.state.job,
                avatar: this.state.avatar,

            })
            .then(async (response) => {
                this.setState({docid: response.id});
                await AsyncStorage.setItem('docid', this.state.docid);

                console.log('User added firebase! ');


            });
    };

    getData = async () => {
        try {
            const fname = await AsyncStorage.getItem('firstName');
            const lname = await AsyncStorage.getItem('lastName');
            const job = await AsyncStorage.getItem('job');
            const email = await AsyncStorage.getItem('email');
            const avatar = await AsyncStorage.getItem('avatar');
            const location = await AsyncStorage.getItem('location');

            this.setState({fname: fname});
            this.setState({lname: lname});
            this.setState({job: job});
            this.setState({email: email});
            this.setState({avatar: avatar});
            this.setState({location: location});

        } catch (e) {
            // error reading value
        }
    };

// updateDB=()=>{
//     firestore()
//         .collection('Users')
//         .doc('ABC')
//         .update({
//             age: 31,
//         })
//         .then(() => {
//             console.log('User updated!');
//         });
// }

    componentDidMount() {
        this.getData();
    }


    AddPhoto = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true,
        }).then(image => {
            // console.log(image);
            this.setState({
                imagePath: image.path,
            });

            this.setState({
                imageName: image.modificationDate,
            });

            this.UploadImage();

        });
    };

    UploadImage = async () => {

        this.setState({status: true});

        const fileName = this.state.imageName + '.jpg';

        const reference = storage().ref(`images/${fileName}`);
        await reference.putFile(this.state.imagePath);

        const url = await storage().ref(`images/${fileName}`).getDownloadURL();

        this.setState({avatar: url});

        await AsyncStorage.setItem('avatar', this.state.avatar);

        this.saveUser();

        this.props.navigation.navigate('Navigation');

        console.log(url + '*******');

    };

    Skip = () => {
        this.props.navigation.navigate('Navigation');
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
                {this.state.status ? <ActivityIndicator size="large" color="#00ff00"/> : <></>}


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
        marginBottom: '20%',
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
        backgroundColor: '#efefef',
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
