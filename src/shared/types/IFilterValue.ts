import {FilterKeys} from './FilterKeys';

export interface IFilterValue {
  [FilterKeys.Level]: number[];
  [FilterKeys.Nation]: string[];
  [FilterKeys.Type]: string[];
}
