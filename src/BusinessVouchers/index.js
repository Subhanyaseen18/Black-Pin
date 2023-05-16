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
import {Businessvochersurl} from '../../Apis/CallApis/URL';
import {
  useGetMethodQuery,
  usePostMethodMutation,
  useGetMethodMutation,
} from '../../Apis/CallApis/index';
import {useSelector} from 'react-redux';
export default function BusinessVouchers(props) {
  const test = 38;
  const [data, setdata] = useState([]);
  const {token} = useSelector(state => state.user);

  const [readdata, res] = useGetMethodMutation();
  const handledata = async () => {
    let senddata = {
      url: Businessvochersurl + test,
      token: token,
    };
    const temp = await readdata(senddata).unwrap();

    setdata(temp.data);
  };
  useEffect(() => {
    handledata();
  }, []);

  return (
    <View style={styles.Container}>
      {res.isLoading ? (
        <ActivityIndicator
          style={styles.indicator}
          animating={true}
          color="black"
          size={40}
        />
      ) : (
        <FlatList
          data={data}
          ListFooterComponentStyle={styles.footer}
          showsVerticalScrollIndicator={false}
          ListFooterComponent={() => {
            <View style={styles.footer}></View>;
          }}
          renderItem={({item}) => {
            return (
              <View style={styles.Containerflatlist}>
                {item.type == 'percentage' ? (
                  <ImageBackground
                    resizeMode="cover"
                    style={styles.cardimg}
                    imageStyle={styles.ImageBackground}
                    source={require('../../assets/image/card1.png')}>
                    <View style={styles.Containerflatlisttext}>
                      <Text style={styles.flatlistremaning}>
                        Only 10 remaining
                      </Text>
                      <Text style={styles.flatlistprice}>${item.price}</Text>
                    </View>
                    <Text style={styles.flatlistoff}>{item.off}</Text>
                    <Text style={styles.flatlistreview}>{item.review}</Text>
                    <View style={styles.Containerbline}>
                      <Image
                        style={styles.flatlistline}
                        source={require('../../assets/image/linesss.png')}
                      />
                      <View>
                        <View style={styles.Containerbtn}>
                          <Text style={styles.btnbuytext}>Buy Now</Text>
                        </View>
                        <View style={styles.Containerexp}>
                          <Text style={styles.flatlistexptext}>
                            {/* {item.item.exptext} */}
                            Expires on:
                          </Text>
                          <Text style={styles.flatlistexpdate}>
                            {item.valid_to}
                          </Text>
                        </View>
                      </View>
                    </View>
                  </ImageBackground>
                ) : (
                  <ImageBackground
                    resizeMode="cover"
                    style={styles.cardimg}e
                    imageStyle={styles.ImageBackground}
                    source={require('../../assets/image/card12.png')}>
                    <View style={styles.Containerflatlisttext}>
                      <Text style={styles.flatlistremaning}>
                        Only 10 remaining
                      </Text>
                      <Text style={styles.flatlistprice}>${item.price}</Text>
                    </View>
                    <Text style={styles.flatlistoff}>{item.off}</Text>
                    <Text style={styles.flatlistreview}>{item.review}</Text>
                    <View style={styles.Containerbline}>
                      <Image
                        style={styles.flatlistline}
                        source={require('../../assets/image/linesss.png')}
                      />
                      <View >
                        <View style={styles.Containerbtn}>
                          <Text style={styles.btnbuytext}>Buy Now</Text>
                        </View>
                        <View style={styles.Containerexp}>
                          <Text style={styles.flatlistexptext}>
                            Expires on:
                          </Text>
                          <Text style={styles.flatlistexpdate}>
                            {item.valid_to}
                          </Text>
                        </View>
                      </View>
                    </View>
                  </ImageBackground>
                )}
              </View>
            );
          }}
        />
      )}
    </View>
  );
}
