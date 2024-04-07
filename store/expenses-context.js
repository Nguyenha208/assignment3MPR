import { createContext, useReducer } from 'react';

const DUMMY_EXPENSES = [];

export const ExpensesContext = createContext({
  expenses: [],
});

function expensesReducer(state, act) {
  switch (act.type) {
    case 'UPDATE':
      const updatableExpenseIndex = state.findIndex(
        (expense) => expense.id === act.payload.id
      );
      const updatableExpense = state[updatableExpenseIndex];
      const updatedItem = { ...updatableExpense, ...act.payload.data };
      const updatedExpenses = [...state];
      updatedExpenses[updatableExpenseIndex] = updatedItem;
      return updatedExpenses;
    case 'DELETE':
      return state.filter((expense) => expense.id !== act.payload);
    case 'ADD':
      const id = String(new Date().toString() + Math.random());
      return [{ ...act.payload, id: id }, ...state];
    default:
      return state;
  }
}

export default function ExpensesContextProvider({ children }) {
  
  const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

  function addExpense(expenseData) {
    dispatch({ type: 'ADD', payload: expenseData });
  }

  function deleteExpense(id) {
    dispatch({ type: 'DELETE', payload: id });
  }

  function updateExpense(id, expenseData) {
    dispatch({ type: 'UPDATE', payload: { id: id, data: expenseData } });
  }

  const value = {
    expenses: expensesState,
    addExpense: addExpense,
    deleteExpense: deleteExpense,
    updateExpense: updateExpense,
  };

  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  );
}

