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

  footer: {
    marginBottom: hp(10),
  },
  Containerflatlist: {
    marginTop: hp(2),
  },
  Containerflatlisttext: {
    flexDirection: 'row',
    marginTop: hp(2),
  },
  ImageBackground: {borderRadius: 20},
  cardimg: {
    alignSelf: 'center',
    flex: 1,
    borderRadius: 50,
  },
  flatlistremaning: {
    marginLeft: wp(6),
    fontSize: wp(3.2),
    color: COLORS.Red,
    fontFamily: 'Gilroy-Bold',
  },
  flatlistprice: {
    marginLeft: wp(38),
    fontSize: wp(6.5),
    color: COLORS.White,
    fontFamily: 'Gilroy-Bold',
  },
  flatlistoff: {
    marginLeft: wp(6),
    fontSize: wp(6.5),
    color: COLORS.White,
    fontFamily: 'Gilroy-Bold',
  },
  flatlistreview: {
    marginTop: hp(1),
    marginLeft: wp(6),
    fontSize: wp(3.3),
    background: COLORS.White,
    opacity: 0.7,
    fontFamily: 'Gilroy-Bolditalic',
  },
  Containerbline: {
    flexDirection: 'row',
    marginTop: hp(1),
  },
  flatlistline: {
    marginLeft: wp(6),
    height: hp(6),
    width: wp(33),
  },
  Containerbtn: {
    marginTop: hp(-1),
    marginLeft: wp(16),
    backgroundColor: COLORS.Black,
    borderRadius: 15,
    width: wp(34),
    alignItems: 'center',
    height: hp(6),
    justifyContent: 'center',
    marginRight: wp(3),
  },
  btnbuytext: {
    color: COLORS.White,
  },
  Containerexp: {
    marginTop: hp(1),
    flexDirection: 'row',
  },
  flatlistexptext: {
    color: COLORS.White,
    fontSize: wp(3.2),
  },
  flatlistexpdate: {
    color: COLORS.White,
    fontSize: wp(3.5),

    fontFamily: 'Gilroy-Bold',
  },
  indicator: {
    alignSelf: 'center',
    height: hp(50),
    justifyContent: 'center',
  },
});
