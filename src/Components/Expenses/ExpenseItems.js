import React, { useState } from "react";
import './ExpenseItems.css';
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from '../UI/Card';

function ExpenseItem(props) {
    const [amount, setAmount] = useState(props.amount);
    const [title, setTitle] = useState(props.title);
    console.log('ExpenseItem evaluated by React');
    
    const handleAmountChange = () => {
        setAmount(100);
        setTitle('Updated');
    };

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <h2>{title}</h2>
            <ExpenseDetails amount={amount} location={props.location} title={props.title} />
            <button onClick={handleAmountChange}>Change Amount</button>
        </Card>
    );
}

export default ExpenseItem;
