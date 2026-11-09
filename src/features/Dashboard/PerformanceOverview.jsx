import styled from "styled-components";
import { HiOutlinePresentationChartLine } from "react-icons/hi2";

import Card from "../../ui/Card";
import Head from "../../ui/CardHead";

import PerformanceChart from "./PerformanceChart";
import { useAllTrades } from "./useAllTrades";
import PerformanceAccountDetails from "./PerformanceAccountDetails";

const StyledPerformanceOverview = styled.div`
  grid-column: 1 / -1;
`;

const Chart = styled.div`
  width: 100%;
  height: 15rem;
`;

function PerformanceOverview() {
  const { trades } = useAllTrades();

  return (
    <StyledPerformanceOverview>
      <Card>
        <Head>
          <HiOutlinePresentationChartLine />
          Performance overview
        </Head>
        <PerformanceAccountDetails />
        <Chart>
          <PerformanceChart trades={trades} />
        </Chart>
      </Card>
    </StyledPerformanceOverview>
  );
}

export default PerformanceOverview;
