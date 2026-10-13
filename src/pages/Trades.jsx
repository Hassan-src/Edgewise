import { HiOutlinePlus } from "react-icons/hi2";
import TradesTable from "../features/Trades/TradesTable";
import Button from "../ui/Buttons";
import Row from "../ui/Row";
import Heading from "../ui/Heading";
import { useState } from "react";
import CreateTradeForm from "../features/Trades/CreateTradeForm";

function Trades() {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <Row $type="horizontal">
        <Heading $as="h1">Trades</Heading>
      </Row>
      <Row $type="horizontal">
        <p>sort</p>
      </Row>
      <Row $type="vertical" $gap="large">
        <TradesTable />
        <Button
          $size="large"
          $variation="primary"
          onClick={() => setShowForm((show) => !show)}
        >
          <HiOutlinePlus />
          Add trade
        </Button>
        {showForm && <CreateTradeForm />}
      </Row>
    </>
  );
}

export default Trades;
