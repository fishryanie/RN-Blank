import React from 'react';
import {COLORS, GRADIENTS} from '@theme';
import {Block, Pressable, Text} from '@components';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {ActivityIndicator} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Fragment} from 'react';

export default function BottomButton({
  titleCenter = '',
  titleLeft = '',
  titleRight = '',
  onPress,
  loading,
  disabled,
  backgroundColor,
  ...containerProps
}) {
  const {bottom} = useSafeAreaInsets();
  return (
    <Block
      row
      absolute
      shadow3
      bottom={0}
      paddingTop={10}
      paddingHorizontal={15}
      alignSelf={'flex-end'}
      paddingBottom={bottom}
      backgroundColor={COLORS.light}>
      <LinearGradient
        style={{flex: 1, height: 50, borderRadius: 5}}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={backgroundColor ? backgroundColor : GRADIENTS.primary}>
        <Pressable
          flex
          rowCenter
          spaceBetween
          onPress={onPress}
          paddingHorizontal={15}
          disabled={loading || disabled}
          {...containerProps}>
          {loading ? (
            <ActivityIndicator size="small" color={COLORS.light} />
          ) : (
            <Fragment>
              <Text left medium fontSize={16} color={COLORS.light}>
                {titleLeft}
              </Text>
              <Text center medium fontSize={16} color={COLORS.light}>
                {titleCenter}
              </Text>
              <Text right medium fontSize={16} color={COLORS.light}>
                {titleRight}
              </Text>
            </Fragment>
          )}
        </Pressable>
      </LinearGradient>
    </Block>
  );
}
