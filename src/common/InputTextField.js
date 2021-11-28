import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import {TextInput} from 'react-native-paper';

export function InputTextField({placeHolder,label}) {
    return (
        <View style={styles.body}>
            <TextInput
                style={styles.input}
                label={label}
                placeholder={placeHolder}
                activeUnderlineColor={'#0984e3'}
                UnderlineColor={'#cdcdcd'}


            />
        </View>
    );
}



const styles = StyleSheet.create({
    input: {
        width: 360,
        marginTop: 5,
        backgroundColor: 'white',
        color: 'black',
        margin: 8,
    },
    body: {
        alignItems: 'center',
        justifyContent: 'center',
        margin: 20,

    },
});
