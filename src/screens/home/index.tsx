import React, {FC, useCallback, useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useInfiniteQuery} from '@tanstack/react-query';
import {IMovie} from '../../interfaces';
import Search from '../../components/search';
import List from '../../components/list';
import fetchMovies from '../../helpers/fetch-movies';
import getUniqueListBy from '../../helpers/get-unique-list-by';
import useDebounce from '../../hooks/use-debounce';
import {INavigationStack} from '../../navigation/types';

type TProps = NativeStackScreenProps<INavigationStack, 'Home'>;

/**
 * Home screen with movies
 * @constructor
 */
const Home: FC<TProps> = ({navigation: {navigate}}) => {
  const [search, setSearch] = useState('');

  /**
   * Search debounced
   */
  const debounceSearch = useDebounce(search);

  /**
   * Pagination hook
   */
  const {data, isLoading, fetchNextPage, hasNextPage} = useInfiniteQuery({
    getNextPageParam: (lastPage) => (lastPage.data.length < 20 ? undefined : lastPage.nextPage),
    initialPageParam: 1,
    queryKey: ['movies-list'],
    queryFn: fetchMovies,
    meta: {search: debounceSearch},
    queryHash: debounceSearch,
  });

  // API sends duplicates for the populars ୧༼ಠ益ಠ༽୨
  const flattenData = getUniqueListBy(data?.pages.flatMap((page) => page.data) ?? [], 'id');
  const isFirstFetching = !flattenData.length;

  /**
   * On row item press
   */
  const onItemPress = useCallback(
    (details: IMovie) => navigate('Details', details),
    [navigate]
  );

  /**
   * Load more
   */
  const goToNextPage = useCallback(() => {
    if (!hasNextPage || isFirstFetching) {
      return;
    }

    fetchNextPage();
  }, [fetchNextPage, hasNextPage, isFirstFetching]);

  return (
    <List
      header={<Search search={search} setSearch={setSearch} />}
      data={flattenData}
      onItemPress={onItemPress}
      goToNextPage={goToNextPage}
      isLoading={isLoading}
    />
  );
};

export default Home;
