import {useEffect, useState} from 'react';
import useBombFinance from './useBombFinance';
import {TokenStat} from '../bomb-finance/types';
import useRefresh from './useRefresh';

const useShareStats = () => {
  const [stat, setStat] = useState<TokenStat>();
  const {fastRefresh} = useRefresh();
  const bombFinance = useBombFinance();

  useEffect(() => {
    async function fetchSharePrice() {
      try {
        setStat(await bombFinance.getShareStat());
      } catch (err) {
        console.error(err);
      }
    }
    fetchSharePrice();
  }, [setStat, bombFinance, fastRefresh]);
  
  return stat;
};

export default useShareStats;
