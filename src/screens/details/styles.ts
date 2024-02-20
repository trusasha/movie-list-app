import { StyleSheet } from 'react-native';
import { fs, hp, wp } from '../../services/responsive-manager';

const styles = StyleSheet.create({
  details: {
    backgroundColor: '#fff',
  },
  preview: {
    justifyContent: 'flex-end',
  },
  image: {
    aspectRatio: 1066 / 600,
    width: '100%',
  },
  gradient: {
    height: '100%',
    width: '100%',
  },
  title: {
    position: 'absolute',
    bottom: hp(20),
    textAlign: 'center',
    flex: 1,
    width: '100%',
    color: '#000',
    fontSize: fs(24),
    fontWeight: '700',
  },
  content: {
    paddingHorizontal: wp(16),
  },
  about: {
    fontSize: fs(20),
    fontWeight: '700',
    color: '#000',
  },
  overview: {
    fontSize: fs(16),
    color: '#000',
    marginTop: hp(10),
  },
  date: {
    marginTop: hp(24),
  },
});

export default styles;
