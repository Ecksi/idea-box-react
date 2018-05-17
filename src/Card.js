import React from 'react';
import './Card.css';

const Card = () => {
  return (
    <div className="Card">
      <h3 className="card__title">title field value</h3>
      <span className="card__delete-button">delete button</span>
      <p className="card__body">body field value</p>
      <div className="card__quality-container">
        <p className="card__quality">quality: <span className="card__quality--ranking">swill</span></p>
        <span className="card__upVote">upVote</span>
        <span className="card__downVote">downVote</span>
      </div>
    </div>
  );
};

export default Card;