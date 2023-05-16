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
  Header: {
    flexDirection: 'row',
    marginTop: hp(5),
    marginLeft: wp(5),
    marginBottom: hp(2),
  },
  imgprofile: {
    borderRadius: 150,
    height: wp(26),
    width: wp(26),
  },
  Header1: {
    marginTop: hp(3),
    marginLeft: wp(3),
  },
  Headername: {
    color: COLORS.Black,
    fontFamily: 'Gilroy-Bold',
    fontSize: wp(6),
  },
  Headeremail: {
    color: COLORS.Black,
    opacity: 0.3,
    fontFamily: 'Gilroy-Bold',
  },
  imgline: {
    height: hp(0.1),
    width: wp(90),
    marginLeft: wp(5),
    marginBottom: hp(3),
  },
  Containerflat: {
    flexDirection: 'row',
    backgroundColor: COLORS.Grey,
    width: wp(90),
    borderRadius: 20,
    alignSelf: 'center',
    height: hp(8),
    marginBottom: hp(2),
    flex:1,
    // justifyContent:'center',
    alignItems:'center'
  },
  flatlogo: {
    height: wp(11),
    width: wp(11),
    marginLeft: wp(3),
    //  flex:1,
  },
  flatname: {
    color: COLORS.Black,
   
    marginLeft: wp(2),
    fontFamily: 'Gilroy-Bold',
    fontSize: wp(5),
  },
  flatlogomore: {
    position: 'absolute',
   
    height: hp(2.5),
    width: wp(3),
    marginLeft: wp(83),
  },
});
