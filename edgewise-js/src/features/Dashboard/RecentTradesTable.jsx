import Loading from "../../ui/Loading";
import Menus from "../../ui/Menus";
import Table from "../../ui/Table";

import TradesRow from "../Trades/TradesRow";
import { useRecentTrades } from "./useRecentTrades";

function RecentTradesTable() {
  const { recentTrades, isPending } = useRecentTrades();
  if (isPending) return <Loading />;
  return (
    <Menus>
      <Table
        columns="0.2fr 0.2fr 0.2fr 0.2fr 0.2fr 0.1fr"
        mobileColumns="minmax(0, 1fr) minmax(0, 1fr) auto"
        mobileTemplate={`
          "date symbol action"
          "direction pnl action"
          "source source action"
        `}
        mobileAreas={["date", "symbol", "direction", "pnl", "source", "action"]}
        hideHeaderOnMobile
      >
        <Table.Header role="row">
          <div>Date</div>
          <div>Symbol</div>
          <div>Direction</div>
          <div>P&L</div>
          <div>Source</div>
          <div>Action</div>
        </Table.Header>
        <Table.Body
          data={recentTrades}
          render={(trade) => <TradesRow trade={trade} key={trade.id} />}
        />
      </Table>
    </Menus>
  );
}

export default RecentTradesTable;
