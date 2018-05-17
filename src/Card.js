import React from 'react';
import './Card.css';

const Card = ({id, title, body, removeIdea}) => {
  return (
    <div className="Card">
    <button className="card__delete-button" onClick={() => removeIdea(id)}>delete</button>
      <h3 className="card__title">{title}</h3>
      <p className="card__body">{body}</p>
      <div className="card__quality-container">
        <p className="card__quality">quality: <span className="card__quality--ranking">swill</span></p>
        <span className="card__upVote">upVote</span>
        <span className="card__downVote">downVote</span>
      </div>
    </div>
  );
};

export default Card;