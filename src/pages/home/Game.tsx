import React, {useEffect, useRef, useState} from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import styled from 'styled-components/native';
import Text from '../../common/Text';
import Space from '../../common/Space';

const Header = styled.View`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  background: ${p => p.theme.colors.background};
`;
const Content = styled.View``;

const ContainerWinner = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Button = styled.TouchableOpacity`
  padding: 15px 25px;
  border: none;
  border-radius: 20px;
  font-size: 15px;
  margin-top: 30px;
`;

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
  const [current, setCurrent] = useState('x');
  const [matriz, setMatriz] = useState<any[] | null>(null);
  const [winner, setWinner] = useState<string | null>(null);
  const [state, setState] = useState([]);
  const [pl1, setPl1] = useState<string | null>(null);
  const [pl2, setPl2] = useState<string | null>(null);

  const player1 = route.params.data.player1;
  const player2 = route.params.data.player2;

  const [placar, setPlacar] = useState({
    p1: 0,
    p2: 0,
  });

  const myState = route.params.data;

  const arr = [11, 12, 13, 21, 22, 23, 31, 32, 33];

  const buttonRef = useRef<any>(null);

  // console.log(buttonRef.current);

  function resetAll() {
    arr.map(id => {
      let doc = document.getElementById(String(id)) as HTMLButtonElement;
      doc.textContent = '';
      doc.disabled = false;
    });

    setWinner(null);
    setCurrent('x');
    setMatriz(null);

    let newPlacar = {
      p1: 0,
      p2: 0,
    };
    setPlacar(newPlacar);
  }

  function resetPlacar() {
    let newPlacar = {
      p1: 0,
      p2: 0,
    };
    setPlacar(newPlacar);
  }

  function logout() {
    arr.map(id => {
      let doc = document.getElementById(String(id)) as HTMLButtonElement;
      doc.textContent = '';
      doc.disabled = false;
    });

    setWinner(null);
    setCurrent('x');
    setMatriz(null);

    let newPlacar = {
      p1: 0,
      p2: 0,
    };
    setPlacar(newPlacar);
    setPl1(null);
    setPl2(null);
    route.params.data = null;
  }

  function play(id: number) {
    buttonRef.current = [];
    if (id && !buttonRef.current.includes(id)) {
      buttonRef.current.push(id);
    }
    console.log(buttonRef.current);
    // console.log(buttonRef);
    // const doc = document.getElementById(id) as HTMLButtonElement;
    // doc.innerText = current;
    // let newMatriz = {id: id, value: doc.textContent};
    // if (matriz) {
    //   setMatriz([...matriz, newMatriz]);
    // } else {
    //   setMatriz([newMatriz]);
    // }
    // doc.disabled = true;
    // current == 'x' ? (doc.style.color = 'green') : (doc.style.color = 'tomato');
    // current == 'x' ? setCurrent('o') : setCurrent('x');
  }

  // function incPlacar(player: number) {
  //   if (player == 1) {
  //     let newPlacar = placar;
  //     newPlacar.p1 = newPlacar.p1 + 1;
  //     setPlacar(newPlacar);
  //   }

  //   if (player == 2) {
  //     let newPlacar = placar;
  //     newPlacar.p2 = newPlacar.p2 + 1;
  //     setPlacar(newPlacar);
  //   }
  // }

  // useEffect(() => {
  //   if (myState == null) {
  //     navigation.goBack();
  //   } else {
  //     setPl1(myState.player1);
  //     setPl2(myState.player2);
  //     console.log(myState);
  //   }
  // }, [myState]);

  // useEffect(() => {
  //   const lines = [
  //     ['11', '12', '13'],
  //     ['21', '22', '23'],
  //     ['31', '32', '33'],
  //   ];

  //   const columns = [
  //     ['11', '21', '31'],
  //     ['12', '22', '32'],
  //     ['13', '23', '33'],
  //   ];

  //   const diagonals = [
  //     ['11', '22', '33'],
  //     ['13', '22', '31'],
  //   ];

  //   const x = matriz?.filter(ele => ele.value == 'x');
  //   const o = matriz?.filter(ele => ele.value == 'o');

  //   const xid = x?.map(item => {
  //     return item.id;
  //   });

  //   const oid = o?.map(item => {
  //     return item.id;
  //   });

  //   for (let i = 0; i < 3; i++) {
  //     for (let arr of [lines[i]]) {
  //       let matchx = xid?.filter(x => arr.includes(x));
  //       let matcho = oid?.filter(x => arr.includes(x));
  //       if (matchx?.length == 3) {
  //         incPlacar(1);
  //         setTimeout(() => setWinner(pl1), 250);
  //         return;
  //       }
  //       if (matcho?.length == 3) {
  //         incPlacar(2);
  //         setTimeout(() => setWinner(pl2), 250);
  //         return;
  //       }
  //     }
  //     for (let arr of [columns[i]]) {
  //       let matchx = xid?.filter(x => arr.includes(x));
  //       let matcho = oid?.filter(x => arr.includes(x));
  //       if (matchx?.length == 3) {
  //         incPlacar(1);
  //         setTimeout(() => setWinner(pl1), 250);
  //         return;
  //       }
  //       if (matcho?.length == 3) {
  //         incPlacar(2);
  //         setTimeout(() => setWinner(pl2), 250);
  //         return;
  //       }
  //     }
  //   }

  //   for (let i = 0; i < 2; i++) {
  //     for (let arr of [diagonals[i]]) {
  //       let matchx = xid?.filter(x => arr.includes(x));
  //       let matcho = oid?.filter(x => arr.includes(x));
  //       if (matchx?.length == 3) {
  //         incPlacar(1);
  //         setTimeout(() => setWinner(pl1), 250);
  //         return;
  //       }
  //       if (matcho?.length == 3) {
  //         incPlacar(2);
  //         setTimeout(() => setWinner(pl2), 250);
  //         return;
  //       }
  //     }
  //   }
  //   let arrDocs: any = [];
  //   arr.map(id => {
  //     let doc = document.getElementById(String(id)) as HTMLButtonElement;
  //     if (doc.textContent == '') {
  //       arrDocs.push(doc);
  //     }
  //   });

  //   if (arrDocs.length == 0) {
  //     let w = '';
  //     for (let i = 0; i < 2; i++) {
  //       for (let arr of [diagonals[i]]) {
  //         let matchx = xid?.filter(x => arr.includes(x));
  //         let matcho = oid?.filter(x => arr.includes(x));
  //         if (matchx?.length == 3) {
  //           w = pl1!;
  //           setTimeout(() => setWinner(pl1), 250);
  //           incPlacar(1);
  //           return;
  //         }
  //         if (matcho?.length == 3) {
  //           w = pl2!;
  //           setTimeout(() => setWinner(pl2), 250);
  //           incPlacar(2);
  //           return;
  //         }
  //       }
  //     }
  //     if (w == '') {
  //       setTimeout(() => setWinner('EMPATE'), 250);
  //       return;
  //     } else {
  //       setTimeout(() => setWinner(w), 250);
  //       w === pl1 ? incPlacar(1) : incPlacar(2);
  //       return;
  //     }
  //   }
  // }, [current]);

  // function reset() {
  //   setWinner(null);
  //   setMatriz(null);
  //   setCurrent('x');
  // }

  return (
    <>
      {winner ? (
        <ContainerWinner>
          {winner == 'EMPATE' ? (
            <Text>
              🥲
              {/* {winner}  */}
              🥲{' '}
            </Text>
          ) : (
            <>
              <Text>
                🎉
                {/* {winner} */}
                🎉
              </Text>
              <Text>VENCEU</Text>
            </>
          )}

          <Button
          // onPress={reset}
          >
            <Text> Jogar novamente</Text>
          </Button>
        </ContainerWinner>
      ) : (
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
                <Text size={16} bold numberOfLines={1}>
                  {player1}
                </Text>
                <Text size={30} bold>
                  {/* {placar.p1} */}8
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
                <Text size={15} bold numberOfLines={1}>
                  {player2}
                </Text>
                <Text size={30} bold>
                  {/* {placar.p2} */}10
                </Text>
              </Player>
            </Players>
            <Space height={20} />
            <Box>
              {arr.map((id: number) => (
                <BoxItemButton
                  ref={buttonRef}
                  key={id}
                  onPress={() => play(id)}>
                  <Text bold size={28}>
                    {id}
                  </Text>
                </BoxItemButton>
              ))}
            </Box>
          </Conteiner>
          <Content>
            <Bnts>
              <BntsReset

              //  onPress={resetAll}
              >
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
                //  onPress={resetPlacar}
              >
                <Text size={16} color="black" bold>
                  Zerar Placar
                </Text>
              </BntsReset>
              <Space height={10} />
              <BntsReset
                style={{
                  borderColor: 'transparent',
                }}>
                <Text size={16} bold>
                  Sair
                </Text>
              </BntsReset>
            </Bnts>
          </Content>
        </Header>
      )}
    </>
  );
}

export default Game;
