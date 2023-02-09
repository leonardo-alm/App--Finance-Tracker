import Transaction from './Transaction';
import { ITransactionListProps } from '../interfaces/ITransactionListProps';

export default function TransactionList(props: ITransactionListProps) {
    const { transactions } = props
    return (
        <section className="new-transactions-section">
            <h2>Transactions</h2>
            <ul className="new-transaction-list">
                {transactions.map((t) => (<Transaction transaction={t} />
                ))}
            </ul>
        </section>
    );
}
