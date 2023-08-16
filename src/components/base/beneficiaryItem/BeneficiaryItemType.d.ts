export interface IBeneficiaryItem {
  beneficiaryItem: {
    id: number;
    icon: any;
    title: string;
    phone: string;
  };
  dark: boolean;
  onPress: () => void;
}
