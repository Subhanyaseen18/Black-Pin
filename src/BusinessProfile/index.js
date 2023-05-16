import {
  View,
  StatusBar,
  TextComponent,
  TextInput,
  Image,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  FlatList,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Text from '../CustomText';
import {styles} from './style';
import {ActivityIndicator} from 'react-native-paper';
import {
  useGetMethodQuery,
  usePostMethodMutation,
  useGetMethodMutation,
} from '../../Apis/CallApis/index';
import {useSelector} from 'react-redux';
import BusinessVouchers from '../BusinessVouchers';
import BusinessReviews from '../BusinessReviews';
import BusinessLocation from '../BusinessLocation';
import {Imageurl} from '../../Apis/CallApis/URL';
import {useIsFocused} from '@react-navigation/native';
import {
  Addtofvrturl,
  Removetofvrturl,
  fvrtlisturl,
  Businessinfourl,
} from '../../Apis/CallApis/URL';

export default function BusinessProfile(props) {
  const focus = useIsFocused();
  const [id, setid] = useState();
  const [data, setdata] = useState([]);
  const {token} = useSelector(state => state.user);
  const [index, setindex] = useState(0);
  const [readdata, res] = useGetMethodMutation();
  const [newdata, resp] = usePostMethodMutation();
  const [removedata, removeresp] = usePostMethodMutation();
  const [fvrtlistdata, fvrtresp] = usePostMethodMutation();
  const [heartindex, setheartindex] = useState(false);
  const handledata = async () => {
    setid(props.route.params.id);

    try {
      let senddata = {
        url: Businessinfourl + props.route.params.id,
        token: token,
      };
      const temp = await readdata(senddata).unwrap();
      if (temp.status == 200) {
        setdata([temp.data]);
      }
    } catch (error) {
      console.log('error', error);
    }
  };
  useEffect(() => {
    handledata();
  }, []);
  const handlefvrtlist = async () => {
    try {
      const formdata = new FormData();
      formdata.append('skip', 0);
      formdata.append('take', 20);
      let fvrtdata = {
        url: fvrtlisturl,
        data: formdata,
        token: token,
      };
      const temp1 = await fvrtlistdata(fvrtdata).unwrap();
      if (temp1.status) {
        let values = temp1.data.map(value => value.business_id);
        let result1 = values.includes(props.route.params.id);
        if (result1 == true) {
          setheartindex(true);
        } else {
          setheartindex(false);
        }
      }
    } catch (error) {}
  };

  useEffect(() => {
    if (focus == true) {
      handlefvrtlist();
    }
  }, [focus]);

  const handlefvrt = async () => {
    try {
      const formdata = new FormData();
      formdata.append('business_id', props.route.params.id);
      let senddata = {
        url: Addtofvrturl,
        data: formdata,
        token: token,
      };

      const temp1 = await newdata(senddata).unwrap();
    } catch (error) {
      console.log('error', error);
    }
  };

  const handleremove = async () => {
    try {
      const formdata = new FormData();
      formdata.append('business_id', props.route.params.id);
      let removeitem = {
        url: Removetofvrturl,
        data: formdata,
        token: token,
      };
      const tempremove = await removedata(removeitem).unwrap();
    } catch (error) {
      console.log('error', error);
    }
  };

  return (
    <View style={styles.Container}>
      {fvrtresp.isLoading ? (
        <ActivityIndicator
          style={styles.indicator}
          animating={true}
          color="black"
          size={40}
        />
      ) : (
        <View style={styles.Container}>
          <StatusBar
            translucent
            backgroundColor="transparent"
            barStyle="light-content"
          />

        
            <View style={styles.Containerimg}>
              <ImageBackground
                style={styles.backimg}
                source={{uri: Imageurl + props.route.params.image}}>
                <View style={styles.Containerlogos}>
                  <TouchableOpacity
                    onPress={() => props.navigation.navigate('BusinessMap')}>
                    <View style={styles.Containerbackarrow}>
                      <Image
                        source={require('../../assets/image/backarrow.png')}
                      />
                    </View>
                  </TouchableOpacity>
                  {index == 0 ? (
                    <Text></Text>
                  ) : (
                    <TouchableOpacity
                      onPress={() => props.navigation.navigate('Chat')}>
                      <Image
                        style={styles.logo}
                        source={require('../../assets/image/chatlogo.png')}
                      />
                    </TouchableOpacity>
                  )}
                </View>
                <View style={styles.Containertest}>
                <View style={styles.Containerlocbox}>
                  <Text style={styles.Containerlocboxtext1}>
                    {props.route.params.name}
                  </Text>
                  <View style={styles.Containermappin}>
                    <Image
                      style={styles.mappinimg}
                      source={require('../../assets/image/mappin.png')}
                    />
                    <Text style={styles.Containerlocboxtext2}>
                      123 Main street, NYC
                    </Text>
                  </View>

                  <View style={styles.Containerheart}>
                    <TouchableOpacity
                      onPress={() => {
                        setheartindex(!heartindex);
                        {
                          heartindex == false ? handlefvrt() : handleremove();
                        }
                      }}>
                      <Image
                        style={[
                          styles.img,
                          {tintColor: heartindex == false ? 'black' : 'red'},
                        ]}
                        source={require('../../assets/image/redheart.png')}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
                </View>
              </ImageBackground>
            
          </View>

          <View style={[styles.ContainerBar]}>
            <TouchableOpacity
              onPress={() => {
                setindex(0);
              }}>
              <Text
                style={[
                  styles.ContainerBartext,
                  {color: index == 0 ? 'black' : '#808080'},
                ]}>
                Services
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setindex(1);
              }}>
              <Text
                style={[
                  styles.ContainerBartext,
                  {color: index == 1 ? 'black' : '#808080'},
                ]}>
                Vouchers
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setindex(2);
              }}>
              <Text
                style={[
                  styles.ContainerBartext,
                  {color: index == 2 ? 'black' : '#808080'},
                ]}>
                Reviews
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setindex(3);
              }}>
              <Text
                style={[
                  styles.ContainerBartext,
                  {color: index == 3 ? 'black' : '#808080'},
                ]}>
                Location
              </Text>
            </TouchableOpacity>
          </View>

          {index == 0 ? (
            <View style={styles.Container2}>
              <View>
                <FlatList
                  numColumns={2}
                  showsVerticalScrollIndicator={false}
                  ListFooterComponentStyle={styles.footer}
                  ListFooterComponent={() => {
                    <View style={styles.footer}></View>;
                  }}
                  data={data}
                  renderItem={item => {
                    return (
                      <View style={styles.Containerflatlist}>
                        <Image
                          style={styles.Containerflatlistimg}
                          source={{uri: Imageurl + item.item.image}}
                        />
                        <Text style={styles.Containerflatlisttname}>
                          {item.item.name}
                        </Text>

                        <Text style={styles.stylereviewtext}>
                          ${item.item.wallet}
                        </Text>
                      </View>
                    );
                  }}
                />
              </View>
            </View>
          ) : index == 1 ? (
            // <View>
            <BusinessVouchers data={id} />
          ) : // </View>
          index == 2 ? (
            <BusinessReviews data={id} />
          ) : index == 3 ? (
            <BusinessLocation data={id} />
          ) : (
            <Text></Text>
          )}
        </View>
      )}
    </View>
  );
}
