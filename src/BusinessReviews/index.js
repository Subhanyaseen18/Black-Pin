import {
  View,
  StatusBar,
  TextComponent,
  TextInput,
  Image,
  ScrollView,
  TouchableOpacity,
  Modal,
  FlatList,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import React, {useState, useEffect} from 'react';
import Text from '../CustomText';
import {
  useGetMethodQuery,
  usePostMethodMutation,
  useGetMethodMutation,
} from '../../Apis/CallApis/index';
import {styles} from './style';
import {useSelector} from 'react-redux';
import {ActivityIndicator} from 'react-native-paper';
import { Busineesreviewurl,Addreviewurl } from '../../Apis/CallApis/URL';
export default function BusinessReviews(props) {
  const [id, setid] = useState();
  const [data, setData] = useState([]);
  const [review, setreview] = useState('');
  const [btndis, setbtndis] = useState(true)
  const {token} = useSelector(state => state.user);

  const [readdata, readres] = useGetMethodMutation();

  const handledata = async () => {
    setid(props.data);
   try {
    let senddata = {
      url:Busineesreviewurl+props.data ,
      token: token,
    };
    const temp = await readdata(senddata).unwrap();
   if(temp.status==200){
    setData(temp.data);
   }
   
   } catch (error) {
    console.log('error', error)
   }
  };

  useEffect(() => {
    handledata();
  }, []);

  const [newdata, res] = usePostMethodMutation();
  const handleadd = async () => {
   try {
    const formdata = new FormData();
    formdata.append('rating', modalind);
    formdata.append('review', review);
    formdata.append('business_id', id);
    let senddata = {
      url:Addreviewurl,
      data: formdata,
      token: token,
    };
    const temp1 = await newdata(senddata).unwrap();
   } catch (error) {
    console.log('error', error)
   }
  };

  const [modal, setmodal] = useState(false);
  const [showmodal, setshowmodal] = useState(false);
  const [modalind, setmodalind] = useState(0);

  const [reviewno, setreviewno] = useState(-1);

  const onhandle = () => {
    const temp1 = {
      review: review,
      rating: modalind,
    };
    setData([...data, temp1]);
  };
  return (
    <View style={styles.Container}>
      <View>
        <Modal transparent={true} visible={showmodal}>
          <StatusBar
            translucent
            backgroundColor="rgba(0, 0, 0, 0.4)"
            barStyle="light-content"
          />
          <View style={styles.modal1style}>
            <View style={styles.modal1style1}>
              <View style={styles.modal1heading}>
                <Text style={styles.modal1heading1}>Give review</Text>
                <TouchableOpacity onPress={() => setshowmodal(false)}>
                  <Image
                    style={styles.imgcros}
                    source={require('../../assets/image/cros.png')}
                  />
                </TouchableOpacity>
              </View>
              <Image
                style={styles.imgline}
                source={require('../../assets/image/Line.png')}
              />
              <View style={styles.Containericon}>
                {[...Array(5)].map((item, index) => {
                  return (
                    <View>
                      <TouchableOpacity onPress={() => setmodalind(index + 1)}>
                        <AntDesign
                          style={[
                            styles.icon,
                            {color: modalind > index ? '#FFB627' : 'grey'},
                          ]}
                          name="staro"
                        />
                      </TouchableOpacity>
                    </View>
                  );
                })}
                <Text style={styles.indtext}>{modalind}</Text>
              </View>
              <Text style={styles.textreview}>Review</Text>
              <View style={styles.modalboxinput}>
                <TextInput
                  onChangeText={e => setreview(e)}
                  placeholderTextColor="rgba(0, 0, 0, 0.7)"
                  multiline
                  style={styles.input}
                  placeholder="Type a review"></TextInput>
              </View>

              <TouchableOpacity
                disabled={review==''}
                onPress={() => {
                  setshowmodal(false), setmodal(true), onhandle();
                  // setreview('');
                  handleadd();
                }}>
                <View style={styles.modal1btnview1}>
                  <Text style={styles.modal1btn1text}>Submit</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>

      <View>
        <Modal transparent={true} visible={modal}>
          <StatusBar
            translucent
            backgroundColor="rgba(0, 0, 0, 0.4)"
            barStyle="light-content"
          />
          <View style={styles.modal1style}>
            <View style={styles.modal1style1}>
              <View style={styles.modal2img}>
                <Image
                  style={styles.tickimg}
                  source={require('../../assets/image/tick.png')}
                />
                <Text style={styles.modal2headingtext}>Sucessful</Text>
              </View>
              <Text style={styles.modal2text}>
                Your review was submitted {'\n'} successfuly
              </Text>
              <TouchableOpacity onPress={() => setmodal(false)}>
                <View style={styles.containerBtn}>
                  <Text style={styles.btntext}>OK</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>

      <View style={styles.ContainerReview}>
        <Text style={styles.ContainerReviewtext1}>
          Reviews ({reviewno + 1})
        </Text>
        <TouchableOpacity onPress={() => setshowmodal(true)}>
          <Text style={styles.ContainerReviewtext2}>Give review</Text>
        </TouchableOpacity>
      </View>

      <View>
        {readres.isLoading ? (
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
            renderItem={item => {
              setreviewno(item.index);

              let myStar = item.item.rating;

              return (
                <View style={styles.Containerflatlist}>
                  <View style={styles.Containerflatlistimg}>
                    <Image source={item.item.img} />
                    <View>
                      <Text style={styles.Containerflatlisttname}>
                        {item.item.name}
                      </Text>
                      <View style={styles.Containericonperson}>
                        {[...Array(5)].map((item, index) => {
                          return (
                            <AntDesign
                              style={[
                                styles.iconstar,
                                {
                                  color: myStar > index ? '#FFB627' : 'grey',
                                },
                              ]}
                              name="staro"
                            />
                          );
                        })}
                        <Text style={styles.indtextjosh}>{myStar}</Text>
                      </View>
                    </View>
                  </View>

                  <Text style={styles.stylereviewtext}>{item.item.review}</Text>
                </View>
              );
            }}
          />
        )}
      </View>
    </View>
  );
}
