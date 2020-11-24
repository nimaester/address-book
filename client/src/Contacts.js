import React, {Fragment, useContext} from 'react';
import ContactContext from './context/contact/contactContext';
import Contact from './Contact';

const Contacts = () => {

  const contactContext = useContext(ContactContext);
  const {contacts} = contactContext;

  return (
    <Fragment>
      {contacts.map((contact) => (
        <h3>
          <Contact key={contact.id} contact={contact}/>
        </h3>
      ))}
    </Fragment>
  );
};

export default Contacts;