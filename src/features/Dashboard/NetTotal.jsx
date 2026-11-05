import styled from "styled-components";
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

import { useAccount } from "../Trades/useAccount";
import { formatCurrency, formatPercentage } from "../../utils/helper";
import { useAllTrades } from "./useAllTrades";

const StyledNetTotal = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: var(--space-3);
  grid-area: 1 / 1;
  z-index: 3;
`;

const Trend = styled.div`
  width: 100%;
  height: 100%;
  grid-area: 1 / 1;
  z-index: 2;
`;

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
      <StyledNetTotal>
        <Head>
          <HiOutlineArrowTrendingUp />
          Net P&L
        </Head>
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
      </StyledNetTotal>
      <Trend>
        <TrendLine $type={totalProfit > 0 ? "Profit" : "Loss"} />
      </Trend>
    </Card>
  );
}

export default NetTotal;
