import React from 'react';
import Card from './Card';
import './CardArea.css';

const CardArea = () => {
  return (
    <div className="CardArea">
      <Card />
      <Card />
    </div>
  );
};

export default CardArea;