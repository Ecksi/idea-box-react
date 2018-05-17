import React from 'react';
import Card from './Card';
import './CardArea.css';

const CardArea = () => {
  return (
    <div className="CardArea">
      <form action="">
        <input className="cardArea__search" type="text" placeholder="search" />
      </form>
        <Card />
        <Card />
    </div>
  );
};

export default CardArea;