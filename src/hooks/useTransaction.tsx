import {useContext} from 'react';
import {TransactionContext} from '../context/TransactionContext';

const useTransaction = () => {
  const context = useContext(TransactionContext);
  if (!context) {
    throw new Error('useWallet must be used within an TransactionProvider');
  }
  return context;
};
export default useTransaction;
