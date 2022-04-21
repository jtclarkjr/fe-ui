import React from 'react';
import Play from '../Play/Play';
import './styles.css';

export interface ICard {
  id?: number;
  title: string;
  artist: string;
  thumbnail: string;
  onClick?: () => void;
}

const Card: React.FC<ICard> = ({ id, title, artist, thumbnail, onClick }) => {
  return (
    <div aria-hidden="true" className="card" onClick={onClick}>
      <div
        className="card__thumbnail"
        style={{ backgroundImage: `url(${thumbnail})` }}
        data-testid="card-thumbnail"
      />
      <div className="card__content" id={String(id)}>
        <div className="card__wrapper">
          <h3 className="card__title">{title}</h3>
          <span className="card__artist">{artist}</span>
        </div>
        <Play />
      </div>
    </div>
  );
};

export default Card;
