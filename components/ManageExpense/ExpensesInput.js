import {View, Text, TextInput, StyleSheet} from 'react-native'

export default function Input({ Label, invalid, style, textInpConfig }) {
    const inputStyles = [styles.input];


    if (invalid) {
        inputStyles.push(styles.invalidInput);
    }

    return(
        <View style={[styles.container, style]}>
            <TextInput style={styles.input} {...textInpConfig}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10,
        marginVertical: 2,
    },

    label: {
        fontSize: 10,
        color: 'white',
    },

    input: {
        backgroundColor: '#d7d7d8',
        color: '#8f9495',
        padding: 7,
        borderRadius: 7,
        fontSize: 16,
        marginBottom: 10,
    },

})