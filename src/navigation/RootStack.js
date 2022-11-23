import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {StatusBar} from 'react-native';
import {useSelector} from 'react-redux';
import AuthContainer from './AuthContainer';
import BottomContainer from './BottomTabNavigation';
import CommonContainer from './CommonContainer';
import {navigationRef} from './navigationRef';
import router from './router';

const Stack = createNativeStackNavigator();

export default function MainContainer() {
  const userToken = useSelector(state => state.user?.userToken);

  return (
    <NavigationContainer ref={navigationRef}>
      <StatusBar
        translucent
        barStyle="light-content"
        backgroundColor="transparent"
      />
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animation: 'slide_from_right',
        }}>
        <Stack.Screen
          name={router.BOTTOM_CONTAINER}
          component={BottomContainer}
        />
        {/* {userToken ? (
          <>
            <Stack.Screen
              name={router.BOTTOM_CONTAINER}
              component={BottomContainer}
            />
            <Stack.Screen
              name={router.COMMON_CONTAINER}
              component={CommonContainer}
            />
          </>
        ) : (
          <Stack.Screen
            name={router.AUTH_CONTAINER}
            component={AuthContainer}
          />
        )} */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
