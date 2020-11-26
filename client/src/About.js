import React from 'react';

const About = () => {
  return (
    <div>
      <h1>About this App</h1>
      <p className="my-1">
        A fullstack react application that stores contacts. It also uses all crud operations (Create, Read, Update, Delete) that is using MongoAtlas as its backend to store a user's list of contacts.
      </p>
      <p>
        <strong>
          Version:
        </strong>
        1.0.0
      </p>
    </div>
  );
};

export default About;