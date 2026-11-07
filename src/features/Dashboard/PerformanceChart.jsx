import {
  Bar,
  ComposedChart,
  CartesianGrid,
  Cell,
  Line,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  Area,
} from "recharts";

import { getTradePerformance } from "../../utils/getTradePerformance";
import ChartToolTip from "./ChartToolTip";

function PerformanceChart({ trades }) {
  const data = getTradePerformance(trades);

  return (
    <ResponsiveContainer width="100%" height="100%">
      <ComposedChart
        data={data}
        margin={{ top: 15, right: 15, left: 0, bottom: 0 }}
      >
        <CartesianGrid
          vertical={false}
          stroke="var(--color-border)"
          strokeDasharray="3 3"
        />

        <XAxis
          dataKey="tradeNumber"
          axisLine={false}
          tickLine={false}
          tick={{ fill: "var(--color-text-secondary)", fontSize: 12 }}
          tickFormatter={(value) => `#${value}`}
        />

        <YAxis
          axisLine={false}
          tickLine={false}
          tick={{ fill: "var(--color-text-secondary)", fontSize: 12 }}
          tickFormatter={(value) => `$${value}`}
          width={65}
        />

        <ReferenceLine
          y={0}
          stroke="var(--color-text-secondary)"
          strokeOpacity={0.5}
        />

        <Tooltip content={<ChartToolTip />} />

        {/* Individual trade P&L */}
        <Bar dataKey="pnl" radius={[3, 3, 0, 0]}>
          {data.map((trade) => (
            <Cell
              key={trade.id}
              fill={
                trade.pnl >= 0 ? "var(--color-profit)" : "var(--color-loss)"
              }
            />
          ))}
        </Bar>

        {/* Cumulative P&L */}
        <defs>
          <linearGradient id="cumulativeGradient" x1="0" y1="0" x2="0" y2="1">
            <stop
              offset="0%"
              stopColor="var(--color-accent)"
              stopOpacity={0.3}
            />
            <stop
              offset="100%"
              stopColor="var(--color-accent)"
              stopOpacity={0}
            />
          </linearGradient>
        </defs>
        <Area
          type="monotone"
          dataKey="cumulativePnL"
          stroke="var(--color-accent)"
          strokeWidth={2.5}
          fill="url(#cumulativeGradient)"
          dot={false}
          activeDot={{
            r: 5,
            fill: "var(--color-accent)",
            stroke: "var(--color-card)",
            strokeWidth: 2,
          }}
        />
      </ComposedChart>
    </ResponsiveContainer>
  );
}

export default PerformanceChart;
