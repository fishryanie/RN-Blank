import React, {useState} from 'react';
import {Block, HeaderTitle} from '@components';
import {t} from 'i18next';
import {COLORS} from '@theme';

export default function NotifyScreen() {
  return (
    <Block flex backgroundColor={COLORS.light}>
      <HeaderTitle canGoBack title={'Notify Screen'} />
    </Block>
  );
}
