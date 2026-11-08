import styled from "styled-components";
import DashboardLayout from "../features/Dashboard/DashboardLayout";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

const P = styled.p`
  color: var(--color-text-secondary);
`;

function Dashboard() {
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
