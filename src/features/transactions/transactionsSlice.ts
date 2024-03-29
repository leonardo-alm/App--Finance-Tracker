import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export const CATEGORIES = ['housing', 'food', 'transportation', 'utilities', 'clothing', 'healthcare', 'personal', 'education', 'entertainment'];

const initialState = Object.fromEntries(CATEGORIES.map(category => [category, []]))
const transactionsSlice = createSlice({
    name: 'transactions',
    initialState: initialState,
    reducers: {
        addTransaction: (state, action) => {
            let newTransactionsForCategory = [...state[action.payload.category].slice(), action.payload]
            return { ...state, [action.payload.category]: newTransactionsForCategory }
        },

        deleteTransaction: (state, action) => {
            const deletedIndex = state[action.payload.category].findIndex(transaction => transaction["id"] === action.payload.id);
            let newTransactionsForCategory = state[action.payload.category].filter((item, index) => index !== deletedIndex)
            return { ...state, [action.payload.category]: newTransactionsForCategory }
        }
    }
})

export const selectTransactions = (state: RootState) => state.transactions;
export const selectFlattenedTransactions = (state: RootState) => Object.values(state.transactions).reduce((a, b) => [...a, ...b], []);

export const { addTransaction, deleteTransaction } = transactionsSlice.actions;
export default transactionsSlice.reducer;
