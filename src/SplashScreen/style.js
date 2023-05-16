import { heightPercentageToDP as hp, widthPercentageToDP as wp  } from "react-native-responsive-screen";
import { StyleSheet } from "react-native";
import { COLORS } from "../Colors/colors";

export const styles=StyleSheet.create({
    Container:{
        flex:1,
        backgroundColor:COLORS.Black
    },
    Containerimg:{
alignItems:'center',
height:hp(100),
justifyContent:'center'


    },logoimg:{
        height: hp(8),
        width: wp(50), 
    },Containerprogres:{
        marginTop:hp(-20)
    }

})