import React, { Dispatch, FC, SetStateAction } from 'react';
import { TextInput, View, Image } from 'react-native';
import SearchImage from '../../assets/search.png';
import styles from './styles';

interface ISearch {
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
}

const Search: FC<ISearch> = ({ search, setSearch }) => (
  <View style={styles.search}>
    <Image source={SearchImage} style={styles.image} />
    <TextInput
      style={styles.input}
      placeholder="Search for movies..."
      spellCheck={false}
      onChangeText={setSearch}
      value={search}
      placeholderTextColor="rgba(17, 17, 17, 0.4)"
    />
  </View>
);

export default Search;
