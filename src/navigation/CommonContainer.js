import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {common} from '@screens/Common';
import React from 'react';
import router from './router';

const CommonStack = createNativeStackNavigator();

const CommonContainer = () => {
  return (
    <CommonStack.Navigator
      screenOptions={{headerShown: false}}></CommonStack.Navigator>
  );
};

export default CommonContainer;
