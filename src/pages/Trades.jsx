import { HiOutlinePlus } from "react-icons/hi2";
import TradesTable from "../features/Trades/TradesTable";
import Button from "../ui/Buttons";
import Row from "../ui/Row";
import Heading from "../ui/Heading";

function Trades() {
  return (
    <>
      <Row $type="horizontal">
        <Heading $as="h1">Trades</Heading>
        <Button $size="large" $variation="primary">
          <HiOutlinePlus />
          Add trade
        </Button>
      </Row>
      <Row $type="horizontal">
        <p>sort</p>
      </Row>
      <Row $type="vertical" $gap="large">
        <TradesTable />
      </Row>
    </>
  );
}

export default Trades;
