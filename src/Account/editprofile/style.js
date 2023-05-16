import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {StyleSheet} from 'react-native';
import {COLORS} from '../../Colors/colors';

export const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: COLORS.White,
  },
  Containerbackarrow: {
    marginTop: hp(3),
    flexDirection: 'row',
  },

  Containerheading: {
    flexDirection: 'row',
    marginTop: hp(2),
    marginLeft: wp(5),
  },
  headingtext: {
    fontFamily: 'Gilroy-Black',
    fontSize: wp(6),
    color: COLORS.Black,
  },
  imgline: {
    width: wp(90),
    alignSelf: 'center',
    height: hp(0.1),
    tintColor: COLORS.Black,
    opacity: 0.2,
    marginTop: hp(2),
  },
  Containercemra: {
    marginLeft: wp(33),
    marginTop: hp(3),
  },
  logoperson: {
    position: 'absolute',
    width: wp(34),
    height: wp(34),
    borderRadius: 150,
    overflow: 'hidden',
  },
  logocemra: {
    marginTop: wp(22),
    position: 'absolute',
    marginLeft: wp(27),
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
  containerBtn: {
    // marginTop: hp(3),
    borderRadius: hp(1),
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: COLORS.Black,
    marginTop: hp(3),
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
  eror: {
    marginLeft: wp(6),
    // marginTop: hp(1),
    fontSize: hp(1.5),
    fontWeight: 'bold',
    color: COLORS.Red,
    width: wp(92),
  },
 
  modal2headingtext: {
    marginLeft: wp(2),
    fontFamily: 'Gilroy-Bold',
    fontSize: wp(6.5),
    color: COLORS.JungleGreen,
    marginTop: hp(3),
  },
  modal2text: {
    textAlign: 'center',
    fontFamily: 'Gilroy-ThinItalic',
    marginTop: hp(3),
    fontSize: wp(4.5),

    color: COLORS.Shark,
    lineHeight: wp(7),
  },
  containerBtnmodal: {
    marginTop: hp(7),
    borderRadius: hp(1),
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: COLORS.JungleGreen,
    width: wp(40),
    alignSelf: 'center',
  },
  btntextmodal: {
    fontSize: wp(4),
    marginTop: hp(2.5),
    marginBottom: hp(2.5),
    color: COLORS.White,
    fontWeight: '500',
  },
  modal2text: {
    textAlign: 'center',
    fontFamily: 'Gilroy-ThinItalic',
    marginTop: hp(3),
    fontSize: wp(4.5),
    marginLeft: wp(7),
    width: wp(70),
    color: COLORS.Shark,
    lineHeight: wp(7),
  },
  modal2img: {
    marginLeft: wp(3),
    marginTop: hp(3),
    alignSelf: 'center',
  },

  modal2headingtext: {
    marginLeft: wp(2),
    fontFamily: 'Gilroy-Bold',
    fontSize: wp(6.5),
    color: COLORS.JungleGreen,
    marginTop: hp(3),
  },
  modal1style: {
    backgroundColor: COLORS.Silvergrey,
    flex: 1,
    justifyContent: 'center',
    paddingTop: hp(10),
  },
  modal1style1: {
    // flex:1,
    backgroundColor: COLORS.White,
    height: hp(60),
    borderRadius: 20,
    // marginBottom: hp(2),
    width: wp(87),
    alignSelf: 'center',
    justifyContent: 'center',
  },
});
