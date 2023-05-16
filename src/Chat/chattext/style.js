import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {StyleSheet} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { COLORS } from '../../Colors/colors';

export const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor:COLORS.White,
  },
  profileimg: {
    height: wp(16),
    width: wp(16),
    borderRadius: 150,
  },
  Containerprofile: {
    flexDirection: 'row',
    marginTop: hp(4),
  },
  profilename: {
    marginLeft: wp(3),
    fontFamily: 'Gilroy-ExtraBold',
    fontSize: wp(4),
    color: COLORS.Black,
    marginTop: hp(1.2),
  },
  ContainerEntertext: {
    flexDirection: 'row',
    width: wp(78),
    marginLeft: wp(2),
    position: 'absolute', 
    bottom: 5, 
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    borderRadius: 10,
  },
  logosendmsg: {
    height: wp(14),
    width: wp(14),
    borderRadius: 10,
    marginLeft: wp(2),
  },
  TextInput: {
  
    width: wp(77),
    marginLeft: wp(2),
  },
  Containerflatlist: {
    marginRight: wp(2),
   
    marginBottom: hp(3),
  },
  Containerflatlistperson: {
    alignSelf: 'flex-end',

    backgroundColor: COLORS.Black,
    borderBottomLeftRadius: 20,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    
    
  },
  flatlistpersontext:{
    marginRight: wp(2),
    paddingLeft: wp(5),
    paddingRight: 15,
    paddingBottom: hp(2),
    paddingTop: hp(2),
    fontFamily: 'Gilroy-bold',
    fontSize: wp(4.3),
    color:COLORS.White,
  },
  flatlistbusinessmsg: {
    justifyContent: 'center',
    borderWidth: 1,
    borderBottomRightRadius: 20,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    color: COLORS.Black,
    alignSelf: 'flex-start',
    marginLeft: wp(2),
    paddingLeft: wp(5),
    paddingRight: 15,
    paddingBottom: hp(2),
    paddingTop: hp(2),
    fontFamily: 'Gilroy-bold',
    fontSize: wp(4.3),
  },
  footer: {
    marginBottom: hp(20),
  },
  Container2: {
    marginBottom: hp(20),
  },
  modal1style: {
    backgroundColor: COLORS.Lightgrey,
    flex: 1,
    justifyContent: 'center',
    paddingTop: hp(10),
  },
  modal1style1: {
    backgroundColor:COLORS.White,
    height: hp(10),
    borderRadius: 20,
    marginBottom: hp(7),
    width: wp(30),
    alignSelf: 'center',
  },

  modal1heading: {
    marginTop: hp(3.2),
    flexDirection: 'row',
  },
  modal1heading1: {
    fontWeight: '700',
    color:COLORS.Rhino,
    fontSize: wp(5),
    marginLeft: wp(2),
  },

  imgcros: {
    alignSelf: 'flex-end',
    opacity: 0.4,
    marginLeft: wp(6),
    tintColor: COLORS.Shark,
    marginTop:hp(0.5)
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
    color:COLORS.MySin,
    fontFamily: 'Gilroy-Bold',
  },indicator: {
    alignSelf: 'center',
    height: hp(70),
    justifyContent: 'center',
  },
});
