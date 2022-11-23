import React from 'react';
import {Block, HeaderTitle} from '@components';
import {COLORS} from '@theme';

export default function ServiceScreen() {
  return (
    <Block flex backgroundColor={COLORS.light}>
      <HeaderTitle canGoBack title={'Service Screen'} />
    </Block>
  );
}
