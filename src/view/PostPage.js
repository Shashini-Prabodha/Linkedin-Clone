import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity, View, Text, Image, ScrollView, Alert} from 'react-native';
import KeyboardAvoidingView from 'react-native/Libraries/Components/Keyboard/KeyboardAvoidingView';
import {Avatar, IconButton, TextInput} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import firestore from '@react-native-firebase/firestore';

import {TextArea, NativeBaseProvider} from 'native-base';
import {position} from 'native-base/lib/typescript/theme/styled-system';
import ImagePicker from 'react-native-image-crop-picker';
import storage from '@react-native-firebase/storage';

class PostPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            email: '',
            avater: '',
            image: '',
            url: '',
            name:'',
            job:'',
        };
    }

    getData = async () => {

        try {
            const email = await AsyncStorage.getItem('email');
            const avatar = await AsyncStorage.getItem('avatar');

            this.setState({email: email});
            this.setState({avatar: avatar});

            this.getAvatar();

        } catch (e) {
            // error reading value
        }
    };


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


    componentDidMount() {
        this.getData();
    }

    closePage = () => {
        this.props.navigation.navigate('Navigation');
    };

    AddPhoto = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true,
        }).then(image => {
            // console.log(image);
            this.setState({
                imagePath: image.path,
            });

            this.setState({
                imageName: image.modificationDate,
            });
            this.setState({
                image: image.path,
            });

        });
    };

    UploadImage = async () => {

        const fileName = this.state.imageName + '.jpg';
        const reference = storage().ref(`images/${fileName}`);
        await reference.putFile(this.state.imagePath);

        const url = await storage().ref(`images/${fileName}`).getDownloadURL();

        this.setState({url: url});

        this.savePost();

        this.props.navigation.navigate('Navigation');


    };

    savePost = () => {
        console.log('in Save');

        firestore()
            .collection('posts')

            .add({
                title: this.state.title,
                email: this.state.email,
                url: this.state.url,
                name:this.state.name,
                avatar:this.state.avatar,
                job:this.state.job

            })
            .then(async (response) => {
                this.setState({docid: response.id});
                await AsyncStorage.setItem('docid', this.state.docid);

                console.log('Post added firebase! ');
                Alert.alert('New Post Added!');
                this.props.navigation.navigate('Navigation');

            });
    };

    titleChanged=(text)=>{
        this.setState({title:text});
    }

    render() {
        return (

            <ScrollView style={styles.container}>

                <View style={styles.postTop}>
                    <IconButton
                        style={styles.btnClose}
                        icon="close"
                        color="#000000"
                        size={26}
                        onPress={this.closePage}
                    />
                    <Text style={styles.txtShare}>Share post</Text>

                    <TouchableOpacity style={styles.btnPost} onPress={this.UploadImage}>
                        <Text style={styles.txtPost}>Post</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.avatarSection}>
                    <View style={styles.avtImg}>
                        <Avatar.Image size={45} source={{uri: this.state.avatar}}
                                      style={styles.avatar}>
                        </Avatar.Image>
                    </View>
                    <View style={styles.userNameView}>
                        <Text style={styles.txtUser}>{this.state.name}</Text>
                        <TouchableOpacity style={styles.typeView}>
                            <Image source={require('../assets/globe.png')}
                                   resizeMode="contain"
                                   style={styles.globeImg}
                            />
                            <Text style={styles.txtPublic}>Anyone</Text>
                            <Image source={require('../assets/triggle.png')}
                                   resizeMode="contain"
                                   style={styles.underImg}
                            />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.typeAreaView}>
                    <NativeBaseProvider>
                        <TextArea
                            marginLeft="2%"
                            aria-label="t1"
                            numberOfLines={4}
                            placeholder="What do you want to talk about ?"
                            fontSize="lg"
                            // mb="32"
                            width="94%"
                            height="100%"
                            color="#666666"
                            borderColor="white"
                            borderWidth={0}
                            onChangeText={text =>
                                this.titleChanged(text)
                            }
                        />
                    </NativeBaseProvider>
                </View>
                <View style={styles.imageView}>
                    <Image source={{uri: this.state.image}}
                           resizeMode="contain"
                           style={styles.image}
                    />
                </View>

                <View style={styles.postButtonView}>
                    <TouchableOpacity style={styles.addPhotoView} onPress={this.AddPhoto}>
                        <Image source={require('../assets/add_image.png')}
                               resizeMode="contain"
                               style={styles.addImg}
                        />
                        <Text style={styles.txtAddPhoto}> Add a photo</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttonView}>
                        <Image source={require('../assets/video_call.png')}
                               resizeMode="contain"
                               style={styles.btnImg}
                        />
                        <Text style={styles.btnTxt}> Take a video</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonView}>
                        <Image source={require('../assets/cele_occ.png')}
                               resizeMode="contain"
                               style={styles.btnImg}
                        />
                        <Text style={styles.btnTxt}> Celebrate an occasion</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonView}>
                        <Image source={require('../assets/document_127px.png')}
                               resizeMode="contain"
                               style={styles.btnImg}
                        />
                        <Text style={styles.btnTxt}> Add a document</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonView}>
                        <Image source={require('../assets/jobs.png')}
                               resizeMode="contain"
                               style={styles.btnImg}
                        />
                        <Text style={styles.btnTxt}> Share that you're hiring</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonView}>
                        <Image source={require('../assets/contacts_127px.png')}
                               resizeMode="contain"
                               style={styles.btnImg}
                        />
                        <Text style={styles.btnTxt}> Find an expert</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonView}>
                        <Image source={require('../assets/poll.png')}
                               resizeMode="contain"
                               style={styles.btnImg}
                        />
                        <Text style={styles.btnTxt}> Create a poll</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonView}>
                        <Image source={require('../assets/calendar_5.png')}
                               resizeMode="contain"
                               style={styles.btnImg}
                        />
                        <Text style={styles.btnTxt}> Create an event</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        );
    }
}

