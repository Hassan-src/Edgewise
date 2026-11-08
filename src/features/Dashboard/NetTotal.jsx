import {
  HiOutlineArrowDown,
  HiOutlineArrowTrendingUp,
  HiOutlineArrowUp,
} from "react-icons/hi2";

import Loading from "../../ui/Loading";
import MetricValue from "../../ui/MetricValue";
import Head from "../../ui/CardHead";
import Card from "../../ui/Card";
import TrendLine from "../../ui/TrendLine";
import Row from "../../ui/Row";
import Chart from "../../ui/CardChart";
import CardHelperInfo from "../../ui/CardHelperInfo";
import CardInfo from "../../ui/CardInfo";

import { useAccount } from "../Trades/useAccount";
import { formatCurrency, formatPercentage } from "../../utils/helper";
import { useAllTrades } from "./useAllTrades";

function NetTotal() {
  const { account, isPending: isLoadingAccount } = useAccount();
  const { trades, isPending: isLoadingTrades } = useAllTrades();

  if (isLoadingAccount || isLoadingTrades) return <Loading />;

  const initialBalance = Number(account?.[0]?.initial_balance ?? 0);

  const totalProfit = trades.reduce(
    (total, trade) => total + Number(trade.net_profit ?? 0),
    0,
  );

  const profitInPercentage =
    initialBalance > 0 ? (totalProfit / initialBalance) * 100 : null;

  return (
    <Card>
      <CardInfo $gap="medium">
        <Row $type="horizontalSticky" $gap="small">
          <Head>
            <HiOutlineArrowTrendingUp />
            Net P&L
          </Head>
          <CardHelperInfo>
            Total profit or loss after trading costs.
          </CardHelperInfo>
        </Row>
        {totalProfit > 0 ? (
          <MetricValue $size="cardMain" $status="profit">
            {formatCurrency(totalProfit)}
          </MetricValue>
        ) : (
          <MetricValue $size="cardMain" $status="loss">
            {formatCurrency(totalProfit)}
          </MetricValue>
        )}
        {totalProfit > 0 ? (
          <MetricValue $size="cardSecondary" $status="profit">
            <HiOutlineArrowUp />
            {formatPercentage(profitInPercentage)}
          </MetricValue>
        ) : (
          <MetricValue $size="cardSecondary" $status="loss">
            <HiOutlineArrowDown />
            {formatPercentage(profitInPercentage)}
          </MetricValue>
        )}
      </CardInfo>
      <Chart>
        <TrendLine $type={totalProfit > 0 ? "Profit" : "Loss"} />
      </Chart>
    </Card>
  );
}

export default NetTotal;
