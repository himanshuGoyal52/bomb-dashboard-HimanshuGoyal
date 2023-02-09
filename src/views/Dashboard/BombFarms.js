import React from 'react'
import styled from 'styled-components';
import bomb_btc from '../../assets/img/bomb-btc-lp-512.png';
import bshareimg from '../../assets/img/bshare-200x200.png';
import bshare_bnb from '../../assets/img/bshare-bnb-LP.png';
import useFetchBombAPR from '../../hooks/useFetchBombAPR';
import useRedeemFromBomb from '../../hooks/useRedeemFromBomb';
import useStakedBomb from '../../hooks/useStakedBomb';
import useStakeToBomb from '../../hooks/useStakeToBomb';
import useWithdrawFromBomb from '../../hooks/useWithdrawFromBomb';
import useRedeemFromBtcb from '../../hooks/useRedeemFromBtcb';
import useTotalValueLocked from '../../hooks/useTotalValueLocked';

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
    cursor : pointer;
  }
`;


const BombFarms = () => {
  let bombARP = (useFetchBombAPR()/100).toFixed(2);
  let stakedbomb = parseInt(useStakedBomb()._hex,16);
  let tvlNum = useTotalValueLocked();

  const stakeToBombFunc = useStakeToBomb().onStake;
  const withdrawFunc = useWithdrawFromBomb().onWithdraw;
  const redeemFunc = useRedeemFromBomb().onWithdraw;
  const redeemBTCB = useRedeemFromBtcb().onWithdraw;


  return (
    <>
        <BombFarmContainer>
            <div className='fcontainer'>
                <div style={{marginRight : 'auto'}}>
                    <h3>Bomb Farms</h3>
                    <p style={{color:'white' , fontSize : '0.8rem'}}>Stake your LP token in our farms to start earning $BSHARE</p>
                </div>
                <button onClick={() => stakeToBombFunc} className="btn">
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
              <p style={{color : 'white'}}>TVL : ${tvlNum}</p>
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
                <p style={{ fontSize: "1.4em" }}>{bombARP}%</p>
              </div>
              <div className="stake">
                <p>Your Stake: {' '}</p>
                <p>
                  <img
                    src={bomb_btc}
                    style={{ height: "25px", width: "25px" }}
                    alt=""
                  />{" "}
                  {stakedbomb}
                </p>
                <p>= $0.00</p>
              </div>
              <div className="earned">
                <p>Earned:</p>
                <p>
                  <img
                    src={bshareimg}
                    style={{ height: "25px", width: "25px" }}
                    alt=""
                  />{" "}
                  4878
                </p>
                <p>= $0.00</p>
              </div>
              <div className="buttons" style={{display:'flex' , alignItems:'center'}}>
                <button onClick={() => stakeToBombFunc} className="btn">
                  Deposit
                  <i class="bx bx-up-arrow-alt"></i>
                </button>
                {
                    true ? 
                    <button onClick={() => withdrawFunc} className="btn" >
                        Withdraw<i class="bx bx-down-arrow-alt"></i>
                    </button> :
                    <button  className="btn" >
                        Withdraw<i class="bx bx-down-arrow-alt"></i>
                    </button>
                }
                {
                    true ? 
                    <button onClick={() => redeemBTCB} className="btn">
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
              <p style={{color : 'white'}}>TVL : ${tvlNum}</p>
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
                <p style={{ fontSize: "1.4em" }}>{bombARP}%</p>
              </div>
              <div className="stake">
                <p>Your Stake: {' '}</p>
                <p>
                  <img
                    src={bomb_btc}
                    style={{ height: "25px", width: "25px" }}
                    alt=""
                  />{" "}
                  {stakedbomb}
                </p>
                <p>= $0.00</p>
              </div>
              <div className="earned">
                <p>Earned:</p>
                <p>
                  <img
                    src={bshareimg}
                    style={{ height: "25px", width: "25px" }}
                    alt=""
                  />{" "}
                  48
                </p>
                <p>= $0.00</p>
              </div>
              <div className="buttons" style={{display:'flex' , alignItems:'center'}}>
                <button onClick={() => stakeToBombFunc} className="btn">
                  Deposit
                  <i class="bx bx-up-arrow-alt"></i>
                </button>
                {
                    <tr></tr> ? 
                    <button onClick={() => withdrawFunc} className="btn" >
                        Withdraw<i class="bx bx-down-arrow-alt"></i>
                    </button> :
                    <button  className="btn" >
                        Withdraw<i class="bx bx-down-arrow-alt"></i>
                    </button>
                }
                {
                    true ? 
                    <button onClick={() => redeemFunc} className="btn">
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