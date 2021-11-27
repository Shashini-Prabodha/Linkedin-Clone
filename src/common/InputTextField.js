import * as React from 'react'
import {View, StyleSheet, TextInput} from 'react-native';

export function InputTextField({placeHolder}) {
    return (
        <View style={styles.txtFiledView}>
            <TextInput style={styles.txtField}
                       placeholder={placeHolder}
                       placeholderTextColor='#ffffff'
                // value={valuData}
                // onChangeText={onChangeData}
                // secureTextEntry={secureText}
                // autoCapitalize={autoCap}
                // autoCorrect={autoCorrect}
            >
            </TextInput>
        </View>
    )
}

const styles = StyleSheet.create({
    txtFiledView: {
        paddingVertical: 6,
    },
    txtField: {
        width: 300,
        height: 45,
        borderColor: '#ffffff',
        borderWidth: 3,
        borderRadius: 7,
        elevation: 8,
        color: '#ffffff',
        backgroundColor: '#B0D7FD',
        paddingVertical: 10,
        paddingHorizontal: 10,
        fontSize: 18,
        marginTop: "2%"
    },
});
