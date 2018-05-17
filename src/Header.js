import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className="Header">
    <h1 className="header__h1--a">idea<span className="header__h1--b">box</span></h1>
      <form className="header__form" action="">
      <input className="header__title" type="text" placeholder="Title" />
      <input className="header__body" type="text" placeholder="Body" />
        <input className="header__submit" type="submit" value="save" />
      </form>
    </div>
  );
};

export default Header;