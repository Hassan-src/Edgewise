import TradesRow from "./TradesRow";
import Loading from "../../ui/Loading";
import { useTrades } from "./useTrades";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import { useSearchParams } from "react-router-dom";

function TradesTable() {
  const { isLoading, trades } = useTrades();
  const [searchParams] = useSearchParams();
  const filterValue = searchParams.get("source") || "all";
  let filteredTrades;
  if (filterValue === "all") filteredTrades = trades;
  if (filterValue === "manual")
    filteredTrades = trades.filter((trade) => trade.source === "manual");
  if (filterValue === "imported")
    filteredTrades = trades.filter((trade) => trade.source === "imported");

  if (isLoading) return <Loading />;
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
          data={filteredTrades}
          render={(trade) => <TradesRow trade={trade} key={trade.id} />}
        />
      </Table>
    </Menus>
  );
}

export default TradesTable;
