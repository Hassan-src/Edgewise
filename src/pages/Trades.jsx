import Row from "../ui/Row";
import Heading from "../ui/Heading";

import TradesTable from "../features/Trades/TradesTable";
import AddTrade from "../features/Trades/AddTrade";
import DeleteImportedDataShow from "../features/Trades/DeleteImportedDataShow";
import TradesTableOperations from "../features/Trades/TradesTableOperations";

function Trades() {
  return (
    <>
      <Row $type="horizontal">
        <Heading $as="h1">Trades</Heading>
        <Row $type="horizontal" $gap="medium">
          <AddTrade />
          <DeleteImportedDataShow />
        </Row>
      </Row>
      <Row $type="horizontal">
        <TradesTableOperations />
      </Row>
      <Row $type="vertical" $gap="large">
        <TradesTable />
      </Row>
    </>
  );
}

export default Trades;
