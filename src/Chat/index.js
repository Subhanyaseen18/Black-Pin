import {
  View,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
  StatusBar,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Text from '../CustomText';
import {styles} from './style';
import {
  usePostMethodMutation,
  useGetMethodMutation,
} from '../../Apis/CallApis/index';
import {useSelector} from 'react-redux';          
import {useIsFocused} from '@react-navigation/native';
import {ActivityIndicator} from 'react-native-paper';
import {Imageurl} from '../../Apis/CallApis/URL';

export default function Chat(props) {
  const focus = useIsFocused();
  const {token} = useSelector(state => state.user);
  const [readdata, readres] = useGetMethodMutation();
  const [removedata, removeresp] = usePostMethodMutation();
  const [data, setData] = useState([]);
  const handledata = async () => {
    try {
      let senddata = {
        url: `get-current-chats`,
        token: token,
      };
      const temp = await readdata(senddata).unwrap();
      if (temp.status == 200) {
        setData(temp.data.data);
      }
    } catch (error) {
      console.log('error', error);
    }
  };

  useEffect(() => {
    if (focus == true) {
      handledata();
    }
  }, [focus]);
  const handleremove = async (chat_id, deleted_by) => {
    try {
      const formdata = new FormData();
      formdata.append('chat_id', chat_id);
      formdata.append('deleted_by', deleted_by);
      let removeitem = {
        url: `delete-chat`,
        data: formdata,
        token: token,
      };

      const temp = await removedata(removeitem).unwrap();
      handledata();
    } catch (error) {
      console.log('error', error);
    }
  };
  return (
    <View style={styles.Container}>
      <StatusBar translucent backgroundColor="white" barStyle="dark-content" />
      <View style={styles.Containerheading}>
        <Text style={styles.headingtext}>Chat</Text>
        <TouchableOpacity>
          <Image
            style={styles.headingimage}
            source={require('../../assets/image/search.png')}
          />
        </TouchableOpacity>
      </View>
      {data.length == 0 && (
        <Text style={styles.Containerempty}>Empty chat</Text>
      )}
      {readres.isLoading ? (
        <ActivityIndicator
          style={styles.indicator}
          animating={true}
          color="black"
          size={40}
        />
      ) : (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={data}
          renderItem={item => {
            return (
              <ScrollView
                showsHorizontalScrollIndicator={false}
                horizontal={true}>
                <TouchableOpacity
                  onPress={() =>
                    props.navigation.navigate('chattext', {
                      image: item.item.receiver.image,
                      name: item.item.receiver.name,
                      chat_id: item.item.last_message.chat_id,
                    })
                  }>
                  <View style={styles.Containerflatlist}>
                    <View style={styles.Containerflatlistimg}>
                      <Image
                        style={styles.img}
                        source={{uri: Imageurl + item.item.receiver.image}}
                      />
                    </View>
                    <View>
                      <Text style={styles.Containerflatlisttname}>
                        {item.item.receiver.name}
                      </Text>
                    </View>
                    <View style={styles.Containerflatlistmsg}>
                      {item.item.sender.id ==
                        item.item.last_message.sender_id && (
                        <Text style={styles.flatlistyoumsg}> You: </Text>
                      )}
                      <Text style={styles.flatlistmsg}>
                        {item.item.last_message.message}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() =>
                    handleremove(item.item.id, item.item.sender.id)
                  }>
                  <View style={styles.Containerremove}>
                    <Image
                      style={styles.removeimg}
                      source={require('../../assets/image/removelogo.png')}
                    />
                    <Text style={styles.removetext}>Remove</Text>
                  </View>
                </TouchableOpacity>
              </ScrollView>
            );
          }}
        />
      )}
    </View>
  );
}
