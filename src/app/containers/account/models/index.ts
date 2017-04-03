import { BillingCodeModel } from './billingcode.model';
import { UserModel } from './user.model';


export interface AccountState {
  user?: UserModel;
  billingCodeList?: BillingCodeModel[];
};

export const InitialState = <AccountState>{
  user: {
    id: -1,
    clientDescription: '',
    userDescription: '',
    cultureCode: '',
    cultureShortDate: '',
    cultureDecimalSeparator: '',
  },
  billingCodeList: [],
};
