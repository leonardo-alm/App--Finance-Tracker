import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editBudget } from '../features/budgets/budgetsSlice';
import { selectTransactions } from '../features/transactions/transactionsSlice';
import { IBudget } from '../interfaces/IBudget';
import { IBudgetProps } from '../interfaces/IBudgetProps';

/* export default function Budget({ category, amount }: IBudget) { */
export default function Budget({ budget }: IBudgetProps) {
    const dispatch = useDispatch();
    const [amount, setAmount] = useState(budget.amount);
    const transactions = useSelector(selectTransactions);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(editBudget({ category: budget.category, amount: amount }));
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.currentTarget.value;
        setAmount(Number(inputValue));
    };

    const calculateTotalExpenses = () => {
        return transactions[budget.category]
            .map((transaction) => transaction['amount'])
            .reduce((amount1, amount2) => amount1 + amount2, 0);
    };

    const getFundsRemainingClassName = (amount: number) => {
        if (amount === 0) {
            return null;
        }

        return amount > 0 ? 'positive' : 'negative';
    };

    const remainingFunds = Number((budget.amount - calculateTotalExpenses()).toFixed(2));
    const fundsRemainingClassName = getFundsRemainingClassName(remainingFunds);

    return (
        <li className="budget-container">
            <div className="category-label">Category</div>{' '}
            <div className="category-wrapper">
                <h3 className="category-value">{budget.category}</h3>
                <form onSubmit={handleSubmit} className="budget-form">
                    <input
                        className="amount-input"
                        value={amount}
                        onChange={handleChange}
                        type="text"
                        step="1"
                    />
                    <button className="update-button">Update</button>
                </form>
            </div>
            <h4 className={`remaining-funds ${fundsRemainingClassName}`}>
                Funds Remaining: {remainingFunds}
            </h4>
        </li>
    );
}
