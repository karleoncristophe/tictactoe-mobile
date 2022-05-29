import React, {useEffect, useState} from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import styled from 'styled-components/native';
import Text from '../../common/Text';
import Space from '../../common/Space';
import Span from '../../common/Span';

const Header = styled.View`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  background: ${p => p.theme.colors.background};
`;
const Content = styled.View``;

const Players = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Player = styled.View`
  display: flex;
  margin: 20px;
  flex-direction: column;
  align-items: center;
`;

const Bnts = styled.View`
  display: flex;
  flex-direction: row;
  margin-top: 10%;
  align-items: center;
  background: red;
`;

const BntsReset = styled.TouchableOpacity`
  border: 1px solid tomato;
  padding: 10px 20px;
  border-radius: 5px;
`;

const Conteiner = styled.View`
  overflow: hidden;
  width: 100%;
  align-items: center;
`;

const Box = styled.View`
  flex-direction: row;
  width: 90%;
  background: lightseagreen;
  flex-wrap: wrap;
  margin-bottom: -2.5px;
  justify-content: center;
  justify-content: space-between;
  overflow: hidden;
`;

const BoxItemButton = styled.TouchableOpacity`
  width: 32.9%;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 85px;
  border: none;
  margin-bottom: 2.4px;
  background: ${p => p.theme.colors.background};
`;

interface Props {
  navigation: StackNavigationProp<any>;
  route: any;
}

function Game({route, navigation}: Props) {
  const [scoreP1, setScoreP1] = useState<number>(0);
  const [scoreP2, setScoreP2] = useState<number>(0);
  const [draw, setDraw] = useState(false);
  const [winner, setWinner] = useState<string | null>(null);
  const [symbol, setSymbol] = useState('X');
  const [board, setBoard] = useState<string[]>([
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
  ]);
  const playerOne = route.params.data.player1;
  const playerTwo = route.params.data.player2;

  const winnersScenaries = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const play = (idx: number) => {
    if (winner || draw) return;
    if (!!board[idx]) return;
    poupalteBoard(idx);
    if (checkWinner()) {
      setWinner(symbol);
      if (symbol === 'X') {
        setScoreP1(scoreP1 + 1);
      } else {
        setScoreP2(scoreP2 + 1);
      }
      return;
    }
    if (board.filter(e => e).length === 9) {
      setDraw(true);
      setTimeout(() => {
        restartBoard();
      }, 500);
    }
  };

  function poupalteBoard(index: number) {
    if (!!board[index]) return;
    let letter = board;
    letter[index] = symbol;
    letter = [...letter];
    setBoard(letter);
    setSymbol(symbol === 'X' ? 'O' : 'X');
  }

  const checkWinner = () => {
    for (let i in winnersScenaries) {
      if (
        board[winnersScenaries[i][0]] === symbol &&
        board[winnersScenaries[i][1]] === symbol &&
        board[winnersScenaries[i][2]] === symbol
      ) {
        paintWinner(winnersScenaries[i]);
        return i;
      }
    }
  };

  function restartBoard() {
    let boardReset = board;
    boardReset.fill('');
    setBoard([...boardReset]);
    setWinner('');
    setDraw(false);
  }

  function restartScore() {
    setScoreP1(0);
    setScoreP2(0);
  }

  const paintWinner = (ids: number[]) => {
    // ids.map(id => {
    //   divRef.current[id].animate(
    //     [
    //       {color: 'white', border: 'none'},
    //       {color: 'lightgreen', border: '1px solid lightgreen'}
    //     ],
    //     {
    //       duration: 200,
    //       iterations: 3
    //     }
    //   );
    // });
    setTimeout(() => {
      restartBoard();
    }, 1000);
  };

  return (
    <Header>
      <Conteiner>
        <Players>
          <Player>
            <Text color="lightblue" size={14}>
              Jogador 1:{' '}
              <Text color="green" size={14}>
                X
              </Text>
            </Text>
            <Space height={5} />
            <Text
              size={16}
              bold
              numberOfLines={1}
              style={{color: symbol === 'X' ? 'yellow' : 'white'}}>
              {playerOne}
            </Text>
            <Text size={30} bold>
              {scoreP1}
            </Text>
          </Player>

          <Player>
            <Text color="lightblue" size={14}>
              Jogador 2:{' '}
              <Text color="tomato" size={14}>
                O
              </Text>
            </Text>
            <Space height={5} />
            <Text
              size={15}
              bold
              numberOfLines={1}
              style={{color: symbol === 'O' ? 'yellow' : 'white'}}>
              {playerTwo}
            </Text>
            <Text size={30} bold>
              {scoreP2}
            </Text>
          </Player>
        </Players>
        <Space height={20} />
        <Box>
          {board.map((id: string, index: number) => (
            <BoxItemButton key={index} onPress={() => play(index)}>
              <Span style={{color: id === 'X' ? 'green' : 'tomato'}}>{id}</Span>
            </BoxItemButton>
          ))}
        </Box>
      </Conteiner>
      <Content>
        <Bnts>
          <BntsReset onPress={restartBoard}>
            <Text size={16} color="tomato" bold>
              Reiniciar
            </Text>
          </BntsReset>
          <Space height={10} />
          <BntsReset
            style={{
              borderColor: 'transparent',
              backgroundColor: 'lightblue',
            }}
            onPress={restartScore}>
            <Text size={16} color="black" bold>
              Zerar Placar
            </Text>
          </BntsReset>
          <Space height={10} />
          <BntsReset
            style={{
              borderColor: 'transparent',
            }}
            onPress={() => navigation.goBack()}>
            <Text size={16} bold>
              Sair
            </Text>
          </BntsReset>
        </Bnts>
      </Content>
    </Header>
  );
}

export default Game;
