import React from 'react';
import { Link } from 'react-router-dom';
import './info.scss';
import Header from '../menu/Header';

const InfoPage = () => {
  return (
    <div className="">
      <Header />
      <div className="">
        <h1>Цікавий факт</h1>
      </div>
      <div className="">
        Якщо довго не займатися сексом, зменшується пеніс Вчені довели, що нормальний розмір
        статевого члена буде лише тоді, коли він функціонує повноцінно. А це можливе лише під час
        сексу.
      </div>

      <Link className="a" to="/names">
        Далі
      </Link>
    </div>
  );
};

export default InfoPage;
