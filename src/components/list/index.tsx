import React, { FC, ReactElement, useCallback } from 'react';
import { FlatList, TouchableOpacity, Image, Text } from 'react-native';
import { IMovie } from '../../interfaces';
import Loader from '../loader';
import Placeholder from '../placeholder';
import getImageSrc from '../../helpers/get-image-src';
import ReleaseDate from '../release-date';
import styles from './styles';

interface IList {
  data: IMovie[];
  onItemPress: (details: IMovie) => void;
  goToNextPage: () => void;
  isLoading: boolean;
  header: ReactElement;
}

/**
 * Movies list
 * @constructor
 */
const List: FC<IList> = ({ data, onItemPress, goToNextPage, isLoading, header }) => {
  /**
   * Key extractor
   */
  const keyExtractor = useCallback((item: IMovie) => `${item.id}`, []);

  /**
   * Item render
   */
  const renderRow = useCallback(
    ({ item }: { item: IMovie; index: number }) => {
      const { poster_path, title, release_date } = item;

      const uri = getImageSrc(poster_path);

      return (
        <TouchableOpacity activeOpacity={0.3} onPress={() => onItemPress(item)} style={styles.item}>
          <Image source={{ uri }} style={styles.image} />
          <Text style={styles.title} numberOfLines={1}>
            {title}
          </Text>
          <ReleaseDate date={release_date} />
        </TouchableOpacity>
      );
    },
    [onItemPress],
  );

  return (
    <FlatList
      data={data}
      style={styles.list}
      columnWrapperStyle={styles.columnWrapperStyle}
      renderItem={renderRow}
      keyExtractor={keyExtractor}
      onEndReached={goToNextPage}
      refreshing={isLoading}
      numColumns={2}
      onEndReachedThreshold={0.5}
      keyboardShouldPersistTaps='always'
      ListHeaderComponent={header}
      ListEmptyComponent={(!isLoading && !data.length && <Placeholder />) || undefined}
      ListFooterComponent={(isLoading && <Loader />) || undefined}
    />
  );
};

export default List;
