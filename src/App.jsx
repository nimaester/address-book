import React, { useState, useRef, useEffect } from 'react';
import ContactState from './context/contact/ContactState';


const App = () => {
  return (
    <ContactState>
      <div className="main">
        <h1>Hello World</h1>
        <div>
          <ul>
            <li className="nav">
              Home
            </li>
            <li className="nav">
              Contacts
            </li>
            <li className="nav">
              About
            </li>
          </ul>
        </div>
      </div>
    </ContactState>
  );
};

export default App;