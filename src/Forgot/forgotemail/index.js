import {View, Image, TouchableOpacity, TextInput} from 'react-native';
import React,{useState} from 'react';
import Text from '../../CustomText';
import {styles} from './style';
import {Formik} from 'formik';
import * as yup from 'yup';
import { usePostMethodMutation } from '../../../Apis/CallApis';
import { ActivityIndicator, MD2Colors } from 'react-native-paper';
import { Forgotpasswordurl } from '../../../Apis/CallApis/URL';
export default function Forgotemail(props) {
  const [stat, setstat] = useState()
    const [newdata, res] = usePostMethodMutation();
    

 const   handlebtn =async(values)=>{
  setstat()
  const formdata = new FormData();
  formdata.append('email',values.email)
const temp ={
url:Forgotpasswordurl,
data:formdata
}
const data = await newdata(temp).unwrap();
setstat(data.status)
if(data.status==200){
    props.navigation.navigate('Forgot',{
        email: values.email,
    })
}
 }
const Loginvalidation = yup.object().shape({
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
    initialValues={{email: ''}}
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
        <TouchableOpacity onPress={() => props.navigation.navigate('Login')}>
          <Image source={require('../../../assets/image/backarrow.png')} />
        </TouchableOpacity>
        <Text style={styles.headingtext}>Forgot OTP Verification</Text>
      </View>
      <View style={styles.Containerheading1}>
        <Text style={styles.headingtext1}>
          We have send an OTP code to you email {'\n'} address. Please enter
          that code below to verify.
        </Text>
      </View>
      <View style={styles.Containerheadingemail}>
        <Text style={styles.headingemailtext}>Enter Email</Text>
      </View>

      <View style={styles.containerinputbox}>
        <TextInput
    //    keyboardType="numeric"
          onChangeText={handleChange('email')}
          onBlur={handleBlur('email')}
          value={values.email}
        
          style={styles.inputuseremail}
          placeholder="Enter email"
          placeholderTextColor={'#0000004d'}></TextInput>
        <Image
          style={styles.imgmsg}
          source={require('../../../assets/image/sms.png')}
        />
      </View>
      {errors.email && touched.email && (
            <Text style={styles.eror}>{errors.email}</Text>
          )}
{stat==400&&(
             <Text style={styles.eror}>Enter correct email</Text>
          )}
      <View style={styles.containerbtn}>
      <TouchableOpacity    
      onPress={() => {
        
   handleSubmit()
    }}
    >
        <View style={styles.containerBtn}>
        {res.isLoading?(<ActivityIndicator animating={true} color="white" size={30} />):(<Text style={styles.btntext}> Verify</Text>)}
        </View>
      </TouchableOpacity>
      </View>
    </View>
       )}
       </Formik>
  );
}
