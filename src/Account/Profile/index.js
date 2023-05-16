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

import React, {useState} from 'react';
import Text from '../../CustomText';
import {styles} from './style';
import {Formik} from 'formik';
import * as yup from 'yup';
import {usePostMethodMutation} from '../../../Apis/CallApis/index';
import {useDispatch, useSelector} from 'react-redux';
import {Imageurl, Changepasswordurl} from '../../../Apis/CallApis/URL';

export default function Accountprofile(props) {
  const {user} = useSelector(state => state.user);
  const {token} = useSelector(state => state.user);
  const [showmodal, setshowmodal] = useState(false);

  const [currentpasslock, setcurrentpasslock] = useState(true);
  const [newpasslock, setnewpasslock] = useState(true);
  const [confrmpasslock, setconfrmpasslock] = useState(true);
  const [modal, setmodal] = useState(false);
  const [newdata, res] = usePostMethodMutation();
  const handledata = async values => {
    const formdata = new FormData();
    formdata.append('old_password', values.currentpass);
    formdata.append('new_password', values.newpass);
    formdata.append('confirm_password', values.confrmpass);
    let senddata = {
      url: Changepasswordurl,
      data: formdata,
      token: token,
    };

    const temp = await newdata(senddata).unwrap();
    if (temp.status == 200) {
      setshowmodal(false);
      setmodal(true);
    } else {
      alert('Old Password Do not Match');
    }
  };
  const CreateAccount = yup.object().shape({
    currentpass: yup
      .string()

      .required('Please enter password'),

    newpass: yup
      .string()
      .required('Please enter password')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*\/\.\(\)\,\_\"\'\:\;\?])(?=.{8,})/,
        'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character',
      ),
    confirmpass: yup
      .string()
      .oneOf([yup.ref('newpass')], 'Passwords do not match')
      .required('Confirm password is required'),
  });

  return (
    <Formik
      initialValues={{
        currentpass: '',
        newpass: '',
        confirmpass: '',
      }}
      validateOnMount={true}
      onSubmit={values => {
        handledata(values);
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
            <Modal transparent={true} visible={showmodal}>
              <StatusBar
                // translucent
                backgroundColor="rgba(0, 0, 0, 0.4)"
                barStyle="dark-content"
              />
              <View style={styles.modal1style}>
                <View style={styles.modal1style1}>
                  <View style={styles.modal1heading}>
                    <Text style={styles.modal1heading1}>Change Password</Text>
                    <TouchableOpacity onPress={() => setshowmodal(false)}>
                      <Image
                        style={styles.imgcros}
                        source={require('../../../assets/image/cros.png')}
                      />
                    </TouchableOpacity>
                  </View>
                  <Image
                    style={styles.imgline}
                    source={require('../../../assets/image/Line.png')}
                  />

                  <Text style={styles.textreview}>Current Password</Text>
                  <View style={styles.modalboxinput}>
                    <TextInput
                      onChangeText={handleChange('currentpass')}
                      onBlur={handleBlur('currentpass')}
                      value={values.currentpass}
                      secureTextEntry={currentpasslock}
                      placeholderTextColor="rgba(0, 0, 0, 0.7)"
                      style={styles.input}
                      placeholder="Enter Password"></TextInput>
                    <TouchableOpacity
                      onPress={() => setcurrentpasslock(!currentpasslock)}>
                      <Image
                        style={styles.imglock}
                        source={require('../../../assets/image/lock.png')}
                      />
                    </TouchableOpacity>
                  </View>
                  {errors.currentpass && touched.currentpass && (
                    <Text style={styles.eror}>{errors.currentpass}</Text>
                  )}
                  <Text style={styles.textreview}>New Password</Text>
                  <View style={styles.modalboxinput}>
                    <TextInput
                      onChangeText={handleChange('newpass')}
                      onBlur={handleBlur('newpass')}
                      value={values.newpass}
                      secureTextEntry={newpasslock}
                      placeholderTextColor="rgba(0, 0, 0, 0.7)"
                      style={styles.input}
                      placeholder="Enter Password"></TextInput>
                    <TouchableOpacity
                      onPress={() => setnewpasslock(!newpasslock)}>
                      <Image
                        style={styles.imglock}
                        source={require('../../../assets/image/lock.png')}
                      />
                    </TouchableOpacity>
                  </View>
                  {errors.newpass && touched.newpass && (
                    <Text style={styles.eror}>{errors.newpass}</Text>
                  )}
                  <Text style={styles.textreview}>Confirm New Password</Text>
                  <View style={styles.modalboxinput}>
                    <TextInput
                      onChangeText={handleChange('confirmpass')}
                      onBlur={handleBlur('confirmpass')}
                      value={values.confirmpass}
                      secureTextEntry={confrmpasslock}
                      placeholderTextColor="rgba(0, 0, 0, 0.7)"
                      style={styles.input}
                      placeholder="Enter Password"></TextInput>
                    <TouchableOpacity
                      onPress={() => setconfrmpasslock(!confrmpasslock)}>
                      <Image
                        style={styles.imglock}
                        source={require('../../../assets/image/lock.png')}
                      />
                    </TouchableOpacity>
                  </View>
                  {errors.confirmpass && touched.confirmpass && (
                    <Text style={styles.eror}>{errors.confirmpass}</Text>
                  )}
                  <TouchableOpacity
                    onPress={() => {
                      handleSubmit();
                    }}>
                    <View style={styles.modal1btnview1}>
                      <Text style={styles.modal1btn1text}>
                        Create New Password
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>
          </View>
          <View>
            <Modal transparent={true} visible={modal}>
              <View style={styles.modal2style}>
                <View style={styles.modal2style1}>
                  <View style={styles.modal2img}>
                    <Image
                      style={styles.tickimg}
                      source={require('../../../assets/image/tick.png')}
                    />
                    <Text style={styles.modal2headingtext}>Sucessful</Text>
                  </View>
                  <Text style={styles.modal2text}>
                    Your password was changed successfuly
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
          <StatusBar
            translucent
            backgroundColor="white"
            barStyle="dark-content"
          />
          <View style={styles.Containerbackarrow}>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Account')}>
              <Image source={require('../../../assets/image/backarrow.png')} />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.editprofileContainer}
              onPress={() => props.navigation.navigate('Editprofile')}>
              <Image
                style={styles.editprofilelogo}
                source={require('../../../assets/image/editprofilelogo.png')}
              />
              <Text style={styles.editprofiletext}>Edit Profile</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.Containercemra}>
            <Image
              style={styles.logoperson}
              source={{uri: Imageurl + user?.image}}
            />
          </View>
          <Text style={styles.username}>{user?.name}</Text>

          <Image
            style={styles.imgline}
            source={require('../../../assets/image/Line.png')}
          />
          <View style={styles.Container1}>
            <View style={styles.Container1num}>
              <View style={styles.Container1numimg}>
                <Image
                  style={styles.imgcall}
                  source={require('../../../assets/image/call.png')}
                />
              </View>
              <Text style={styles.phonetext}>Phone Number</Text>
              <Text style={styles.phonenum}>{user?.email}</Text>
            </View>
            <View style={styles.Container1email}>
              <Image
                style={styles.imgmsg}
                source={require('../../../assets/image/msg.png')}
              />
              <Text style={styles.emailtext}>Email Address</Text>
              <Text style={styles.email}>{user?.phone}</Text>
            </View>
          </View>
          <View style={styles.Container2}>
            <Image
              style={styles.imgmsg}
              source={require('../../../assets/image/passwordlogo.png')}
            />
            <View>
              <Text style={styles.passwordtext}>Password</Text>
              <Text style={styles.password}>xxxxxxxxx</Text>
            </View>
            <TouchableOpacity
              onPress={() => setshowmodal(true)}
              style={styles.Container1imgmsg}>
              <Image
                style={styles.imgmsg}
                source={require('../../../assets/image/editpassword.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </Formik>
  );
}
