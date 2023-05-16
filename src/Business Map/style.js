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
  Backarow: {
    marginTop: hp(3),
    marginLeft: wp(-1.5),
    flexDirection: 'row',
  },
  headingtext: {
    marginTop: hp(1.5),
    marginLeft: wp(1),
    fontFamily: 'Gilroy-ExtraBold',
    fontSize: wp(7),
    color: 'black',
  },
  Containericon: {
    flexDirection: 'row',
    position: 'absolute',
    marginLeft: wp(71),
    marginTop: hp(1.5),
  },
  search: {
    width: wp(69),
    marginLeft: wp(2),
  },
  containerinputbox: {
    width: wp(79),
    marginLeft: hp(1.5),
    borderRadius: 10,

    flexDirection: 'row',
    backgroundColor: COLORS.Wild_Sand,
    marginBottom: hp(1),
    marginTop:hp(-1)
  },
  imgsearch: {
    marginTop: hp(1.5),

    tintColor: COLORS.Black,
  },
  imgfilter: {
    marginLeft: wp(3),
    height: wp(12),
    borderRadius: 10,
    width: wp(12),
  },

  Container1: {
    flex: 1,
  },
  Container1headingtext: {
    fontFamily: 'Gilroy-Bold',
    fontSize: wp(5),
    color: COLORS.Black,
    marginTop: hp(1),
    marginLeft: wp(3.5),
  },
  Containerboxes: {
    flexDirection: 'row',

    marginTop: hp(1),
  },

  Containerflatlist: {
    backgroundColor: COLORS.Grey,
    marginLeft: wp(3),
    marginRight: wp(1.5),
    borderRadius: 20,
    marginBottom: hp(1),
    width: wp(62),
  },

  Containerloc: {
    flexDirection: 'row',
    marginLeft: wp(4.5),
    marginTop: hp(1),
    width: wp(45),
  },
  loclogo: {
    height: hp(2.5),
    width: wp(5),
  },
  boximg: {
    alignSelf: 'center',
    height: hp(17),
    width: wp(55),
    borderRadius: 10,
    marginTop: hp(1.5),
  },
  textvouchers: {
    color: COLORS.Red,
    fontFamily: 'Gilroy-Bold',
    fontSize: wp(3.2),
    marginLeft: wp(5),
    marginTop: hp(0.5),
  },
  textname: {
    fontFamily: 'Gilroy-Bold',
    fontSize: wp(4.2),
    marginLeft: wp(5),
    color: COLORS.Black,
  },
  textloc: {
    marginLeft: wp(1),
    marginBottom: hp(1),
  },
  map: {
    flex:1,
   
  },
  Containermapimg: {
    borderWidth: 1,
    height: wp(11),
    width: wp(13),
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: COLORS.Alto,
    borderBottomLeftRadius: 10,

    borderTopStartRadius: 10,
  },
  Containerblockimg: {
    borderWidth: 1,
    height: wp(11),
    width: wp(13),
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: COLORS.Alto,
    borderBottomRightRadius: 10,

    borderTopEndRadius: 10,
  },
  indicator: {
    alignSelf: 'center',
    height: hp(25),
    marginLeft: wp(45),
    justifyContent: 'center',
  },
});
