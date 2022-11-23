import 'moment/locale/vi';
import store, {persistor} from '@redux/store';
import React, {PureComponent, useEffect} from 'react';
import {Provider, useDispatch, useSelector} from 'react-redux';
import {SafeAreaProvider} from 'react-native-safe-area-context';
// import {useNotificationMessage, useNotificationPermission} from '@hooks';
import {PersistGate} from 'redux-persist/lib/integration/react';
import {CodePushProgressDialog} from '@components';
import {PortalProvider} from '@gorhom/portal';
import {TextInput, Text} from 'react-native';
import RootStack from './navigation/RootStack';
import codePush from 'react-native-code-push';
import Toast from 'react-native-toast-message';
import NetWork from '@components/NetWork';
import i18n from './i18n';
import actions from '@redux/actions';
import SplashScreen from 'react-native-splash-screen';
import {APP_LANGUAGE} from '@constants';

if (Text.defaultProps == null) {
  Text.defaultProps = {};
}
Text.defaultProps.allowFontScaling = false;
if (TextInput.defaultProps == null) {
  TextInput.defaultProps = {};
}
TextInput.defaultProps.allowFontScaling = false;

const App = () => {
  // useNotificationPermission();
  // useNotificationMessage();

  const dispatch = useDispatch();

  useEffect(() => {
    i18n.changeLanguage(APP_LANGUAGE.vietnamese);
  }, []);
  return <RootStack />;
};
class AppWrapper extends PureComponent {
  state = {
    status: codePush.SyncStatus.UP_TO_DATE,
    progress: {},
  };

  codePushStatusDidChange(status) {
    this.setState({status});
  }

  codePushDownloadDidProgress(progress) {
    this.setState({progress});
  }

  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <SafeAreaProvider>
            <PortalProvider>
              <App />
              {/* {(this.state.status === codePush.SyncStatus.DOWNLOADING_PACKAGE ||
                this.state.status ===
                  codePush.SyncStatus.INSTALLING_UPDATE) && (
                <CodePushProgressDialog progress={this.state.progress} />
              )} */}
              <NetWork />
              <Toast visibilityTime={2000} />
            </PortalProvider>
          </SafeAreaProvider>
        </PersistGate>
      </Provider>
    );
  }
}

const codePushOptions = {
  installMode: codePush.InstallMode.IMMEDIATE,
  checkFrequency: codePush.CheckFrequency.ON_APP_RESUME,
};

export default codePush(codePushOptions)(AppWrapper);
// export default AppWrapper;
