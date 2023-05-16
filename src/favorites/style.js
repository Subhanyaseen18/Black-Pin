import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {StyleSheet} from 'react-native';
import {COLORS} from '../Colors/colors';
export const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: COLORS.White,
  },
  Containerheading: {
    marginTop: hp(5),
  },
  headingtext: {
    fontFamily: 'Gilroy-Black',
    fontSize: wp(6),
    color: COLORS.Black,
    marginLeft: wp(4),
  },
  Containerflatlist: {
    marginTop: hp(2.4),
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    borderRadius: 10,
    marginRight: wp(3),
    flexDirection: 'row',
    width: wp(92),
    marginLeft: wp(4),
  },
  Container1: {
    flexDirection: 'row',
  },
  Containerflatlistimg: {
    flexDirection: 'row',
    marginLeft: wp(3),
    marginTop: hp(1),
    marginBottom: hp(1),
    marginRight: wp(3),
  },
  Containerflatlisttname: {
    marginLeft: wp(3),
    fontFamily: 'Gilroy-ExtraBold',
    fontSize: wp(4),
    color: COLORS.Black,
    marginTop: hp(1.2),
  },
  img: {
    height: wp(20),
    width: wp(20),
    borderRadius: 20,
  },

  removeimg: {
    height: hp(3),
    width: wp(7),
    marginTop: hp(3),
  },
  Containerremove: {
    backgroundColor: COLORS.Red,
    marginTop: hp(2.5),
    borderRadius: 20,
    marginRight: wp(2),
    width: wp(20),
    alignItems: 'center',
    marginLeft: wp(1),
    height: hp(11),
  },
  removetext: {
    color: COLORS.White,
  },
  emptymsg: {
    fontSize: wp(30),
  },
  indicator: {
    alignSelf: 'center',
    height: hp(80),
    justifyContent: 'center',
    position: 'absolute',
  },
  Containerempty: {
    color: COLORS.Black,
    fontFamily: 'Gilroy-Bold',
    alignSelf: 'center',
    marginTop: hp(43),
    justifyContent: 'center',
  },
});
