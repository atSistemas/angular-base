import { Action } from '@ngrx/store';
import { AccountActionTypes } from '../action-types/account.actiontypes';
// import { User } from './../models/account.model';
// import { User } from './../shared/models';

// = new User() User
export const LoggedUserReducer =
    (state, action: Action) => {

        switch (action.type) {
            case AccountActionTypes.LOGIN_REQUEST:
            case AccountActionTypes.LOGIN_ERROR:
                return state;

            case AccountActionTypes.LOGIN_SUCCESS:
                return action.payload.response;

            case AccountActionTypes.GET_CURRENTUSER_REQUEST:
            case AccountActionTypes.GET_CURRENTUSER_ERROR:
                return state;

            case AccountActionTypes.GET_CURRENTUSER_SUCCESS:
                return action.payload.response;

            case AccountActionTypes.LOGOUT_REQUEST:
            case AccountActionTypes.LOGOUT_ERROR:
                return state;

            case AccountActionTypes.LOGOUT_SUCCESS:
                localStorage.removeItem('access_token');
                return {};

            default:
                return state;
        }
    };
