import React, {Component} from 'react';
import {Text, View, ScrollView, StyleSheet, Image, TouchableOpacity, FlatList} from 'react-native';
import HeaderSection from '../common/HeaderSection';
import * as Animatable from 'react-native-animatable';
import {Avatar, Card, IconButton, Paragraph, Title} from 'react-native-paper';
import {Button} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';


class MyNetowork extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            list: [],
        };
    }

    renderItem = ({item, index}) => (
        <Animatable.View animation="bounceIn" duration={3000}>

            <View style={styles.connect}>
                <Image
                    style={styles.img1}
                    source={require('../assets/w1.jpg')}
                />
                <Avatar.Image size={100} source={require('../assets/prf4.jpg')}
                              style={styles.avatar}/>
                <Text style={{
                    marginLeft: '3%',
                    margin: '2%',
                    fontSize: 15,
                    fontWeight: '600',
                    color: '#000000',
                }}>Abir Ei Saban, PhD <Ionicons name="ellipse" size={4}></Ionicons></Text>
                <Text style={{marginLeft: '39%', marginTop: '-7%', fontSize: 12}}>365,699 followers</Text>
                <Text style={{marginLeft: '3%', fontSize: 14, marginTop: '2%'}}>PhD in Education|
                    Researcher|Author</Text>
                <TouchableOpacity style={styles.follow}>
                    <Text style={styles.followTxt}>Follow</Text>
                </TouchableOpacity>

            </View>
        </Animatable.View>

    );

    render() {
        return (

            <ScrollView style={styles.container}>
                <Animatable.View animation="slideInRight" duration={300}>

                    <View>
                        <HeaderSection></HeaderSection>
                    </View>

                    <View style={styles.title}>
                        <Text style={styles.text1}>Manage my network</Text>
                        <Image
                            style={styles.arrow}
                            source={require('../assets/arrowright.png')}
                            resizeMode="contain"
                        />
                    </View>

                    <View style={styles.title}>
                        <Text style={styles.text1}>Invitations</Text>
                        <Image
                            style={styles.arrow2}
                            source={require('../assets/arrowright.png')}
                            resizeMode="contain"
                        />
                    </View>

                    <View style={styles.cardSection}>
                        <Text style={{margin: '3%', fontSize: 15, fontWeight: '600'}}>Recommended for you</Text>

                        <Card style={styles.card1}>
                            <Image
                                style={styles.img1}
                                source={require('../assets/w1.jpg')}
                            />
                            <Avatar.Image size={100} source={require('../assets/prf4.jpg')}
                                          style={styles.avatar}/>
                            <Text style={{
                                marginLeft: '3%',
                                margin: '2%',
                                fontSize: 15,
                                fontWeight: '600',
                                color: '#000000',
                            }}>Abir Ei Saban, PhD <Ionicons name="ellipse" size={4}></Ionicons></Text>
                            <Text style={{marginLeft: '39%', marginTop: '-7%', fontSize: 12}}>365,699 followers</Text>
                            <Text style={{marginLeft: '3%', fontSize: 14, marginTop: '2%'}}>PhD in Education|
                                Researcher|Author</Text>
                            <TouchableOpacity style={styles.follow}>
                                <Text style={styles.followTxt}>Follow</Text>
                            </TouchableOpacity>
                        </Card>

                        <Card style={styles.card1}>
                            <Image
                                style={styles.img1}
                                source={require('../assets/w3.jpg')}
                            />
                            <Avatar.Image size={100} source={require('../assets/prof1.jpg')}
                                          style={styles.avatar}/>
                            <Text style={{
                                marginLeft: '3%',
                                margin: '2%',
                                fontSize: 15,
                                fontWeight: '600',
                                color: '#000000',
                            }}>Abir Ei Saban, PhD <Ionicons name="ellipse" size={4}></Ionicons></Text>
                            <Text style={{marginLeft: '39%', marginTop: '-7%', fontSize: 12}}>365,699 followers</Text>
                            <Text style={{marginLeft: '3%', fontSize: 14, marginTop: '2%'}}>PhD in Education|
                                Researcher|Author</Text>
                            <TouchableOpacity style={styles.follow}>
                                <Text style={styles.followTxt}>Follow</Text>
                            </TouchableOpacity>
                        </Card>

                        <Card style={styles.card1}>
                            <Image
                                style={styles.img1}
                                source={require('../assets/w2.jpg')}
                            />
                            <Avatar.Image size={100} source={require('../assets/prf2.jpg')}
                                          style={styles.avatar}/>
                            <Text style={{
                                marginLeft: '3%',
                                margin: '2%',
                                fontSize: 15,
                                fontWeight: '600',
                                color: '#000000',
                            }}>Abir Ei Saban, PhD <Ionicons name="ellipse" size={4}></Ionicons></Text>
                            <Text style={{marginLeft: '39%', marginTop: '-7%', fontSize: 12}}>365,699 followers</Text>
                            <Text style={{marginLeft: '3%', fontSize: 14, marginTop: '2%'}}>PhD in Education|
                                Researcher|Author</Text>
                            <TouchableOpacity style={styles.follow}>
                                <Text style={styles.followTxt}>Follow</Text>
                            </TouchableOpacity>
                        </Card>

                    </View>

                    <View style={styles.container}>
                        {/*<Text  style={{marginTop:'60%', marginLeft:'37%'}}> No Content</Text>*/}
                        <FlatList
                            data={this.state.list}
                            keyExtractor={(item) => item.key}
                            renderItem={this.renderItem}
                        />
                    </View>

                    <View style={styles.connectSection}>

                        <Card style={styles.card1}>
                            <Image
                                style={styles.img1}
                                source={require('../assets/w1.jpg')}
                            />
                            <Avatar.Image size={100} source={require('../assets/prf4.jpg')}
                                          style={styles.avatar}/>
                            <Text style={{
                                marginLeft: '3%',
                                margin: '2%',
                                fontSize: 15,
                                fontWeight: '600',
                                color: '#000000',
                            }}>Abir Ei Saban, PhD <Ionicons name="ellipse" size={4}></Ionicons></Text>
                            <Text style={{marginLeft: '39%', marginTop: '-7%', fontSize: 12}}>365,699 followers</Text>
                            <Text style={{marginLeft: '3%', fontSize: 14, marginTop: '2%'}}>PhD in Education|
                                Researcher|Author</Text>
                            <TouchableOpacity style={styles.follow}>
                                <Text style={styles.followTxt}>Follow</Text>
                            </TouchableOpacity>
                        </Card>

                        <Card style={styles.card1}>
                            <Image
                                style={styles.img1}
                                source={require('../assets/w3.jpg')}
                            />
                            <Avatar.Image size={100} source={require('../assets/prof1.jpg')}
                                          style={styles.avatar}/>
                            <Text style={{
                                marginLeft: '3%',
                                margin: '2%',
                                fontSize: 15,
                                fontWeight: '600',
                                color: '#000000',
                            }}>Abir Ei Saban, PhD <Ionicons name="ellipse" size={4}></Ionicons></Text>
                            <Text style={{marginLeft: '39%', marginTop: '-7%', fontSize: 12}}>365,699 followers</Text>
                            <Text style={{marginLeft: '3%', fontSize: 14, marginTop: '2%'}}>PhD in Education|
                                Researcher|Author</Text>
                            <TouchableOpacity style={styles.follow}>
                                <Text style={styles.followTxt}>Follow</Text>
                            </TouchableOpacity>
                        </Card>

                        <Card style={styles.card1}>
                            <Image
                                style={styles.img1}
                                source={require('../assets/w2.jpg')}
                            />
                            <Avatar.Image size={100} source={require('../assets/prf2.jpg')}
                                          style={styles.avatar}/>
                            <Text style={{
                                marginLeft: '3%',
                                margin: '2%',
                                fontSize: 15,
                                fontWeight: '600',
                                color: '#000000',
                            }}>Abir Ei Saban, PhD <Ionicons name="ellipse" size={4}></Ionicons></Text>
                            <Text style={{marginLeft: '39%', marginTop: '-7%', fontSize: 12}}>365,699 followers</Text>
                            <Text style={{marginLeft: '3%', fontSize: 14, marginTop: '2%'}}>PhD in Education|
                                Researcher|Author</Text>
                            <TouchableOpacity style={styles.follow}>
                                <Text style={styles.followTxt}>Follow</Text>
                            </TouchableOpacity>
                        </Card>

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
    title: {
        padding: '5%',
        backgroundColor: '#ffffff',
        marginBottom: '2%',
        flexDirection: 'row',
    },
    text1: {
        fontSize: 15,
        color: '#0032ff',
        fontWeight: 'bold',
    },
    arrow: {
        width: '6%',
        height: '100%',
        marginLeft: '61%',

    },
    arrow2: {
        width: '6%',
        height: '100%',
        marginLeft: '79%',

    },
    cardSection: {
        margin: '2%',
        width: '96%',
        // backgroundColor: '#5fffff',
    },
    card1: {
        width: '100%',
        height: 220,
        // backgroundColor: '#480ebd',
        borderRadius: 20,
        shadowColor: '#000000',
        shadowOpacity: 1,
        shadowRadius: 2,
        elevation: 7,
        marginBottom: '3%',
    },
    img1: {
        width: '100%',
        height: '40%',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,

    },
    avatar: {
        marginTop: '-10%',
        marginLeft: '5%',
    },
    follow: {
        borderWidth: 1.2,
        borderRadius: 18,
        borderColor: '#0032ff',
        width: 72,
        marginTop: '-25%',
        marginLeft: '80%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    followTxt: {
        color: '#0032ff',
        fontWeight: '600',
        padding: 5,
        fontSize: 17,
    },
    connectSection: {
        flexDirection:'row',
        margin: '2%',
        width: '40%',
        backgroundColor: '#5fffff',
    },


});
