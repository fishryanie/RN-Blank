import React from 'react';
import router from './router';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {bottom} from '@screens/Bottom';
import {COLORS} from '@theme';
import {icons} from '@assets';
import {Image, Pressable, Text} from '@components';
import {hs, vs} from '@utils/responsive';

const ShopStack = createBottomTabNavigator();

export default function BottomContainer() {
  const insert = useSafeAreaInsets();
  const screenOptions = ({route}) => ({
    headerShown: false,
    tabBarStyle: {
      height: vs(60) + insert.bottom,
      paddingHorizontal: hs(12),
      backgroundColor: COLORS.light,
      borderTopWidth: 0,
      elevation: 3,
      shadowOpacity: 0.22,
      shadowRadius: 2.22,
      shadowColor: COLORS.dark,
      shadowOffset: {
        width: 0,
        height: 1,
      },
    },
    tabBarButton: ({accessibilityState, onPress}) => {
      const focused = accessibilityState.selected;
      const icon = {
        [router.HOME_SCREEN]: icons.ic_home_shop,
        [router.SERVICE_SCREEN]: icons.ic_report_shop,
        [router.NOTIFY_SCREEN]: icons.ic_mailbox_gray_shop,
        [router.PROFILE_SCREEN]: icons.ic_account_shop,
      };
      const labels = {
        [router.HOME_SCREEN]: 'Trang chủ',
        [router.SERVICE_SCREEN]: 'Đặt dịch vụ',
        [router.NOTIFY_SCREEN]: 'Thông báo',
        [router.PROFILE_SCREEN]: 'Tài khoản',
      };
      return (
        <Pressable flex alignCenter justifyCenter onPress={onPress}>
          <Image
            square={19}
            resizeMode="contain"
            source={icon[route.name]}
            tintColor={focused ? COLORS.primary : COLORS.light}
          />
          <Text
            small
            marginTop={2}
            color={focused ? COLORS.primary : COLORS.textPrimary}>
            {labels[route.name]}
          </Text>
        </Pressable>
      );
    },
  });
  return (
    <ShopStack.Navigator
      backBehavior="initialRoute"
      screenOptions={screenOptions}
      initialRouteName={router.HOME_SCREEN}>
      <ShopStack.Screen
        name={router.HOME_SCREEN}
        component={bottom[router.HOME_SCREEN]}
      />
      <ShopStack.Screen
        name={router.SERVICE_SCREEN}
        component={bottom[router.SERVICE_SCREEN]}
      />
      <ShopStack.Screen
        name={router.NOTIFY_SCREEN}
        component={bottom[router.NOTIFY_SCREEN]}
      />
      <ShopStack.Screen
        name={router.PROFILE_SCREEN}
        component={bottom[router.PROFILE_SCREEN]}
      />
    </ShopStack.Navigator>
  );
}
