import * as React from 'react';
import {Animated} from 'react-native';
import styled from 'styled-components/native';
import theme from '../theme';
import Space from './Space';

const Wrapper = styled.View<Props>`
  flex: 1;
  background: ${p => p.background};
`;

interface Props {
  children?: any;
  background?: string;
  onScroll?: any;
  refreshControl?: any;
}

function ScreenWrapper({
  children,
  background,
  onScroll,
  refreshControl,
}: Props) {
  return (
    <>
      <Wrapper background={background}>
        {theme.isIos && <Space height={30} />}
        <Animated.ScrollView
          bounces={false}
          onScroll={onScroll}
          refreshControl={refreshControl}>
          {children}
        </Animated.ScrollView>
      </Wrapper>
    </>
  );
}

ScreenWrapper.defaultProps = {
  background: theme.colors.background,
};

export default ScreenWrapper;
