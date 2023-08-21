import {Beneficiary, FunctionWithParam} from '@src/types/types';
import {SetStateAction} from 'react';

export interface ITransfersBaseProps {
  recentTransactions: Beneficiary[];
  heading: string;
  setStep: FunctionWithParam<SetStateAction<number>>;
  setBeneficiary: FunctionWithParam<SetStateAction<Beneficiary>>;
}
