import React, {Component} from 'react';
import {Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import HeaderSection from '../common/HeaderSection';
import {Avatar, Card} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';

class JobsPage extends Component {
    render() {
        return (
            <ScrollView style={styles.container}>
                <View>
                    <HeaderSection></HeaderSection>
                </View>
                <View style={styles.title}>
                    <Text style={styles.text}>My Jobs</Text>
                    <Text style={styles.text1}>See all</Text>
                </View>

                <View style={styles.cardSection}>
                    <Text style={{margin: '3%', fontSize: 15, fontWeight: '600'}}>Recommended for you</Text>
                    <View style={styles.card1}>
                        <View style={styles.compLogoView}>
                            <Avatar.Image size={50} source={require('../assets/epic-lanka-logo.png')}
                                          style={styles.comlogo}/>

                        </View>
                        <View style={styles.midView}>
                            <Text style={styles.caption}>Software Engineer</Text>
                            <Text style={styles.t1}>Epic Lanka PVT.</Text>
                            <Text style={styles.t2}>Colombo, Western, Sri Lanka(Remote)</Text>
                            <Text style={styles.t3}>1 weeks ago</Text>
                        </View>

                        <View style={styles.notifiImg}>
                            <Image
                                style={styles.iconNotify}
                                source={require('../assets/bookmark_48px.png')}
                            />
                        </View>

                    </View>
                    <View style={styles.card1}>
                        <View style={styles.compLogoView}>
                            <Avatar.Image size={50} source={require('../assets/pearson.png')} style={styles.comlogo}/>

                        </View>
                        <View style={styles.midView}>
                            <Text style={styles.caption}>Intern</Text>
                            <Text style={styles.t1}>Pearson</Text>
                            <Text style={styles.t2}>Colombo, Western, Sri Lanka(Remote)</Text>
                            <Text style={styles.t3}>3 weeks ago</Text>
                        </View>

                        <View style={styles.notifiImg}>
                            <Image
                                style={styles.iconNotify}
                                source={require('../assets/bookmark_48px.png')}
                            />
                        </View>

                    </View>

                    <View style={styles.card1}>
                        <View style={styles.compLogoView}>
                            <Avatar.Image size={50} source={require('../assets/un.jpg')} style={styles.comlogo}/>

                        </View>
                        <View style={styles.midView}>
                            <Text style={styles.caption}>UI/UX Designer</Text>
                            <Text style={styles.t1}>ABC Company</Text>
                            <Text style={styles.t2}>Kaluthara, Western, Sri Lanka(Remote)</Text>
                            <Text style={styles.t3}>3 weeks ago</Text>
                        </View>

                        <View style={styles.notifiImg}>
                            <Image
                                style={styles.iconNotify}
                                source={require('../assets/bookmark_48px.png')}
                            />
                        </View>
                    </View>

                    <TouchableOpacity style={styles.seelAllView}>
                        <Text style={styles.seeAllTxt}>See all</Text>
                    </TouchableOpacity>


                </View>

                <View style={styles.premView}>
                    <View style={styles.leftView}>
                        <Avatar.Image size={50} source={require('../assets/un.jpg')} style={styles.comlogo}/>
                    </View>

                    <View style={styles.txtPremView}>
                        <Text style={styles.txtPrem}>
                            Try Premium to see jobs where{'\n'}
                            would be a top applicant
                        </Text>
                        <TouchableOpacity style={styles.btnPremView}>
                            <Text style={styles.txtBtnPrem}>Try Free for 1 Month</Text>
                        </TouchableOpacity>
                    </View>


                    <Image source={require('../assets/menu_vertical_64px.png')} style={styles.dots}/>

                </View>
            </ScrollView>
        );
    }
}

export default JobsPage;

const styles = StyleSheet.create({

    seelAllView: {
        width: '100%',
        height: '10%',
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '5%',
    },
    seeAllTxt: {
        color: '#0B66C3',
        fontSize: 18,
        fontWeight: '500',
    },
    card1: {
        width: '100%',
        height: '23%',
        backgroundColor: '#ffffff',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 5,
    },
    compLogoView: {
        width: '15%',
        height: '100%',
        backgroundColor: '#ffffff',
        alignItems: 'center',

    },
    dots: {
        width: 20,
        height: 20,
        marginTop: '-12%',
        marginLeft: '6%',
    },
    midView: {
        width: '70%',
        height: '100%',
        backgroundColor: '#ffffff',
        borderWidth: 1,
        borderColor: 'white',
        borderBottomColor: '#b6b6b6',
    },
    notifiImg: {
        width: '15%',
        height: '100%',
        backgroundColor: '#ffffff',
        padding: 4,
        borderWidth: 1,
        borderColor: 'white',
        borderBottomColor: '#b6b6b6',
    },
    caption: {
        fontWeight: 'bold',

    },
    t1: {},
    t2: {
        color: '#969696',
    },
    t3: {
        fontSize: 13,
        color: '#969696',
        paddingTop: 3,
    },
    iconNotify: {
        width: 18,
        height: 28,
        marginLeft: '25%',
        margin: '4%',
    },
    container: {
        flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center',
        // backgroundColor: 'white',
    },
    title: {
        padding: '5%',
        backgroundColor: '#ffffff',
        marginBottom: '2%',
        flexDirection: 'row',
    },
    text: {
        fontSize: 15,
        color: '#000000',
        fontWeight: 'bold',
    },
    text1: {
        fontSize: 14,
        color: '#0032ff',
        fontWeight: 'bold',
        marginLeft: '75%',

    },
    arrow: {
        width: '6%',
        height: '100%',
        marginLeft: '91%',

    },
    cardSection: {
        margin: '2%',
        width: '96%',
        height: 450,
        backgroundColor: '#ffffff',
    },
    premView: {
        width: '100%',
        height: 100,
        marginTop: '2%',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#ffffff',
    },
    leftView: {
        width: '15%',
        height: '100%',
        backgroundColor: '#ffffff',
        marginLeft:'3%'
    },
    txtPremView: {
        width: '70%',
        height: '100%',
        backgroundColor: '#ffffff',
    },
    txtPrem: {
        color: '#666',
        marginTop: '2%',
        marginLeft: '0%',
    },
    rightView: {

        height: '200%',
        marginTop: '-12%',
        // marginLeft: '80%',

        justifyContent: 'center',
        alignItems: 'center',
    },
    btnPremView: {
        width: '60%',
        marginTop: '2%',
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: '3%',
        height: '35%',
        backgroundColor: '#f8c567',
    },
    txtBtnPrem: {
        color: '#000000',
        fontSize: 16,
        fontWeight: '400',
    },
});
