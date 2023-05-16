import {View, Text, Button} from 'react-native';
import React, {useEffect, useState} from 'react';
import MainStack from './src/MainStack';
import {store} from './Apis/Store';
import {Provider} from 'react-redux';
export default function App() {
  return (
    <Provider store={store}>
      <MainStack />
    </Provider>
  );
}
