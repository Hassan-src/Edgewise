import styled from "styled-components";
import NetTotal from "./NetTotal";
import Expectancy from "./Expectancy";
import TradeWinRatio from "./TradeWinRatio";
import ProfitFactor from "./ProfitFactor";

const StyledTradesPerformance = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: var(--space-4);
`;

function TradesPerformance() {
  return (
    <StyledTradesPerformance>
      <NetTotal />
      <TradeWinRatio />
      <ProfitFactor />
      <Expectancy />
    </StyledTradesPerformance>
  );
}

export default TradesPerformance;
