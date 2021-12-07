import React, {Component} from 'react';
import {Text, View, ScrollView, StyleSheet} from 'react-native';
import HeaderSection from '../common/HeaderSection';
import * as Animatable from 'react-native-animatable';


class MyNetowork extends Component {
    render() {
        return (

            <ScrollView style={styles.container}>
                <Animatable.View animation="slideInRight" duration={300}>

                <View >
<HeaderSection></HeaderSection>
           </View>
                <View style={styles.title}>
                    <Text style={styles.text1}>Manage my network</Text>
                </View>
                </Animatable.View>

            </ScrollView>

    );
    }
}

export default MyNetowork;

const styles = StyleSheet.create({

    container: {
        flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center',
        // backgroundColor: 'white',
    },

    title:{
        padding:'5%',
        backgroundColor:'#ffffff',

    },
    text1:{
        fontSize:15,
        color:'#0032ff',
        fontWeight:'bold',
    },
})
