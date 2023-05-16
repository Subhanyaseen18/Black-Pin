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
    marginTop: hp(6),
  },
  logoimg: {
    height: hp(7),
    width: wp(45),
  },
  Containerheading: {
    marginLeft: wp(6),
    marginTop: hp(2),
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
    color: 'rgba(0, 0, 0,0.3)',
    fontFamily: 'Gilroy-Bolditalic',
    fontSize: wp(3.8),
    lineHeight: hp(3),
    fontWeight: '400',
  },
  Containerheadingemail: {
    marginLeft: wp(6),
    marginTop: hp(4),
  },
  headingemailtext: {
    fontFamily: 'Gilroy-Bold',
    fontSize: wp(4.5),
    color: COLORS.Black,
  },
  containerinputbox: {
    marginTop: hp(0.5),
    borderRadius: 20,

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
  inputuseremail: {
    marginLeft: hp(2),
    width: wp(77),
    color: COLORS.Black,
    fontWeight: '500',
    height: hp(7),
  },
  Containerheadingpass: {
    marginLeft: wp(6),
    marginTop: hp(2),
  },
  headingepasstext: {
    fontFamily: 'Gilroy-Bold',
    fontSize: wp(4.5),
    color: COLORS.Black,
  },
  containerBtn: {
  
    borderRadius: hp(1),
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: 'black',
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
  containerforgot: {
   
    alignItems: 'flex-end',
    marginTop: hp(1),
    marginRight: hp(3),
  },
  forgotpass: {
    color: COLORS.Black,
    fontSize: wp(4.2),
    fontFamily: 'Gilroy-ExtraBold',
    textDecorationLine: 'underline',
    textDecorationColor: '#000000',
    marginLeft: wp(1),
  },
  imgfline: {
    width: wp(34),
    tintColor: COLORS.Black,
    height: hp(0.2),
  },
  containerkeep: {
    marginTop: hp(1),
    marginLeft: wp(6),
    flexDirection: 'row',
  },
  textkeep: {
    color: COLORS.Black,
    fontWeight: '500',
    marginTop: hp(0.7),
    marginBottom: hp(3),
  },

  containerorlogin: {
   
    marginTop: hp(3),
    flexDirection: 'row',
  },
  imgdotline: {
    marginRight: wp(4),
    marginLeft: wp(6),
    height: hp(0.2),
    marginTop: hp(1.5),
    width: wp(28),
  },
  imgdotline1: {
    marginRight: wp(5),
    marginLeft: wp(3),
    height: hp(0.2),
    marginTop: hp(1.5),
    width: wp(28),
  },
  orlogintext: {
    fontSize: wp(4),
    fontWeight: 'bold',
  },
  Containergoogle: {
    flex:1,
   
    flexDirection: 'row',
    marginTop: hp(3),
  },
  imggoogle: {
    marginRight: wp(5),
    marginLeft: wp(29),
    height: wp(16),
    width: wp(16),
  },
  imgfb: {
    
    marginRight: wp(3),
    marginLeft: wp(2),
    height: wp(16),
    width: wp(16),
  },
  nextscrn: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginBottom:hp(1)
  },

  nextscrn1: {
    fontWeight: '500',
    color: COLORS.Rhino,
    fontSize: wp(4),
    fontFamily: 'Gilroy-Regular',
    marginTop:hp(0.2)
  },
  nextscrn2: {
    color:  COLORS.Black,
    fontSize: wp(4.2),
    fontFamily: 'Gilroy-ExtraBold',
    textDecorationLine: 'underline',
    textDecorationColor: COLORS.Black,
    marginLeft:wp(1)
  },

  checkbox: {
    color: COLORS.Black,
  },
  eror: {
    marginLeft: wp(6),
    fontSize: hp(1.5),
    fontWeight: 'bold',
    color: 'red',
    width: wp(92),
  },
});
