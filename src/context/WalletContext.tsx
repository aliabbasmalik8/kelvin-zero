import React, {createContext, useState, FC, ReactNode} from 'react';

interface IWalletContextType {
  walletAmount: number;
  recent?: {beneficiary: string; walletAmount: number};
  deductAmount: (walletAmount: number) => void;
}

export const WalletContext = createContext<IWalletContextType | undefined>(
  undefined,
);
interface IWalletProvider {
  children: ReactNode;
}
export const WalletProvider: FC<IWalletProvider> = ({children}) => {
  const [walletAmount, setWalletAmount] = useState(12000);

  const deductAmount = (transactionAmount: number) => {
    setWalletAmount(walletAmount - transactionAmount);
  };

  const contextValue: IWalletContextType = {
    walletAmount,
    deductAmount,
  };

  return (
    <WalletContext.Provider value={contextValue}>
      {children}
    </WalletContext.Provider>
  );
};
