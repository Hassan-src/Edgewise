import TradesRow from "./TradesRow";

import Loading from "../../ui/Loading";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import Pagination from "../../ui/Pagination";

import { useAccount } from "./useAccount";
import { useTrades } from "./useTrades";

function TradesTable() {
  const { isPending: tradesLoading, trades, count } = useTrades();
  const { isPending: accountLoading } = useAccount();
  if (tradesLoading || accountLoading) return <Loading />;
  return (
    <Menus>
      <Table columns="0.2fr 0.2fr 0.2fr 0.2fr 0.2fr 0.1fr">
        <Table.Header role="row">
          <div>Date</div>
          <div>Symbol</div>
          <div>Direction</div>
          <div>P&L</div>
          <div>Source</div>
          <div>Action</div>
        </Table.Header>
        <Table.Body
          data={trades}
          render={(trade) => <TradesRow trade={trade} key={trade.id} />}
        />
        <Table.Footer>
          <Pagination count={count} />
        </Table.Footer>
      </Table>
    </Menus>
  );
}

export default TradesTable;
