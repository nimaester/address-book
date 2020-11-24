import React from 'react';
import Contacts from './Contacts';
import Form from './Form';

const Home = () => {
  return (
    <div className='grid-2'>
      <div>
        <Form />
      </div>
      <div>
        <Contacts />
      </div>
    </div>
  );
};

export default Home;