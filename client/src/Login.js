import React, { useState, useContext, useEffect } from "react";
import AuthContext from "./context/authentication/authContext";
import AlertContext from "./context/alert/alertContext";

const Login = (props) => {

  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);
  const {setAlert} = alertContext;
  const {login, error, clearErrors, isAuthenticated} = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push('/'); // redirects to the homepage
    }

    if (error === "Invalid Credentials") {
      setAlert(error, 'danger');
      clearErrors();
    } else {

    }
  }, [error, isAuthenticated, props.history])

  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const {email, password} = user;

  const handleChange = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (email === '' || password === '') {
      setAlert("Fill in the fields", 'danger');
    } else {
      login({
        email, password
      })
    }
  };

  return (
    <div className='form-container'>
      <h1>
        Account
        <span className='text-primary'> Login</span>
      </h1>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor='email'>Email Address</label>
          <input
            type='email'
            name='email'
            value={email}
            onChange={handleChange}
            required
          />
        </div>

        <div className='form-group'>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            name='password'
            value={password}
            onChange={handleChange}
            required
          />
        </div>
        <input
          type='submit'
          value='Login'
          className='btn btn-primary btn-block'
        />
      </form>
    </div>
  );
};

export default Login;
