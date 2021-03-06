import React, {Fragment, useContext, useEffect} from 'react';
import ContactContext from './context/contact/contactContext';
import Contact from './Contact';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import Loader from './Loader';

const Contacts = () => {

  const contactContext = useContext(ContactContext);
  const {contacts, filtered, getContacts, loading} = contactContext;

  useEffect(() => {
    getContacts();
  }, []);

  if (contacts !== null && contacts.length === 0) {
    return <h4>Please add a contact</h4>;
  }

  return (
    <Fragment>
    {contacts !== null && !loading ? (
      <TransitionGroup>
        {filtered !== null ?
          filtered.map((contact) => (
            <CSSTransition key={contact._id} timeout={500} classNames='item'>
              <Contact contact={contact}/>
            </CSSTransition>
        )) :
          contacts.map((contact) => (
            <CSSTransition key={contact._id} timeout={500} classNames='item'>
              <Contact contact={contact}/>
            </CSSTransition>
          ))
        }
      </TransitionGroup>
    ) : <Loader />}

    </Fragment>
  );
};

export default Contacts;