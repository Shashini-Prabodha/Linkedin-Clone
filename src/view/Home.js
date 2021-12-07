import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, FlatList, KeyboardAvoidingView} from 'react-native';
import {Searchbar, Avatar, IconButton} from 'react-native-paper';
import HeaderSection from '../common/HeaderSection';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import firestore from '@react-native-firebase/firestore';
import * as Animatable from 'react-native-animatable';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            job: '',
            avatar: '',
            email: '',
            url: '',
            title: '',
            status: false,
            list: [],
        };
    }

    getAvatar = () => {

        firestore()
            .collection('users')
            // Filter results
            .where('email', '==', this.state.email)
            .get()
            .then(querySnapshot => {

                querySnapshot.forEach((doc) => {
                    this.setState({avatar: doc.data().valueOf().avatar});
                    this.setState({name: doc.data().valueOf().name});
                    this.setState({job: doc.data().valueOf().job});
                });

            });
    };

    getData = async () => {
        try {
            const name = await AsyncStorage.getItem('name');
            const job = await AsyncStorage.getItem('job');
            const email = await AsyncStorage.getItem('email');


            this.setState({email: email});
            this.setState({name: name});
            this.setState({job: job});

            this.getAvatar();
            this.getPosts();

        } catch (e) {
            // error reading value
        }
    };

    getPosts = () => {
        firestore()
            .collection('posts')
            .orderBy('email', 'desc')
            .onSnapshot(querySnapshot => {
                const posts = [];

                querySnapshot.forEach(documentSnapshot => {
                    posts.push({
                        email: documentSnapshot.data().email,
                        title: documentSnapshot.data().title,
                        url: documentSnapshot.data().url,
                        avatar: documentSnapshot.data().avatar,
                        job: documentSnapshot.data().job,
                        name: documentSnapshot.data().name,
                        key: documentSnapshot.id,

                    });
                });

                this.setState({
                    list: posts,
                });

            });
    };

    renderItem = ({item, index}) => (
        <Animatable.View animation="bounceIn" duration={3000}>

            <View style={styles.card}>
                <View style={styles.nameTag}>

                    <Avatar.Image size={40} source={{uri: item.avatar}}
                                  style={styles.avatar}/>
                    <Ionicons name="ellipse" size={13} color="#07C81A" style={styles.online}></Ionicons>
                    <View>
                        <Text style={styles.title}>{item.name} </Text>
                        <Text>{item.job}</Text>
                        <Text>1m <Ionicons name="ellipse" size={5}></Ionicons> <Ionicons
                            name="globe-outline"></Ionicons>
                        </Text>
                        <Image
                            source={require('../assets/menu_vertical_64px.png')}
                            resizeMode="contain"
                            style={styles.dots}>
                        </Image>
                    </View>
                </View>


                <Text style={styles.picCaption}>{item.title}</Text>

                <View style={styles.cardBody}>
                    <Image
                        style={styles.cimg}
                        source={{uri: item.url}}
                        resizeMode="contain"
                    />
                </View>

                <View style={styles.cardFooter}>

                    <IconButton
                        style={styles.icon}
                        icon="thumb-up"
                        color="#95a5a6"
                        size={20}
                        onPress={() => console.log('Pressed')}
                        accessibilityLabel="like"
                    />
                    <IconButton
                        style={styles.icon}
                        icon="comment"
                        color="#95a5a6"
                        size={20}
                        onPress={() => console.log('Pressed')}
                    />
                    <IconButton
                        style={styles.icon}
                        icon="share"
                        color="#95a5a6"
                        size={22}
                        onPress={() => console.log('Pressed')}
                    />
                    <IconButton
                        style={styles.icon}
                        icon="telegram"
                        color="#95a5a6"
                        size={22}
                        onPress={() => console.log('Pressed')}
                    />
                </View>

            </View>
        </Animatable.View>

    );

    componentDidMount() {
        this.getData();
    }

    render() {
        return (

                <View style={styles.container}>

                    <View style={styles.header}>
                        <HeaderSection></HeaderSection>
                    </View>


                    <View style={styles.container}>
                        {/*<Text  style={{marginTop:'60%', marginLeft:'37%'}}> No Content</Text>*/}
                        <FlatList
                            data={this.state.list}
                            keyExtractor={(item) => item.key}
                            renderItem={this.renderItem}
                        />
                    </View>
                </View>
       );
    }
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: '0%',
    },
    header: {
        margin: 0,
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        height: '11%',
    },
    card: {
        width: '100%',
        backgroundColor: '#fdfdfd',
        marginTop: 12,
        height: 450,
        alignContent: 'center',
        justifyContent: 'center',
    },
    avatar: {
        marginRight: '2%',
    },
    title: {
        fontWeight: 'bold',
        color: '#000000',
    },
    dots: {
        height: '20%',
        marginTop: '-12%',
        marginLeft: '80%',
    },
    nameTag: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginTop: '3%',
        marginLeft: '2.5%',
    },
    online: {
        marginTop: '6%',
        marginLeft: '-4%',
        borderWidth: 1,
        borderRadius: 50,
        borderColor: '#ffffff',
    },
    cardBody: {
        margin: '0%',

    },
    picCaption: {
        color: '#000000',
        marginTop: '-9%',
        marginLeft: '4%',
        width: '90%',
        backgroundColor: '#ffffff',
        zIndex: 1,

    },
    cimg: {
        width: '100%',
        height: '78%',
        marginTop: '4%',
        marginBottom: '0%',
        backgroundColor: '#f5f5f5',
    },
    cardFooter: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginTop: '-13%',

    },
    icon: {
        marginLeft: '10%',
        marginRight: '5%',
    },
});
