import React from 'react';
import Expenses from './Components/Expenses/Expenses';
import ExpenseForm from './Components/NewExpense/ExpenseForm'; // Import the ExpenseForm component

function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      location: 'NewYork',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', location: 'Florida', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      location: 'Uta',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      location:'Georgia',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseForm /> {/* Render the ExpenseForm component */}
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
