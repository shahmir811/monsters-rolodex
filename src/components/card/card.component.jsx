import React from 'react';
import './card.styles.css';

const Card = props => {
  const { id, name, email } = props.monster;
  const url = `https://robohash.org/${id}&set=set2&size=180x180`;

  return (
    <div className='card-container'>
      <img src={url} alt={name} />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default Card;
