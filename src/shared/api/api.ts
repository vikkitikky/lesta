import {createApi} from '@reduxjs/toolkit/query/react';
import {graphqlRequestBaseQuery} from '@rtk-query/graphql-request-base-query';
import {gql} from 'graphql-request';
import {IGetShipsData} from '../types/IGetShipsData';
import {IShipsResponse} from '../types/IGetShipsResponse';

const document = gql`
                    query GetShips {
  vehicles {
    title
    description
    icons {
      large
      medium
    }
    level
    type {
      name
    title
      icons {
        default
      }
    }
    nation {
      name
      title
      color
      icons {
        small
        medium
        large
      }
    }
  }
}`;

const numericSort = (firstValue: number, secondValue: number) => {
  return firstValue - secondValue;
};

const alphabetSort = (firstValue: string, secondValue: string) => {
  if (firstValue < secondValue) {
    return -1;
  }
  if (firstValue > secondValue) {
    return 1;
  }
  return 0;
};

const transformResponse = (response: IShipsResponse) => {
  const typeMap = new Map();
  const levelMap = new Map();
  const nationMap = new Map();

  response.vehicles.forEach((vehicle) => {
    typeMap.set(vehicle.type.name, {
      label: vehicle.type.title,
      value: vehicle.type.name,
      icon: vehicle.type.icons.default,
      checked: false,
    });
    levelMap.set(vehicle.level, {
      value: vehicle.level,
      label: vehicle.level,
      checked: false,
    });
    nationMap.set(vehicle.nation.name, {
      value: vehicle.nation.name,
      label: vehicle.nation.title,
      color: vehicle.nation.color,
      checked: false,
    });
  });

  return {
    nation: Array.from(nationMap, ([_, value]) => value).sort((first, second) => alphabetSort(first.label, second.label)),
    level: Array.from(levelMap, ([_, value]) => value).sort((first, second) => numericSort(first.label, second.label)),
    type: Array.from(typeMap, ([_, value]) => value).sort((first, second) => alphabetSort(first.label, second.label)),
    list: response.vehicles,
  };
};

const api = createApi({
  baseQuery: graphqlRequestBaseQuery({
    url: 'https://vortex.korabli.su/api/graphql/glossary',
  }),
  endpoints: (builder) => ({
    ships: builder.query<IGetShipsData, void>({
      query: () => ({
        document,
      }),
      transformResponse: (response: IShipsResponse) => transformResponse(response),
    }),
  }),
});

export default api;
export const {useShipsQuery} = api;
