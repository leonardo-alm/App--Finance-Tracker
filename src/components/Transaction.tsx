import { useDispatch } from 'react-redux';
import { deleteTransaction } from '../features/transactions/transactionsSlice';
import { ITransactionProps } from '../interfaces/ITransactionProps';

export default function Transaction(props: ITransactionProps) {
    const { transaction } = props
    const dispatch = useDispatch();

    const handleDelete = (e: React.MouseEvent<HTMLElement>) => {
        dispatch(deleteTransaction(transaction));
    };

    return (
        <li className="new-transaction">
            <span>
                {transaction.amount} - {transaction.category}{' '}
                <span className="description">( {transaction.description} )</span>
            </span>
            <button onClick={handleDelete} aria-label="Remove">
                X
            </button>
        </li>
    );
}
