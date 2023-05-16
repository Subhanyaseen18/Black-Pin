import {
  View,
  TouchableOpacity,
  Image,
  FlatList,
  TextInput,
  ScrollView,
  Modal,
  StatusBar,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Text from '../../CustomText';
import {styles} from './style';

import {
  usePostMethodMutation,
  useGetMethodMutation,
} from '../../../Apis/CallApis/index';
import {ActivityIndicator} from 'react-native-paper';
import {useSelector} from 'react-redux';
import {useIsFocused} from '@react-navigation/native';
import {Imageurl} from '../../../Apis/CallApis/URL';
const Chattext = props => {
  const focus = useIsFocused();
  const {token} = useSelector(state => state.user);
  const [Msg, setMsg] = useState('');
  const [allMessages, setAllMessages] = useState([]);
  const [data, setdata] = useState([]);
  const [showmodal, setshowmodal] = useState(false);
  const [itemId, setitemId] = useState();
  const [delIdperson, setdelIdperson] = useState();
  const [delIdbusiness, setdelIdbusiness] = useState();
  const [delId, setdelId] = useState();
  const [newdata, resp] = usePostMethodMutation();
  const [Addmsg, Addresp] = usePostMethodMutation();
  const [deltext, delresp] = usePostMethodMutation();
  const handledata = async () => {
    try {
      let senddata = {
        url: `get-chat?chat_id=${props.route.params.chat_id}`,
        token: token,
      };
      const temp = await newdata(senddata).unwrap();
      if (temp.status == 200) {
        const test1 = [...temp.data.message].reverse();

        setAllMessages(test1);
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

  const handleAddmsg = async () => {
    try {
      const formdata = new FormData();
      formdata.append('type', 'text');
      formdata.append('message', Msg);
      formdata.append('chat_id', props.route.params.chat_id);
      let Adddata = {
        url: `add-message`,
        token: token,
        data: formdata,
      };
      const temp = await Addmsg(Adddata).unwrap();
      handledata();
    } catch (error) {
      console.log('error', error);
    }
  };
  const handletextdel = async () => {
    {
      delIdperson.type == 'person'
        ? setdelId(delIdperson.id)
        : setdelId(delIdbusiness.id);
    }

    const formdata = new FormData();
    try {
      formdata.append('message_id', itemId);
      formdata.append('deleted_by', delId);
      let deldata = {
        url: `delete-message`,
        token: token,
        data: formdata,
      };
      const deltemp = await deltext(deldata).unwrap();
      handledata();
    } catch (error) {
      console.log('error', error);
    }
  };
  const handleMsg = () => {
    let data = {
      item: 'person',
      type: 'text',
      message: Msg,
      chat_id: props.route.params.chat_id,
    };
    setAllMessages([...allMessages, data]);
  };
  return (
    <View style={styles.Container}>
      <StatusBar
        translucent={true}
        backgroundColor="white"
        barStyle="dark-content"
      />
      <Modal transparent={true} visible={showmodal}>
        <StatusBar
          translucent
          backgroundColor="rgba(0, 0, 0, 0.4)"
          barStyle="light-content"
        />
        <View style={styles.modal1style}>
          <View style={styles.modal1style1}>
            <View style={styles.modal1heading}>
              <TouchableOpacity
                onPress={() => {
                  handletextdel(), setshowmodal(false);
                }}>
                <Text style={styles.modal1heading1}>Delete</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setshowmodal(false)}>
                <Image
                  style={styles.imgcros}
                  source={require('../../../assets/image/cros.png')}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <View style={styles.Containerprofile}>
        <TouchableOpacity onPress={() => props.navigation.navigate('Chat')}>
          <Image source={require('../../../assets/image/backarrow.png')} />
        </TouchableOpacity>

        <Image
          style={styles.profileimg}
          source={{uri: Imageurl + props.route.params.image}}
        />
        <Text style={styles.profilename}>{props.route.params.name}</Text>
      </View>
      <View style={styles.Container2}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={allMessages}
          renderItem={({item}) => {
            return (
              <View>
                <TouchableOpacity
                  onLongPress={() => {
                    setdelIdperson(item.sender),
                      setdelIdbusiness(item.receiver),
                      setitemId(item.id),
                      setshowmodal(true);
                  }}>
                  <View style={styles.Containerflatlist}>
                    {item.sender.type == 'person' ? (
                     <View style={styles.Containerflatlistperson}>
                       <Text  style={styles.flatlistpersontext}>
                        {item.message}
                      </Text>
                     </View>
                    ) : (
                      <Text style={styles.flatlistbusinessmsg}>
                        {item.message}
                      </Text>
                    )}
                  </View>
                </TouchableOpacity>
              </View>
            );
          }}
        />
      </View>
      <View style={styles.ContainerEntertext}>
        <TextInput
          value={Msg}
          multiline
          style={styles.TextInput}
          onChangeText={e => setMsg(e)}
          placeholder="Type here..."></TextInput>
        <TouchableOpacity
          disabled={Msg == ''}
          onPress={() => {
            handleAddmsg(), setMsg('');
            // handleMsg();
          }}>
          <Image
            style={styles.logosendmsg}
            source={require('../../../assets/image/sendmsglogo.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Chattext;
