import { StyleSheet } from 'react-native';
import { fs, hp, wp } from '../../services/responsive-manager';

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp(4),
  },
  inCinemas: {
    fontSize: fs(12),
    lineHeight: fs(12) * 1.2,
    color: 'rgba(17, 17, 17, 0.5)',
  },
  dateWrapper: {
    backgroundColor: 'rgba(237, 199, 0, 0.2)',
    borderRadius: 10,
    paddingVertical: hp(4),
    paddingHorizontal: wp(8),
    marginLeft: wp(2),
  },
  date: {
    fontSize: fs(10),
    color: '#000',
  },
});

export default styles;
