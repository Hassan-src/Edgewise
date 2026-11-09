import {
  HiOutlineArrowSmallRight,
  HiOutlineClipboardDocumentList,
} from "react-icons/hi2";
import styled from "styled-components";

import Card from "../../ui/Card";
import Head from "../../ui/CardHead";
import Row from "../../ui/Row";
import TextLink from "../../ui/TextLink";

import RecentTradesTable from "./RecentTradesTable";

const StyledPerformanceOverview = styled.div`
  display: grid;
  grid-column: 1 / -1;
`;

function RecentTrades() {
  return (
    <StyledPerformanceOverview>
      <Card>
        <Row $type="horizontal">
          <Head>
            <HiOutlineClipboardDocumentList />
            Recent Trades
          </Head>
          <TextLink
            $type="link"
            $linkText="View All"
            to="/trades"
            icon={<HiOutlineArrowSmallRight />}
          />
        </Row>
        <br />
        <RecentTradesTable />
      </Card>
    </StyledPerformanceOverview>
  );
}

export default RecentTrades;
