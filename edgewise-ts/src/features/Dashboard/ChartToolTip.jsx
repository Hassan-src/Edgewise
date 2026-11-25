import styled from "styled-components";

import { formatCurrency } from "../../utils/helper";

import MetricValue from "../../ui/MetricValue";

const StyledChartToolTip = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: var(--space-1);
  font-weight: 600;
  background-color: var(--color-bg);
  padding: var(--space-2);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
`;

function ChartToolTip({ active, payload }) {
  if (!active || !payload?.length) return null;

  const trade = payload[0].payload;
  const value = trade.pnl;

  return (
    <StyledChartToolTip>
      <span>
        {new Date(trade.close_time).toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
        })}
      </span>

      <strong>
        {value >= 0 ? (
          <MetricValue $size="cardSecondary" $status="profit">
            +{formatCurrency(value)}
          </MetricValue>
        ) : (
          <MetricValue $size="cardSecondary" $status="loss">
            {formatCurrency(value)}
          </MetricValue>
        )}
      </strong>
    </StyledChartToolTip>
  );
}
export default ChartToolTip;
