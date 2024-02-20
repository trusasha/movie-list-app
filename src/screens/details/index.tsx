import React, { FC } from 'react';
import { ImageBackground, ScrollView, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import getImageSrc from '../../helpers/get-image-src';
import ReleaseDate from '../../components/release-date';
import styles from './styles';
import { INavigationStack } from '../../navigation/types';

type TProps = NativeStackScreenProps<INavigationStack, 'details'>;

/**
 * Movie details screen
 * @constructor
 */
const Details: FC<TProps> = ({
  route: {
    params: { backdrop_path, poster_path, title, release_date, overview },
  },
}) => {
  const uri = getImageSrc(backdrop_path ?? poster_path);

  return (
    <ScrollView style={styles.details}>
      <View style={styles.preview}>
        <ImageBackground style={styles.image} source={{ uri }}>
          <LinearGradient
            colors={[
              'rgba(255, 255, 255, 0)',
              'rgba(255, 255, 255, 0)',
              'rgba(255, 255, 255, 0.7)',
              'rgba(255, 255, 255, 1)',
            ]}
            style={styles.gradient}
          />
        </ImageBackground>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.about}>About</Text>
        <Text style={styles.overview}>{overview}</Text>
        <View style={styles.date}>
          <ReleaseDate date={release_date} />
        </View>
      </View>
    </ScrollView>
  );
};

export default Details;
