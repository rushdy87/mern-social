import { LOGIN_ACTION_TYPES } from '../action-types';

export const LoginStart = (userCredentials) => {
  return {
    type: LOGIN_ACTION_TYPES.LOGIN_START,
  };
};

export const LoginSuccess = (user) => {
  return {
    type: LOGIN_ACTION_TYPES.LOGIN_SUCCESS,
    payload: user,
  };
};
export const LoginFailure = (error) => {
  return {
    type: LOGIN_ACTION_TYPES.LOGIN_FAILURE,
    payload: error,
  };
};
