import React from 'react';
import Contacts from './Contacts';
import Form from './Form';
import Filter from './Filter';

const Home = () => {
  return (
    <div className='grid-2'>
      <div>
        <Form />
      </div>
      <div>
        <Filter />
        <Contacts />
      </div>
    </div>
  );
};

export default Home;