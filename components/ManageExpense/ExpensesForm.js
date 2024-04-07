import {View, StyleSheet, Text, Alert} from 'react-native'
import { useState } from 'react';
import Button from '../UI/ExpenseButton';
import Input from './ExpensesInput';
import { dateFormat } from '../../util/date';

export default function Form({ submitBtn, cancel, sub, defaultValues }) {

    const [inputs, setInputs] = useState({
        amount: {
          value: defaultValues ? defaultValues.amount.toString() : '',
          isValid: true,
        },
        date: {
          value: defaultValues ? dateFormat(defaultValues.date) : '',
          isValid: true,
        },
        description: {
          value: defaultValues ? defaultValues.description : '',
          isValid: true,
        },
      });
      
        
    function inputChangedHandler(inputIdent, enteredValue) {
        setInputs((curInputs) => {
            return {
            ...curInputs,
            [inputIdent]: { value: enteredValue, isValid: true },
            };
        });
    }

    function submitHandler() {
        const expenseData = {
            amount: +inputs.amount.value,
            date: new Date(inputs.date.value),
            description: inputs.description.value,
        };
      
        const amountIsValid = !isNaN(expenseData.amount) && expenseData.amount > 0;
        const dateIsValid = expenseData.date.toString() !== 'Invalid Date';
        const descriptionIsValid = expenseData.description.trim().length > 0;
      
        if (!amountIsValid || !dateIsValid || !descriptionIsValid) {
            Alert.alert('Invalid input', 'Please re-enter the value');
            return;
        }
    
        sub(expenseData);
    }

    const formIsInvalid =
        !inputs.amount.isValid ||
        !inputs.date.isValid ||
        !inputs.description.isValid;



    return(
        <View style={styles.container}>
            <View style={styles.inputsRow}>
                <Input 
                    label='Amount' 
                    invalid={!inputs.amount.isValid}
                    textInpConfig= {{
                        placeholder: 'Amout',
                        keyboardType: 'decimal-pad',
                        value: inputs.amount.value,
                        onChangeText: inputChangedHandler.bind(this, 'amount'),
                    }}
                    
                />
                <Input 
                    label='Date' 
                    textInpConfig={{
                        placeholder: 'YYYY-MM-DD',
                        maxLength: 10,
                        value: inputs.date.value,
                        onChangeText: inputChangedHandler.bind(this, 'date'),
                    }}
                    invalid={!inputs.date.isValid}
                />    
                <Input 

                    label='Description'
                    textInpConfig={{
                        placeholder: 'Description',
                        multiline: true,
                        value: inputs.description.value,
                        onChangeText: inputChangedHandler.bind(this, 'description'),
                    }}
                    invalid={!inputs.description.isValid}
                />
            </View>
            <View style={styles.buttonContainer}>
                <Button style={styles.button} mode="flat" onPress={cancel}>
                    Cancel
                </Button>
                <Button style={styles.button} onPress={submitHandler}>
                    {submitBtn}
                </Button>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
      marginTop: 20,
      borderRadius: 5,
      marginRight: -5,
    },

    inputsRow: {
        flexDirection: 'row',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderColor: '#ccc',
    },

    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        minWidth: 120,
        marginHorizontal: 10,
    },
});