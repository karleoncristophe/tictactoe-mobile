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
  justify-content: space-between;
  align-items: center;
  background: ${p => p.theme.colors.background};
`;
const Content = styled.View`
  width: 90%;
`;

const Players = styled.View`
  display: flex;
  width: 90%;
  margin-top: 10%;
  flex-direction: row;
  align-items: center;
`;

const Bnts = styled.View`
  margin-bottom: 10%;
  display: flex;
  width: 100%;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
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

const BoxConteiner = styled.View`
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
  width: 33.2%;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 85px;
  border: none;
  margin-bottom: 1px;
  background: ${p => p.theme.colors.background};
`;

const PlayerLetterContet = styled.View`
  height: 40px;
  width: 40px;
  align-items: center;
  justify-content: center;
  background: tomato;
`;

const PlayerNameContet = styled.View`
  flex: 1;
  height: 40px;
  align-items: center;
  justify-content: center;
  background: white;
`;

const PlayerScoreContet = styled.View`
  height: 50px;
  width: 15%;
  align-items: center;
  justify-content: center;
  background: #2b36e5;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
`;

interface Props {
  navigation: StackNavigationProp<any>;
  route: any;
}

function Game({route, navigation}: Props) {
  const [draw, setDraw] = useState(false);
  const [symbol, setSymbol] = useState('X');
  const [scoreP1, setScoreP1] = useState<number>(0);
  const [scoreP2, setScoreP2] = useState<number>(0);
  const [winner, setWinner] = useState<string | null>(null);

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

  let playerOne = route.params.data.player1;
  let playerTwo = route.params.data.player2;

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

  function goBack() {
    navigation.goBack();
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
          <Space height={5} />
          <PlayerLetterContet
            style={{
              backgroundColor: 'green',
              borderTopLeftRadius: 4,
              borderBottomLeftRadius: 4,
            }}>
            <Text size={15} bold>
              X
            </Text>
          </PlayerLetterContet>
          <PlayerNameContet>
            <Text
              ellipsizeMode="tail"
              size={16}
              bold
              numberOfLines={1}
              style={{
                color: symbol === 'X' ? '#2b36e5' : 'rgb(2, 2, 34)',
                paddingLeft: 2,
                paddingRight: 2,
              }}>
              {playerOne}
            </Text>
          </PlayerNameContet>

          <Space height={5} />
          <PlayerScoreContet>
            <Text size={20} bold ellipsizeMode="tail">
              {scoreP1}
            </Text>
          </PlayerScoreContet>
          <PlayerScoreContet
            style={{
              borderTopLeftRadius: 0,
              borderBottomLeftRadius: 0,
              borderTopRightRadius: 4,
              borderBottomRightRadius: 4,
            }}>
            <Text size={20} bold ellipsizeMode="tail">
              {scoreP2}
            </Text>
          </PlayerScoreContet>
          <PlayerNameContet>
            <Text
              ellipsizeMode="tail"
              size={15}
              bold
              numberOfLines={1}
              style={{
                color: symbol === 'O' ? '#2b36e5' : 'rgb(2, 2, 34)',
                paddingLeft: 2,
                paddingRight: 2,
              }}>
              {playerTwo}
            </Text>
          </PlayerNameContet>
          <PlayerLetterContet
            style={{borderTopRightRadius: 4, borderBottomRightRadius: 4}}>
            <Text size={15} bold>
              O
            </Text>
          </PlayerLetterContet>
        </Players>
        <Space height={20} />
      </Conteiner>
      <BoxConteiner>
        <Box>
          {board.map((id: string, index: number) => (
            <BoxItemButton key={index} onPress={() => play(index)}>
              <Text
                style={{color: id === 'X' ? 'green' : 'tomato'}}
                size={30}
                bold>
                {id}
              </Text>
            </BoxItemButton>
          ))}
        </Box>
      </BoxConteiner>
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
            onPress={goBack}>
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
