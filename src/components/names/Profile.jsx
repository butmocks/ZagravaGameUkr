import React from 'react';
import PlayersInputs from './PlayersInputs.jsx';
// import './names.scss'
const Profile = ({ userData, handleChange }) => {
  return (
    <div className="">
      <PlayersInputs userData={userData} handleChange={handleChange} />
    </div>
  );
};

export default Profile;
