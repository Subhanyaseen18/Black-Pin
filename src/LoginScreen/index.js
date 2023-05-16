import {
  View,
  Image,
  TouchableOpacity,
  StatusBar,
  TextInput,
  ScrollView
} from 'react-native';
import React, {useState} from 'react';
import {styles} from './style';
import Text from '../CustomText';
import {Formik} from 'formik';
import * as yup from 'yup';
import CheckBox from '@react-native-community/checkbox';
import {usePostMethodMutation} from '../../Apis/CallApis';
import {useDispatch} from 'react-redux';
import {updateToken, profiledata} from '../../Apis/Store/Slice';
import {ActivityIndicator, MD2Colors} from 'react-native-paper';
import { Loginurl } from '../../Apis/CallApis/URL';
export default function Login({navigation}) {
  const [isSelected, setSelection] = useState(false);
  const [showpassword, setshowpassword] = useState(true);
  const [type, settype] = useState('person');
  const [stat, setstat] = useState();
  const [newdata, res] = usePostMethodMutation();

  const dispatch = useDispatch();

  const handleLogin = async data => {
    setstat();
  
try {
  const formdata = new FormData();
  formdata.append('email', data.email); 
  formdata.append('password', data.password);
  formdata.append('type', type);
  let senddata = {
    url:'login',
    data: formdata,
  };
  const temp = await newdata(senddata).unwrap();
  setstat(temp.status);
  if (temp.status == 200) {
    dispatch(updateToken(temp.data.access_token));
    dispatch(profiledata(temp.data.user));
  }
} catch (error) {
  
}
  };

  const Loginvalidation = yup.object().shape({
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
  });

  return (
    <Formik
      initialValues={{email: '', password: ''}}
      validateOnMount={true}
      onSubmit={values => handleLogin(values)}
      validationSchema={Loginvalidation}>
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        isValid,
        values,
        touched,
        errors,
      }) => (
        <View  showsVerticalScrollIndicator={false}  style={styles.Container}>
          <StatusBar backgroundColor="white" barStyle="dark-content" />
          <View style={styles.Containerimg}>
            <Image
              style={styles.logoimg}
              source={require('../../assets/image/logoblack.png')}
            />
          </View>
          <View style={styles.Containerheading}>
            <Text style={styles.headingtext}>Login</Text>
          </View>
          <View style={styles.Containerheading1}>
            <Text style={styles.headingtext1}>
              Enter your email and password to continue.
            </Text>
          </View>
          <View style={styles.Containerheadingemail}>
            <Text style={styles.headingemailtext}>Email</Text>
          </View>
          <View style={styles.containerinputbox}>
            <TextInput
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              style={styles.inputuseremail}
              placeholder="Email"
              placeholderTextColor={'rgba(0, 0, 0,0.3)'}></TextInput>
            <Image
              style={styles.imgmsg}
              source={require('../../assets/image/sms.png')}
            />
          </View>
          {errors.email && touched.email && (
            <Text style={styles.eror}>{errors.email}</Text>
          )}
          <View style={styles.Containerheadingpass}>
            <Text style={styles.headingepasstext}>Password</Text>
          </View>
          <View style={styles.containerinputbox}>
            <TextInput
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              secureTextEntry={showpassword}
              style={styles.inputuseremail}
              placeholder="Password"
              placeholderTextColor={'rgba(0, 0, 0,0.3)'}></TextInput>
            <TouchableOpacity onPress={() => setshowpassword(!showpassword)}>
              <Image
                style={styles.imgmsg}
                source={require('../../assets/image/lock.png')}
              />
            </TouchableOpacity>
          </View>
          {errors.password && touched.password && (
            <Text style={styles.eror}>{errors.password}</Text>
          )}
          {stat==400&& <Text style={styles.eror}>Enter valid email and password</Text>}
          <View style={styles.containerkeep}>
            <CheckBox
              disabled={!isValid}
              value={isSelected}
              onValueChange={setSelection}
              style={styles.checkbox}
              tintColors={{true: 'black', false: 'black'}}
            />
            <Text style={styles.textkeep}> Keep me Logged In.</Text>
          </View>
          <TouchableOpacity
            // {isSelected==true&&}
            onPress={handleSubmit}>
            <View style={styles.containerBtn}>
              <Text>
                {res.isLoading ? (
                  <ActivityIndicator animating={true} color="white" size={30} />
                ) : (
                  <Text style={styles.btntext}> Login</Text>
                )}
              </Text>
            </View>
          </TouchableOpacity>
          <View style={styles.containerforgot}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Forgotemail')}>
              <Text style={styles.forgotpass}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.containerorlogin}>
            <Image
              style={styles.imgdotline}
              source={require('../../assets/image/dotline.png')}
            />
            <Text style={styles.orlogintext}>Or Login with</Text>
            <Image
              style={styles.imgdotline1}
              source={require('../../assets/image/dotline.png')}
            />
          </View>
          <View style={styles.Containergoogle}>
            <Image
              style={styles.imggoogle}
              source={require('../../assets/image/google.png')}
            />
            <Image
              style={styles.imgfb}
              source={require('../../assets/image/fb.png')}
            />
          </View>
          <View style={styles.nextscrn}>
            <Text style={styles.nextscrn1}>Don`t have an account?</Text>

            <TouchableOpacity
              onPress={() => navigation.navigate('CreateAccount')}>
              <Text style={styles.nextscrn2}>Create Account</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </Formik>
  );
}
