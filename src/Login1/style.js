import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {StyleSheet} from 'react-native';
import { COLORS } from '../Colors/colors';
export const styles = StyleSheet.create({

  Container: {
  flex:1,
    backgroundColor: COLORS.Black,
    
  },
  Containerimg: {
    
    alignItems: 'center',
    marginTop: hp('15%'),
  },
  logoimg: {
    height: hp('6%'),
    width: wp(40),
  },

  Containerweltext: {
    alignItems: 'center',
    marginTop: hp(7),
  },
  weltext: {
    color: COLORS.White,
    
    fontSize: wp('6%'),
    fontFamily:'Gilroy-Heavy'
  },
  Containertext: {
    flex:1,
    alignItems: 'center',
    marginTop: hp(3),
  },
  text: {
    fontFamily:"Gilroy-LightItalic",
    marginTop: hp('0.1%'),
    fontWeight: '400',
    fontSize: wp(3.5),
    color: COLORS.Mercury,
    fontSize:wp(3.5),
    textAlign: 'center',
    width: wp(80),
    lineHeight:wp(5)
  },
  Containerblock: {
  
    backgroundColor:COLORS.White,
    borderRadius:wp(2),
    width:wp(94),
    alignSelf:'center',
    justifyContent:'center',
    marginBottom:hp(2),
    height:hp(20)
  },

  Containerowner: {
    borderRadius: 15,
    borderWidth: wp(0.5),
    width:wp(90),
    alignSelf:'center',
    // marginTop: hp(3),
    alignItems: 'center',
    marginBottom:hp(2)
  },
  Containerownetext: {
    color: COLORS.Black,
    marginBottom: hp(2),
    marginTop: hp(2),
    fontFamily:"Gilroy-ExtraBold",
    fontSize:wp(4)
  },
  Containeruser: {
    borderRadius: 15,
   
    width:wp(90),
    alignSelf:'center',
    // marginTop: hp(2),
    alignItems: 'center',
    // marginBottom: hp(3),
    backgroundColor: COLORS.Black,
  },
  Containerusertext: {
    color: COLORS.White,
    marginTop: hp(2),
    fontFamily:"Gilroy-ExtraBold",
    marginBottom: hp(2),
    fontSize:wp(4)
  },
});
