import { createContext, useReducer } from 'react';
import { AuthReducer } from './AuthReducer';

const INTIAL_STATE = { user: null, isFetching: false, error: null };

export const AuthContext = createContext(INTIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INTIAL_STATE);

  const value = {
    user: state.user,
    isFetching: state.isFetching,
    error: state.error,
    dispatch,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
