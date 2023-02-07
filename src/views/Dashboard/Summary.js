import React, { useMemo } from 'react'
import useBombStats from '../../hooks/useBombStats';
import useShareStats from '../../hooks/usebShareStats';
import useBondStats from '../../hooks/useBondStats';
import useTotalValueLocked from '../../hooks/useTotalValueLocked';
import useCurrentEpoch from '../../hooks/useCurrentEpoch';

// import useTotalStakedOnBoardroom from '../../hooks/useTotalStakedOnBoardroom';
// import useEarningsOnBoardroom from '../../hooks/useEarningsOnBoardroom';
// import useStakedBalanceOnBoardroom from '../../hooks/useStakedBalanceOnBoardroom';
// import useFetchBoardroomAPR from '../../hooks/useFetchBoardroomAPR';
// import useWithdrawFromBoardroom from '../../hooks/useWithdrawFromBoardroom';

import { nFormatter } from '../../utils/numberFormatter';
import styled from "styled-components";
// import useShareStatss from '../../hooks/usetShareStats';
import bomb from '../../assets/img/bomb-200x200.png';
import metamask from '../../assets/img/metamask-fox.svg';
import bshares from "../../assets/img/bshare-200x200.png";
import bondImg from '../../assets/img/bbond-256.png';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgba(32, 37, 67, 0.75);
  height: 413px;
  border-radius : 5px;
  position: relative;
`;
const Heading = styled.p`
  color: white;
  font-family: "Nunito", sans-serif;
  font-weight: 400;
  align-self: center;
  &:after {
    /* display: inline-block; */
    position: absolute;
    top: 17%;
    left: 2%;
    content: "";
    border-top: 0.5px solid rgba(195, 197, 203, 0.75);
    width: 90%;
    margin: 0 1rem;
    transform: translateY(-1rem);
  }
`;
const Container = styled.div`
  display: grid;
  grid-template-columns: auto 25%;
  color: white;
  font-family: "Nunito", sans-serif;
`;
const LeftSection = styled.div`
  margin-top: 25px;
`;
const RightSection = styled.div`
  margin-top: 20px;
`;
const Epoch = styled.div`
  text-align: center;
  position: relative;
  &:after {
    /* display: inline-block; */
    position: absolute;
    top: 88px;
    left: 0%;
    content: "";
    border-top: 0.5px solid rgba(195, 197, 203, 0.5);
    width: 90%;
    margin: 0 1rem;
    transform: translateY(-1rem);
  }
`;
const NextEpoch = styled.div`
  text-align: center;
  margin-top: 3px;
  position: relative;
  &:after {
    /* display: inline-block; */
    position: absolute;
    top: 86px;
    left: 3%;
    content: "";
    border-top: 0.5px solid rgba(195, 197, 203, 0.5);
    width: 80%;
    margin: 0 1rem;
    transform: translateY(-1rem);
  }
`
const Stats = styled.div`
  text-align: center;
  line-height: 25px;
  margin-top: 10px;
  position: relative;
`
const Table = styled.table`
  border-spacing: 20px;
  .tr1{
    position: relative;
    td{
      font-size: 10px;
      line-height: 13.64px;
    }
    &:after {
    position: absolute;
    top: 15%;
    left: 3%;
    content: "";
    border-bottom: 0.5px solid rgba(195, 197, 203, 0.5);
    width: 80%;
    margin: 0 1rem;
    transform: translateY(-1rem);
  }
  }
  .tr2 {
    td {
      font-size: 12px;
      /* height: 28px; */
      text-align: center;
      vertical-align: middle;
    }
    .bomb {
      width: 20px;
      height: 20px;
      padding: 0px 4px;
    }
    .metamask {
      width: 30px;
      height: 30px;
      padding: 0px 4px;
    }
    .left{
      line-height: 20px;
    }
    
  }
