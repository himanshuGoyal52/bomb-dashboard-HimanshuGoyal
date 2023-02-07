import React from 'react'
import styled from 'styled-components';

const BombFarmContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: rgba(32, 37, 67, 0.75);
  height: 413px;
  margin-top : 1rem;
  padding : 2rem;
  border-radius : 5px;
  .fcontainer{
    display : flex;
    width : 100%;
    flex : row;
    height : 30px;
  }
`;

const BombFarms = () => {
  return (
    <>
        <BombFarmContainer>
            <div className='fcontainer'>
                <div style={{marginRight : 'auto'}}>
                    <h3>Bomb Farms</h3>
                    <p style={{color:'white'}}>Stake your LP token in our farms to start earning $BSHARE</p>
                </div>
                <button>Claim All</button>
            </div>
                

        </BombFarmContainer>
    </>
  )
}

export default BombFarms;