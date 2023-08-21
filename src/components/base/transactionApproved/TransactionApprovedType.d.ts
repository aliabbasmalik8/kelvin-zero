import {FunctionWithParam} from '@src/types/types';
import {SetStateAction} from 'react';

export interface ITransactionApprovedProps {
  setStep: FunctionWithParam<SetStateAction<number>>;
  navigation: any;
}
