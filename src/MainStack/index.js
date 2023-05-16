import {View, Text, Image} from 'react-native';
import React from 'react';
import Splash from '../SplashScreen';
import Login from '../LoginScreen';
import Login1 from '../Login1';
import CreateAccount from '../CreateAccount';
import OTP from '../OTP';
import Forgot from '../Forgot';
import Reset from '../ResetPassword';
import Homescreen from '../HomeScreen';
import Chat from '../Chat';
import Favorites from '../favorites';
import Account from '../Account';
import BusinessMap from '../Business Map';
import BusinessProfile from '../BusinessProfile';
import Forgotemail from '../Forgot/forgotemail';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useIsFocused} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import Chattext from '../Chat/chattext';
import Accountprofile from '../Account/Profile';
import Editprofile from '../Account/editprofile';
import {styles} from './style';
const Stack = createNativeStackNavigator();
export default function MainStack() {
  const {token} = useSelector(state => state.user);
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {token == null ? (
          <Stack.Screen name="AuthSreens" component={AuthSreens}></Stack.Screen>
        ) : (
          <Stack.Screen name="TabScreen" component={TabScreen}></Stack.Screen>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const AuthSreens = () => {
  return (
    <Stack.Navigator initialRouteName='Login1' screenOptions={{headerShown: false}}>
      <Stack.Screen name="Splash" component={Splash}></Stack.Screen>
      <Stack.Screen name="Login1" component={Login1}></Stack.Screen>
      <Stack.Screen name="Login" component={Login}></Stack.Screen>
      <Stack.Screen
        name="CreateAccount"
        component={CreateAccount}></Stack.Screen>
      <Stack.Screen name="Forgotemail" component={Forgotemail}></Stack.Screen>
      <Stack.Screen name="OTP" component={OTP}></Stack.Screen>
      <Stack.Screen name="Forgot" component={Forgot}></Stack.Screen>
      <Stack.Screen name="Reset" component={Reset}></Stack.Screen>
    </Stack.Navigator>
  );
};
const TabScreen = () => {
  const focused = useIsFocused();
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: '#2E3E5C',
        tabBarInactiveTintColor: '#C8CCD3',
        tabBarLabelStyle: {marginBottom: 2},
      })}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              resizeMode="cover"
              style={styles.Container}
              source={
                focused
                  ? require('../../assets/image/home1.png')
                  : require('../../assets/image/home2.png')
              }
            />
          ),
        }}
      />
      <Tab.Screen
        name="Chat"
        component={ChatScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              resizeMode="cover"
              style={styles.Container}
              source={
                focused
                  ? require('../../assets/image/msg2.png')
                  : require('../../assets/image/msg1.png')
              }
            />
          ),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={Favorites}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              resizeMode="cover"
              style={styles.Container1}
              source={
                focused
                  ? require('../../assets/image/heart2.png')
                  : require('../../assets/image/heart1.png')
              }
            />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={ScreenAcc}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              resizeMode="cover"
              style={styles.Container}
              source={
                focused
                  ? require('../../assets/image/account2.png')
                  : require('../../assets/image/account1.png')
              }
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const Home = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Homescreen" component={Homescreen}></Stack.Screen>
      <Stack.Screen name="BusinessMap" component={BusinessMap}></Stack.Screen>
      <Stack.Screen
        name="BusinessProfile"
        component={BusinessProfile}></Stack.Screen>
    </Stack.Navigator>
  );
};
const ChatScreen = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Chat" component={Chat}></Stack.Screen>
      <Stack.Screen name="chattext" component={Chattext}></Stack.Screen>
    </Stack.Navigator>
  );
};
const ScreenAcc = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Account" component={Account}></Stack.Screen>
      <Stack.Screen
        name="Accountprofile"
        component={Accountprofile}></Stack.Screen>
      <Stack.Screen name="Editprofile" component={Editprofile}></Stack.Screen>
    </Stack.Navigator>
  );
};
