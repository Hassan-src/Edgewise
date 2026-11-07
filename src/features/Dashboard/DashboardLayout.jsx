import styled from "styled-components";
import TradesPerformance from "./TradesPerformance";
import PerformanceOverview from "./PerformanceOverview";
import RecentTrades from "./RecentTrades";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-rows: 12rem 1fr 1fr;
  gap: var(--space-4);
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
