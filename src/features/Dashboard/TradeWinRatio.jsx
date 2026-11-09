import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";
import { HiOutlinePercentBadge } from "react-icons/hi2";

import Card from "../../ui/Card";
import Head from "../../ui/CardHead";
import MetricValue from "../../ui/MetricValue";
import CardInfo from "../../ui/CardInfo";
import Chart from "../../ui/CardChart";
import CardFooter from "../../ui/CardFooter";
import Row from "../../ui/Row";
import Loading from "../../ui/Loading";
import CardHelperInfo from "../../ui/CardHelperInfo";

import { formatPercentage } from "../../utils/helper";
import { useAllTrades } from "./useAllTrades";

function TradeWinRatio() {
  const { trades, isPending: isLoadingTrades } = useAllTrades();

  if (isLoadingTrades) return <Loading />;

  const totalTrades = trades.length;

  const winningTrades = trades.filter(
    (trade) => Number(trade.net_profit) > 0,
  ).length;
  const losingTrades = trades.filter(
    (trade) => Number(trade.net_profit) < 0,
  ).length;

  const winRatio = (winningTrades / totalTrades) * 100;

  const data = [
    { name: "Wins", value: winRatio },
    { name: "Remaining", value: 100 - winRatio },
  ];

  return (
    <Card>
      <CardInfo>
        <Row $type="horizontalSticky" $gap="small">
          <Head>
            <HiOutlinePercentBadge />
            Trade win %
          </Head>
          <CardHelperInfo>
            Percentage of closed trades that end in profit.
          </CardHelperInfo>
        </Row>
        <MetricValue $size="cardMain">{formatPercentage(winRatio)}</MetricValue>
        <Row $type="horizontalSticky" $gap="small">
          <CardFooter $type="Profit">{winningTrades}W</CardFooter>
          <CardFooter $type="Loss">{losingTrades}L</CardFooter>
        </Row>
      </CardInfo>
      <Chart>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              cx="75%"
              cy="100%"
              startAngle={180}
              endAngle={0}
              innerRadius="88%"
              outerRadius="100%"
              paddingAngle={2}
              stroke="none"
            >
              <Cell fill="var(--color-profit)" />
              <Cell fill="var(--color-loss)" />
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </Chart>
    </Card>
  );
}

export default TradeWinRatio;
