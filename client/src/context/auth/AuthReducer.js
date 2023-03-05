import { LOGIN_ACTION_TYPES } from '../action-types';

export const AuthReducer = (state, action) => {
  switch (action.type) {
    case LOGIN_ACTION_TYPES.LOGIN_START:
      return { user: null, isFetching: true, error: false };

    case LOGIN_ACTION_TYPES.LOGIN_SUCCESS:
      return { user: action.payload, isFetching: false, error: false };

    case LOGIN_ACTION_TYPES.LOGIN_FAILURE:
      return { user: null, isFetching: false, error: action.payload };

    default:
      return state;
  }
};
