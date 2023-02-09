/* import { useSelector } from 'react-redux';
import { selectBudgets } from './budgetsSlice';
import Budget from '../../components/Budget';

const Budgets = () => {
    const budgets = useSelector(selectBudgets);
    return (
        <ul className='comments-container'>
            {budgets.map(budget => <Budget category={budget.category} amount={budget.amount} key={budget.category} />)}
        </ul>
    );
};

export default Budgets; */

import { useSelector } from 'react-redux';
import { selectBudgets } from './budgetsSlice';
import Budget from '../../components/Budget';

const Budgets = () => {
    const budgets = useSelector(selectBudgets);
    return (
        <ul className='comments-container'>
            {budgets.map(budget => <Budget budget={budget} key={budget.category} />)}
        </ul>
    );
};

export default Budgets;
