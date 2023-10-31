import {IShip} from './IShip';

export interface IGetShipsData {
  list: IShip[];
  nation: {
    icons: string;
    label: string;
    value: string;
    checked: boolean;
  }[];
  level: {
    label: number;
    value: number;
    checked: boolean;
  }[];
  type: {
    label: string;
    value: string;
    icon: string;
    checked: boolean;
  }[];
}
