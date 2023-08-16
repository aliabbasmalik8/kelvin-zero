import {Beneficiary} from '@src/types/types';
import React, {createContext, useState, FC, ReactNode} from 'react';
import av1 from '@src/assets/av1.png';
import av2 from '@src/assets/av2.png';
import av3 from '@src/assets/av3.png';
import av4 from '@src/assets/av4.png';
import av5 from '@src/assets/av5.png';

interface ITransactionContextType {
  beneficiaries: Beneficiary[];
  recentTransactions: Beneficiary[];
  newTransaction: (item: Beneficiary) => void;
}

export const TransactionContext = createContext<
  ITransactionContextType | undefined
>(undefined);
interface IWalletProvider {
  children: ReactNode;
}
export const TransactionProvider: FC<IWalletProvider> = ({children}) => {
  const [recentTransactions, setRecentTransactions] = useState([
    {id: 0, title: 'Paul Smith', icon: av1, phone: '0852-1283-1919'},
    {id: 1, title: 'John Mactavish', icon: av2, phone: '0852-1283-1919'},
  ]);
  const beneficiaries = [
    {id: 0, title: 'Paul Smith', icon: av1, phone: '0852-1283-1919'},
    {id: 1, title: 'John Mactavish', icon: av2, phone: '0852-1283-1919'},
    {id: 2, title: 'Jasmin Toqi', icon: av3, phone: '0852-1283-1919'},
    {id: 3, title: 'Mark Nolan', icon: av4, phone: '0852-1283-1919'},
    {id: 4, title: 'Scott Martin', icon: av5, phone: '0852-1283-1919'},
  ];
  const newTransaction = (item: Beneficiary) => {
    setRecentTransactions([item, ...recentTransactions]);
  };

  const contextValue: ITransactionContextType = {
    recentTransactions,
    newTransaction,
    beneficiaries,
  };

  return (
    <TransactionContext.Provider value={contextValue}>
      {children}
    </TransactionContext.Provider>
  );
};
