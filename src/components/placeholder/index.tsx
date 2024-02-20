import React, { FC } from 'react';
import { Text, View, Image } from 'react-native';
import PlaceholderImage from '../../assets/placeholder.png';
import styles from './styles';

const Placeholder: FC = () => (
  <View style={styles.placeholder}>
    <Image source={PlaceholderImage} style={styles.image} />
    <Text style={styles.title}>Ooops!</Text>
    <Text style={styles.text}>No results found 🙁 Please, try again</Text>
  </View>
);

export default Placeholder;
