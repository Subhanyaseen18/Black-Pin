import {
  View,
  Image,
  TouchableOpacity,
  TextInput,
  StatusBar,
  ScrollView,
  FlatList,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Text from '../CustomText';
import {styles} from './style';
import BusinessGrid from '../BusinessGrid';
import MapView, {Marker} from 'react-native-maps';
import {useGetMethodQuery,usePostMethodMutation} from '../../Apis/CallApis/index';
import {Imageurl} from '../../Apis/CallApis/URL';
import {ActivityIndicator} from 'react-native-paper';
import {useSelector} from 'react-redux';
import { Businessmapurl } from '../../Apis/CallApis/URL';
export default function BusinessMap(props) {
 
  const [latitude, setlatitude] = useState(31.4911896)
  const [longitude, setlongitude] = useState(74.339497)
  const { token } = useSelector(state => state.user)

  const [id, setid] = useState();
  const [data, setdata] = useState([]);
  const [name, setname] = useState()
  const [newdata, res] = usePostMethodMutation();
  const handleadd = async () => {
 setname (props.route.params.name)
    setid(props.route.params.id);
   try {
    const formdata = new FormData();
    formdata.append('longitude',longitude);
    formdata.append('latitude', latitude);
    formdata.append('max_distance','8400')
    let senddata = {
      url:Businessmapurl,
      data: formdata,
      token:token,
    };

    const temp = await newdata(senddata).unwrap();
   if(temp.status==200){
    setdata(temp.data)
    setshowsearch(temp.data)
    setshowsearchdata(temp.data)
   }
   } catch (error) {
   }
  };
  
  useEffect(() => {
   handleadd()
  
  },[]);
  const [index, setindex] = useState(0);
  const [searchdata, setshowsearchdata] = useState([]);
  const [showsearch, setshowsearch] = useState([]);
  const [showindex, setshowindex] = useState(0);
  const handlesearch = text => {
    const temp = searchdata.filter(items => {
      return items.name.toLowerCase().indexOf(text.toLowerCase()) > -1;
    });
    setshowsearch(temp);
  };

  return (
    <View style={styles.Container}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <View style={styles.Backarow}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('Homescreen')}>
          <Image source={require('../../assets/image/backarrow.png')} />
        </TouchableOpacity>
        <Text style={styles.headingtext}>{name}</Text>
        <View style={styles.Containericon}>
          <TouchableOpacity
            style={[
              styles.Containermapimg,
              {backgroundColor: index == 0 ? 'black' : 'white'},
            ]}
            onPress={() => setindex(0)}>
            <Image
              style={[
                styles.mapimg,
                {tintColor: index == 0 ? 'white' : 'black'},
              ]}
              source={require('../../assets/image/map.png')}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.Containerblockimg,
              {backgroundColor: index == 1 ? 'black' : 'white'},
            ]}
            onPress={() => setindex(1)}>
            <Image
              style={[
                styles.mapimg,
                {tintColor: index == 1 ? 'white' : 'black'},
              ]}
              source={require('../../assets/image/4blocks.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.containerinputbox}>
        <TextInput
          onFocus={() => setshowindex(1)}
          onBlur={() => setshowindex(0)}
          onChangeText={e => {
            handlesearch(e);
          }}
          placeholderTextColor="grey"
          style={styles.search}
          placeholder="Search for Bussiness"></TextInput>
        <Image
          style={styles.imgsearch}
          source={require('../../assets/image/search.png')}
        />
        <Image
          style={styles.imgfilter}
          source={require('../../assets/image/filtericon.png')}
        />
      </View>
      {index == 0 ? (
        <View style={styles.Container1}>
          {showindex == 0 && (
            <MapView
              style={styles.map}
              initialRegion={{
                latitude: latitude,
                longitude: longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}>
              <Marker
                draggable
              
                coordinate={{
                  latitude: latitude,
                  longitude:longitude,
                }}
                pinColor='black'
              />
            </MapView>
          )}

          <View>
            <Text style={styles.Container1headingtext}>
              Featured Businesses
            </Text>
          </View>

          <View style={styles.Containerboxes}>
          {res.isLoading ? (
        <ActivityIndicator
          style={styles.indicator}
          animating={true}
          color="black"
          size={40}
        />
      ) : (
            <FlatList
              data={showsearch}
              showsHorizontalScrollIndicator={false}
              horizontal
              renderItem={item => {
                return (
                  <View style={styles.Containerflatlist}>
                    <TouchableOpacity
                      onPress={() =>
                        props.navigation.navigate('BusinessProfile',{
                          image:item.item.image,
                          id:item.item.id,
                          name:item.item.name,
                        })
                      }>
                      <Image
                        style={styles.boximg}
                        source={{uri: Imageurl + item.item.image}}
                      />
                      <Text style={styles.textvouchers}>
                        {item.item.vouchers}
                      </Text>
                      <Text style={styles.textname}>{item.item.name}</Text>
                      <View style={styles.Containerloc}>
                        <Image style={styles.loclogo} source={item.item.img2} />
                        <Text style={styles.textloc}>{item.item.loc}</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                );
              }}
            />
      )}
          </View>
        </View>
      ) : (
        <View>
          <BusinessGrid data={showsearch} {...props} />
        </View>
      )}
    </View>
  );
}
