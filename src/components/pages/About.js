import React from 'react';

const About = () => {
  return (
    <div className='about__container'>
      <h1 className='about__tittle'>About This App</h1>
      <p className='paragraph'>
        This is a React App for displaying the users of the App database as a task for the Hiberus Technical
        Test.
      </p>
      <p className='about__version paragraph'>
        <strong>Version: </strong> 1.0.0
      </p>
    </div>
  );
};

export default About;
