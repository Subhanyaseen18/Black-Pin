import {
  View,
  StatusBar,
  TextComponent,
  TextInput,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
  ImageBackground,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import React, {useState} from 'react';
import Text from '../CustomText';
import {styles} from './style';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import {useGetMethodMutation} from '../../Apis/CallApis/index';
import {updateToken} from '../../Apis/Store/Slice';
import {useDispatch, useSelector} from 'react-redux';
import {Imageurl, Logouturl} from '../../Apis/CallApis/URL';
export default function Account(props) {
  const {user} = useSelector(state => state.user);
  const {token} = useSelector(state => state.user);
  const [newdata, res] = useGetMethodMutation();
  const data = [
    {
      img: require('../../assets/image/profilelog.png'),
      name: 'My Profile',
      imgmore: require('../../assets/image/imgmore.png'),
    },
    {
      img: require('../../assets/image/cardslogo.png'),
      name: 'Manage Cards',
      imgmore: require('../../assets/image/imgmore.png'),
    },
    {
      img: require('../../assets/image/voucherslogo.png'),
      name: 'Vouchers',
      imgmore: require('../../assets/image/imgmore.png'),
    },
    {
      img: require('../../assets/image/reviewslogo.png'),
      name: 'Reviews',
      imgmore: require('../../assets/image/imgmore.png'),
    },
    {
      img: require('../../assets/image/settinglogo.png'),
      name: 'Settings',
      imgmore: require('../../assets/image/imgmore.png'),
    },
    {
      img: require('../../assets/image/logoutlogo.png'),
      name: 'Logout',
      imgmore: require('../../assets/image/imgmorered.png'),
    },
  ];
  const dispatch = useDispatch();
  const handlebtn = async index => {
    if (index == 5) {
      try {
        let senddata = {
          url: Logouturl,
          token: token,
        };
        const temp = await newdata(senddata).unwrap();

        if (temp.status == 200) {
          navigation.replace('Login');
        }
      } catch (error) {}
      dispatch(updateToken(null));
    }
  };
  const handeprofile = index => {
    if (index == 0) {
      props.navigation.navigate('Accountprofile');
    }
  };

  return (
    <View style={styles.Container}>
      <View style={styles.Header}>
        <Image
          style={styles.imgprofile}
          source={{uri: Imageurl + user?.image}}
        />
        <View style={styles.Header1}>
          <Text style={styles.Headername}>{user?.name}</Text>
          <Text style={styles.Headeremail}>{user?.email}</Text>
        </View>
      </View>
      <Image
        style={styles.imgline}
        source={require('../../assets/image/Line.png')}
      />
      <FlatList
        data={data}
        style={styles.MainContainer}
        renderItem={(item, index) => {
          return (
            <View>
              <TouchableOpacity
                onPress={() => {
                  handlebtn(item.index), handeprofile(item.index);
                }}
                style={styles.Containerflat}>
                <Image style={styles.flatlogo} source={item.item.img} />
                <Text style={styles.flatname}>{item.item.name}</Text>
                <Image style={styles.flatlogomore} source={item.item.imgmore} />
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
}
