import styled from "styled-components";

import TradesPerformance from "./TradesPerformance";
import PerformanceOverview from "./PerformanceOverview";
import RecentTrades from "./RecentTrades";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-rows: 12rem auto auto;
  gap: var(--space-4);
  @media (max-width: 1600px) {
    grid-template-rows: repeat(3, auto);
  }
  @media (max-width: 600px) {
    grid-template-rows: repeat(3, auto);
  }
`;

function DashboardLayout() {
  return (
    <StyledDashboardLayout>
      <TradesPerformance />
      <PerformanceOverview />
      <RecentTrades />
    </StyledDashboardLayout>
  );
}

export default DashboardLayout;
