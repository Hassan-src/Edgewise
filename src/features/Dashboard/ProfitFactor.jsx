import Card from "../../ui/Card";
import Head from "../../ui/CardHead";
import { HiOutlineScale } from "react-icons/hi2";
import { useAllTrades } from "./useAllTrades";
import MetricValue from "../../ui/MetricValue";
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";
import CardInfo from "../../ui/CardInfo";
import Chart from "../../ui/CardChart";
import Row from "../../ui/Row";
import CardFooter from "../../ui/CardFooter";
import Loading from "../../ui/Loading";
import CardHelperInfo from "../../ui/CardHelperInfo";

function ProfitFactor() {
  const { trades, isPending: isLoadingTrades } = useAllTrades();

  if (isLoadingTrades) return <Loading />;

  const grossProfit = trades
    .filter((trade) => Number(trade.net_profit) > 0)
    .reduce((total, trade) => total + Number(trade.net_profit ?? 0), 0);
  const grossLoss = trades
    .filter((trade) => Number(trade.net_profit) < 0)
    .reduce((total, trade) => total + Number(trade.net_profit ?? 0), 0);

  const profitFactor =
    grossLoss < 0
      ? grossProfit / Math.abs(grossLoss)
      : grossProfit > 0
        ? Infinity
        : null;

  const totalGross = grossProfit + Math.abs(grossLoss);
  const chartProfitValue =
    totalGross > 0 ? (grossProfit / totalGross) * 100 : 0;
  const chartLossValue =
    totalGross > 0 ? (Math.abs(grossLoss) / totalGross) * 100 : 0;

  const profitFactorData = [
    {
      name: "Profit",
      value: chartProfitValue,
    },
    {
      name: "Loss",
      value: chartLossValue,
    },
  ];

  return (
    <Card>
      <CardInfo>
        <Head>
          <HiOutlineScale />
          Profit factor
          <CardHelperInfo>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut commodi,
            obcaecati atque asperiores, maiores corrupti vel exercitationem rem
          </CardHelperInfo>
        </Head>
        <MetricValue $size="cardMain">{profitFactor?.toFixed(2)}</MetricValue>
        <Row $type="horizontalSticky" $gap="small">
          <CardFooter $type="Profit">{chartProfitValue?.toFixed(1)}</CardFooter>
          <CardFooter $type="Loss">{chartLossValue?.toFixed(1)}</CardFooter>
        </Row>
      </CardInfo>
      <Chart>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={profitFactorData}
              dataKey="value"
              cx="80%"
              cy="50%"
              startAngle={90}
              endAngle={-270}
              innerRadius={42}
              outerRadius={50}
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

export default ProfitFactor;
