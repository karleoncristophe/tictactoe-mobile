import React from 'react';
import styled from 'styled-components/native';

const Wrapper = styled.Text<Props>``;

interface Props {
  children?: any;
  style?: any;
}

const Span = ({children, style}: Props) => (
  <Wrapper style={style}>{children}</Wrapper>
);

export default Span;
