import Transaction from './Transaction';
import { ITransactionListProps } from '../interfaces/ITransactionListProps';

export default function TransactionList(props: ITransactionListProps) {
    const { transactions } = props
    return (
        <section className="new-transactions-section">
            <h2>Transactions</h2>
            <ul className="new-transaction-list">
                {transactions.map((t) => (
                    <Transaction
                        amount={t.amount}
                        category={t.category}
                        description={t.description}
                        id={t.id}
                        key={t.id}
                    />
                ))}
            </ul>
        </section>
    );
}
