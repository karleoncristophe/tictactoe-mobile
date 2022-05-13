import React, {useEffect, useState} from 'react';
import styled from 'styled-components/native';
import ScreenWrapper from '../../common/ScreenWrapper';
import Text from '../../common/Text';

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
  flex-direction: column;
  align-items: center;
`;

const BntsReset = styled.TouchableOpacity`
  border: none;
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

interface LocationStateProps {
  player1: string;
  player2: string;
}

function Game() {
  const [current, setCurrent] = useState('x');
  const [matriz, setMatriz] = useState<any[] | null>(null);
  const [winner, setWinner] = useState<string | null>(null);
  const [pl1, setPl1] = useState<string | null>(null);
  const [pl2, setPl2] = useState<string | null>(null);
  const [placar, setPlacar] = useState({
    p1: 0,
    p2: 0,
  });
  // const navigate = useNavigate();

  // const location = useLocation();
  // const myState: LocationStateProps = location.state as LocationStateProps;

  const arr = [11, 12, 13, 21, 22, 23, 31, 32, 33];

  // function resetAll() {
  //   arr.map(id => {
  //     let doc = document.getElementById(String(id)) as HTMLButtonElement;
  //     doc.textContent = '';
  //     doc.disabled = false;
  //   });

  //   setWinner(null);
  //   setCurrent('x');
  //   setMatriz(null);

  //   let newPlacar = {
  //     p1: 0,
  //     p2: 0
  //   };
  //   setPlacar(newPlacar);
  // }

  // function resetPlacar() {
  //   let newPlacar = {
  //     p1: 0,
  //     p2: 0
  //   };
  //   setPlacar(newPlacar);
  // }

  // function logout() {
  //   arr.map(id => {
  //     let doc = document.getElementById(String(id)) as HTMLButtonElement;
  //     doc.textContent = '';
  //     doc.disabled = false;
  //   });

  //   setWinner(null);
  //   setCurrent('x');
  //   setMatriz(null);

  //   let newPlacar = {
  //     p1: 0,
  //     p2: 0
  //   };
  //   setPlacar(newPlacar);
  //   setPl1(null);
  //   setPl2(null);
  //   location.state = null;
  // }

  // function play(id: string) {
  //   const doc = document.getElementById(id) as HTMLButtonElement;

  //   doc.innerText = current;
  //   let newMatriz = {id: id, value: doc.textContent};
  //   if (matriz) {
  //     setMatriz([...matriz, newMatriz]);
  //   } else {
  //     setMatriz([newMatriz]);
  //   }
  //   doc.disabled = true;
  //   current == 'x' ? (doc.style.color = 'green') : (doc.style.color = 'tomato');
  //   current == 'x' ? setCurrent('o') : setCurrent('x');
  // }

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
  //     navigate('/');
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
  //     ['31', '32', '33']
  //   ];

  //   const columns = [
  //     ['11', '21', '31'],
  //     ['12', '22', '32'],
  //     ['13', '23', '33']
  //   ];

  //   const diagonals = [
  //     ['11', '22', '33'],
  //     ['13', '22', '31']
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
          <Players>
            <Player>
              <Text>
                Jogador 1: <Text>X</Text>
              </Text>
              <Text>{/* {pl1} */}Jhon</Text>
              <Text>{/* {placar.p1} */}8</Text>
            </Player>
            <Content>
              <Bnts>
                <BntsReset
                //  onPress={resetAll}
                >
                  <Text>Reiniciar</Text>
                </BntsReset>
                <BntsReset
                //  onPress={resetPlacar}
                >
                  <Text>Zerar Placar</Text>
                </BntsReset>
                <BntsReset>
                  <Text>Sair</Text>
                </BntsReset>
              </Bnts>
            </Content>
            <Player>
              <Text>
                Jogador 2: <Text>O</Text>
              </Text>
              <Text>{/* {pl2} */}karleon</Text>
              <Text>{/* {placar.p2} */}10</Text>
            </Player>
          </Players>
          <Conteiner>
            <Box>
              {arr.map((id: number) => (
                <BoxItemButton
                  style={
                    {
                      // marginTop: id === 31 || 32 || 32 ? 3 : 0,
                      // marginBottom: id === 31 || 32 || 32 ? 0 : 3,
                    }
                  }
                  key={id}
                  // id={String(id)}
                  //  onPress={() => play(String(id))}
                >
                  <Text bold size={28}>
                    {id}
                  </Text>
                </BoxItemButton>
              ))}
            </Box>
          </Conteiner>
        </Header>
      )}
    </>
  );
}

export default Game;
