import {View, Image} from 'react-native';
import React from 'react';
import Text from '../CustomText';
import {styles} from './style';
import {StatusBar} from 'react-native';
import { ActivityIndicator, MD2Colors } from 'react-native-paper';
export default function Splash({navigation}) {
  setTimeout(() => {
    NextScreen();
  }, 5000);

  const NextScreen = () => {
    navigation.navigate('Login1');
  };

  return (
    <View style={styles.Container}>
      <StatusBar backgroundColor="black" barStyle="light-content"/>
      <View style={styles.Containerimg}>
        <Image
          style={styles.logoimg}
          source={require('../../assets/image/logowhite.png')}
        />
        {/* <View style={styles.Containerprogres}>
      <ActivityIndicator animating={true} color="white" size={50} />
      </View> */}
      </View>

      <View style={styles.Containerprogres}>
      <ActivityIndicator animating={true} color="white" size={50} />
      </View>
    </View>
  );
}
