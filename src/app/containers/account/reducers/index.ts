import { createReducer } from 'base';
import { AccountActionTypes } from '../action-types';
import { AccountState, InitialState } from '../models';


const getUserSuccess = (state, { payload }) => ({ ...state, user: payload.response });

// TODO: gestionar accessToken de localStorage
const logoutSuccess = state => Object.assign({}, state, { user: null });

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

export const AccountReducer = createReducer<AccountState>(actionHandlers, InitialState);
