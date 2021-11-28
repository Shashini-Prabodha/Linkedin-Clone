import React, {Component} from 'react';
import {Image, KeyboardAvoidingView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import {InputTextField} from '../../common/InputTextField';
import PasswordInputText from 'react-native-hide-show-password-input';

export default class AddDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            location: '',
            password: '',
        };
    }

    Next = () => {
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
                    <InputTextField


                        placeHolder="Colombo, Western, Sri Lanka" label={'Location*'}
                                    value={this.state.location}
                                    activeUnderlineColor={'#0984e3'}
                                    UnderlineColor={'#cdcdcd'}
                                    onChangeText={text => this.setState(
                                        {location: text},
                                    )}
                    />
               </View>

                <Text style={styles.title0}>Your profile helps you discover people and opportunities
                </Text>
                {/*<Text style={styles.txtP}>See people, jobs, and news in area.</Text>*/}
                <View style={styles.body}>
                    <InputTextField placeHolder="" label={'Job*'}
                                    value={this.state.location}
                                    activeUnderlineColor={'#0984e3'}
                                    UnderlineColor={'#cdcdcd'}
                                    onChangeText={text => this.setState(
                                        {location: text},
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
        backgroundColor:'white'
    },
    logo: {
        width: "49%",
        height:"9%",
        marginRight:"68%",
        marginBottom:"5%",
    },
    title:{
        color:"#000000",
        fontSize:25,
        fontWeight:"bold",
        marginRight:"33%"
    },
    title0:{
        color:"#000000",
        fontSize:25,
        fontWeight:"bold",
        marginRight:"7%",
        marginTop:"10%"

    },
    txtP:{
        color:"#000000",
        fontSize:15,
        marginRight:"33%",
        marginTop:"3%"
    },
    body:{
        width:"93%",
        height:"22%",
        justifyContent:"center",
        alignItems:"center"
    },
    btnNext: {
        marginTop:"7%",
        marginBottom:"7%",
        width: "90%",
        borderRadius: 25,
        backgroundColor: '#0984e3',
        alignItems: 'center',
        padding: 10,
        borderWidth: 1.5,
        borderColor: '#0984e3',
    },
    btnNextTxt:{
        color:"#ffffff",
        fontSize:20
    }
});
