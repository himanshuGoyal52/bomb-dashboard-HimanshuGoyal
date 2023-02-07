import React from "react";
import styled from "styled-components";
import bomb from "../images/bomb.png";
import bshares from "../images/bshares.png";
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
function invest() {
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
          <div style={{border: "1px solid rgba(114, 140, 223, 1)" , marginTop : "0.5em" , borderRadius: "10px" , height: "200px"}}>
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
                    <p style={{ fontSize: "1.4em", fontWeight: "400" }}>
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
                  7232
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
                <p style={{ fontSize: "1.4em" }}>2%</p>
              </div>
              <div className="stake">
                <p>Your Stake:</p>
                <p>
                  <img
                    src={bshares}
                    style={{ height: "15px", width: "15px" }}
                    alt=""
                  />{" "}
                  6,000
                </p>
                <p>= $1171.62</p>
              </div>
              <div className="earned">
                <p>Earned:</p>
                <p>
                  <img
                    src={bomb}
                    style={{ height: "15px", width: "15px" }}
                    alt=""
                  />{" "}
                  1660.4113
                </p>
                <p>= $298.88</p>
              </div>
              <div className="buttons">
                <button className="btn">
                  Deposit
                  <i class="bx bx-up-arrow-alt"></i>
                </button>
                <button className="btn">
                  Withdraw<i class="bx bx-down-arrow-alt"></i>
                </button>
                <button className="btn2">
                  Claim Rewards{" "}
                  <img
                    src={bshares}
                    style={{ height: "15px", width: "15px" }}
                    alt=""
                  />
                </button>
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

export default invest;
