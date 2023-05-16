import { View, Image, TouchableOpacity, TextInput } from 'react-native';
import React, { useState } from 'react';
import Text from '../CustomText';
import { styles } from './style';
import * as yup from 'yup';
import { Formik } from 'formik';
import { usePostMethodMutation } from '../../Apis/CallApis';
import { Setnewpasswordurl} from '../../Apis/CallApis/URL';
import { ActivityIndicator, MD2Colors } from 'react-native-paper';

export default function Reset({ navigation, route }) {

  const [newdata, res] = usePostMethodMutation();
  const [showpass, setshowpass] = useState(true)
  const [showpass1, setshowpass1] = useState(true)
  const Resetpassword = yup.object().shape({

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

  const handleAccount = async (values) => {

    const formdata = new FormData();
    formdata.append('email', route.params.email)
    formdata.append('new_password', values.password)
    formdata.append('new_password_confirmation', values.confirmpassword)

    let data = {
      url:Setnewpasswordurl,
      data: formdata
    }

    let apidata = await newdata(data).unwrap();

    if (apidata.status == 200) {
      navigation.navigate('Login')
    }
  }

  return (
    <Formik
      initialValues={{
        password: '',
        confirmpassword: '',
      }}
      validateOnMount={true}
      onSubmit={values => {
        handleAccount(values);
      }}
      validationSchema={Resetpassword}>
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
              onPress={() =>navigation.navigate('Forgot')}>
              <Image source={require('../../assets/image/backarrow.png')} />
            </TouchableOpacity>
            <Text style={styles.headingtext}>Reset Password</Text>
          </View>
          <View style={styles.Containerheading1}>
            <Text style={styles.headingtext1}>
              Please enter your new passwork below.
            </Text>
          </View>
          <View style={styles.Containerheadingemail}>
            <Text style={styles.headingemailtext}>New Password</Text>
          </View>

          <View style={styles.containerinputbox}>
            <TextInput
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              secureTextEntry={showpass}
              style={styles.inputuseremail}
              placeholder="New Password"
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

          <View style={styles.Containerheadingemail}>
            <Text style={styles.headingemailtext}>Confirm New Password</Text>
          </View>

          <View style={styles.containerinputbox1}>
            <TextInput
              onChangeText={handleChange('confirmpassword')}
              onBlur={handleBlur('confirmpassword')}
              value={values.confirmpassword}
              secureTextEntry={showpass1}
              style={styles.inputuseremail}
              placeholder="Confirm New Password"
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
<View style={styles.Containerbtn}>
          <TouchableOpacity onPress={() => handleSubmit()} >
            <View style={styles.containerBtn}>
            {res.isLoading?(<ActivityIndicator animating={true} color="white" size={30} />):(<Text style={styles.btntext}>Create New Password</Text>)}
            </View>
          </TouchableOpacity>
          </View>
        </View>
      )}
    </Formik>
  );
}
