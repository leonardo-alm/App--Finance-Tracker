import { useDispatch } from 'react-redux';
import { deleteTransaction } from '../features/transactions/transactionsSlice';
import { ITransaction } from '../interfaces/ITransaction';

export default function Transaction(props: ITransaction) {
    const { amount, category, description } = props
    const dispatch = useDispatch();

    const handleDelete = (e: React.MouseEvent<HTMLElement>) => {
        dispatch(deleteTransaction(props));
    };

    return (
        <li className="new-transaction">
            <span>
                {amount} - {category}{' '}
                <span className="description">( {description} )</span>
            </span>
            <button onClick={handleDelete} aria-label="Remove">
                X
            </button>
        </li>
    );
}
