import React, {Component} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import {Searchbar, Avatar,IconButton} from 'react-native-paper';
import KeyboardAvoidingView from 'react-native/Libraries/Components/Keyboard/KeyboardAvoidingView';
import Ionicons from 'react-native-vector-icons/Ionicons';

class HeaderSection extends Component {
    constructor(props) {
        super(props);
    }
    render() {

        return (
            <KeyboardAvoidingView style={styles.container}>
                <View style={styles.heading}>

                    <Avatar.Image size={40} source={require('../assets/1638183539829.jpg')}
                                  style={styles.avatar}></Avatar.Image>
                    <Ionicons name="ellipse" size={13}  color='#07C81A' style={styles.online}></Ionicons>

                    <Searchbar
                        placeholder="Search"
                        style={styles.searchBar}
                    />
                    <IconButton
                        icon="comment"
                        color={"#818888"}
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
        marginLeft:'5%',
        marginTop: '1%',
        shadowColor: '#000000',
        shadowOpacity: 1,
        shadowRadius: 2,
        elevation: 7,
        zIndex:-1,
    },
    online:{
        marginTop:'7%',
        marginLeft:'-1.8%',
        borderWidth:1,
        borderColor:'#ffffff',
        zIndex:20
    },
});
