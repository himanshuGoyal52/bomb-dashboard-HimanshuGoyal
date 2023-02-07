import Summary from "./Summary";
import React from 'react';
import styled from "styled-components";
import Back from "../../assets/img/Back.jpg";
import Invest from "./Invest";
import BombFarms from "./BombFarms";

const MainContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background: url(${Back});
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
`;
const Box = styled.div`
  width: 75%;
  margin-top: 1em;
`;
function App() {
  return (
    <>
      <MainContainer>
        <Box>
          <Summary />
          <Invest />
          <BombFarms />
        </Box>
      </MainContainer>
    </>
  );
}

export default App;