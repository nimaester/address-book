import React, {useState} from 'react';

const Register = () => {

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  })

  const {name, email, password, password2} = user;

  const handleChange = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Register submitted')
  }

  return (
    <div className='form-container'>
      <h1>
        Account
        <span className='text-primary'>Register</span>
      </h1>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor='name'>Name</label>
          <input type='text' name='name' value={name} onChange={handleChange} />
        </div>
      </form>
      <form>
        <div className='form-group'>
          <label htmlFor='email'>Email Address</label>
          <input type='email' name='email' value={email} onChange={handleChange} />
        </div>
      </form>
      <form>
        <div className='form-group'>
          <label htmlFor='password'>Password</label>
          <input type='password' name='password' value={password} onChange={handleChange} />
        </div>
      </form>
      <form>
        <div className='form-group'>
          <label htmlFor='password2'>Confirm Password</label>
          <input type='password2' name='password2' value={password2} onChange={handleChange} />
        </div>
        <input type='submit' value='Register...' className='btn btn-primary btn-block' />
      </form>
    </div>
  );
};

export default Register;