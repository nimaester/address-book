import React, {useState } from 'react';

const Form = () => {

  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    type: "personal"
  })

  const {name, email, phone, type} = contact;

  const handleChange = (event) => {
    setContact({
      ...contact, [event.target.name]: event.target.value
    })
  }

  return (
    <div>
      <h2 className='text-primary'>Add Contact</h2>
      <input
        type='text'
        placeholder='Name'
        name='name'
        value={name}
        onChange={handleChange}
      />
      <input
        type='email'
        placeholder='Email'
        name='email'
        value={email}
        onChange={handleChange}
      />
      <input
        type='text'
        placeholder='Phone'
        name='phone'
        value={phone}
        onChange={handleChange}
      />
      <h5>
        Contact Type
      </h5>
      <input
        type='radio'
        name='type'
        value='personal'
        checked={type === 'personal'}
      /> Personal{' '}
      <input
        type='radio'
        name='type'
        value='professional'
        checked={type === 'professional'}
      /> Professional
      <div>
        <input type='submit' value='Add Contact' className='btn btn-primary btn-block'/>
      </div>
    </div>
  );
};

export default Form;