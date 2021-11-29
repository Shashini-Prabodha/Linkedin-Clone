import React, {Component} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import {Searchbar, Avatar,IconButton} from 'react-native-paper';
import KeyboardAvoidingView from 'react-native/Libraries/Components/Keyboard/KeyboardAvoidingView';

class HeaderSection extends Component {
    constructor(props) {
        super(props);
    }
    render() {

        return (
            <KeyboardAvoidingView style={styles.container}>
                <View style={styles.heading}>
                    <Avatar.Image size={40} source={require('../assets/LinkedIn-Weekly-Invite-Limit-Blog-Image.png')}
                                  style={styles.avatar}/>
                    <Searchbar
                        placeholder="Search"
                        style={styles.searchBar}
                    />
                    <IconButton
                        icon="message"
                        color={"#000000"}
                        size={23}
                        onPress={() => console.log('Pressed')}
                    />
                </View>
            </KeyboardAvoidingView>
        );
    }
}

export default HeaderSection;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // margin: '2%',
    },
    heading: {
        marginTop:'2%',
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',

    },
    searchBar: {
        width: '75%',
        marginLeft: '2%',
    },
    avatar:{
        marginLeft: '3%',
        marginTop: '1%',
        shadowColor: '#000000',
        shadowOpacity: 1,
        shadowRadius: 2,
        elevation: 7,
    }
});