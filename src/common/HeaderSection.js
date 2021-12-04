import React, {Component} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import {Searchbar, Avatar,IconButton} from 'react-native-paper';
import KeyboardAvoidingView from 'react-native/Libraries/Components/Keyboard/KeyboardAvoidingView';
import Ionicons from 'react-native-vector-icons/Ionicons';
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';


class HeaderSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            location: '',
            email: '',
            fname: '',
            lname: '',
            job: '',
            avatar: '',
            docid:''

        };
    }
//
//     const subscriber = firestore()
//         .collection('customers')
//         .doc('f7OKCjbGkgvLexr71Svx')
//         .onSnapshot(documentSnapshot => {
//             console.log('User data: ', documentSnapshot.data().name);
//             this.setState({
//                 name: documentSnapshot.data().name
//             })
//         });
// }

    getData = async () => {
        console.log("in data 1");

        try {
            const email= await AsyncStorage.getItem('email');
            const avatar = await AsyncStorage.getItem('avatar');
            const docid = await AsyncStorage.getItem('docid');
            console.log("in data 2");

            this.setState({email: email});
            this.setState({docid: docid});
            // this.setState({avatar: avatar});

            console.log("++++++++++++++++++++++++++++++ id "+ this.state.docid);
this.getAvatar();

        } catch (e) {
            // error reading value
        }
    };

    getAvatar=()=>{
        console.log("in data 3");

        firestore()

            .collection('users')
            .doc(this.state.docid)
            .onSnapshot(documentSnapshot => {
                console.log('User data: ', documentSnapshot.data().avatar);
                this.setState({
                    avatar: documentSnapshot.data().avatar
                })
            });
    }

    componentDidMount() {
        console.log("in data 0");

        this.getData();
        console.log("********************************************************** id "+ this.state.docid);


    }

    render() {

        return (
            <KeyboardAvoidingView style={styles.container}>
                <View style={styles.heading}>

                    <Avatar.Image size={40} source={{uri:this.state.avatar}}
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
        marginBottom:'3%'
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
