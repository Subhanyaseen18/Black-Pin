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
    borderRadius: 20,
  },
  backimg: {
    width: wp(100),
    height: wp(70),
    borderRadius: 30,
   
  },

  Containerbackarrow: {
    marginTop: hp(6),
    marginLeft: wp(-0.5),
  },
  Containerlogos: {
    flexDirection: 'row',
  },
  logo: {
    marginTop: hp(6),
    marginLeft: wp(65),
    width: wp(18),
    height: wp(18),
  },
  Containerlocbox: {
    backgroundColor: COLORS.Silvergrey,
    borderRadius: 20,
    width: wp(93),
    alignSelf: 'center',
    justifyContent: 'center',
    marginBottom:hp(2)
  },
  Containertest: {
     flex:1,
     justifyContent:'flex-end',
  },
  Containermappin: {
    flexDirection: 'row',
    marginLeft: wp(3),
    marginTop: hp(1),
  },
  Containerlocboxtext1: {
    fontFamily: 'Gilroy-Bold',
    fontSize: wp(5.5),
    marginLeft: wp(5),
    color: COLORS.White,
    marginTop: hp(1.5),
  },
  Containerlocboxtext2: {
    color: COLORS.Silver,
    marginBottom: hp(1.5),
    fontSize: wp(4),
    marginLeft: wp(1),
  },
  mappinimg: {
    tintColor: COLORS.Silver,
    height: hp(3),

    marginLeft: wp(1.8),
    width: wp(5),
  },
  Containerheart: {
    position: 'absolute',
    marginLeft: wp(72),
    marginTop: hp(30),
  },
  ContainerBar: {
    flexDirection: 'row',
    marginLeft: wp(4),
    justifyContent: 'space-between',
    marginRight: wp(5),
    marginBottom: hp(1),
    marginTop: hp(1),
  },
  ContainerBartext: {
    fontFamily: 'Gilroy-Bold',
    fontSize: wp(4),
  },
  footer: {
    marginBottom: hp(50),
  },

  Containerflatlist: {
   
    backgroundColor: COLORS.Grey,
    borderRadius: 10,
    width: wp(45),
    alignSelf: 'center',
    // height: hp(25),
    marginLeft: wp(3),
    
  },
  Containerflatlistimg: {
    marginTop:hp(1),
    
    alignSelf: 'center',
    justifyContent:'center',
    height: wp(35),
    width: wp(40),
    borderRadius: 20,
  },
  Containerflatlisttname: {
    fontFamily: 'Gilroy-Bold',
    fontSize: wp(4.2),

    color: COLORS.Black,
    marginBottom: hp(1),
    marginTop: hp(1),
    marginLeft: wp(4),
  },

  stylereviewtext: {
    color: COLORS.Black,
    opacity: 0.5,
    fontFamily: 'Gilroy-Medium',
    marginLeft: wp(4),
    marginBottom:hp(1)
  },
  indicator: {
    alignSelf: 'center',
    height: hp(90),
    justifyContent: 'center',
  },
});
