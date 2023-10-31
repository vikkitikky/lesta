import React, {useRef} from 'react';
import {IShip} from '../../shared/types/IShip';
import useClickOutside from '../../shared/hooks/useClickOutside';

interface IProps {
  ship: IShip;
  onClose: () => void;
}

const ShipPopup: React.FC<IProps> = ({
                                       ship,
                                       onClose,
                                     }) => {

  const popupRef = useRef<HTMLDivElement>(null);

  useClickOutside({
    onClose,
    outerRef: popupRef,
  });

  const {
    title,
    type,
    nation,
    level,
    icons,
    description,
  } = ship;

  return (
    <div className="ship-popup">
      <div className="ship-popup__content" ref={popupRef}>

        <div className="ship-popup__header">
          <h1>{title}</h1>

          <div>
            <p>Nation: {nation.title}</p>
            <p>Level: {level}</p>
            <p>Type: {type.title}<img src={type.icons.default} alt={type.title}/></p>
          </div>
        </div>

        <div className="ship-popup__main-img">
          <img src={icons.large} alt={title}/>
        </div>

        <div className="ship-popup__nation-img">
          <img src={nation.icons.large} alt={nation.title}/>
        </div>

        <div className="ship-popup__description">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ShipPopup;
