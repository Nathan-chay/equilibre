import { ExpenseItem } from './components/ExpenseItem'
import {initialExpenses} from './data'

export const App = () => {
  return (
    <ul>
      {
        initialExpenses.map((expense) => (
          <ExpenseItem 
            amountCents={expense.amountCents} 
            label={expense.label} 
            paidBy={expense.paidBy} 
            key={expense.id} />
        ))
      }
    </ul>
  );
};