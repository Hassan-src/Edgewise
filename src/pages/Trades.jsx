import { HiOutlineTrash } from "react-icons/hi2";

import Row from "../ui/Row";
import Heading from "../ui/Heading";
import Button from "../ui/Buttons";

import TradesTable from "../features/Trades/TradesTable";
import ImportTrade from "../features/Trades/ImportTrade";
import AddTrade from "../features/Trades/AddTrade";
import { useDeleteImportedTrades } from "../features/Trades/useDeleteImportedTrades";
import { useTrades } from "../features/Trades/useTrades";

function Trades() {
  const { isDeleting, deleteImportedTrades } = useDeleteImportedTrades();
  const { trades = [] } = useTrades();
  const hasImportedTrades = trades.some((trade) => trade.source === "imported");
  return (
    <>
      <Row $type="horizontal">
        <Heading $as="h1">Trades</Heading>
        <Row $type="horizontal" $gap="medium">
          <AddTrade />
          {hasImportedTrades ? (
            <Button
              $size="medium"
              $variation="danger"
              onClick={deleteImportedTrades}
              disabled={isDeleting}
            >
              <HiOutlineTrash />
              Delete imported trades
            </Button>
          ) : (
            <ImportTrade />
          )}
        </Row>
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
