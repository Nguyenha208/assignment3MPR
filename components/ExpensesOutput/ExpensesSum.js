import { View, Text, StyleSheet } from 'react-native';


function ExpensesSummary({ expenses, periodName }) {
  const expensesSum = expenses.reduce((sum, exp) => {
    return sum + exp.amount;
  }, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.total}>{periodName}</Text>
      <Text style={styles.sum}>{expensesSum.toFixed(2)}</Text>
    </View>
  );
}

export default ExpensesSummary;

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 20,
      padding: 15,
      backgroundColor: '#0c434b',
      borderRadius: 5,
    },

    total: {
      fontSize: 18,
      color: 'white',
      fontWeight: 'bold',
    },
    sum: {
      fontSize: 18,
      fontWeight: 'bold',
      color: 'white',
    },
  });