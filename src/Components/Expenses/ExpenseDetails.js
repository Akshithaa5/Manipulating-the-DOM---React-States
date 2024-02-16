import React from "react";
import Card from '../UI/Card'

const ExpenseDetails = (props) => {
  //const [title, setTitle] = useState(props.title);
  //console.log('ExpenseItem evaluated by React')
  //const [amount, setAmount] = useState(props.amount);

  // const clickHandler = () => {
  //   setTitle('Updated!');
  //   console.log(title);
  // };

  // const deleteHandler = () => {
  //   console.log('Delete-Expense');
  // };

  // const changeExpenseHandler = () => {
  //   setAmount('100')
  //   console.log(amount);
  // }

  return (
    <Card className="expense-item__description">
     
      <div className="expense-item__price">Rs{props.amount}</div>
      <div>{props.location}</div>
      {/* <button onClick={clickHandler}>Change Title</button>
      <button onClick={deleteHandler}>Delete Expense</button>
      <button onClick={changeExpenseHandler}>Change Expense</button> */}
      {/* <h2>Food Rs 10</h2>
        <h2>Petrol Rs 100</h2>
        <h2>Movies Rs 200</h2> */}
    </Card>
  );
}

export default ExpenseDetails;