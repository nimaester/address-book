import React, { useState, useRef, useEffect } from 'react';

const App = () => {
  return (
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
            User
          </li>
          <li className="nav">
            About
          </li>
        </ul>
      </div>
    </div>
  );
};

export default App;