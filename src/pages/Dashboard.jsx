import styled from "styled-components";

import Heading from "../ui/Heading";
import Row from "../ui/Row";
import EmptyDashboard from "../ui/EmptyDashboard";

import DashboardLayout from "../features/Dashboard/DashboardLayout";
import { useAllTrades } from "../features/Dashboard/useAllTrades";

const P = styled.p`
  color: var(--color-text-secondary);
`;

function Dashboard() {
  const { trades } = useAllTrades();
  if (trades.length === 0) return <EmptyDashboard />;
  return (
    <>
      <Row $type="vertical">
        <Heading $as="h1">Dashboard</Heading>
        <P>Your trading performance at a glance</P>
      </Row>
      <DashboardLayout />
    </>
  );
}

export default Dashboard;
