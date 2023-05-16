import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  ImageBackground,
  StatusBar,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {ActivityIndicator} from 'react-native-paper';
import {useSelector} from 'react-redux';
import {useGetMethodMutation} from '../../Apis/CallApis/index';
import {Imageurl} from '../../Apis/CallApis/URL';
import Text from '../CustomText';
import {styles} from './style';
import {useIsFocused} from '@react-navigation/native';
import {Categryurl} from '../../Apis/CallApis/URL';
export default function Homescreen({navigation}) {
  const focus = useIsFocused();
  const [data, setdata] = useState([]);
  const [searchdata, setsearchdata] = useState([]);
  const [showsearch, setshowsearch] = useState([]);
  const {token} = useSelector(state => state.user);
  const [newdata, res] = useGetMethodMutation();

  const handledata = async () => {
    try {
      let senddata = {
        url: Categryurl,
        token: token,
      };
      const temp = await newdata(senddata).unwrap();
      if (temp.status == 200) {
        setsearchdata(temp.data);
        setdata(temp.data);
        setshowsearch(temp.data);
      }
    } catch (error) {
      console.log('error', error);
    }
  };
  useEffect(() => {
    if (focus == true) handledata();
  }, [focus]);

  const handlesearch = text => {
    const temp = searchdata.filter(items => {
      return items.name.toLowerCase().indexOf(text.toLowerCase()) > -1;
    });
    setshowsearch(temp);
  };

  return (
    <View style={styles.Container}>
      <StatusBar translucent backgroundColor="black" barStyle="light-content" />
      <View style={styles.Container1}>
        <Text style={styles.headingtext}>Welcom! John Legend</Text>
        <Text style={styles.headingtext1}>
          Select category to see the businesses near you
        </Text>
        <View style={styles.containerinputbox}>
          <TextInput
            onChangeText={e => {
              handlesearch(e);
            }}
            placeholderTextColor="rgba(255, 255, 255, 0.50)"
            style={styles.search}
            placeholder="Search for Category"></TextInput>
          <Image
            style={styles.imgsearch}
            source={require('../../assets/image/search.png')}
          />
        </View>
      </View>
      {res.isLoading ? (
        <ActivityIndicator
          style={styles.indicator}
          animating={true}
          color="black"
          size={40}
        />
      ) : (
        <FlatList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.FlatList}
          style={styles.MainContainer}
          numColumns={2}
          data={showsearch}
          renderItem={(item, index) => {
            return (
            <View style={styles.test}>
                <TouchableOpacity
                style={styles.Containerflatlist}
                onPress={() =>
                  navigation.navigate('BusinessMap', {
                    id: item.item.id,
                    name: item.item.name,
                  })
                }>
                <ImageBackground
                  imageStyle={styles.ImageBackground}
                  style={styles.img}
                  source={{uri: Imageurl + item.item.image}}>
                  <LinearGradient
                    colors={[
                      'transparent',
                      'transparent',
                      'rgba(0, 0, 0, 0.50)',
                    ]}
                    style={styles.linearGradient}>
                  <View style={styles.Containername}>
                  <Text style={styles.flatlisttname}>
                      {item.item.name}
                    </Text>
                  </View>
                  </LinearGradient>
                </ImageBackground>
              </TouchableOpacity>
            </View>
            );
          }}
        />
      )}
    </View>
  );
}
