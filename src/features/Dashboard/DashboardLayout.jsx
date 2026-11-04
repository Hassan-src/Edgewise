import styled from "styled-components";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-rows: 12rem 1fr 1fr;
  gap: var(--space-2);
`;

function DashboardLayout() {
  return (
    <StyledDashboardLayout>
      <div>
        <div>Net P&L</div>
        <div>Trade win%</div>
        <div>Profit Factor</div>
        <div>Expectancy</div>
      </div>
      <div>Performance overview</div>
      <div>Recent Trades</div>
    </StyledDashboardLayout>
  );
}

export default DashboardLayout;
