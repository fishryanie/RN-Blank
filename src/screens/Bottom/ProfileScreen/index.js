import React from 'react';
import {Block, Image, Text, Pressable, HeaderTitle} from '@components';
import {COLORS} from '@theme';

export default function ProfileScreen() {
  return (
    <Block flex backgroundColor={COLORS.light}>
      <HeaderTitle canGoBack title={'Profile Screen'} />
    </Block>
  );
}
