import React, {useEffect} from 'react';
import Header from '../components/header/Header';
import FiltersContainer from '../components/filters/FiltersContainer';
import ShipsList from '../components/shipsList/ShipsList';
import {useShipsQuery} from '../shared/api/api';
import {useAppDispatch} from '../store/store';
import {updateList} from '../store/slice/mainSlice';
import useFilter from '../shared/hooks/useFilter';

const Ships = () => {
  const dispatch = useAppDispatch();
  const {
    data,
    isSuccess,
    isError,
    isLoading,
  } = useShipsQuery();

  useFilter(data?.list || []);

  useEffect(() => {
    if (isSuccess && data.list.length) {
      dispatch(updateList(data.list));
    }
  }, [dispatch, isSuccess, data]);

  if (isError) {
    return <div></div>;
  }

  if (isLoading) {
    return <div></div>;
  }

  return (
    <>
      <Header>
        <FiltersContainer data={{
          nation: data?.nation || [],
          level: data?.level || [],
          type: data?.type || [],
        }}/>
      </Header>
      <main className="main">
        <ShipsList/>
      </main>
    </>
  );
};

export default Ships;
