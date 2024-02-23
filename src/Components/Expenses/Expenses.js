import React, { useState } from 'react';

import ExpenseItems from './ExpenseItems';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import './Expenses.css';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  let expensesContent = <p className="no-expenses">No expenses found.</p>;

  if (filteredExpenses.length === 1) {
    expensesContent = (
      <div>
        <ExpenseItems
          key={filteredExpenses[0].id}
          title={filteredExpenses[0].title}
          amount={filteredExpenses[0].amount}
          date={filteredExpenses[0].date}
        />
        <p className="single-expense-message">Only single expense here. Please add more...</p>
      </div>
    );
  } else if (filteredExpenses.length > 1) {
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItems
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }

  return (
    <div>
      <Card className='expenses'>
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {expensesContent}
      </Card>
    </div>
  );
};
export default Expenses;