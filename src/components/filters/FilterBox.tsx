import React, {useRef} from 'react';
import Filter from './Filter';
import {useAppDispatch} from '../../store/store';
import {updateFilter} from '../../store/slice/mainSlice';
import useClickOutside from '../../shared/hooks/useClickOutside';
import {FilterKeys} from '../../shared/types/FilterKeys';
import {DataForFilters} from '../../shared/types/DataForFilters';
import useFilter from '../../shared/hooks/useFilter';

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

  const onSelect = (value: string | number, isSelected: boolean, filterName: FilterKeys.Level | FilterKeys.Type | FilterKeys.Nation) => {
    dispatch(updateFilter({
      value: value,
      filterName: filterName,
      isSelected: isSelected,
    }));
  };

  return (
    <div className={isOpen ? 'filters' : 'filters_hidden'} ref={boxRef}>
      <div className="filters__box">
        <Filter id={'level'} values={level}
                onChange={(e) => {
                  onSelect(Number(e.target.value), e.target.checked, FilterKeys.Level);
                }}/>
        <Filter id={'nation.name'} values={nation}
                onChange={(e) => {
                  onSelect(e.target.value, e.target.checked, FilterKeys.Type);
                }}/>
        <Filter id={'type.name'} values={type}
                onChange={(e) => {
                  onSelect(e.target.value, e.target.checked, FilterKeys.Nation);
                }}/>
      </div>

      <button className="filters__button button" onClick={onClose}>CHOOSE</button>
    </div>
  );
};

export default FilterBox;
