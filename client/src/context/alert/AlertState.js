import React, { useReducer } from 'react';
import AlertContext from './alertContext';
import alertReducer from './alertReducer';
import { v4 as uuidv4 } from 'uuid';
import {
  SET_ALERT, REMOVE_ALERT
} from '../types';

const AlertState = (props) => {
  const initialState = []
  const [state, dispatch] = useReducer(alertReducer, initialState);

  const setAlert = (message, type) => {
    const id = uuid.v4();
    dispatch({
      type: SET_ALERT,
      payload: {message, type, id}
    })
    setTimeout(() => {
      dispatch({type: REMOVE_ALERT, payload: id}, 5000)
    })
  }

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        user: state.user,
        loading: state.loading,
        error: state.error
      }}>
      {props.children}
    </AuthContext.Provider>
  )
}

export default AlertState;