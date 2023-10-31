import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IShip} from '../../shared/types/IShip';
import {IFilterValue} from '../../shared/types/IFilterValue';
import _ from 'lodash';

interface IInitialState {
  list: IShip[];
  listIsFiltered: boolean;
  isUpdate: boolean;
  filterState: IFilterValue;
  activeFilter: string[];
}

const initialState: IInitialState = {
  list: [],
  listIsFiltered: false,
  isUpdate: true,
  filterState: {
    'nation.name': [],
    level: [],
    'type.name': [],
  },
  activeFilter: [],
};

const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    updateList: (state, action: PayloadAction<IShip[]>) => {
      state.list = action.payload;
    },
    updateFilter: (state, action: PayloadAction<{
      value: string | number,
      isSelected: boolean,
      filterName: 'type.name' | 'nation.name' | 'level'
    }>) => {
      const { value, filterName, isSelected } = action.payload;
      const newValues = [...state.filterState[filterName]];
      if (isSelected) {
        newValues.push(value);
      } else {
        _.remove(newValues, (item) => item === value);
      }
      state.filterState = {
        ...state.filterState,
        [filterName]: newValues,
      };
    },
  },
});

export default mainSlice.reducer;

export const {
  updateList,
  updateFilter,
} = mainSlice.actions;
