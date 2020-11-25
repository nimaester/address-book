import React, { useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
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
    ],
    current: null,
    filtered: null
  }

  const [state, dispatch] = useReducer(contactReducer, initialState);

  // ADD CONTACT
  const addContact = (contact) => {
    contact.id = uuidv4();
    dispatch({
      type: ADD_CONTACT,
      payload: contact
    })
  }

  // DELETE CONTACT
  const deleteContact = (id) => {
    dispatch({
      type: DELETE_CONTACT,
      payload: id
    })
  }

  // SET CURRENT CONTACT
  const setCurrent = (contact) => {
    dispatch({
      type: SET_CURRENT,
      payload: contact
    })
  }

  // CLEAR CURRENT CONTACT
  const clearCurrent = () => {
    dispatch({
      type: CLEAR_CURRENT
    })
  }

  // UPDATE CONTACT
  const updateContact = (contact) => {
    dispatch({
      type: UPDATE_CONTACT,
      payload: contact
    })
  }

  // FILTER CONTACTS
  const filterContacts = (text) => {
    dispatch({
      type: FILTER_CONTACTS,
      payload: text
    })
  }

  // CLEAR FILTERED CONTACTS

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        current: state.current,
        addContact,
        deleteContact,
        setCurrent,
        clearCurrent,
        updateContact
      }}>
      {props.children}
    </ContactContext.Provider>
  )
}

export default ContactState;