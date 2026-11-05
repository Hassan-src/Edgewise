import styled from "styled-components";
import Card from "../../ui/Card";
import NetTotal from "./NetTotal";

const StyledTradesPerformance = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: var(--space-4);
`;

function TradesPerformance() {
  return (
    <StyledTradesPerformance>
      <NetTotal />
      <Card></Card>
      <Card></Card>
      <Card></Card>
    </StyledTradesPerformance>
  );
}

export default TradesPerformance;
