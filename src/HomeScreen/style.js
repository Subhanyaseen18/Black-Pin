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
  Container1: {
    paddingTop: hp(4),
    height: hp(33),
    backgroundColor: COLORS.Black,
    paddingLeft: wp(3),
  },
  headingtext: {
    color: 'rgba(255, 255, 255, 0.50)',
  },
  headingtext1: {
    color: 'white',
    fontSize: wp(6),
    fontFamily: 'Gilroy-RegularItalic',
  },
  search: {
    width: wp(84),
    marginLeft: wp(2),
    color: COLORS.White,
  },
  containerinputbox: {
    marginTop: hp(2),
    width: wp(94),
    borderRadius: 10,
    flexDirection: 'row',
    backgroundColor: COLORS.whitecrey,
  },

  imgsearch: {
    marginTop: hp(1.5),
    tintColor: COLORS.White,
  },

  Containerflatlist: {
    
  
    //  alignItems:'flex-end',
    alignContent: 'space-between',
    justifyContent: 'space-between',
    marginBottom: hp(3),
  },
  test:{
    flex: 1,
    // width:wp(60),
    alignItems: 'center',
    // marginLeft:wp(-12)
  },
  flatlisttname: {
    color: COLORS.White,
    fontFamily: 'Gilroy-Bolditalic',
    fontSize: wp(4),
  },
  Containername: {
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'flex-end',
    marginBottom:hp(1)
  },
  img: {
    height: wp(46),
    width: wp(44),
  },
  linearGradient: {
    flex: 1,
    borderRadius: 20,
  },
  MainContainer: {
    marginTop: hp(-9),
    flex: 1,
  },

  indicator: {
    alignSelf: 'center',
    height: hp(60),
    justifyContent: 'center',
  },
  Containerempty: {
    color: COLORS.Red,
  },
  ImageBackground: {
    borderRadius: 20,
    flex:1,
  },
});
