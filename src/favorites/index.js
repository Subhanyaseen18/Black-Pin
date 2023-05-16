import {
  View,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Text from '../CustomText';
import {styles} from './style';
import {
  useGetMethodQuery,
  usePostMethodMutation,
  useGetMethodMutation,
} from '../../Apis/CallApis/index';
import {useSelector} from 'react-redux';
import {Imageurl} from '../../Apis/CallApis/URL';
import {ActivityIndicator} from 'react-native-paper';
import {useIsFocused} from '@react-navigation/native';
export default function Favorites(props) {
  const focus = useIsFocused();
  const {token} = useSelector(state => state.user);
  const [newdata, resp] = usePostMethodMutation();
  const [removedata, removeresp] = usePostMethodMutation();
  const [data, setdata] = useState([]);
  const [demo, setdemo] = useState('');
  const handledata = async () => {
    const formdata = new FormData();
    formdata.append('skip', 0);
    formdata.append('take', 20);
    let senddata = {
      url: 'favourites_list',
      data: formdata,
      token: token,
    };
    const temp1 = await newdata(senddata).unwrap();
    setdata(temp1.data);
  };

  useEffect(() => {
    if (focus == true) {
      handledata();
    }
  }, [focus]);

  const handleremove = async id => {
    const formdata = new FormData();
    formdata.append('business_id', id);
    let removeitem = {
      url: 'remove_from_favourites',
      data: formdata,
      token: token,
    };

    const temp = await removedata(removeitem).unwrap();
    handledata();
  };

  return (
    <View style={styles.Container}>
      <View style={styles.Containerheading}>
        <Text style={styles.headingtext}>Favorites</Text>
        {data.length == 0 &&(<Text style={styles.Containerempty}>Empty favorites</Text>)}
        {resp.isLoading ? (
          <ActivityIndicator
            style={styles.indicator}
            animating={true}
            color="black"
            size={40}
          />
        ) : (
          <FlatList
            data={data}
            renderItem={item => {
              return (
                <ScrollView
                  showsHorizontalScrollIndicator={false}
                  horizontal={true}>
                  <View>
                    <View style={styles.Container1}>
                      <View style={styles.Containerflatlist}>
                        <View style={styles.Containerflatlistimg}>
                          <Image
                            style={styles.img}
                            source={{
                              uri: Imageurl + item.item.user_business.image,
                            }}
                          />
                        </View>
                        <View>
                          <Text style={styles.Containerflatlisttname}>
                            {item.item.user_business.name}
                          </Text>
                          <Text style={styles.Containerflatlistmsg}>
                            {item.item.msg}
                          </Text>
                        </View>
                      </View>
                      <TouchableOpacity
                        onPress={() => handleremove(item.item.business_id)}>
                        <View style={styles.Containerremove}>
                          <Image
                            style={styles.removeimg}
                            source={require('../../assets/image/removelogo.png')}
                          />
                          <Text style={styles.removetext}>Remove</Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                  </View>
                </ScrollView>
              );
            }}
          />
        )}
      </View>
    </View>
  );
}
