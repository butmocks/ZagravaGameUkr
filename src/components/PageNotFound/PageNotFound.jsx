import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../menu/Header';

const PageNotFound = () => {
  return (
    <div className="">
      <Header />
      <div className="">404</div>

      <button className="">
        <Link to="/">На головну</Link>
      </button>
    </div>
  );
};

export default PageNotFound;
