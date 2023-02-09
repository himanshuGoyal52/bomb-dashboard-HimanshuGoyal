import React from 'react';
import styled from 'styled-components';
import useTotalStakedOnBoardroom from '../../hooks/useTotalStakedOnBoardroom';
import useEarningsOnBoardroom from '../../hooks/useEarningsOnBoardroom';
import useStakedBalanceOnBoardroom from '../../hooks/useStakedBalanceOnBoardroom';
import useFetchBoardroomAPR from '../../hooks/useFetchBoardroomAPR';
import useWithdrawFromBoardroom from '../../hooks/useWithdrawFromBoardroom';
import useWithdrawCheck from '../../hooks/boardroom/useWithdrawCheck';
import useStakeToBoardroom from '../../hooks/useStakeToBoardroom';
import useRedeemOnBoardroom from '../../hooks/useRedeemOnBoardroom';
import useClaimRewardCheck from '../../hooks/boardroom/useClaimRewardCheck';
import bomb from '../../assets/img/bomb-200x200.png';
import bshares from "../../assets/img/bshare-200x200.png";

const MainContainer = styled.div`
  color: white;
  display: grid;
  grid-template-columns: 60% 40%;
  font-family: "Nunito", sans-serif;
`;
const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  .read {
    a {
      color: inherit;
      margin-right: 2px;
    }
  }
  .btn1 {
    width: 100%;
    height: 42px;
    background: transparent;
    color: white;
    font-size: 1.4em;
    background-color: #06799e;
  }
  .chat {
    display: flex;
    margin-top: 8px;
    button {
      font-size: 1.2em;
      font-weight: 400;
      width: 50%;
      border: transparent;
      border-radius: 0.5px;
      background-color: #878993;
      height: 42px;
    }
  }
  .buttons {
    .btn {
      display: inline-block;
      color: white;
      background: none;
      border: 2px solid white;
      width: 125px;
      border-radius: 40px;
      height: 30px;
      font-size: 0.9em;
      margin: 0px 5px;
      cursor : pointer;
    }
    .btn2 {
      color: white;
      background: none;
      border: 2px solid white;
      width: 96%;
      border-radius: 40px;
      height: 30px;
      margin-top: 10px;
      font-size: 0.9em;
      cursor : pointer;
    }
    i {
      color: green;
      background-color: white;
      border-radius: 50%;
      margin-left: 5px;
    }
  }
