import React from 'react'
import styled from 'styled-components';
import bomb_btc from '../../assets/img/bomb-btc-lp-512.png';
import bshareimg from '../../assets/img/bshare-200x200.png';
import bshare_bnb from '../../assets/img/bshare-bnb-LP.png';

const BombFarmContainer = styled.div`
  display: flex;
  flex-direction: column;
  color : white;
  background-color: rgba(32, 37, 67, 0.75);
  height: 490px;
  margin-top : 1rem;
  padding : 2rem;
  border-radius : 5px;
  .fcontainer{
    display : flex;
    width : 100%;
    flex : row;
    height : 30px;
  }
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
`;


const BombFarms = () => {
  return (
    <>
        <BombFarmContainer>
            <div className='fcontainer'>
                <div style={{marginRight : 'auto'}}>
                    <h3>Bomb Farms</h3>
                    <p style={{color:'white' , fontSize : '0.8rem'}}>Stake your LP token in our farms to start earning $BSHARE</p>
                </div>
                <button onClick={() => console.log("ld")} className="btn">
                  Deposit
                  <i class="bx bx-up-arrow-alt"></i>
                </button>
            </div>
            <div style={{marginTop : '3rem' , display : 'flex' , alignItems:'center' , borderBottom : '0.7px solid white'}}>
              <div style={{display:'flex' , alignItems : 'center' , marginRight : 'auto'}}>
                <img style={{width : "5%"}} src={bomb_btc} alt="bomb_btc" />
                <h3>BOMB-BTC</h3>
                <span
                    style={{
                      background: "rgba(0, 232, 162, 0.5)",
                      fontSize: "0.75em",
                      width: "100px",
                      height: "15px",
                      textAlign: "center",
                      borderRadius: "1.5px",
                      marginLeft : '12px',
                    }}>
                      Recommended
                  </span>
              </div>
              <p style={{color : 'white'}}>TVL : $52521752</p>
            </div>

            <div
              className="details"
              style={{
                gridTemplateColumns: "auto auto auto 42%",
                display: "grid",
                margin : "20px"
              }}
            >
              <div className="returns">
                <p>Daily Returns:</p>
                <p style={{ fontSize: "1.4em" }}>45%</p>
              </div>
              <div className="stake">
                <p>Your Stake: {' '}</p>
                <p>
                  <img
                    src={bomb_btc}
                    style={{ height: "25px", width: "25px" }}
                    alt=""
                  />{" "}
                  45
                </p>
                <p>= $1171.62</p>
              </div>
              <div className="earned">
                <p>Earned:</p>
                <p>
                  <img
                    src={bshareimg}
                    style={{ height: "25px", width: "25px" }}
                    alt=""
                  />{" "}
                  45
                </p>
                <p>= $298.88</p>
              </div>
              <div className="buttons" style={{display:'flex' , alignItems:'center'}}>
                <button onClick={() => console.log('45')} className="btn">
                  Deposit
                  <i class="bx bx-up-arrow-alt"></i>
                </button>
                {
                    <tr></tr> ? 
                    <button onClick={() => console.log('45')} className="btn" >
                        Withdraw<i class="bx bx-down-arrow-alt"></i>
                    </button> :
                    <button  className="btn" >
                        Withdraw<i class="bx bx-down-arrow-alt"></i>
                    </button>
                }
                {
                    true ? 
                    <button onClick={() => console.log('45')} className="btn">
                        Claim Rewards{" "}
                        <img
                          src={bshareimg}
                          style={{ height: "15px", width: "15px" , display:'inline'}}
                          alt=""
                        />
                    </button>
                    : 
                    <button className="btn1">Claim Rewards{" "}
                        <img
                          src={bshareimg}
                          style={{ height: "15px", width: "15px" }}
                          alt=""
                        />
                    </button>
                }  
                
              </div>
            </div>

            <div style={{marginTop : '0.2rem' , display : 'flex' , alignItems:'center' , borderBottom : '0.7px solid white'}}>
              <div style={{display:'flex' , alignItems : 'center' , marginRight : 'auto'}}>
                <img style={{width : "5%"}} src={bshare_bnb} alt="bomb_btc" />
                <h3>BSHARE - BNB</h3>
                <span
                    style={{
                      background: "rgba(0, 232, 162, 0.5)",
                      fontSize: "0.75em",
                      width: "100px",
                      height: "15px",
                      textAlign: "center",
                      borderRadius: "1.5px",
                      marginLeft : '12px',
                    }}>
                      Recommended
                  </span>
              </div>
              <p style={{color : 'white'}}>TVL : $525217</p>
            </div>

            <div
              className="details"
              style={{
                gridTemplateColumns: "auto auto auto 42%",
                display: "grid",
                margin : "20px"
              }}
            >
              <div className="returns">
                <p>Daily Returns:</p>
                <p style={{ fontSize: "1.4em" }}>45%</p>
              </div>
              <div className="stake">
                <p>Your Stake: {' '}</p>
                <p>
                  <img
                    src={bomb_btc}
                    style={{ height: "25px", width: "25px" }}
                    alt=""
                  />{" "}
                  45
                </p>
                <p>= $1171.62</p>
              </div>
              <div className="earned">
                <p>Earned:</p>
                <p>
                  <img
                    src={bshareimg}
                    style={{ height: "25px", width: "25px" }}
                    alt=""
                  />{" "}
                  45
                </p>
                <p>= $298.88</p>
              </div>
              <div className="buttons" style={{display:'flex' , alignItems:'center'}}>
                <button onClick={() => console.log('45')} className="btn">
                  Deposit
                  <i class="bx bx-up-arrow-alt"></i>
                </button>
                {
                    <tr></tr> ? 
                    <button onClick={() => console.log('45')} className="btn" >
                        Withdraw<i class="bx bx-down-arrow-alt"></i>
                    </button> :
                    <button  className="btn" >
                        Withdraw<i class="bx bx-down-arrow-alt"></i>
                    </button>
                }
                {
                    true ? 
                    <button onClick={() => console.log('45')} className="btn">
                        Claim Rewards{" "}
                        <img
                          src={bshareimg}
                          style={{ height: "15px", width: "15px" , display:'inline'}}
                          alt=""
                        />
                    </button>
                    : 
                    <button className="btn1">Claim Rewards{" "}
                        <img
                          src={bshareimg}
                          style={{ height: "15px", width: "15px" }}
                          alt=""
                        />
                    </button>
                }  
                
              </div>
            </div>

        </BombFarmContainer>
    </>
  )
}

export default BombFarms;