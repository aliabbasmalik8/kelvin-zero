import {Beneficiary} from '@src/types/types';

export interface IBeneficiaryItem {
  beneficiaryItem: Beneficiary;
  dark: boolean;
  onPress: () => void;
}
