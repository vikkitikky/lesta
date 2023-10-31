import _ from 'lodash';
import {useEffect} from 'react';
import {updateList} from '../../store/slice/mainSlice';
import {IShip} from '../types/IShip';
import {useAppDispatch, useAppSelector} from '../../store/store';
import {IFilterValue} from '../types/IFilterValue';

const useFilter = (list: IShip[]) => {
  const dispatch = useAppDispatch();
  const {filterState} = useAppSelector((state) => state.main);

  useEffect(() => {
    const checkFilterCondition = (item: IShip, filter: IFilterValue) => {
      return Object.entries(filter).every(([path, filterValues]) => {
        if (filterValues.length) {
          return filterValues.includes(_.get(item, path));
        } else {
          return true;
        }
      });
    };

    const simpleFilter = (list: IShip[], filter: IFilterValue) => {
      return list.filter((item) => checkFilterCondition(item, filter));
    };

    if (list.length) {
      const filterResult = simpleFilter(list, filterState);
      dispatch(updateList(filterResult));
    }
  }, [filterState, list, dispatch]);
};

export default useFilter;
