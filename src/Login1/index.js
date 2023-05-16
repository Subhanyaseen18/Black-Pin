import {View, Image, TouchableOpacity,ScrollView, StatusBar} from 'react-native';
import React from 'react';
import {styles} from './style';
import Text from '../CustomText';
import {widthPercentageToDP} from 'react-native-responsive-screen';
export default function Login1({navigation}) {
  return (
    <View style={styles.Container}>
        <StatusBar backgroundColor="black" barStyle="light-content"/>
      <View style={styles.Containerimg}>
        <Image
          style={styles.logoimg}
          source={require('../../assets/image/logowhite.png')}
        />
      </View>
      <View style={styles.Containerweltext}>
        <Text style={styles.weltext}> Welcome to BlackPin</Text>
      </View>

      <View style={styles.Containertext}>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur
          et consequat, facilisi elementum pharetra. Commodo turpis mi aenean
          elementum nec urna.
        </Text>
        <Text style={styles.text}>
          {'\n'} Fermentum molestie nec nunc, etiam turpis viverra arcu at quis.
          Eleifend amet lectus tortor id nec mi. Dui tincidunt lectus dolor, dui
          vitae enim rhoncus lorem. Sed volutpat consectetur nulla ipsum viverra
          turpis.
        </Text>
      </View>
      <View style={styles.Containerblock}>
        <View style={styles.Containerowner}>
          <Text style={styles.Containerownetext}>I am Business Owner</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.replace('Login')}>
          <View style={styles.Containeruser}>
            <Text style={styles.Containerusertext}>I am User</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
