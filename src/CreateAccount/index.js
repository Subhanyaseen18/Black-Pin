import {
  View,
  TouchableOpacity,
  TextInput,
  Image,
  ScrollView,
  Linking,
  Alert,
} from 'react-native';
import React, { useState } from 'react';
import Text from '../CustomText';
import CheckBox from '@react-native-community/checkbox';
import { usePostMethodMutation } from '../../Apis/CallApis';
import ImagePicker from 'react-native-image-crop-picker';
import { styles } from './style';
import { Formik } from 'formik';
import * as yup from 'yup';
import { Signupurl } from '../../Apis/CallApis/URL';
import { ActivityIndicator, MD2Colors } from 'react-native-paper';
export default function CreateAccount({ navigation }) {
  const [stat, setstat] = useState()
  const [isSelected, setSelection] = useState(false);
  const [showpass, setshowpass] = useState(true);
  const [showpass1, setshowpass1] = useState(true);
  const [glryphoto, setglryphoto] = useState();
  const [image, setimage] = useState();
  const [type, settype] = useState('person');
  const [status, setstatus] = useState();
  const [newdata, res] = usePostMethodMutation();

  const handleAccount = async values => {
    setstat()
    const formdata = new FormData();
    formdata.append('image', {
      uri: glryphoto,
      name: 'image.png',

      type: 'image/png',
    });
    formdata.append('name', values.name);
    formdata.append('email', values.email);
    formdata.append('phone', values.number);
    formdata.append('password', values.password);
    formdata.append('type', type);

    let data = {
      url:Signupurl ,
      data: formdata,
    };

    let temp = await newdata(data).unwrap();
    setstat(temp.status)
    if (temp.status == 200) {
      navigation.navigate('OTP', {
        email: values.email,
      });
    }
    {
      temp.status == 400 && alert('The email has already been taken.');
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

    password: yup
      .string()

      .required('Please enter password')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*\/\.\(\)\,\_\"\'\:\;\?])(?=.{8,})/,
        'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character',
      ),
    confirmpassword: yup
      .string()
      .oneOf([yup.ref('password')], 'Passwords do not match')
      .required('Confirm password is required'),
  });

  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
        email: '',
        password: '',
        confirmpassword: '',
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
        <ScrollView showsHorizontalScrollIndicator={false} style={styles.Container}>
          <View style={styles.Containerimg}>
            <Image
              style={styles.logoimg}
              source={require('../../assets/image/logoblack.png')}
            />
          </View>
          <View style={styles.Containerheading}>
            <Text style={styles.headingtext}>Create Account</Text>
          </View>
          <View style={styles.Containerheading1}>
            <Text style={styles.headingtext1}>
              Enter fill the info below to continue
            </Text>
          </View>
          <View style={styles.Containercemra}>
            <Image
              style={styles.logoperson}
              source={require('../../assets/image/profilepic.png')}
            />

            <Image style={styles.logoperson} source={{ uri: glryphoto }} />

            <TouchableOpacity
              onPress={() => opengallery()}
              style={styles.logocemra}>
              <Image source={require('../../assets/image/cemra.png')} />
            </TouchableOpacity>
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
              source={require('../../assets/image/user.png')}
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
              source={require('../../assets/image/phone.png')}
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
              source={require('../../assets/image/sms.png')}
            />
          </View>
          {errors.email && touched.email && (
            <Text style={styles.eror}>{errors.email}</Text>
          )}
          {/* <Text style={styles.eror}>{status}</Text> */}
          <View style={styles.Containerheadingphone}>
            <Text style={styles.headingphonetext}>Password</Text>
          </View>
          <View style={styles.containerinputbox1}>
            <TextInput
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              style={styles.inputfullname}
              secureTextEntry={showpass}
              placeholder="Password"
              placeholderTextColor={'#0000004d'}></TextInput>
            <TouchableOpacity onPress={() => setshowpass(!showpass)}>
              <Image
                style={styles.imgmsg}
                source={require('../../assets/image/lock.png')}
              />
            </TouchableOpacity>
          </View>
          {errors.password && touched.password && (
            <Text style={styles.eror}>{errors.password}</Text>
          )}
          <View style={styles.Containerheadingphone}>
            <Text style={styles.headingphonetext}>Confirm Password</Text>
          </View>
          <View style={styles.containerinputbox1}>
            <TextInput
              onChangeText={handleChange('confirmpassword')}
              onBlur={handleBlur('confirmpassword')}
              value={values.confirmpassword}
              secureTextEntry={showpass1}
              style={styles.inputfullname}
              placeholder="Confirm Password"
              placeholderTextColor={'#0000004d'}></TextInput>
            <TouchableOpacity onPress={() => setshowpass1(!showpass1)}>
              <Image
                style={styles.imgmsg}
                source={require('../../assets/image/lock.png')}
              />
            </TouchableOpacity>
          </View>
          {errors.confirmpassword && touched.confirmpassword && (
            <Text style={styles.eror}>{errors.confirmpassword}</Text>
          )}
          {stat==400&&(
             <Text style={styles.eror}>Enter correct  email</Text>
          )}
          <View style={styles.containerkeep}>
            <View>
              <CheckBox
                value={isSelected}
                onValueChange={setSelection}
                style={styles.checkbox}
                tintColors={{ true: 'black', false: 'black' }}
              />
            </View>
            <View style={styles.Containertext}>
              <Text style={styles.ticktext}>I agree to</Text>

              <TouchableOpacity
                onPress={() => Linking.openURL('http://google.com')}>
                <Text style={styles.ticktextbold}>Terms & Conditions</Text>
              </TouchableOpacity>
              <Text style={styles.ticktext}>and</Text>
            </View>
          </View>
          <View style={styles.Containerticktext1}>
            <TouchableOpacity
              onPress={() => Linking.openURL('https://www.youtube.com/')}>
              <Text style={styles.ticktext1}>Privacy Policy.</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            disabled={isSelected == false}
            onPress={() => {
              handleSubmit();
            }}>
            <View style={styles.containerBtn}>
              <Text >
              {res.isLoading?(<ActivityIndicator  animating={true} color="white" size={30} />):(<Text style={styles.btntext}> Continue</Text>)}
              </Text>
            </View>
          </TouchableOpacity>
          <View style={styles.nextscrn}>
            <Text style={styles.nextscrn1}>Already have an account?</Text>

            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={styles.nextscrn2}>Login</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      )}
    </Formik>
  );
}
