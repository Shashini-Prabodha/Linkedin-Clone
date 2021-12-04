import React, {Component} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import HeaderSection from '../common/HeaderSection';

class JobsPage extends Component {
    render() {
        return (
            <ScrollView style={styles.container}>
                <View >
                    <HeaderSection></HeaderSection>
                </View>
                <View style={styles.title}>

                    <Text style={styles.text1}>Manage my network</Text>

                </View>
            </ScrollView>
        );
    }
}

export default JobsPage;


const styles = StyleSheet.create({

    container: {
        flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center',
        // backgroundColor: 'white',
    },

})
