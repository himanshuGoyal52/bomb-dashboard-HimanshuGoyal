import React, { useMemo } from "react";
import styled from "styled-components";
import bomb from "../../assets/img/bbond.png";
// import useBondsPurchasable from "../../hooks/useBondsPurchasable";
import useBondStats from "../../hooks/useBondStats";

const Container = styled.div`
  font-family: "Nunito", sans-serif;
  color: white;
`;
const Container1 = styled.div``;
const Container2 = styled.div`
  display: grid;
  .btn button {
    /* display: inline-block; */
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
  .box1::after {
    position: absolute;
    top: 70px;
    /* left: 3%; */
    content: "";
    border-top: 0.5px solid rgba(195, 197, 203, 0.5);
    width: 95%;
    margin: 0 1rem;
    transform: translateY(-1rem);
  }
`;
function Bonds() {
  // let availablePurchasable = useBondsPurchasable();
  let bondStats = useBondStats();
  let bondPrice = useMemo(
      () => (bondStats ? Number(bondStats.priceInDollars).toFixed(2) : null),
      [bondStats]
  );
  // let bondPrice = 45;

  return (
    <>
      <Container style={{ marginBottom : '30px', marginTop : "14px" , padding: "0 15px 15px 15px" , background : "rgba(35, 40, 75, 0.75)" , borderRadius: "10px" , border : "1px solid rgba(114, 140, 223, 1)"}}>
        <Container1 style={{ display: "flex" , margin: "10px"}}>
          <img src={bomb} alt="" style={{ height: "40px", width: "40px" }} />
          <div className="content" style={{ color: "white" , margin: "0 0 0 10px" }}>
            <p style={{ fontSize: "1.4em", fontWeight: "400" , margin : '0px'}}>Bonds</p>
            <p style={{ fontSize: "0.9em", marginTop: "5px" }}>
              BBOND can be purchased only on contraction periods, when TWAP of
              BOMB is below 1
            </p>
          </div>
        </Container1>
        <Container2
          style={{
            display: "grid",
            gridTemplateColumns: "auto auto 45%",
          }}
        >
          <div className="price" style={{marginTop : "10px"}}>
            <p>Current Price: (Bomb)^2</p>
            <p style={{ fontSize: "1.5em" , marginTop : "20px"}}>BBond = {bondPrice} $</p>
          </div>
          <div className="redeem" style={{marginTop : "10px"}}>
            <p>Available to redeem:</p>
            <p style={{ fontSize: "2.2em" , marginTop : "10px"}}>
              <img
                src={bomb}
                alt=""
                style={{ height: "40px", width: "40px" }}
              />
              155
            </p>
          </div>
          <div className="bbond" style={{ position: "relative" }}>
            <div
              className="box1"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <div className="text">
                <p>Purchase BBond</p>
                <p>Bomb is over peg</p>
              </div>
              <div className="btn">
                <button>Purchase</button>
              </div>
            </div>
            <div
              className="box2"
              style={{ display: "flex", justifyContent: "space-between" , marginTop : "20px"}}
            >
              <div className="text">
                <p>Redeem Bomb</p>
              </div>
              <div className="btn">
                <button>Redeem</button>
              </div>
            </div>
          </div>
        </Container2>
      </Container>
    </>
  );
}

export default Bonds;
