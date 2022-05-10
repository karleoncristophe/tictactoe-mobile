import React from 'react';
import styled from 'styled-components/native';
import Text from '../../common/Text';

const Container = styled.View`
  flex: 1;
  background: ${p => p.theme.colors.background};
  justify-content: center;
  align-items: center;
`;

const Image = styled.Image`
  width: 300px;
  height: 170px;
`;

const Game = () => {
  return (
    <Container>
      <Image
        source={{
          uri: 'https://imageproxy.ifunny.co/crop:x-20,resize:640x,quality:90x75/images/06341567afecb821b971c71fdcac9d4f15618948736ecda85a70cbb5a88e643a_1.jpg',
        }}
      />
    </Container>
  );
};

export default Game;
