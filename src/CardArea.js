import React from 'react';
import Card from './Card';
import './CardArea.css';

const CardArea = (props) => {
    const ideaCards = props.ideas.map(idea => {
      return (
        <Card 
          {...idea}
          key={idea.id}
          removeIdea={props.removeIdea}
        />
      )
    })
  
  return (
    <div className="CardArea">
      <form action="">
        <input className="cardArea__search" type="text" placeholder="search" />
      </form>
      {ideaCards}
    </div>
  );
};

export default CardArea;
