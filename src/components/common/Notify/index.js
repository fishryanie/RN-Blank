import {icons} from '@assets';
import {Block, Image, Pressable, Text} from '@components';
import {authRoot, commonRoot} from '@navigation/navigationRef';
import {COLORS} from '@theme';
import {useDispatch, useSelector} from 'react-redux';
import router from '@navigation/router';
import React, {memo, useEffect} from 'react';
import actions from '@redux/actions';

const Notify = () => {
  const dispatch = useDispatch();
  const userToken = useSelector(state => state.user?.userToken);
  const lengthNotification = useSelector(
    state => state.getNotification?.data?.total_unread,
  );

  useEffect(() => {
    dispatch({
      type: actions.GET_NOTIFICATION,
    });
  }, [dispatch, lengthNotification]);
  return (
    <Pressable
      height={25}
      width={35}
      radius={5}
      justifyCenter
      alignCenter
      onPress={() => {
        userToken
          ? commonRoot.navigate(router.NOTIFY_SCREEN)
          : authRoot.navigate(router.LOGIN_SCREEN);
      }}>
      {+lengthNotification > 0 && (
        <Block
          absolute
          top={-8}
          right={0.1}
          backgroundColor={COLORS.secondary}
          round={16}
          zIndex={99}
          justifyCenter
          alignCenter>
          <Text color={COLORS.white} semiBold fontSize={10}>
            {+lengthNotification > 9 ? '9+' : lengthNotification}
          </Text>
        </Block>
      )}
      <Image source={icons.ic_bell} height={21} width={19} />
    </Pressable>
  );
};

export default memo(Notify);
