import {FunctionWithNoParam, FunctionWithParam} from '@src/types/types';

export interface ISendMoneyBaseProps {
  inputValue: string;
  handleAmountChange: FunctionWithParam;
  sendMoney: FunctionWithNoParam;
}
