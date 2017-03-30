import { createReducer } from 'base';
import { AccountActionTypes } from '../action-types';
import { AccountModel, InitialState } from '../models';


const getUserSuccess = (state, { payload }) => Object.assign({}, state, { userData: payload.response });

// TODO: gestionar accessToken de localStorage
const logoutSuccess = state => Object.assign({}, state, { userData: null });

const getBillingCodeListSuccess = (state, { payload }) => Object.assign({}, state, {
  billingCodeList: payload.response
});

const resetBillingCodeList = state => Object.assign({}, state, { billingCodeList: [] });


const actionHandlers = {
  [AccountActionTypes.LOGIN_SUCCESS]: getUserSuccess,
  [AccountActionTypes.GET_CURRENTUSER_SUCCESS]: getUserSuccess,
  [AccountActionTypes.LOGOUT_SUCCESS]: logoutSuccess,
  [AccountActionTypes.GET_BILLINGCODELIST_SUCCESS]: getBillingCodeListSuccess,
  [AccountActionTypes.GET_BILLINGCODELIST_ERROR]: resetBillingCodeList,
};

export const AccountReducer = createReducer<AccountModel>(actionHandlers, InitialState);
