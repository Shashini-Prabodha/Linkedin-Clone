import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import KeyboardAvoidingView from 'react-native/Libraries/Components/Keyboard/KeyboardAvoidingView';
import {Avatar, IconButton, TextInput} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';

class PostPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
                       message: '',
        };
    }
    closePage = () => {
        this.props.navigation.navigate('Navigation');
    };

    render() {
        return (
            <View style={styles.container}>

                <View style={styles.title}>
                    <IconButton
                        style={styles.icon}
                        icon="close"
                        color="#000000"
                        size={26}
                        onPress={this.closePage}
                    />
                    <Text style={styles.stitle}>Share post</Text>
                    <TouchableOpacity style={styles.postbtn}>
                        <Text style={styles.postbtnText}>Post
                        </Text></TouchableOpacity>
                </View>


                <View style={styles.header}>
                    <Avatar.Image size={45} source={require('../assets/1638183539829.jpg')}
                                  style={styles.avatar}></Avatar.Image>
                <Text style={styles.nameTxt}>Shashini Prabodha</Text>
                </View>
                <View style={styles.anyTag}>
                    <Text style={styles.anyTagTxt}>Anyone</Text>
                </View>
                <TextInput


                    placeHolder="Colombo, Western, Sri Lanka"
                    value={this.state.message}

                    style={styles.input}

                    onChangeText={text => this.setState(
                        {message: text},
                    )}
                />

            </View>
        );
    }
}

export default PostPage;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // margin: '2%',
        backgroundColor:'#ffffff',

    },
    title: {
        backgroundColor: '#ffffff',
        marginBottom: '6%',
        height: '10%',
        width: '100%',
        shadowColor: '#505050',
        shadowOpacity: 1,
        shadowRadius: 2,
        elevation: 5,
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
    },
    icon: {
        marginTop: '4%',
        marginRight: '10%',

    },
    stitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000000',
        marginRight: '36%',
        marginTop: '4%',
        marginLeft: '-4%',

    },
    postbtn: {
        marginTop: '6%',
        marginLeft: '6%',
    },
    postbtnText: {
        fontSize: 15,
        color: '#000000',
},
    avatar: {
        marginLeft: '5%',
        marginTop: '1%',
        shadowColor: '#000000',
        shadowOpacity: 1,
        shadowRadius: 2,
        elevation: 7,
        zIndex: -1,
    },
    online: {
        marginTop: '-4%',
        marginLeft: '12%',
        borderWidth: 1,
        width: '4%',
        borderRadius: 100,
        borderColor: '#ffffff',
        zIndex: 20,
    },
    nameTxt:{
        fontWeight: 'bold',
        fontSize: 15,
marginLeft:'20%',
        marginTop:'-11%'
    },
    anyTag:{
        width:'27%',
        marginLeft:'20%',
height: '4%',
        borderRadius: 30,
        borderColor: '#969696',
        borderWidth: 1,
    },
    anyTagTxt:{
        fontWeight: 'bold',

    },
    input:{
        width: 360,
        marginTop: '5%',
        backgroundColor: 'white',
        color: 'black',
        marginBottom:'12%',
        borderEndColor: 'red',
    },
});
