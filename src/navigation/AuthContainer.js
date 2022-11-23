import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {auth} from '@screens/Auth';
import React from 'react';
import router from './router';

const CommonStack = createNativeStackNavigator();

const AuthContainer = () => {
  return (
    <CommonStack.Navigator
      screenOptions={{headerShown: false}}></CommonStack.Navigator>
  );
};

export default AuthContainer;
