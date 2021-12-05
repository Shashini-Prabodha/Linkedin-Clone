import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, FlatList, KeyboardAvoidingView} from 'react-native';
import {Searchbar, Avatar, IconButton} from 'react-native-paper';
import HeaderSection from '../common/HeaderSection';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import firestore from '@react-native-firebase/firestore';


const DATA = [
    {
        id: 1,
        title: 'The Simpsons',
        year: 1989,
        image: require('../assets/sigiriya.jpg'),
    },
    {
        id: 2,
        title: 'SpongeBob SquarePants ',
        year: 1999,
        image: require('../assets/sigiriya.jpg'),


    },
    {
        id: 3,
        title: 'The Simpsons',
        year: 1989,
        image: require('../assets/sigiriya.jpg'),
    },
    {
        id: 4,
        title: 'SpongeBob SquarePants ',
        year: 1999,
        image: require('../assets/sigiriya.jpg'),
    },
];



class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fname: '',
            lname: '',
            job: '',
            avatar:'',
            email:'',
            status: false,
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
                    this.setState({fname: doc.data().valueOf().fname});
                    this.setState({lname: doc.data().valueOf().lname});
                    this.setState({job: doc.data().valueOf().job});
                });

            });
    };

    getData = async () => {
        try {
            const fname = await AsyncStorage.getItem('firstName');
            const lname = await AsyncStorage.getItem('lastName');
            const job = await AsyncStorage.getItem('job');
            const email = await AsyncStorage.getItem('email');


            this.setState({email: email});
            this.setState({fname: fname});
            this.setState({lname: lname});
            this.setState({job: job});

            this.getAvatar();

        } catch (e) {
            // error reading value
        }
    };


    renderItem = ({item, index}) => (
        <View style={styles.card}>
            <View style={styles.nameTag}>

                <Avatar.Image size={40} source={{uri:this.state.avatar}}
                              style={styles.avatar}/>
                <Ionicons name="ellipse" size={13} color="#07C81A" style={styles.online}></Ionicons>
                <View>
                    <Text style={styles.title}>{this.state.fname} {this.state.lname} </Text>
                    <Text>{this.state.job}</Text>
                    <Text>1m <Ionicons name="ellipse" size={5}></Ionicons> <Ionicons name="globe-outline"></Ionicons>
                    </Text>
                    <Image
                        source={require('../assets/menu_vertical_64px.png')}
                        resizeMode="contain"
                        style={styles.dots}>
                    </Image>
                </View>
            </View>


            <Text style={styles.picCaption}>Picture Title</Text>

            <View style={styles.cardBody}>
                <Image
                    style={styles.cimg}
                    source={item.image}
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
                    <FlatList
                        data={DATA}
                        keyExtractor={(item) => item.id.toString()}
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
        // backgroundColor:'#e7e7e7',
    },
    header: {
        margin: 0,
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        height: '11%',
    },
    // item: {
    //     backgroundColor: '#f5f520',
    //     padding: 20,
    //     marginVertical: 8,
    //     marginHorizontal: 16,
    // },
    card: {
        width: '100%',
        backgroundColor: '#ffffff',
        marginTop: 12,
        height: 430,
        alignContent: 'center',
        justifyContent: 'center',
    },
    avatar: {
        marginRight: '2%',
    },
    title: {
        fontWeight: 'bold',
    },
    dots: {
        height: '20%',
        marginTop: '-12%',
        marginLeft: '80%',
    },
    nameTag: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginTop: '-3%',
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
        marginTop: '-8%',
        marginLeft: '4%',
    },
    cimg: {
        width: 412,
        height: 400,
        marginTop: '-15%',
        marginBottom: '0%',

    },
    cardFooter: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginTop: '-18%',

    },
    icon: {
        marginLeft: '10%',
        marginRight: '5%',
    },
});
