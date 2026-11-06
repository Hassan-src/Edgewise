import {
  HiOutlineArrowDown,
  HiOutlineArrowUp,
  HiOutlineChartBar,
} from "react-icons/hi2";

import Card from "../../ui/Card";
import TrendLine from "../../ui/TrendLine";
import Head from "../../ui/CardHead";
import MetricValue from "../../ui/MetricValue";
import Loading from "../../ui/Loading";

import { formatCurrency, formatPercentage } from "../../utils/helper";
import { useAccount } from "../Trades/useAccount";
import { useAllTrades } from "./useAllTrades";
import CardInfo from "../../ui/CardInfo";
import Chart from "../../ui/CardChart";

function Expectancy() {
  const { trades, isPending: isLoadingTrades } = useAllTrades();
  const { account, isPending: isLoadingAccount } = useAccount();

  if (isLoadingAccount || isLoadingTrades) return <Loading />;
  if (trades.length === 0) return;

  const initialBalance = Number(account?.[0]?.initial_balance ?? 0);
  const totalTrades = trades.length;

  const winningTrades = trades.filter((trade) => Number(trade.net_profit) > 0);

  const losingTrades = trades.filter((trade) => Number(trade.net_profit) < 0);

  const winRate = winningTrades.length / totalTrades || 0;
  const lossRate = losingTrades.length / totalTrades || 0;

  const averageWinning =
    winningTrades.reduce(
      (total, trade) => total + Number(trade.net_profit),
      0,
    ) / (winningTrades.length || 1);

  const averageLoss =
    losingTrades.reduce((total, trade) => total + Number(trade.net_profit), 0) /
    (losingTrades.length || 1);

  const expectancy = winRate * averageWinning + lossRate * averageLoss;
  const expectancyPercentage = (expectancy / initialBalance) * 100;

  return (
    <Card>
      <CardInfo>
        <Head>
          <HiOutlineChartBar />
          Expectancy
        </Head>
        {expectancy > 0 ? (
          <MetricValue $size="cardMain" $status="profit">
            {formatCurrency(expectancy)}
          </MetricValue>
        ) : (
          <MetricValue $size="cardMain" $status="loss">
            {formatCurrency(expectancy)}
          </MetricValue>
        )}
        {expectancy > 0 ? (
          <MetricValue $size="cardSecondary" $status="profit">
            <HiOutlineArrowUp />
            {formatPercentage(expectancyPercentage)}
          </MetricValue>
        ) : (
          <MetricValue $size="cardSecondary" $status="loss">
            <HiOutlineArrowDown />
            {formatPercentage(expectancyPercentage)}
          </MetricValue>
        )}
      </CardInfo>
      <Chart>
        <TrendLine $type={expectancy > 0 ? "Profit" : "Loss"} />
      </Chart>
    </Card>
  );
}

export default Expectancy;
