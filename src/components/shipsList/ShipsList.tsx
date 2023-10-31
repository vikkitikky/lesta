import React, {useState} from 'react';
import ShipsCard from './ShipsCard';
import {useAppSelector} from '../../store/store';
import {IShip} from '../../shared/types/IShip';
import ShipPopup from './ShipPopup';

const ShipsList = () => {
  const {list} = useAppSelector((store) => store.main);
  const [selectedCard, setSelectedCard] = useState<IShip | null>(null);

  const renderList = () => (
    list.map((item, i) => (
      <ShipsCard key={i} ship={item} setSelected={setSelectedCard}/>
    ))
  );

  const renderEmpty = () => (
    <div className="ships-list__empty">Nothing Found</div>
  );

  return (
    <>
      <div className="ships-list">
        {list.length ? renderList() : renderEmpty()}
      </div>

      {selectedCard ? <ShipPopup ship={selectedCard} onClose={() => setSelectedCard(null)}/> : null}
    </>
  );
};

export default ShipsList;
