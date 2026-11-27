import styled from "styled-components";

import NetTotal from "./NetTotal";
import Expectancy from "./Expectancy";
import TradeWinRatio from "./TradeWinRatio";
import ProfitFactor from "./ProfitFactor";

const StyledTradesPerformance = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: var(--space-4);
  @media (max-width: 1600px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-template-rows: repeat(2, auto);
  }
  @media (max-width: 850px) {
    grid-template-columns: auto;
    grid-template-rows: repeat(4, auto);
  }
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
