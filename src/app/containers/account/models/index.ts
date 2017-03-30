export interface BillingCodeModel {
  billingCodeId: string;
  codeDescription: string;
  default: boolean;
}

export interface UserDataModel {
  id: number;
  clientDescription: string;
  userDescription: string;
  cultureCode: string;
  cultureShortDate: string;
  cultureDecimalSeparator: string;
}


export interface AccountModel {
  userData?: UserDataModel;
  billingCodeList?: BillingCodeModel[];
};

export const InitialState = <AccountModel>{
  // userData: {
  //   id: -1,
  //   clientDescription: '',
  //   userDescription: '',
  //   cultureCode: '',
  //   cultureShortDate: '',
  //   cultureDecimalSeparator: '',
  // },
  userData: null,
  billingCodeList: [],
};
