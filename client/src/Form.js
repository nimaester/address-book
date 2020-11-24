import React, {useState, useContext} from 'react';
import ContactContext from './context/contact/contactContext';

const Form = () => {

  const contactContext = useContext(ContactContext);

  const defaultState = {
    name: "",
    email: "",
    phone: "",
    type: "personal"
  }

  const [contact, setContact] = useState(defaultState)

  const {name, email, phone, type} = contact;

  const handleChange = (event) => {
    setContact({
      ...contact, [event.target.name]: event.target.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    contactContext.addContact(contact);
    setContact(defaultState)
  }


  return (
    <form onSubmit={handleSubmit}>
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
        onChange={handleChange}
      /> Personal{' '}
      <input
        type='radio'
        name='type'
        value='professional'
        checked={type === 'professional'}
        onChange={handleChange}
      /> Professional
      <div>
        <input type='submit' value='Add Contact' className='btn btn-primary btn-block'/>
      </div>
    </form>
  );
};

export default Form;