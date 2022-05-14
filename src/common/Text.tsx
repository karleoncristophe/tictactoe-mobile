import React from 'react';
import styled from 'styled-components/native';
import theme from '../theme';

const Wrapper = styled.Text<Props>`
  color: ${p => (p.color ? p.color : p.theme.colors.text.primary)};
  font-size: ${p => p.size}px;
  font-weight: ${p => (p.bold ? 'bold' : 'normal')};
  text-align: ${p => (p.align ? p.align : 'left')};
  ${p => p.style}
`;

interface Props {
  children?: any;
  color?: string;
  size?: number;
  bold?: boolean;
  align?: 'center' | 'left' | 'right' | 'justify';
  style?: any;
  uppercase?: boolean;
  numberOfLines?: number;
}

const Text = ({
  children,
  color,
  size,
  bold,
  align,
  style,
  uppercase,
  numberOfLines,
}: Props) => (
  <Wrapper
    numberOfLines={numberOfLines}
    align={align}
    bold={bold}
    size={size}
    color={color}
    style={style}>
    {uppercase ? children.toUpperCase() : children}
  </Wrapper>
);

Text.defaultProps = {
  size: 12,
  numberOfLines: 0,
  color: theme.colors.text.primary,
};

export default Text;
