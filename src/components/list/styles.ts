import { StyleSheet } from 'react-native';
import { fs, hp, wp } from '../../services/responsive-manager';

const styles = StyleSheet.create({
  list: {
    paddingHorizontal: wp(16),
    gap: wp(14),
  },
  columnWrapperStyle: {
    justifyContent: 'space-between',
  },
  item: {
    flex: 1,
    height: hp(230) + fs(32) * 1.2,
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginTop: hp(10),
  },
  image: {
    height: hp(210),
    width: wp(170),
    borderRadius: 20,
  },
  title: {
    flex: 1,
    marginTop: hp(11),
    fontSize: fs(20),
    lineHeight: fs(20) * 1.2,
    fontWeight: '700',
    color: '#111111',
  },
});

export default styles;
