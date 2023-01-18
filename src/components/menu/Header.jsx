import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './header.scss';

const Header = () => {
  const [screenSize, onResizing] = useState(window.innerWidth);
  const [menuVisability, setMenuVisabiliti] = useState(false);

  const readWindowSize = () => {
    onResizing(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', readWindowSize);
    readWindowSize();
  });

  const handleSandvichClick = () => {
    setMenuVisabiliti(!menuVisability);
  };

  const menuVisabilityStyle =
    screenSize < 950 && !menuVisability
      ? { transform: 'translate(100%, 0)' }
      : { transform: 'translate(0%, 0)' };

  const sandvich = screenSize < 950 && (
    <div className="header-sendvich" onClick={handleSandvichClick}>
      Меню
    </div>
  );

  const closeMenuBTN = screenSize < 950 && (
    <button className="header-links__close" onClick={handleSandvichClick}>
      <span></span>
    </button>
  );

  return (
    <header className="header">
      {sandvich}
      <nav className="header-links" style={menuVisabilityStyle}>
        {closeMenuBTN}
        <Link className="header-links__btn" to="/">
          Головна
        </Link>
        <Link className="header-links__btn" to="/">
          Кабінет
        </Link>
        <Link className="header-links__btn" to="/кгдуі">
          Правила
        </Link>
        <Link className="header-links__btn" to="/contacts">
          Про гру
        </Link>
        <Link className="header-links__btn" to="/contacts">
          Вибір режиму
        </Link>
      </nav>
    </header>
  );
};

export default Header;
