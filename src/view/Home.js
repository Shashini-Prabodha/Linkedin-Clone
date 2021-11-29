import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, FlatList,KeyboardAvoidingView} from 'react-native';
import {Searchbar, Avatar, IconButton} from 'react-native-paper';
import HeaderSection from '../common/HeaderSection';

const DATA = [
    {
        id: 1,
        title: "The Simpsons",
        year: 1989,
        image: require("../assets/LinkedIn-Weekly-Invite-Limit-Blog-Image.png"),
    },
    {
        id: 2,
        title: "SpongeBob SquarePants ",
        year: 1999,
        image: require("../assets/LinkedIn-Weekly-Invite-Limit-Blog-Image.png"),

    },
];

//
// const DATA = [
//     {
//         id: '1',
//         title: 'Data Structures',
//     },
//     {
//         id: '2',
//         title: 'STL',
//     },
//     {
//         id: '3',
//         title: 'C++',
//     },
//     {
//         id: '4',
//         title: 'Java',
//     },
//     {
//         id: '5',
//         title: 'Python',
//     },
//     {
//         id: '6',
//         title: 'CP',
//     },
//     {
//         id: '7',
//         title: 'ReactJs',
//     },
//
// ];

// const Item = ({title}) => {
//     return (
//         <View style={styles.item}>
//             <Text>{title}</Text>
//         </View>
//     );
// };

//
// const renderItem = ({item}) => (
//     <Item title={item.title}/>
// );


const renderItem = ({ item, index }) => (
    <View >
        <View style={{flexDirection: 'row', alignItems: 'flex-start'}}>

            <Avatar.Image size={40} source={require('../assets/LinkedIn-Weekly-Invite-Limit-Blog-Image.png')}
                          style={styles.avatar}/>
        </View>
        <Text style={styles.title}>{item.title} </Text>
        <Text> {item.year}</Text>
        <Image
            style={{ height: 300, width: 300}}
            source={item.image}
            resizeMode="contain"
        />
    </View>
);

class Home extends Component {

    render() {
        return (
            <KeyboardAvoidingView style={styles.container}>
                <View style={styles.header}>
                    <HeaderSection></HeaderSection>
                </View>


                <View style={styles.container}>
                    <FlatList
                        data={DATA}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={renderItem}
                    />
                </View>

                {/*<View style={styles.container}>*/}
                {/*    <FlatList*/}
                {/*        data={DATA}*/}
                {/*        renderItem={renderItem}*/}
                {/*        keyExtractor={item => item.id}*/}
                {/*    />*/}
                {/*</View>*/}


            </KeyboardAvoidingView>
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
    item: {
        backgroundColor: '#f5f520',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
});
