import React from 'react';
import './names.scss'
const PlayersInputs = ({ userData, handleChange }) => {
  return (
    <form className='user-box'>
      <input className='text'
        type="text"
        name="guyName"
        
        value={userData.guyName}
        onChange={handleChange}
      />
      <input className='text'
        value={userData.girlName}
        type="text"
        name="girlName"
        
       
        onChange={handleChange}
      />
    </form>
  );
};

export default PlayersInputs;
