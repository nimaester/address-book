import React, {useContext} from 'react';
import Contacts from './Contacts';
import Form from './Form';
import Filter from './Filter';
import AuthContext from './context/authentication/authContext';

const Home = () => {
  const authContext = useContext(AuthContext);
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