`;


const Summary =  () => {
    const bombStats =  useBombStats();
    const priceInDollars_BOMB = useMemo(
        () => (bombStats ? Number(bombStats.priceInDollars).toFixed(2) : null),
        [bombStats],
    )
    const totalSupply_BOMB = useMemo(
        () => (bombStats ? Number(bombStats.totalSupply).toFixed(2) : null),
        [bombStats],
    )
    const circulatingSupply_BOMB = useMemo(
        () => (bombStats ? Number(bombStats.circulatingSupply).toFixed(2) : null),
        [bombStats],
    )
    /******************************************************************************************/
    const bShareStats = useShareStats();
    const priceInDollars_bShare = useMemo(
        () => (bShareStats ? Number(bShareStats.priceInDollars).toFixed(2) : null),
        [bShareStats],
    );
    const totalSupply_bShare = useMemo(
        () => (bShareStats ? Number(bShareStats.totalSupply).toFixed(2) : null),
        [bShareStats],
    )
    const circulatingSupply_bShare = useMemo(
        () => (bShareStats ? Number(bShareStats.circulatingSupply).toFixed(2) : null),
        [bShareStats],
    )
    /******************************************************************************************/
    const bondStats = useBondStats();
    const priceInDollars_bond = useMemo(
        () => (bondStats ? Number(bondStats.priceInDollars).toFixed(2) : null),
        [bondStats]
    );
    const totalSupply_bond = useMemo(
        () => (bondStats ? Number(bondStats.totalSupply).toFixed(2) : null),
        [bondStats],
    );
    const circulatingSupply_bond = useMemo(
        () => (bondStats ? Number(bondStats.circulatingSupply).toFixed(2) : null),
        [bondStats],
    );
    /******************************************************************************************/
    const currentEpochStats = useCurrentEpoch();
    const currentEpochNum = parseInt(currentEpochStats._hex , 16);
    const tvl = useTotalValueLocked().toFixed(2);

    /************* Board Room ************/
    // const totalStakedOnBoardroom = parseInt(useTotalStakedOnBoardroom()._hex,16).toFixed(2);
    // const earningsOnBoardroom = parseInt(useEarningsOnBoardroom()._hex,16);
    // const StakedBalanceOnBoardroom = parseInt(useStakedBalanceOnBoardroom()._hex,16);
    // const arpStatsBoardroom = (useFetchBoardroomAPR()/100).toFixed(2);
      

  return (
      <>
        <MainContainer>
        <Heading>Bomb Finance Summary</Heading>
        <Container>
          <LeftSection>
            <Table>
              <tr className="tr1">
                <td style={{ width: "50px" }}></td>
                <td>Current Supply</td>
                <td>Total Supply</td>
                <td style={{ width: "80px", paddingLeft: "17px" }}>Price</td>
              </tr>
              <tr className="tr2">
                <td>
                  <div style={{ display: "flex" ,alignItems: 'center' }}>
                    <img src={bomb} className="bomb" alt="" />
                    <p>$BOMB</p>
                  </div>
                </td>
                <td>
                  <p>{nFormatter(circulatingSupply_BOMB,1)}</p>
                </td>
                <td>
                  <p>{nFormatter(totalSupply_BOMB,1)}</p>
                </td>
                <td style={{ display: "flex" , width: "105px"}}>
                  <div className="left">
                    <p>${priceInDollars_BOMB}</p>
                    <p>1.05 BTCB</p>
                  </div>
                  <div className="right" style={{ marginLeft: "8px" , display: "flex", alignItems: 'center'}}>
                    <img src={metamask} className="metamask" alt="" />
                  </div>
                </td>
              </tr>
              <tr className="tr2">
                <td>
                  <div style={{ display: "flex" ,alignItems: 'center'}}>
                    <img src={bshares} className="bomb" alt="" />
                    <p>$BSHARE</p>
                  </div>
                </td>
                <td>
                  <p>{nFormatter(circulatingSupply_bShare,1)}</p>
                </td>
                <td>
                  <p>{nFormatter(totalSupply_bShare,1)}</p>
                </td>
                <td style={{ display: "flex" , width: "105px" }}>
                  <div className="left">
                    <p>${priceInDollars_bShare}</p>
                    <p>1.05 BTCB</p>
                  </div>
                  <div className="right" style={{ marginLeft: "8px" , display: "flex", alignItems: 'center' }}>
                    <img src={metamask} className="metamask" alt="" />
                  </div>
                </td>
              </tr>
              <tr className="tr2">
                <td>
                  <div style={{ display: "flex",alignItems: 'center' }}>
                    <img src={bondImg} className="bomb" alt="" />
                    <p>$BOMB</p>
                  </div>
                </td>
                <td>
                  <p>{nFormatter(circulatingSupply_bond,1)}</p>
                </td>
                <td>
                  <p>{nFormatter(totalSupply_bond,1)}</p>
                </td>
                <td style={{ display: "flex" , width: "105px" }}>
                  <div className="left">
                    <p>${priceInDollars_bond}</p>
                    <p>1.05 BTCB</p>
                  </div>
                  <div className="right" style={{ marginLeft: "8px" , display: "flex", alignItems: 'center' }}>
                    <img src={metamask} className="metamask" alt="" />
                  </div>
                </td>
              </tr>
            </Table>
          </LeftSection>
          <RightSection>
            <Epoch>
              <p>Current Epoch</p>
              <h1>{currentEpochNum}</h1>
            </Epoch>
            <NextEpoch>
              <h1>03:38:36</h1>
              <p>Next Epoch in</p>
            </NextEpoch>
            <Stats>
              <p>Live TWAP: <span style={{color : "rgba(0, 232, 162, 1)"}}>1.17</span></p>
              <p>TVL: <span style={{color : "rgba(0, 232, 162, 1)"}}>${tvl}</span></p>
              <p>Last Epoch TWAP: <span style={{color : "rgba(0, 232, 162, 1)"}}>1.22</span></p>
            </Stats>
          </RightSection>
        </Container>
      </MainContainer>
      
      </>
  )
}

export default Summary;
