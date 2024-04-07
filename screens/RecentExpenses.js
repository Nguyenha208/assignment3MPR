import { useContext } from 'react';
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';
import { ExpensesContext } from '../store/expenses-context';

function RecentExpenses() {
  const expensesCtx = useContext(ExpensesContext);
  const recentExpenses = expensesCtx.expenses.filter(() => {
  });

  return (
    <ExpensesOutput
      expenses={recentExpenses}
      expensesPeriod="Recent"
      fallbackText="No expenses"
    />
  );
}

export default RecentExpenses;