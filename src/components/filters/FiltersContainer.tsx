import React, {useRef, useState} from 'react';
import {ReactComponent as FilterIcon} from '../../assest/icons/filter.svg';
import FilterBox from './FilterBox';
import {DataForFilters} from '../../shared/types/DataForFilters';

interface IProps {
  data: DataForFilters;
}

const FiltersContainer: React.FC<IProps> = ({data}) => {
  const [open, setOpen] = useState(false);
  const button = useRef(null);

  const onClick = (e: React.MouseEvent) => {
    if (e.currentTarget === button.current) {
      setOpen(!open);
    }
  };

  return (
    <div className="filter__button">
      <FilterIcon className="filter__icon" ref={button} onClick={onClick}/>
      <FilterBox data={data} isOpen={open} onClose={() => setOpen(false)}/>
    </div>
  );
};

export default FiltersContainer;
