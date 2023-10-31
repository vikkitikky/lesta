import React, {useRef} from 'react';
import Filter from './Filter';
import {useAppDispatch} from '../../store/store';
import {updateFilter} from '../../store/slice/mainSlice';
import useClickOutside from '../../shared/hooks/useClickOutside';
import {FilterKeys} from '../../shared/types/FilterKeys';
import {DataForFilters} from '../../shared/types/DataForFilters';

interface IProps {
  isOpen: boolean;
  onClose: () => void;
  data: DataForFilters;
}

const FilterBox: React.FC<IProps> = ({
                                       isOpen,
                                       onClose,
                                       data
                                     }) => {
  const {level, nation, type} = data;
  const dispatch = useAppDispatch();

  const boxRef = useRef(null);

  useClickOutside({
    outerRef: boxRef,
    onClose,
  });

  const onSelect = (value: string | number, isSelected: boolean, filterName: FilterKeys) => {
    dispatch(updateFilter({
      value,
      filterName,
      isSelected,
    }));
  };

  return (
    <div className={isOpen ? 'filters' : 'filters_hidden'} ref={boxRef}>
      <div className="filters__box">
        <Filter id={FilterKeys.Level} values={level}
                onChange={(e) => {
                  onSelect(Number(e.target.value), e.target.checked, FilterKeys.Level);
                }}/>
        <Filter id={FilterKeys.Type} values={type}
                onChange={(e) => {
                  onSelect(e.target.value, e.target.checked, FilterKeys.Type);
                }}/>
        <Filter id={FilterKeys.Nation} values={nation}
                onChange={(e) => {
                  onSelect(e.target.value, e.target.checked, FilterKeys.Nation);
                }}/>
      </div>

      <button className="filters__button button" onClick={onClose}>CHOOSE</button>
    </div>
  );
};

export default FilterBox;
