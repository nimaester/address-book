import React, {useContext, useRef, useEffect} from 'react';
import ContactContext from './context/contact/contactContext';

const Filter = () => {

  const contactContext = useContext(ContactContext);
  const text = useRef();
  const {filterContacts, clearFilter, filtered} = contactContext;

  useEffect(() => {
    if (filtered === null) {
      text.current.value = '';
    }
  })

  const handleChange = (event) => {
    if (text.current.value) {
      filterContacts(event.target.value);
    } else {
      clearFilter();
    }
  }
  return (
    <form>
      <input ref={text} type='text' placeholder="Filter Contacts..." onChange={handleChange} />
    </form>
  );
};

export default Filter;