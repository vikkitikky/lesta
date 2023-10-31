import React from 'react';
import {IShip} from '../../shared/types/IShip';

interface IProps {
  ship: IShip;
  setSelected?: (ship: IShip) => void;
}

const ShipsCard: React.FC<IProps> = ({ ship, setSelected = () => {} }) => {
  const { title, type, level, nation, icons, description } = ship;

  return (
    <div className="ship-card">
      <div className="ship-card__header">
        <h2 className="ship-card__title">{title}</h2>
        <div className="ship-card__details">
          <h2 className="ship-card__level">{level}</h2>
          <img className="ship-card__type-img" src={type.icons.default} alt={type.title} />
        </div>
      </div>

      <div className="ship-card__nation-img">
        <img src={nation.icons.small} alt={nation.title} />
      </div>

      <div className="ship-card__image-wrap">
        <img src={icons.medium} className="ship-card__image" alt={title} />
      </div>

      <div className="ship-card__more-info">
        <p className="ship-card__description">{description}</p>
        <button onClick={() => setSelected(ship)} className="ship-card__button button">VIEW DETAILS</button>
      </div>
    </div>
  );
};

export default ShipsCard;
