import av1 from '@src/assets/av1.png';
import av2 from '@src/assets/av2.png';
import av3 from '@src/assets/av3.png';
import av4 from '@src/assets/av4.png';
import av5 from '@src/assets/av5.png';
import useWallet from './useWallet';
import React, {useState, useEffect} from 'react';
import ScanIcon from '@src/assets/components/ScanIcon';
import SendToBankIcon from '@src/assets/components/SendToBankIcon';
import SendToFriendIcon from '@src/assets/components/SendToFriendIcon';

const useTransfer = ({navigation}: any) => {
  const transactionData = [
    {id: 0, title: 'Paul Smith', icon: av1, phone: '0852-1283-1919'},
    {id: 1, title: 'John Mactavish', icon: av2, phone: '0852-1283-1919'},
    {id: 2, title: 'Jasmin Toqi', icon: av3, phone: '0852-1283-1919'},
    {id: 3, title: 'Mark Nolan', icon: av4, phone: '0852-1283-1919'},
    {id: 4, title: 'Scott Martin', icon: av5, phone: '0852-1283-1919'},
  ];
  const [step, setStep] = useState(0);
  const [beneficiary, setBeneficiary] = useState<any>();
  const [isDialogVisible, setDialogVisible] = useState<boolean>(false);
  const [amount, setAmount] = useState('');
  const [filteredData, setFilteredData] = useState(transactionData);

  const {deductAmount, walletAmount} = useWallet();

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
    setDialogVisible(false);
    setStep(2);
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
      setFilteredData(transactionData);
      return;
    }
    const fil = transactionData.filter(item => item.title.includes(value));
    setFilteredData(fil);
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
    transactionData,
    beneficiary,
    step,
    isDialogVisible,
    filteredData,
    setDialogVisible,
    filterTransactionItems,
    setStep,
    setBeneficiary,
    sendMoney,
    handleAmountChange,
    toggleDialogBox,
    handleSendMoneyToBeneficiary,
  };
};
export default useTransfer;
