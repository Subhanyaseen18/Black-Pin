import {
  View,
  StatusBar,
  TextComponent,
  TextInput,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React,{useState,useEffect}from 'react';
import Text from '../CustomText';
import {styles} from './style';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import {useGetMethodQuery, usePostApiMutation} from '../../Apis/CallApis/index';
import {Imageurl} from '../../Apis/CallApis/URL';
export default function BusinessGrid(props) {
  
  const [id, setid] = useState()
  const [data, setdata] = useState([]);
 
  const handledata = async () => {
    setdata(props.data)
  
  }

  useEffect(() => {
    handledata();
  });

  return (
    <View style={styles.Container}>
      <Image  style={styles.lineimg} source={require('../../assets/image/Line.png')}/>
      <FlatList
        ListFooterComponentStyle={styles.footer}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={() => {
          <View style={styles.footer}></View>;
        }}
        data={data}
        numColumns={2}
        renderItem={item => {
          return (
            <View style={styles.Containerflatlist}>
           <TouchableOpacity onPress={()=>props.navigation.navigate("BusinessProfile",{
             image:item.item.image,
             id:item.item.id,
             name:item.item.name
           })}>
           <Image style={styles.boximg}  source={{uri:Imageurl + item.item.image}} />
              <Text style={styles.textvouchers}>{item.item.vouchers}</Text>
              <Text style={styles.textname}>{item.item.name}</Text>
              <View style={styles.Containerloc}>
                <Image style={styles.loclogo} 
                
                source={item.item.img2}
                 />
                <Text style={styles.textloc}>{item.item.loc}</Text>
              </View>
           </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
}
