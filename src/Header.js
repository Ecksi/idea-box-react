import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className="Header">
      <form action="">
        <input type="text" placeholder="Idea Title" />
        <input type="text" placeholder="Idea Body" />
        <input type="submit"/>
      </form>
    </div>
  );
};

export default Header;