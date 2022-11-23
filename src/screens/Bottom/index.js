import router from '@navigation/router';
import HomeScreen from './HomeScreen';
import EventScreen from './ServiceScreen';
import UtilityScreen from './NotifyScreen';
import MemberScreen from './ProfileScreen';

export const bottom = {
  [router.HOME_SCREEN]: HomeScreen,
  [router.SERVICE_SCREEN]: EventScreen,
  [router.NOTIFY_SCREEN]: UtilityScreen,
  [router.PROFILE_SCREEN]: MemberScreen,
};
