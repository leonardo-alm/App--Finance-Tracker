import { ITransaction } from "./ITransaction";

export interface IAllTransactions {
    housing: ITransaction[];
    food: ITransaction[];
    transportation: ITransaction[];
    utilities: ITransaction[];
    clothing: ITransaction[];
    healthcare: ITransaction[];
    personal: ITransaction[];
    education: ITransaction[];
    entertainment: ITransaction[];
}