export default PostPage;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // margin: '2%',
        backgroundColor: '#FFFFFF',

    },
    postTop: {
        width: '100%',
        height: '8%',
        backgroundColor: '#ffffff',
        alignItems: 'center',
        flexDirection: 'row',
    },
    btnClose: {
        width: '10%',
        height: '100%',
        marginLeft: '3%',
    },
    txtShare: {
        color: '#666666',
        fontSize: 18,
        marginLeft: '2%',
        fontWeight: '600',
    },
    btnPost: {
        width: '10%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: '50%',
    },
    txtPost: {
        color: '#666666',
        fontSize: 15,
    },
    avatarSection: {
        width: '100%',
        height: '10%',
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        alignItems: 'center',
    },
    avtImg: {
        width: '18%',
        height: '100%',
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
    },
    userNameView: {
        width: '40%',
        height: '100%',
        backgroundColor: '#FFFFFF',
    },
    txtUser: {
        color: '#666666',
        fontSize: 16,
        marginTop: '2%',
        fontWeight: '500',
        marginLeft: '3%',
    },
    typeView: {
        width: '80%',
        height: '37%',
        marginLeft: '3%',
        marginTop: '4%',
        alignItems: 'center',
        flexDirection: 'row',
        borderColor: '#666666',
        borderWidth: 1,
        borderRadius: 20,
    },
    globeImg: {
        width: '20%',
        height: '60%',
        marginLeft: '5%',
    },
    txtPublic: {
        color: '#666666',
        fontWeight: '600',
        fontSize: 16,
        marginTop: '-1%',
        marginLeft: '5%',
    },
    underImg: {
        width: '7%',
        height: '60%',
        marginLeft: '10%',
    },
    typeAreaView: {
        width: '100%',
        height: '12%',
        backgroundColor: '#ffffff',
    },
    postButtonView: {
        width: '100%',
        height: 330,
        backgroundColor: '#FFFFFF',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        elevation: 6,
    },
    imageView: {
        width: '100%',
        height: 250,
        backgroundColor: '#b63a3a',
    },
    image: {
        width: '100%',
        height: 250,
        backgroundColor: '#ffffff',
    },
    addPhotoView: {
        width: '100%',
        height: '12%',
        marginTop: '3%',
        alignItems: 'center',
        flexDirection: 'row',
    },
    addImg: {
        width: '10%',
        height: '60%',
        marginLeft: '2%',
    },
    txtAddPhoto: {
        color: '#666666',
        fontSize: 15,
        marginLeft: '1%',
    },
    buttonView: {
        width: '100%',
        height: '12%',
        alignItems: 'center',
        flexDirection: 'row',
    },
    btnImg: {
        width: '10%',
        height: '60%',
        marginLeft: '2%',
    },
    btnTxt: {
        color: '#666666',
        fontSize: 15,
        marginLeft: '0.5%',
    },


});
