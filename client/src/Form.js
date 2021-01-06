import React, {useState, useContext, useEffect} from 'react';
import ContactContext from './context/contact/contactContext';

const Form = () => {

  const contactContext = useContext(ContactContext);

  const defaultState = {
    name: "",
    email: "",
    phone: "",
    type: "personal"
  }

  const {addContact, current, clearCurrent, updateContact} = contactContext;

  const [contact, setContact] = useState(defaultState)

  const {name, email, phone, type} = contact;

  useEffect(() => {
    if (current !== null) {
      setContact(current)
    } else {
      setContact(defaultState);
    }
  }, [contactContext, current])

  const handleChange = (event) => {
    setContact({
      ...contact, [event.target.name]: event.target.value
    })
  }

  const clearAll = () => {
    clearCurrent();
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (current) {
      updateContact(contact);
    } else {
      addContact(contact);
    }
    clearAll();
  }


  return (
    <form onSubmit={handleSubmit}>
      <h2 className='text-primary'>{current ? "Edit Contact" : "Add Contact"}</h2>
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
        <input
          type='submit'
          value={current ? "Update Contact" : "Add Contact"}
          className='btn btn-primary btn-block'/>
      </div>
      {current &&
        <div>
          <button
            onClick={clearAll}
            className='btn btn-light btn-block'>
            Clear
          </button>
        </div>}
    </form>
  );
};

export default Form;