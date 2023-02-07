import React from 'react';

import useTotalStakedOnBoardroom from '../../hooks/useTotalStakedOnBoardroom';
import useEarningsOnBoardroom from '../../hooks/useEarningsOnBoardroom';
import useStakedBalanceOnBoardroom from '../../hooks/useStakedBalanceOnBoardroom';
import useFetchBoardroomAPR from '../../hooks/useFetchBoardroomAPR';
import useWithdrawFromBoardroom from '../../hooks/useWithdrawFromBoardroom';
import useWithdrawCheck from '../../hooks/boardroom/useWithdrawCheck';
import useStakeToBoardroom from '../../hooks/useStakeToBoardroom';
import useRedeemOnBoardroom from '../../hooks/useRedeemOnBoardroom';
import useClaimRewardCheck from '../../hooks/boardroom/useClaimRewardCheck';

const Invest = () => {

    /************* Board Room ************/
    const totalStakedOnBoardroom = parseInt(useTotalStakedOnBoardroom()._hex,16).toFixed(2);
    const earningsOnBoardroom = parseInt(useEarningsOnBoardroom()._hex,16);
    const StakedBalanceOnBoardroom = parseInt(useStakedBalanceOnBoardroom()._hex,16);
    const arpStatsBoardroom = (useFetchBoardroomAPR()/100).toFixed(2);

    let withdrawCheck = useWithdrawCheck();
    let claimRewardCheck = useClaimRewardCheck();

    return (
        <>
            <div className='invest_container'>
                <div className='Boardroom_container'>
                    <p>Read Invesment stratergy</p>
                    <div className='invest_button'>Invest Now</div>
                    <div>
                        <div>
                            Chat on Discord
                        </div>
                        <div>
                            Read Docs
                        </div>
                    </div>
                </div>
                <div>

                </div>
            </div>
            <div>
                <p>BoardRoom</p>
                <p>total staked : {totalStakedOnBoardroom}</p>
                <p>your earnings : {earningsOnBoardroom}</p>
                <p>staked bshare : {StakedBalanceOnBoardroom}</p>
                <p>ARP Stats : {arpStatsBoardroom}%</p>
                {
                    withdrawCheck ? <button onClick={() => useWithdrawFromBoardroom}>Withdraw</button> : 
                    <button >Withdraw</button>
                }
                <button onClick={() => useStakeToBoardroom}>Deposite</button>
                {
                    claimRewardCheck ? <button onClick={() => useRedeemOnBoardroom}>Claim Rewards</button> : 
                    <button>Claim Rewards</button>
                }                
            </div>
        </>
    )
}

export default Invest;