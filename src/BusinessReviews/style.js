import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {StyleSheet} from 'react-native';
import { COLORS } from '../Colors/colors';

export const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: COLORS.White,
  },

  ContainerReview: {
    flexDirection: 'row',
    marginTop: hp(2),
  },
  ContainerReviewtext1: {
    color: '#808080',
    marginLeft: wp(4),
    marginRight: wp(40),
    fontFamily: 'Gilroy-Bold',
    fontSize: wp(4.5),
  },
  ContainerReviewtext2: {
    color: COLORS.Black,
    fontFamily: 'Gilroy-Bold',
    fontSize: wp(4.5),
  },

  imgstr: {
    marginLeft: wp(3),
  },

  modal1style: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    flex: 1,
    justifyContent: 'center',
    paddingTop: hp(10),
    // backgroundColor: '#F5F5F5',
  },
  modal1style1: {
    backgroundColor: COLORS.White,
    height: hp(55),
    borderRadius: 20,
    marginBottom: hp(7),
    width: wp(90),
    alignSelf: 'center',
  },

  modalboxinput: {},
  input: {
    textAlignVertical: 'top',
    marginLeft: wp(3),
    color: COLORS.Black,
    backgroundColor: COLORS.Wild_Sand,
    flexDirection: 'row',
    width: wp(82),
    alignSelf: 'center',
    borderRadius: 10,
    marginTop: hp(2),
    height: hp(20),
    textAlign: 'left',
  },

  modal1heading: {
    marginLeft: wp(3),
    marginTop: hp(2),
    flexDirection: 'row',
  },
  modal1heading1: {
    fontWeight: '700',
    color: COLORS.Rhino,
    fontSize: wp(5),
  },
  modal1btnview1: {
    marginTop: hp(3),
    borderRadius: 20,
    backgroundColor: 'black',
    width: wp(82),
    alignSelf: 'center',
  },

  modal1btn1text: {
    fontSize: hp(2),
    marginTop: hp(2),
    marginBottom: hp(3),
    marginLeft: wp(12),
    marginRight: wp(12),
    color: COLORS.White,
    fontWeight: '600',
    alignSelf: 'center',
  
  },
  imgline: {
    width: wp(80),
    alignSelf: 'center',
    height: hp(0.1),
    tintColor: 'rgba(0, 0, 0, 0.2)',
    marginTop: hp(2),
  },
  imgcros: {
    alignSelf: 'flex-end',
    opacity: 0.4,
    marginLeft: wp(50),
    tintColor:COLORS.Shark,
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
    marginTop: hp(2),
  },
  Containericon: {
    marginTop: hp(3),
    flexDirection: 'row',
  },
  icon: {
    fontSize: wp(8),
    marginLeft: wp(3),
  
  },
  indtext: {
    fontSize: wp(7),
    marginLeft: wp(22),
    color: COLORS.MySin,
    fontFamily: 'Gilroy-Bold',
  },
  iconstar: {
    fontSize: wp(4),
  },
  Containericonperson: {
    marginLeft: wp(3),
    flexDirection: 'row',
  },
  indtextjosh: {
    fontSize: wp(4),

    marginLeft: wp(2),
    color: COLORS.MySin,
    fontFamily: 'Gilroy-Bold',
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
  modal2text: {
    textAlign: 'center',
    fontFamily: 'Gilroy-ThinItalic',
    marginTop: hp(3),
    fontSize: wp(4.5),

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
    color:COLORS.White,
    fontWeight: '500',
  },

  Containerflatlist: {
    marginTop: hp(2.4),
    backgroundColor:COLORS.Grey,
    borderRadius: 10,
    marginRight: wp(3),
    marginLeft: wp(3),
  },
  Containerflatlistimg: {
    flexDirection: 'row',
    marginLeft: wp(3),
    marginTop: hp(2),
    marginBottom: hp(2),
    marginRight: wp(3),
  },
  Containerflatlisttname: {
    marginLeft: wp(3),
    fontFamily: 'Gilroy-ExtraBold',
    fontSize: wp(4),
  },
 tickimg: {
  height:hp(18.5),
  width:wp(40)
 },
  stylereviewtext: {
    color: COLORS.Black,
    // opacity:0.5,
    fontFamily: 'Gilroy-Medium',
    marginLeft: wp(4),
    marginBottom: hp(2),
  },
  footer: {
    marginBottom: hp(10),
  },
  indicator: {
    alignSelf: 'center',
    height: hp(60),
    justifyContent: 'center',
  },
});
