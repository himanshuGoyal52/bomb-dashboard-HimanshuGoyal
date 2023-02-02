import {useEffect, useState} from 'react';
import useBombFinance from './useBombFinance';
import {TokenStat} from '../bomb-finance/types';
import useRefresh from './useRefresh';

const useBondStats = () => {
  const [stat, setStat] = useState<TokenStat>();
  const {fastRefresh} = useRefresh();
  const bombFinance = useBombFinance();

  useEffect(() => {
    async function fetchBondPrice() {
      try {
        setStat(await bombFinance.getBondStat());
      } catch (err) {
        console.error(err);
      }
    }
    fetchBondPrice();
  }, [setStat, bombFinance, fastRefresh]);

  return stat;
};

export default useBondStats;
