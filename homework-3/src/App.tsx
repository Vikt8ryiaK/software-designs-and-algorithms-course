import { FC } from 'react';
import { useState, useEffect } from 'react';
import { StyledEngineProvider } from '@mui/material/styles';

import { Image, User, Account } from '../types';
import { Table, Filters, Sort, Search, Row } from './components';
import { getImages, getUsers, getAccounts } from './mocks/api';
import rows from './mocks/rows.json';

import styles from './App.module.scss';

// mockedData has to be replaced with parsed Promises’ data
const mockedData: Row[] = rows.data;

export const App: FC = () => {
  const [data, setData] = useState<Row[]>([]);
  const [selectedFilter, setSelectedFilter] = useState<string[]>([]);
  const [selectedSort, setSelectedSort] = useState('');
  const [searchedValue, setSearchedValue] = useState('');
  const [preparedData, setPreparedData] = useState(data);

  useEffect(() => {
    // fetching data from API
    Promise.all([getImages(), getUsers(), getAccounts()]).then(
      ([images, users, accounts]: [Image[], User[], Account[]]) => {
        const rows = dataConverter(users, accounts, images);
        setData(rows);
      }
    );
  }, []);

  useEffect(() => {
    const filteredData = filterData(data, selectedFilter);
    const searchedData = searchData(data, searchedValue);
    const filteredAndSearchedData = mergeData(filteredData, searchedData);
    const filteredAndSearchedDataPrepared =
      filteredAndSearchedData && filteredAndSearchedData.length
        ? filteredAndSearchedData
        : data;
    const sortedData = selectedSort
      ? sortData(filteredAndSearchedDataPrepared, selectedSort)
      : filteredAndSearchedDataPrepared;
    setPreparedData(sortedData);
  }, [data, selectedFilter, selectedSort, searchedValue]);

  const mergeData = (dataFiltered: Row[], dataSearched: Row[]) => {
    return dataFiltered.concat(
      dataSearched.filter(searchedItem =>
        dataFiltered.every(
          filteredItem => filteredItem.username != searchedItem.username
        )
      )
    );
  };

  const sortData = (data: Row[], selected: string) => {
    if (data === undefined || !selected) {
      return [];
    }

    return data.slice().sort((a, b) => {
      const aPayment = a.lastPayments;
      const bPayment = b.lastPayments;

      if (aPayment === bPayment) {
        return 0;
      }

      if (selected === 'asc') {
        return aPayment < bPayment ? -1 : 1;
      } else {
        return aPayment < bPayment ? 1 : -1;
      }
    });
  };

  const filterData = (data: Row[], selected: string[]) => {
    if (data === undefined || (selected && !selected.length)) {
      return [];
    }

    if (
      selected.includes('More than 100 posts') &&
      selected.includes('Without posts')
    ) {
      return data.filter((row: Row) => row.posts >= 100 || row.posts === 0);
    }
    if (selected.includes('More than 100 posts')) {
      return data.filter((row: Row) => row.posts > 100);
    }
    if (selected.includes('Without posts')) {
      return data.filter((row: Row) => row.posts === 0);
    }
    return data;
  };

  const searchData = (data: Row[], selected: string) => {
    if (data === undefined || !selected) {
      return [];
    }

    return data.filter((row: Row) => {
      const { country, name, username } = row;
      return (
        country.toLocaleLowerCase().includes(selected.toLocaleLowerCase()) ||
        name.toLocaleLowerCase().includes(selected.toLocaleLowerCase()) ||
        username.toLocaleLowerCase().includes(selected.toLocaleLowerCase())
      );
    });
  };

  const updateSelectedFilter = (val: string[]) => {
    setSelectedFilter(val);
  };

  const updateSelectedSort = (val: string) => {
    setSelectedSort(val);
  };

  const updateSearchedValue = (val: string) => {
    setSearchedValue(val);
  };

  const dataConverter = (
    users: User[],
    accounts: Account[],
    images: Image[]
  ): Row[] =>
    users.reduce((rows: Row[], user: User) => {
      const { userID, username, country, name } = user;
      const image = images.find(image => image.userID === userID);
      const account = accounts.find(account => account.userID === userID);

      const row: Row = {
        avatar: image.url,
        username,
        country,
        name,
        lastPayments:
          account.payments && account.payments.length
            ? getPaymentByLastDate(account.payments).totalSum
            : 0,
        posts: account?.posts,
      };

      return [...rows, row];
    }, []);

  const getPaymentByLastDate = (dates: Account['payments']) =>
    dates.reduce((a, b) => (new Date(a?.date) > new Date(b?.date) ? a : b));

  return (
    <StyledEngineProvider injectFirst>
      <div className="App">
        <div className={styles.container}>
          <div className={styles.sortFilterContainer}>
            <Filters updateSelected={updateSelectedFilter} />
            <Sort updateSelected={updateSelectedSort} />
          </div>
          <Search updateSelected={updateSearchedValue} />
        </div>
        <Table rows={preparedData || []} />
      </div>
    </StyledEngineProvider>
  );
};
