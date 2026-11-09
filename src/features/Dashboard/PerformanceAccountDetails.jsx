import styled from "styled-components";

import MetricValue from "../../ui/MetricValue";
import Row from "../../ui/Row";

import { getTradePerformance } from "../../utils/getTradePerformance";
import { formatCurrency } from "../../utils/helper";
import { useAccount } from "../Trades/useAccount";
import { useAllTrades } from "./useAllTrades";

const AccountDetails = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const DetailName = styled.span`
  font-size: var(--text-lg);
  font-weight: 600;
`;

const ChartLegend = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-8);
`;

const LegendItem = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-1);
  font-size: var(--text-lg);
  color: var(--color-text-secondary);
`;

const LegendDot = styled.span`
  width: 1.1rem;
  height: 1.1rem;
  border-radius: var(--radius-sm);
  background: ${(props) => props.$color};
`;

const LegendLine = styled.span`
  width: 1.6rem;
  height: 2px;
  background: var(--color-accent);
`;

function PerformanceAccountDetails() {
  const { trades } = useAllTrades();
  const { account } = useAccount();

  const initialBalance = Number(account?.[0]?.initial_balance ?? 0);

  const data = getTradePerformance(trades);
  const totalPnL = data.at(-1)?.cumulativePnL ?? 0;
  const currentBalance = initialBalance + totalPnL;
  return (
    <Row $type="horizontal">
      <AccountDetails>
        <DetailName>Cumulative P&L</DetailName>
        {totalPnL > 0 ? (
          <MetricValue $size="cardMain" $status="profit">
            {formatCurrency(totalPnL)}
          </MetricValue>
        ) : (
          <MetricValue $size="cardMain" $status="loss">
            {formatCurrency(totalPnL)}
          </MetricValue>
        )}
      </AccountDetails>
      <ChartLegend>
        <LegendItem>
          <LegendDot $color="var(--color-profit)" />
          Individual Trade P&L
        </LegendItem>
        <LegendItem>
          <LegendLine />
          Cumulative P&L
        </LegendItem>
      </ChartLegend>
      <AccountDetails>
        <DetailName>Account Balance</DetailName>
        {currentBalance > initialBalance ? (
          <MetricValue $size="cardMain" $status="profit">
            {formatCurrency(currentBalance)}
          </MetricValue>
        ) : (
          <MetricValue $size="cardMain" $status="loss">
            {formatCurrency(currentBalance)}
          </MetricValue>
        )}
      </AccountDetails>
    </Row>
  );
}

export default PerformanceAccountDetails;
