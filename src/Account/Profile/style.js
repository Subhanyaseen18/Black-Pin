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
  editprofilelogo: {
    marginTop: hp(2.8),
    height: wp(4),
    width: wp(4),
    marginLeft: wp(52),
  },
  editprofileContainer: {
    flexDirection: 'row',
  },
  editprofiletext: {
    marginTop: hp(2.5),
    marginLeft: wp(1.5),
    fontSize: wp(4),
    fontFamily: 'Gilroy-MediumItalic',
    textDecorationLine: 'underline',
    textDecorationColor: COLORS.Black,
    color: 'black',
  },

  Containercemra: {
    alignSelf: 'center',
    // marginLeft: wp(-30),
  },
  logoperson: {
    width: wp(34),
    height: wp(34),
    borderRadius: 150,
    overflow: 'hidden',
  },
  username: {
    marginTop: hp(2),
    fontFamily: 'Gilroy-ExtraBold',
    fontSize: wp(5),
    alignSelf: 'center',
  },
  imgline: {
    height: hp(0.1),
    width: wp(110),
    marginLeft: wp(5),
    marginBottom: hp(3),
    marginTop: hp(5),
  },
  Container1: {
    flexDirection: 'row',
    marginTop: hp(2),
  },
  Container1num: {
    backgroundColor: COLORS.Grey,
    borderRadius: 10,
    marginLeft: hp(2),
    height: hp(20),
    width: wp(45),
    justifyContent: 'center',
  },
  Container1email: {
    backgroundColor: COLORS.Grey,
    marginLeft: hp(1),
    borderRadius: 10,
    height: hp(20),
    width: wp(45),
    // flex:1,
    // alignItems: 'center',
    // width: wp(92),
    justifyContent: 'center',
  },
  imgcall: {
    width: wp(7),
    height: wp(7),
    margin: wp(5.3),
  },
  imgmsg: {
    // marginTop: hp(-1),
    width: wp(17),
    height: wp(17),
    margin: wp(3),
  },
  Container1numimg: {
    backgroundColor: COLORS.Mercury,
    borderRadius: 150,
    width: wp(17),
    margin: wp(3),
  },
  phonetext: {
    fontFamily: 'Gilroy-ExtraBold',
    fontSize: wp(4),
    color: COLORS.Black,
    marginLeft: hp(1),
  },
  emailtext: {
    marginLeft: hp(1),
    fontFamily: 'Gilroy-ExtraBold',
    fontSize: wp(4),
    color: COLORS.Black,
  },
  phonenum: {
    marginTop: hp(1),
    marginLeft: hp(1),
    fontFamily: 'Gilroy-MediumItalic',
    marginBottom: hp(1.5),
  },
  email: {
    marginLeft: hp(1),
    marginTop: hp(1),
    fontFamily: 'Gilroy-MediumItalic',
    marginBottom: hp(1.5),
  },
  passwordtext: {
    marginLeft: hp(1),
    fontFamily: 'Gilroy-ExtraBold',
    fontSize: wp(4),
    color: COLORS.Black,
    // marginTop: hp(2),
  },
  password: {
    marginTop: hp(1),
    marginLeft: hp(1),
    fontFamily: 'Gilroy-MediumItalic',
  },
  Container1imgmsg: {
    marginLeft: hp(11.5),
  },
  Container2: {
    height: hp(15),
    marginTop: hp(1),
    flexDirection: 'row',
    backgroundColor: COLORS.Grey,
    marginLeft: hp(2),
    borderRadius: 10,
    alignItems: 'center',
    width: wp(92),
    justifyContent: 'center',
  },
  modal1style: {
    backgroundColor: COLORS.Silvergrey,
    flex: 1,
    justifyContent: 'center',
    paddingTop: hp(10),
    paddingBottom:hp(20),
    justifyContent:'center'
  },
  modal1style1: {
    // flex: 1,
    backgroundColor: COLORS.White,
    borderRadius: 20,
   height:hp(65),
    width: wp(87),
    alignSelf: 'center',
  },

  modalboxinput: {
    // flex:1,
    // height:hp(7),
    flexDirection: 'row',
    textAlignVertical: 'top',
    color: COLORS.Black,
    backgroundColor: '#F5F5F5',
    flexDirection: 'row',

    alignSelf: 'center',
    borderRadius: 10,
    marginTop: hp(5),
  },
  input: {
    width: wp(75),
    marginLeft: wp(1),
    fontFamily: 'Gilroy-MediumItalic',
  },

  modal1heading: {
    marginLeft: wp(4),
    marginTop: hp(2),
    flexDirection: 'row',
  },
  modal1heading1: {
    fontWeight: '700',
    color: COLORS.Rhino,
    fontSize: wp(5),
  },
  modal1btnview1: {
  
    marginTop: hp(2),
    borderRadius: 20,
    backgroundColor: COLORS.Black,
    width: wp(82),
    alignSelf: 'center',
    justifyContent: 'center',
    height: hp(6),
  },

  modal1btn1text: {
    fontSize: hp(2),

    color: COLORS.White,
    fontWeight: '600',
    alignSelf: 'center',
  },
  imgline: {
    width: wp(90),
    alignSelf: 'center',
    height: hp(0.1),
    tintColor: COLORS.Grey,
    marginTop: hp(2),
  },
  imgcros: {
    alignSelf: 'flex-end',
    opacity: 0.4,
    marginLeft: wp(35),
    tintColor: COLORS.Shark,
  },
  imgmodalstr: {
    alignSelf: 'center',
    marginTop: hp(2),
  },
  textreview: {
    marginLeft: wp(4),
    fontFamily: 'Gilroy-Bold',
    color: COLORS.Black,
    fontSize: wp(4),
    marginBottom: hp(-1.5),
    marginTop: hp(1),
  },
  imglock: {
    marginTop: hp(1.7),

    marginRight: hp(1),
    tintColor: COLORS.Shark,
  },
  eror: {
    marginLeft: wp(6),
    fontSize: hp(1.5),
    fontWeight: 'bold',
    color: COLORS.Red,
    width: wp(85),
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
    marginLeft: wp(7),
    width: wp(70),
    color: COLORS.Shark,
    lineHeight: wp(7),
  },
  containerBtn: {
    marginTop: hp(7),
    borderRadius: hp(1),
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: COLORS.JungleGreen,
    width: wp(40),
    alignSelf: 'center',
  },
  btntext: {
    fontSize: wp(4),
    marginTop: hp(2.5),
    marginBottom: hp(2.5),
    color: COLORS.White,
    fontWeight: '500',
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
  }, modal2style: {
    backgroundColor: COLORS.Silvergrey,
    flex: 1,
    justifyContent: 'center',
    paddingTop: hp(10),
    paddingBottom:hp(20),
    justifyContent:'center',
    // marginTop:hp(-2),
  },
  modal2style1: {
  
    backgroundColor: COLORS.White,
    borderRadius: 20,
   height:hp(53),
    width: wp(87),
    alignSelf: 'center',
    justifyContent:'center'
  },
});
