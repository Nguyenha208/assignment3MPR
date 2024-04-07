import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { dateFormat } from '../../util/date';

function ExpenseItem({ id, description, amount, date }) {
  const navigation = useNavigation();

  function expensePressHandler() {
    navigation.navigate('ManageExpense', {
      expenseId: id
    });
  }

  return (
    <Pressable
      onPress={expensePressHandler}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View style={styles.expenseItem}>
        <View>
          <Text style={[styles.textBase, styles.subText]}>
            {description}
          </Text>
          <Text style={styles.textBase}> {dateFormat(date)}</Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={styles.amoutText}>${amount.toFixed(2)}</Text>
        </View>
      </View>
    </Pressable>
  );
}

export default ExpenseItem;

const styles = StyleSheet.create({
  textBase: {
    color: '#0c434b',
  },

  subText: {
    fontSize: 20,
    marginBottom: 10,
    fontWeight: 'bold',
  },

  amountContainer: {
    backgroundColor: '#bbc1c2',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 15,
  },

  pressed: {
    opacity: 0.6,
  },
  expenseItem: {
    padding: 15,
    marginVertical: 10,
    backgroundColor: '#eeeee4',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 5,
  },

  amoutText: {
    color: '#0c434b',
    fontWeight: 'bold',
    fontSize: 16,
  },
});