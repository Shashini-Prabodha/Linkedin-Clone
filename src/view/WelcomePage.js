import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';

class WelcomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.shape}>

                </View>
                <Image
                    source={require('../assets/logo1.png')}
                    resizeMode="contain"
                    style={styles.pic}>
                </Image>
            </View>
        );
    }
}

const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#e7e7e7',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 0
        },
        shape: {
            backgroundColor: '#ffffff',
            width: 410,
            height:520,
            borderBottomEndRadius: 300,
            borderBottomStartRadius:300,
            marginTop:-220,
            transform: [{ scaleX: 1.5 }],
        },
    pic: {
        width: 200,
        height: 200,
        marginTop:-280,

    },
    },
);


export default WelcomePage;
