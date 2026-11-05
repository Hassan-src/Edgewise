import styled from "styled-components";
import TradesPerformance from "./TradesPerformance";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  gap: var(--space-4);
`;

function DashboardLayout() {
  return (
    <StyledDashboardLayout>
      <TradesPerformance />
      <div>Performance overview</div>
      <div>Recent Trades</div>
    </StyledDashboardLayout>
  );
}

export default DashboardLayout;
