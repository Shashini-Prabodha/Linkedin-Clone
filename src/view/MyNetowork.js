import React, {Component} from 'react';
import {Text, View, ScrollView, StyleSheet, Image, TouchableOpacity, FlatList} from 'react-native';
import HeaderSection from '../common/HeaderSection';
import * as Animatable from 'react-native-animatable';
import {Avatar, Card, IconButton, Paragraph, Title} from 'react-native-paper';
import {Button} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {FlatGrid} from 'react-native-super-grid';
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';


class MyNetowork extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            list: [],
            clickE: '',
        };
    }

    getUsers = async () => {

        this.setState({email: await AsyncStorage.getItem('email')});
        console.log(this.state.email + ' $$$$$$$$$$$$$$$$$$*********' + this.state.myNetwork);
        firestore()
            .collection('users')
            // .orderBy('email', 'desc')
            // .where('email', '==', this.state.email)
            // .get()
            .onSnapshot(querySnapshot => {
                const users = [];

                querySnapshot.forEach(documentSnapshot => {
                    if (documentSnapshot.data().email != this.state.email) {
                        users.push({
                            email: documentSnapshot.data().email,
                            avatar: documentSnapshot.data().avatar,
                            job: documentSnapshot.data().job,
                            name: documentSnapshot.data().name,
                            key: documentSnapshot.id,

                        });
                    }
                });


                this.setState({
                    list: users,
                });

            });
    };

    componentDidMount() {
        this.getUsers();
    }

    renderItem = ({item, index}) => (

        <Animatable.View animation="bounceIn" duration={3000}>
            {/*<View style={styles.connectSection}>*/}

            <Card style={styles.card2}>
                <Image
                    style={styles.img2}
                    source={require('../assets/backw.png')}
                />
                <View style={styles.cardBody}>
                    <Avatar.Image size={80} source={{uri: item.avatar}}
                                  style={styles.avatar2}/>
                    <Text style={{
                        marginLeft: '3%',
                        margin: '2%',
                        fontSize: 15,
                        fontWeight: '600',
                        color: '#000000',
                    }}>{item.name}<Ionicons name="ellipse" size={4}/></Text>
                    <Text style={{marginLeft: '3%', fontSize: 14, marginTop: '2%'}}>{item.job}</Text>

                    <TouchableOpacity style={styles.connect}>

                        <Text style={styles.connectTxt}>Connect</Text>
                    </TouchableOpacity>
                </View>
            </Card>
            {/*</View>*/}
        </Animatable.View>

    );

    // updateDB = () => {
    //     firestore()
    //         .collection('users')
    //         // .doc('ABC')
    //         .where('email', '==', this.state.email)
    //         .update({
    //             myNetwork: 31,
    //         })
    //         .onSnapshot(() => {
    //             console.log('User updated!');
    //         });
    // }
    // ;
    click = (item) => {
        console.log('||||||||||||||||||||||||||||= ' + item.key);
    };

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

                    {/*<View style={styles.container}>*/}
                    {/*    /!*<Text  style={{marginTop:'60%', marginLeft:'37%'}}> No Content</Text>*!/*/}
                    {/*    <FlatList*/}
                    {/*        data={this.state.list}*/}
                    {/*        keyExtractor={(item) => item.key}*/}
                    {/*        renderItem={this.renderItem}*/}
                    {/*    />*/}
                    {/*</View>*/}

                    <FlatGrid style={styles.connectSection}
                              itemDimension={130}
                              data={this.state.list}
                              keyExtractor={(item) => item.key}
                              renderItem={this.renderItem}


                    />

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
        // margin: '2%',
        // width: '96%',
        // backgroundColor: '#5fffff',

    },
    card2: {
        width: '98%',
        height: 230,
        // backgroundColor: '#480ebd',
        borderRadius: 20,
        shadowColor: '#000000',
        shadowOpacity: 1,
        shadowRadius: 2,
        elevation: 7,
        marginBottom: '3%',

    },
    avatar2: {
        marginTop: '-25%',
        // marginLeft: '25%',
    },
    cardBody: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    img2: {
        width: '100%',
        height: '35%',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,

    },
    connect: {
        borderWidth: 1.2,
        borderRadius: 18,
        borderColor: '#0032ff',
        width: '53%',
        margin: '2%',
        // marginLeft: '80%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    connectTxt: {
        color: '#0032ff',
        fontWeight: '600',
        padding: 5,
        fontSize: 15,
    },
    profile: {
        borderWidth: 1.2,
        borderRadius: 18,
        borderColor: '#0032ff',
        width: '53%',
        margin: '2%',
        // marginLeft: '80%',
        alignItems: 'center',
        justifyContent: 'center',
    },

});
