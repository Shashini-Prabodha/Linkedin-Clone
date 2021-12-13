import React, {Component} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import HeaderSection from '../common/HeaderSection';

class Profile extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <ScrollView style={styles.container}>
                <View >
                    <HeaderSection/>
                </View>
                <View style={styles.title}>

                    <Text style={styles.text1}>Profile</Text>

                </View>
            </ScrollView>
        );
    }
}

export default Profile;


const styles = StyleSheet.create({

    container: {
        flex: 1,
        width:"100%",
        height:"100%",
        backgroundColor:"#0f0"
    },
})
