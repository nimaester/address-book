import React, { useReducer } from 'react';
import uuid from 'uuid';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
  SET_ALERT,
  REMOVE_ALERT
} from '../types';

const ContactState = (props) => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: "John Reyes",
        email: "zenkiman2000@yahoo.com",
        phone: "111-111-1111",
        type: "personal"
      },

      {
        id: 2,
        name: "Richard Siao",
        email: "clint2000@yahoo.com",
        phone: "222-222-2222",
        type: "personal"
      },

      {
        id: 3,
        name: "Allen Sales",
        email: "grayfox2000@yahoo.com",
        phone: "333-333-3333",
        type: "professional"
      }
    ]
  }

  const [state, dispatch] = useReducer(contact, initialState);

  // ADD CONTACT

  // DELETE CONTACT

  // SET CURRENT CONTACT

  // CLEAR CURRENT CONTACT

  // UPDATE CONTACT

  // FILTER CONTACTS

  // CLEAR FILTERED CONTACTS

  return (
    <ContactContext.Provider
      value={{
        contacts: state.FILTER_CONTACTS
      }}>
      {props.children}
    </ContactContext.Provider>
  )
}

export default ContactState;