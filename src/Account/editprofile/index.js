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
  Modal,
} from 'react-native';

import React, {useState, useEffect} from 'react';
import Text from '../../CustomText';
import {styles} from './style';
import {Formik} from 'formik';
import * as yup from 'yup';
import {usePostMethodMutation} from '../../../Apis/CallApis/index';
import {useDispatch, useSelector} from 'react-redux';
import {Imageurl} from '../../../Apis/CallApis/URL';
import ImagePicker from 'react-native-image-crop-picker';
import {profiledata} from '../../../Apis/Store/Slice';
import {useIsFocused} from '@react-navigation/native';
import { Updateprofileurl } from '../../../Apis/CallApis/URL';
import {ActivityIndicator} from 'react-native-paper';
export default function Editprofile(props) {
  const {user} = useSelector(state => state.user);
  const {token} = useSelector(state => state.user);

  const [newdata, res] = usePostMethodMutation();
  const [glryphoto, setglryphoto] = useState();
  const [modal, setmodal] = useState(false);
  const dispatch = useDispatch();
  const focus = useIsFocused();
  const handleAccount = async values => {
    try {
      const formdata = new FormData();
      formdata.append('image', {
        uri: glryphoto,
        name: 'image.png',
        type: 'image/png',
      });
      formdata.append('name', values.name);
      formdata.append('email', values.email);
      formdata.append('phone', values.number);

      let data = {
        url: Updateprofileurl,
        data: formdata,
        token: token,
      };

      let temp = await newdata(data).unwrap();
      if (temp.status == 200) {
        dispatch(profiledata(temp.data))
        setmodal(true)
      }
    } catch (error) {
    }
   
  };

  const opengallery = async () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      setglryphoto(image.path);
    });
  };

  const CreateAccount = yup.object().shape({
    name: yup
      .string()

      .required('Please enter name'),
    number: yup
      .string()
      // .min(8,)
      .required('Please enter number'),
    email: yup
      .string()
      .matches(
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1}\.[0-9]{1}\.[0-9]{1}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{1,}))$/,
        'Invalid email',
      )

      .required('Please enter email'),
  });

  return (
    <Formik
      initialValues={{
        name: user?.name,
        number: user?.phone,
        email: user?.email,
      }}
      validateOnMount={true}
      onSubmit={values => {
        handleAccount(values);
      }}
      validationSchema={CreateAccount}>
      {({
        handleChange,
        handleBlur,
        handleSubmit,

        isValid,
        values,
        touched,
        errors,
      }) => (
        <View style={styles.Container}>
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
                      source={require('../../../assets/image/tick.png')}
                    />
                    <Text style={styles.modal2headingtext}>Sucessful</Text>
                  </View>
                  <Text style={styles.modal2text}>
                  Your profile info was updated successfuly
                  </Text>
                  <TouchableOpacity onPress={() => setmodal(false)}>
                    <View style={styles.containerBtnmodal}>
                      <Text style={styles.btntextmodal}>OK</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>
          </View>
          <View style={styles.Containerbackarrow}>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Accountprofile')}>
              <Image source={require('../../../assets/image/backarrow.png')} />
            </TouchableOpacity>
            <View style={styles.Containerheading}>
              <Text style={styles.headingtext}>Edit Profile</Text>
              <TouchableOpacity>
                <Image
                  style={styles.headingimage}
                  source={require('../../../assets/image/search.png')}
                />
              </TouchableOpacity>
            </View>
          </View>
          <Image
            style={styles.imgline}
            source={require('../../../assets/image/Line.png')}
          />
          <View style={styles.Containercemra}>
            <Image
              style={styles.logoperson}
              source={{uri: Imageurl + user?.image}}
            />
            <Image style={styles.logoperson} source={{uri: glryphoto}} />

            <TouchableOpacity
              onPress={() => opengallery()}
              style={styles.logocemra}>
              <Image source={require('../../../assets/image/cemra.png')} />
            </TouchableOpacity>
            {/* <Text style={styles.username}>{user.user.name}</Text> */}
          </View>
          <View style={styles.Containerheadingname}>
            <Text style={styles.headingemailtext}>Full Name</Text>
          </View>
          <View style={styles.containerinputbox1}>
            <TextInput
              onChangeText={handleChange('name')}
              onBlur={handleBlur('name')}
              value={values.name}
              style={styles.inputfullname}
              placeholder="Full Name"
              placeholderTextColor={'#0000004d'}></TextInput>
            <Image
              style={styles.imgmsg}
              source={require('../../../assets/image/user.png')}
            />
          </View>
          {errors.name && touched.name && (
            <Text style={styles.eror}>{errors.name}</Text>
          )}
          <View style={styles.Containerheadingphone}>
            <Text style={styles.headingphonetext}>Phone Number</Text>
          </View>
          <View style={styles.containerinputbox1}>
            <TextInput
              keyboardType="numeric"
              onChangeText={handleChange('number')}
              onBlur={handleBlur('number')}
              value={values.number}
              style={styles.inputfullname}
              placeholder="Phone Number"
              placeholderTextColor={'#0000004d'}></TextInput>
            <Image
              style={styles.imgmsg}
              source={require('../../../assets/image/phone.png')}
            />
          </View>
          {errors.number && touched.number && (
            <Text style={styles.eror}>{errors.number}</Text>
          )}
          <View style={styles.Containerheadingphone}>
            <Text style={styles.headingphonetext}>Email</Text>
          </View>
          <View style={styles.containerinputbox1}>
            <TextInput
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              style={styles.inputfullname}
              placeholder="Email"
              placeholderTextColor={'#0000004d'}></TextInput>
            <Image
              style={styles.imgmsg}
              source={require('../../../assets/image/sms.png')}
            />
          </View>
          {errors.email && touched.email && (
            <Text style={styles.eror}>{errors.email}</Text>
          )}
          <TouchableOpacity onPress={() => handleSubmit()}>
          <View style={styles.containerBtn}>
              <Text>
                {res.isLoading ? (
                  <ActivityIndicator animating={true} color="white" size={30} />
                ) : (
                  <Text style={styles.btntext}>Update Profile</Text>
                )}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      )}
    </Formik>
  );
}
