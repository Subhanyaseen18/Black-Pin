import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
  } from 'react-native-responsive-screen';
  import {StyleSheet} from 'react-native';
  import { COLORS } from '../../Colors/colors';
  export const styles = StyleSheet.create({
    Container: {
      flex: 1,
      backgroundColor: COLORS.White,
    }, Backarow: {
        paddingLeft: wp(1),
        flexDirection: 'row',
        marginTop:hp(2)
      
      },headingtext:{
        marginTop:hp(2),
        // marginLeft:wp(1),
        fontFamily: 'Gilroy-ExtraBold',
        fontSize: wp(6),
        color: COLORS.Black,
      }, Containerheading1: {
        marginLeft: wp(6),
        marginTop: hp(1),
      },
      headingtext1: {
        color: COLORS.Black,
        opacity:0.3,
    fontFamily:'Gilroy-Bolditalic',
        fontSize: wp(3.8),
        lineHeight:hp(3),
        fontWeight:'400',marginTop:hp(2)
      },
      Containerheadingemail: {
        marginLeft: wp(6),
        marginTop: hp(4),
      },
      headingemailtext: {
        fontFamily: 'Gilroy-Bold',
        fontSize: wp(4.5),
        color: COLORS.Black,
      },
      containerinputbox: {
      
        marginTop: hp(0.5),
    width:wp(90),
        borderRadius: 20,
      alignSelf:'center',
        flexDirection: 'row',
        backgroundColor: COLORS.Wild_Sand,
        height:hp(7)
        // borderWidth: 1,
      },
    
      imgmsg: {
        marginTop: hp(2.2),
       
        marginRight: hp(2),
        tintColor: COLORS.Shark,
      },
      inputuseremail: {
        marginLeft: hp(2),
        width: wp(77),
        color:COLORS.Black,
        fontWeight: '500',
      
      }, 
      containerBtn: {
       
        borderRadius: hp(1),
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor:  COLORS.Black,

    width: wp(90),
    alignSelf: 'center',
    height: hp(7),
    justifyContent: 'center',
      },
      btntext: {
        fontSize: wp(4.5),

        color:  COLORS.White,
        fontWeight: '500',
      },
      eror: {
        marginLeft:wp(6),
        // marginTop: hp(1),
        fontSize: hp(1.5),
        fontWeight: 'bold',
        color: COLORS.Red,
        width:wp(92)
      },
      containerbtn:{
        marginTop: hp(5),
      }
})