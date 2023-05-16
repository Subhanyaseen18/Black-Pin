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
      
    }, Backarow: {
        paddingLeft: wp(1),
        marginTop:hp(2),
        flexDirection: 'row',
      
      },headingtext:{
        marginTop:hp(3),
        marginLeft:wp(7),
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
    fontFamily: 'Gilroy-Bolditalic',
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
       
        borderRadius: 20,
        flexDirection: 'row',
        backgroundColor: COLORS.Wild_Sand,
        width:wp(90),
        alignSelf:'center'
      },
    
      imgmsg: {
        marginTop: hp(2.2),
        marginRight: hp(2),
        tintColor:COLORS.Shark,
      },
      inputuseremail: {
        marginLeft: hp(2),
        width: wp(77),
        color:COLORS.Black,
        fontWeight: '500',
        marginTop: hp(0.5),
        marginBottom: hp(0.5),
      }, nextscrn: {
        flexDirection: 'row',
    
        
        marginTop: hp(3),
        alignSelf: 'flex-end',
        marginRight:wp(6)
      },
    
      nextscrn1: {
        fontWeight: '500',
        color:COLORS.Rhino,
        fontSize: wp(4),
        fontFamily:'Gilroy-Regular'
      },
      nextscrn2: {
        color:COLORS.Black,
       marginLeft:wp(1),
        fontSize: wp(4.2),
        fontFamily: 'Gilroy-ExtraBold',
       textDecorationLine:'underline',
       textDecorationColor:COLORS.Black,
       marginBottom:hp(12)
      },containerBtn: {
        
        borderRadius: hp(1),
        alignItems: 'center',
        borderRadius: 20,
        backgroundColor:COLORS.Black,
      width:wp(90),
      alignSelf:'center',
      height:hp(7),
      justifyContent:'center',

      },
      btntext: {
        fontSize: wp(4),
       
        color: COLORS.White,
        fontWeight: '500',
        
      },eror: {
        marginLeft:wp(6),
        fontSize: hp(1.5),
        fontWeight: 'bold',
        color: COLORS.Red,
        width:wp(92)
      },
})