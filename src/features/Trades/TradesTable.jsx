import TradesRow from "./TradesRow";
import Loading from "../../ui/Loading";
import { useTrades } from "./useTrades";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import { useSearchParams } from "react-router-dom";

function TradesTable() {
  const { isLoading, trades } = useTrades();
  const [searchParams] = useSearchParams();
  // 1) Filter by source
  const filterValue = searchParams.get("source") || "all";

  let filteredTrades;

  if (filterValue === "all") filteredTrades = trades;

  if (filterValue === "manual")
    filteredTrades = trades?.filter((trade) => trade.source === "manual");

  if (filterValue === "imported")
    filteredTrades = trades?.filter((trade) => trade.source === "imported");

  // 2)Filter by sort
  const sortBy = searchParams.get("SortBy") || "";
  const [field, direction] = sortBy.split("-");
  const modifier = direction === "asc" ? 1 : -1;

  if (direction === "sell")
    filteredTrades = filteredTrades?.filter((trade) => trade.side === "sell");

  if (direction === "buy")
    filteredTrades = filteredTrades?.filter((trade) => trade.side === "buy");

  if (field === "symbol")
    filteredTrades = filteredTrades?.filter(
      (trade) => trade.symbol === direction,
    );

  const sortedTrades = filteredTrades?.sort(
    (a, b) => (a[field] - b[field]) * modifier,
  );

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
          data={sortedTrades}
          render={(trade) => <TradesRow trade={trade} key={trade.id} />}
        />
      </Table>
    </Menus>
  );
}

export default TradesTable;
