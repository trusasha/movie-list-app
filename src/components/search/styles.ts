import { StyleSheet } from 'react-native';
import { hp, fs, wp } from '../../services/responsive-manager';

const styles = StyleSheet.create({
  search: {
    position: 'relative',
    marginTop: hp(20),
    marginBottom: hp(30),
  },
  image: {
    position: 'absolute',
    left: wp(16),
    top: hp(5),
    objectFit: 'contain',
    aspectRatio: 1,
    width: wp(24),
  },
  input: {
    borderWidth: 1,
    borderColor: 'rgba(17, 17, 17, 0.08)',
    borderRadius: 20,
    color: '#111',
    padding: wp(16),
    paddingLeft: wp(55),
    fontSize: fs(16),
  },
});

export default styles;
