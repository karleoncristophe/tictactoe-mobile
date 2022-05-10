import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import styled from 'styled-components/native';
import ScreenWrapper from '../../common/ScreenWrapper';
import Text from '../../common/Text';
import Space from '../../common/Space';
import theme from '../../theme';
import {Linking} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
const Container = styled.View`
  flex: 1;
  background: ${p => p.theme.colors.background};
  justify-content: center;
  align-items: center;
`;

const InputsContent = styled.View`
  width: 90%;
`;

const InputGroupContent = styled.View`
  align-items: center;
`;

const Input = styled.TextInput`
  width: 100%;
  padding: 14px 15px;
  border: 1px solid rgb(77, 77, 248);
  border-radius: 4px;
  color: white;
`;

const Button = styled.TouchableOpacity`
  width: 100%;
  padding: 20px 20px;
  border: none;
  background-color: rgb(21, 21, 216);
  color: white;
  border-radius: 4px;
`;

const Link = styled.TouchableOpacity`
  margin-left: 4px;
`;

const Footer = styled.View`
  display: flex;
  flex-direction: row;
`;

interface Props {
  navigation: StackNavigationProp<any>;
}

function Home({navigation}: Props) {
  const [player1, setPlayer1] = useState<string>('');
  const [player2, setPlayer2] = useState<string>('');
  function handleNext() {
    // const p1: any = document.getElementById('player1');
    // const p2: any = document.getElementById('player2');
    // if (player1 === '') {
    //   p1?.focus();
    //   return;
    // }
    // if (player2 === '') {
    //   p2?.focus();
    //   return;
    // }
    navigation.navigate(
      'Game',
      // {state: {player1, player2}}
    );
  }

  return (
    <Container>
      <Text size={30} bold>
        # TIC TAC TOE #
      </Text>
      <Space height={30} />
      <InputsContent>
        <InputGroupContent>
          <Input
            // id="player1"
            placeholder="Nome do jogador 1"
            value={player1}
            // onChangeText={e => setPlayer1(e.target.value)}
          />
        </InputGroupContent>
        <Space height={10} />
        <InputGroupContent>
          <Input
            // id="player2"
            placeholder="Nome do jogador 2"
            value={player2}
            // onChangeText={e => setPlayer2(e.target.value)}
          />
        </InputGroupContent>
        <Space height={20} />
        <Button onPress={handleNext}>
          <Text size={20} bold align="center">
            Continuar
          </Text>
        </Button>
      </InputsContent>
      <Space height={30} />
      <Footer>
        <Text size={15}>Feito com 🤍 por</Text>
        <Link
          onPress={() => Linking.openURL('https://github.com/jhonataspaulo')}>
          <Text size={15}>Jhonatas Paulo</Text>
        </Link>
      </Footer>
    </Container>
  );
}

export default Home;
