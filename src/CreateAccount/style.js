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
  Containerimg: {
    alignItems: 'center',
    marginTop: hp(5),
  },
  logoimg: {
    height: hp(7),
    width: wp(45),
  },
  Containerheading: {
    marginLeft: wp(6),
    marginTop: hp(5),
  },
  headingtext: {
    fontFamily: 'Gilroy-ExtraBold',
    fontSize: wp(9),
    color: COLORS.Black,
  },
  Containerheading1: {
    marginLeft: wp(6),
    marginTop: hp(1),
  },
  headingtext1: {
    color: COLORS.Black,
    opacity: 0.3,
    fontFamily: 'Gilroy-Bolditalic',
    fontSize: wp(4),
    lineHeight: hp(3),
    fontWeight: '400',
  },
  Containerheadingname: {
    marginLeft: wp(6),
    marginTop: hp(22),
  },
  headingemailtext: {
    fontFamily: 'Gilroy-Bold',
    fontSize: wp(4.5),
    color: COLORS.Black,
  },
  containerinputbox1: {
    marginTop: hp(0.5),
    borderRadius: 20,
    height: hp(7),
    flexDirection: 'row',
    backgroundColor: COLORS.Wild_Sand,
    width: wp(90),
    alignSelf: 'center',
  },

  imgmsg: {
    marginTop: hp(2.2),
    marginRight: hp(2),
    tintColor: COLORS.Shark,
  },
  inputfullname: {
    marginLeft: hp(2),
    width: wp(77),
    color: COLORS.Black,
    fontWeight: '500',
  },
  Containerheadingphone: {
    marginLeft: wp(6),
    marginTop: hp(1.5),
  },
  headingphonetext: {
    fontFamily: 'Gilroy-Bold',
    fontSize: wp(4.5),
    color: COLORS.Black,
  },
  containerkeep: {
    marginLeft: wp(6),
    flexDirection: 'row',
  },
  ticktextbold: {
    color: 'black',
    fontWeight: '700',
    textDecorationLine: 'underline',
    textDecorationColor: COLORS.Black,
    fontFamily: 'Gilroy-ExtraBold',
  },
  ticktext: {
    marginLeft: wp(1),
    marginRight: wp(1),
    color: COLORS.Black,
  },
  Containertext: {
    alignItems: 'center',
    flexDirection: 'row',
    width: wp(90), //65
  },

  Containerticktext1: {
    marginLeft: wp(15),
    width: wp(25),
  },
  ticktext1: {
    color: COLORS.Black,
    fontWeight: '700',
    textDecorationLine: 'underline',
    textDecorationColor: COLORS.Black,
    fontFamily: 'Gilroy-ExtraBold',
    marginBottom: hp(3),
  },
  containerBtn: {
    borderRadius: hp(1),
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: COLORS.Black,
    width: wp(90),
    alignSelf: 'center',
    height: hp(7),
    justifyContent: 'center',
  },
  btntext: {
    fontSize: wp(4.5),
    color: COLORS.White,
    fontWeight: '500',
  },
  nextscrn: {
    flexDirection: 'row',
    marginBottom: hp(5),
    marginTop: hp(5),
    alignSelf: 'center',
  },

  nextscrn1: {
    fontWeight: '500',
    color: COLORS.Rhino,
    fontSize: wp(4),
    fontFamily: 'Gilroy-Regular',
  },
  nextscrn2: {
    color: 'black',
    marginLeft: wp(1),
    fontSize: wp(4.2),
    fontFamily: 'Gilroy-ExtraBold',
    textDecorationLine: 'underline',
    textDecorationColor: COLORS.Black,
  },
  Containercemra: {
    flex:1,
    marginLeft: wp(30),
    marginTop: hp(3),
    // position: 'absolute',
  },
  logoperson: {
    position: 'absolute',
    flex:1,
    width: wp(38),
    height: wp(38),
    borderRadius: 150,
    overflow: 'hidden',
  },
  logocemra: {
   
    marginTop: wp(24),
    position: 'absolute',
    marginLeft: wp(30),
  },
  eror: {
    marginLeft: wp(6),
    fontSize: hp(1.5),
    fontWeight: 'bold',
    color: COLORS.Red,
    width: wp(92),
  },
});