`;
const RightContainer = styled.div`
border: 1px solid rgba(114, 140, 223, 1);
margin-top: 0.5em;
border-radius: 10px;
margin-left: 1em;
`;

const Invest = () =>  {
    /************* Board Room ************/
    const totalStakedOnBoardroom = parseInt(useTotalStakedOnBoardroom()._hex,16).toFixed(2);
    const earningsOnBoardroom = parseInt(useEarningsOnBoardroom()._hex,16);
    const StakedBalanceOnBoardroom = parseInt(useStakedBalanceOnBoardroom()._hex,16);
    const arpStatsBoardroom = (useFetchBoardroomAPR()/100).toFixed(2);

    let withdrawCheck = useWithdrawCheck();
    let claimRewardCheck = useClaimRewardCheck();

    const depositFunc = useStakeToBoardroom().onStake;
    const withdrawFunc = useWithdrawFromBoardroom().onWithdraw;
    const redeemFunc = useRedeemOnBoardroom().onRedeem;

  return (
    <>
      <MainContainer>
        <LeftContainer>
          <div
            className="read"
            style={{ alignSelf: "flex-end", color: "rgba(158, 230, 255, 1)" }}
          >
            <a href="/">Read Investment Strategy</a>
            <i
              style={{ justifyContent: "center" }}
              class="bx bx-chevron-right bx-sm"
            ></i>
          </div>
          <button className="btn1">Invest Now</button>
          <div className="chat">
            <button style={{ marginRight: "10px" }}>Chat on Discord</button>
            <button style={{ marginLeft: "10px" }}>Read Docs</button>
          </div>
          <div style={{border: "1px solid rgba(114, 140, 223, 1)" , marginTop : "0.5em" , borderRadius: "10px" , height: "234px"}}>
            <div
              className="main"
              style={{
                display: "flex",
                height: "110px",
                justifyContent: "space-between",
              }}
            >
              <div className="deposit" style={{ display: "flex", margin : "1em 0 0 1em"}}>
                <div className="img">
                  <img
                    src={bomb}
                    style={{ height: "40px", width: "40px" }}
                    alt=""
                  />
                </div>
                <div className="text" style={{ marginLeft: "15px" }}>
                  <div style={{ display: "flex" }}>
                    <p style={{ fontSize: "1.4em", fontWeight: "400" , margin : '0px' }}>
                      Boardroom
                    </p>
                    <span
                      style={{
                        background: "rgba(0, 232, 162, 0.5)",
                        fontSize: "0.75em",
                        width: "100px",
                        height: "15px",
                        textAlign: "center",
                        borderRadius: "1.5px",
                        marginTop: "8px",
                        marginLeft: "8px",
                      }}
                    >
                      Recommended
                    </span>
                  </div>
                  <div>
                    <p style={{ fontSize: "0.9em", marginTop: "5px" }}>
                      Stake BSHARE and earn BOMB every epoch
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="staked"
                style={{ alignSelf: "center", marginRight: "15px" }}
              >
                <p>TVL: $1,008,430</p>
                <p style={{ fontSize: "0.9em", marginTop: "1em" }}>
                  Total Staked:{" "}
                  <img
                    src={bshares}
                    style={{ height: "15px", width: "15px" }}
                    alt=""
                  />
                  {totalStakedOnBoardroom}
                </p>
              </div>
            </div>
            <div
              className="details"
              style={{
                gridTemplateColumns: "auto auto auto 42%",
                display: "grid",
                marginLeft : "20px"
              }}
            >
              <div className="returns">
                <p>Daily Returns:</p>
                <p style={{ fontSize: "1.4em" }}>{arpStatsBoardroom}%</p>
              </div>
              <div className="stake">
                <p>Your Stake: {' '}</p>
                <p>
                  <img
                    src={bshares}
                    style={{ height: "15px", width: "15px" }}
                    alt=""
                  />{" "}
                  {StakedBalanceOnBoardroom}
                </p>
                <p>= $0.00</p>
              </div>
              <div className="earned">
                <p>Earned:</p>
                <p>
                  <img
                    src={bomb}
                    style={{ height: "15px", width: "15px" }}
                    alt=""
                  />{" "}
                  {earningsOnBoardroom}
                </p>
                <p>= $298.88</p>
              </div>
              <div className="buttons">
                <button onClick={() => depositFunc} className="btn">
                  Deposit
                  <i class="bx bx-up-arrow-alt"></i>
                </button>
                {
                    withdrawCheck ? 
                    <button onClick={() => withdrawFunc} className="btn" >
                        Withdraw<i class="bx bx-down-arrow-alt"></i>
                    </button> : 
                    <button  className="btn" >
                        Withdraw<i class="bx bx-down-arrow-alt"></i>
                    </button>
                }
                {
                    claimRewardCheck ? 
                    <button onClick={() => redeemFunc} className="btn2">
                        Claim Rewards{" "}
                        <img
                          src={bshares}
                          style={{ height: "15px", width: "15px" }}
                          alt=""
                        />
                    </button>
                    : 
                    <button className="btn2">Claim Rewards{" "}
                        <img
                          src={bshares}
                          style={{ height: "15px", width: "15px" }}
                          alt=""
                        />
                    </button>
                }  
                
              </div>
            </div>
          </div>
        </LeftContainer>
        <RightContainer>
          <p style={{fontSize : "1.5em" , margin: "8px 0 0 10px"}}>Latest News</p>
        </RightContainer>
      </MainContainer>
    </>
  );
}

export default Invest;