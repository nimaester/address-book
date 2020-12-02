import React, { useReducer } from 'react';
import AuthContext from './authContext';
import authReducer from './authReducer';
import axios from 'axios';
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERRORS,
} from '../types';

const AuthState = (props) => {
  const initialState = {
    token: localStorage.getItem('token'),
    user: null,
    isAuthenticated: null,
    loading: true,
    error: null
  }

  const [state, dispatch] = useReducer(authReducer, initialState);

  //LOAD USER
  const loadUser = () => {
    console.log('loadUser')
  }
  //REGISTER USER
  const register = async (formData) => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }
    try {
      const res = await axios.post('/api/users', formData, config);
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data
      })
    } catch (error) {
      dispatch({
        type: REGISTER_FAIL,
        payload: error.response.data.message
      })
    }
  }
  //LOGIN
  const login = () => {
    console.log('login')
  }
  //LOGOUT
  const logout = () => {
    console.log('logout')
  }
  //CLEAR ERRORS
  const clearErrors = () => {
    console.log('clear Errors')
  }


  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        user: state.user,
        loading: state.loading,
        error: state.error,
        loadUser,
        register,
        login,
        logout,
        clearErrors
      }}>
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthState;