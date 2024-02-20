import { StyleSheet } from 'react-native';
import { hp, fs, wp } from '../../services/responsive-manager';

const styles = StyleSheet.create({
  placeholder: {
    flex: 1,
    marginTop: hp(120),
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    objectFit: 'contain',
    height: hp(102),
    width: wp(92.45),
  },
  title: {
    fontWeight: '700',
    fontSize: fs(20),
    marginTop: hp(30),
    color: '#000',
  },
  text: {
    fontSize: fs(16),
    marginTop: hp(16),
    maxWidth: wp(150),
    textAlign: 'center',
    color: '#000',
  },
});

export default styles;
