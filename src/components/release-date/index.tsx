import React, { FC } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

/**
 * Simple date formatting
 */
const formatDate = (value: string): string => {
  const date = new Date(value);

  return (
    date.getFullYear() +
    '.' +
    String(date.getMonth() + 1).padStart(2, '0') +
    '.' +
    String(date.getDate()).padStart(2, '0')
  );
};

interface IReleaseDate {
  date: string;
}

/**
 * Formatted release date
 * @constructor
 */
const ReleaseDate: FC<IReleaseDate> = ({ date }) => (
  <View style={styles.row}>
    <Text style={styles.inCinemas}>In cinemas from:</Text>
    <View style={styles.dateWrapper}>
      <Text style={styles.date}>{formatDate(date)}</Text>
    </View>
  </View>
);

export default ReleaseDate;
