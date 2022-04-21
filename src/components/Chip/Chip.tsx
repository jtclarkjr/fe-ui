import React from 'react';
import './styles.css';
import Play from '../Play/Play';

interface IChip {
  children: string;
  thumbnail: string;
  onClick?: () => void;
}

const Chip: React.FC<IChip> = ({ children, thumbnail, onClick }) => {
  return (
    <div aria-hidden="true" className="chip" onClick={onClick}>
      <div
        className="chip__thumbnail"
        style={{ backgroundImage: `url(${thumbnail})` }}
        data-testid="chip-thumbnail"
      />
      <div className="chip__container">
        <span className="chip__title">{children}</span>
        <Play />
      </div>
    </div>
  );
};

export default Chip;
