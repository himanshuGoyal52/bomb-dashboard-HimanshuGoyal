import Summary from "./Summary";
import React from 'react';
import styled from "styled-components";
// import Back from "../../assets/img/Back.jpg";
import Back from '../../assets/img/Group2.png'
import Invest from "./Invest";
import BombFarms from "./BombFarms";
import Bonds from "./Bonds";

const MainContainer = styled.div`
  
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
          <Bonds />
        </Box>
      </MainContainer>
    </>
  );
}

export default App;