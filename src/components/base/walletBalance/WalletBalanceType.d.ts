import {Beneficiary} from '@src/types/types';

export interface IWalletBalanceProps {
  integerPart: string;
  decimalPart: string;
  beneficiary: Beneficiary;
  setBeneficiary: FunctionWithParam<SetStateAction<Beneficiary>>;
  setStep: FunctionWithParam<SetStateAction<number>>;
}
