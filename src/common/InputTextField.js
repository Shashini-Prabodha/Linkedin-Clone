import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import {TextInput} from 'react-native-paper';

export function InputTextField({placeHolder,label,onChangeSet}) {
    return (
        <View style={styles.body}>
            <TextInput
                style={styles.input}
                label={label}
                placeholder={placeHolder}
                activeUnderlineColor={'#0984e3'}
                UnderlineColor={'#cdcdcd'}
                onChange={onChangeSet}


            />
        </View>
    );
}



const styles = StyleSheet.create({
    input: {
        width: 390,
        marginTop: "3%",
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
