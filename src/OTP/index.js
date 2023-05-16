import {View, Image, TouchableOpacity, TextInput} from 'react-native';
import React, {useState} from 'react';
import Text from '../CustomText';
import {styles} from './style';
import {Formik} from 'formik';
import * as yup from 'yup';
import {usePostMethodMutation} from '../../Apis/CallApis';
import {ActivityIndicator, MD2Colors} from 'react-native-paper';
import { Resendemailverificationotp ,Verifyemailurl } from '../../Apis/CallApis/URL';
export default function OTP({navigation, route}) {
  const [newdata, res] = usePostMethodMutation();
  const [stat, setstat] = useState();

  const [resenddata, resp] = usePostMethodMutation();
  const handleresend = async () => {
    const formdata = new FormData();
    formdata.append('email', route.params.email);
    const resend = {
      url:Resendemailverificationotp,
      data: formdata,
    };
    let temp = await resenddata(resend).unwrap();
  };

  const handlebtn = async values => {
    setstat();
    const formdata = new FormData();
    formdata.append('email', route.params.email);
    formdata.append('otp', values.OTP);

    const datasend = {
      url:Verifyemailurl ,
      data: formdata,
    };

    let apidata = await newdata(datasend).unwrap();
    setstat(apidata.status);
    if (apidata.status == 200) {
      navigation.navigate('Login');
    }
  };

  const Loginvalidation = yup.object().shape({
    OTP: yup.string().required('Please enter otp'),
  });

  return (
    <Formik
      initialValues={{OTP: ''}}
      validateOnMount={true}
      onSubmit={values => handlebtn(values)}
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
        <View style={styles.Container}>
          <View style={styles.Backarow}>
            <TouchableOpacity
              onPress={() => navigation.navigate('CreateAccount')}>
              <Image source={require('../../assets/image/backarrow.png')} />
            </TouchableOpacity>
            <Text style={styles.headingtext}>OTP Verification</Text>
          </View>
          <View style={styles.Containerheading1}>
            <Text style={styles.headingtext1}>
              We have send an OTP code to you email {'\n'} address. Please enter
              that code below to verify.
            </Text>
          </View>
          <View style={styles.Containerheadingemail}>
            <Text style={styles.headingemailtext}>Enter OTP</Text>
          </View>

          <View style={styles.containerinputbox}>
            <TextInput
              keyboardType="numeric"
              onChangeText={handleChange('OTP')}
              onBlur={handleBlur('OTP')}
              value={values.OTP}
              style={styles.inputuseremail}
              placeholder="Enter OTP"
              placeholderTextColor={'#0000004d'}></TextInput>
            <Image
              style={styles.imgmsg}
              source={require('../../assets/image/sms.png')}
            />
          </View>
          {stat == 400 && <Text style={styles.eror}>Enter correct otp</Text>}
          <View style={styles.nextscrn}>
            <Text style={styles.nextscrn1}>didn’t recieve code?</Text>

            <TouchableOpacity onPress={() => handleresend()}>
              <Text style={styles.nextscrn2}>Resend</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            disabled={!isValid}
            onPress={() => {
              handleSubmit();
            }}>
            <View style={styles.containerBtn}>
              {res.isLoading ? (
                <ActivityIndicator animating={true} color="white" size={30} />
              ) : (
                <Text style={styles.btntext}>Verify</Text>
              )}
            </View>
          </TouchableOpacity>
        </View>
      )}
    </Formik>
  );
}
