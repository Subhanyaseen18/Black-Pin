import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {StyleSheet} from 'react-native';
import { COLORS } from '../Colors/colors';
export const styles = StyleSheet.create({
  lineimg: {
    height: hp(0.1),
    tintColor: COLORS.Black,
    opacity: 0.10,
  },
  footer: {
    marginBottom: hp(20),
  },

  Containerflatlist: {
    marginTop: hp(1),
    backgroundColor: COLORS.Grey,
    
    marginLeft: wp(3),
    borderRadius: 20,
    marginBottom: hp(0.3),
    width: wp(45),
    flexShrink:1
  },
  boximg: {
    alignSelf: 'center',
    marginTop: hp(1.5),
 height:wp(40),
    width: wp(38),
    borderRadius: 10,
  },
  textvouchers: {
    color:COLORS.Red,
    fontFamily: 'Gilroy-Bold',
    fontSize: wp(3.2),
    marginLeft: wp(3),
    marginTop: hp(0.5),
  },
  textname: {
    fontFamily: 'Gilroy-Bold',
    fontSize: wp(4.2),
    marginLeft: wp(3),
    color:COLORS.Black,
  },
  Containerloc: {
    flexDirection: 'row',
    marginLeft: wp(3),
    marginTop: hp(0.5),
  },
  loclogo:{
    height:hp(2.5),
    width:wp(5)
      },

  textloc: {
    marginLeft: wp(1),
    width: wp(35),
    marginBottom:hp(1)
  },
});
