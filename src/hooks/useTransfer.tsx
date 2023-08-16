import useWallet from './useWallet';
import React, {useState, useEffect} from 'react';
import ScanIcon from '@src/assets/components/ScanIcon';
import SendToBankIcon from '@src/assets/components/SendToBankIcon';
import SendToFriendIcon from '@src/assets/components/SendToFriendIcon';
import useTransaction from './useTransaction';
import {Beneficiary} from '@src/types/types';

const useTransfer = ({navigation}: any) => {
  const [step, setStep] = useState(0);
  const [beneficiary, setBeneficiary] = useState<any>();
  const [isDialogVisible, setDialogVisible] = useState<boolean>(false);
  const [amount, setAmount] = useState('');
  const {deductAmount, walletAmount} = useWallet();
  const {beneficiaries, recentTransactions, newTransaction} = useTransaction();
  const [filteredData, setFilteredData] = useState(beneficiaries);
  const [filteredRecentData, setFilteredRecentData] =
    useState(recentTransactions);

  const toggleDialogBox = () => {
    setDialogVisible(!isDialogVisible);
  };
  const sendMoney = () => {
    setDialogVisible(true);
  };

  const handleAmountChange = (value: any) => {
    setAmount(value);
  };

  const handleSendMoneyToBeneficiary = () => {
    deductAmount(parseInt(amount));
    newTransaction(beneficiary);
    setDialogVisible(false);
    setStep(2);
  };
  const handleAddNewTransaction = (item: Beneficiary) => {
    newTransaction(item);
  };

  const iconData = [
    {
      id: 0,
      title: 'Send to Friend',
      icon: <SendToFriendIcon />,
      onPress: () => {
        navigation.navigate('Send To Friend');
      },
    },
    {
      id: 1,
      title: 'Send to Bank',
      icon: <SendToBankIcon />,
      onPress: () => {
        navigation.navigate('Send To Bank');
      },
    },
    {
      id: 2,
      title: 'Scan',
      icon: <ScanIcon />,
      onPress: () => {
        navigation.navigate('Send');
      },
    },
  ];

  const filterTransactionItems = (value: any) => {
    if (value === '') {
      setFilteredData(beneficiaries);
      return;
    }
    const fil = beneficiaries.filter(item =>
      item.title.toLowerCase().includes(value.toLowerCase()),
    );
    setFilteredData(fil);
  };

  const filterRecentTransactionItems = (value: any) => {
    if (value === '') {
      setFilteredRecentData(recentTransactions);
      return;
    }
    const fil = recentTransactions.filter(item =>
      item.title.toLowerCase().includes(value.toLowerCase()),
    );
    setFilteredRecentData(fil);
  };

  useEffect(() => {
    if (step === 2) {
      setTimeout(() => {
        setStep(3);
      }, 5000);
    }
  }, [step]);

  return {
    walletAmount,
    amount,
    iconData,
    beneficiaries,
    beneficiary,
    step,
    isDialogVisible,
    filteredData,
    recentTransactions,
    filteredRecentData,
    setDialogVisible,
    filterTransactionItems,
    handleAddNewTransaction,
    setStep,
    setBeneficiary,
    sendMoney,
    handleAmountChange,
    toggleDialogBox,
    handleSendMoneyToBeneficiary,
    filterRecentTransactionItems,
  };
};
export default useTransfer;
