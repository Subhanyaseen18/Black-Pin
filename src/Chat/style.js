import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: 'white',
  },
  Containerheading: {
    flexDirection: 'row',
    marginTop: hp(5),
    marginLeft: wp(5),
  },
  headingtext: {
    fontFamily: 'Gilroy-Black',
    fontSize: wp(6),
    color: 'black',
  },
  headingimage: {
    tintColor: 'black',
    marginLeft: wp(70),
  },
  Containerflatlist: {
    marginTop: hp(2.4),
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    borderRadius: 10,
    marginRight: wp(3),
    marginLeft: wp(4),
    flexDirection: 'row',
    width: wp(92),
  },
  Containerflatlistimg: {
    flexDirection: 'row',
    marginLeft: wp(3),
    marginTop: hp(1),
    marginBottom: hp(1),
    marginRight: wp(3),
  },
  Containerflatlisttname: {
    marginLeft: wp(3),
    fontFamily: 'Gilroy-ExtraBold',
    fontSize: wp(4),
    color: 'black',
    marginTop: hp(1.2),
  },
  img: {
    height: wp(20),
    width: wp(20),
    borderRadius: 20,
  },
  Containerflatlistmsg: {
    flexDirection:'row',
    marginTop:hp(4),
    marginLeft: wp(-9),
    // marginLeft: wp(3),

    // color: 'rgba(0, 0, 0, 0.5)',
    // fontFamily: 'Gilroy-Medium',
    // marginLeft: wp(4),
    // marginBottom: hp(2),
    // marginTop: hp(2),
  },
  Containerempty: {
    color: 'black',
    fontFamily: 'Gilroy-Bold',
    alignSelf: 'center',
    marginTop: hp(43),
    justifyContent: 'center',
  },
  indicator: {
    alignSelf: 'center',
    height: hp(80),
    justifyContent: 'center',
    position: 'absolute',
  },
  flatlistyoumsg:{
    // marginTop: hp(3),
    color: 'rgba(0, 0, 0, 0.5)',
    fontFamily: 'Gilroy-Bold',
  },flatlistmsg:{
     color: 'rgba(0, 0, 0, 0.5)',
    fontFamily: 'Gilroy-Medium',
    width:wp(50),
    marginBottom:hp(1)
  },
  Containerremove: {
    backgroundColor: 'red',
    marginTop: hp(2.5),
    borderRadius: 20,
    marginRight: wp(2),
    width: wp(20),
    alignItems: 'center',
    marginLeft: wp(1),
    height: hp(11),
  },
  removetext: {
    color: 'white',
  },
  emptymsg: {
    fontSize: wp(30),
  }, removeimg: {
    height: hp(3),
    width: wp(7),
    marginTop: hp(3),
  },
});
