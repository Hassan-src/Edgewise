import TableOperations from "../../ui/TableOperations";
import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";
import { useTrades } from "./useTrades";

function TradesTableOperations() {
  const { trades = [] } = useTrades();

  const tradeSymbols = [
    ...new Set(
      trades.map((trade) => trade.symbol?.toUpperCase()).filter(Boolean),
    ),
  ];
  const symbolOptions = [
    { value: "all", label: "All symbols" },
    ...tradeSymbols.map((symbol) => ({
      value: `symbol-${symbol}`,
      label: symbol,
    })),
  ];
  return (
    <TableOperations>
      <p>Sort By:</p>
      <Filter
        filteredField="source"
        options={[
          { value: "all", label: "All" },
          { value: "manual", label: "Manual" },
          { value: "imported", label: "Imported" },
        ]}
      />
      <SortBy
        options={[
          { value: "all", label: "All P&L" },
          { value: "net_profit-desc", label: "Profit" },
          { value: "net_profit-asc", label: "Loss" },
        ]}
      />
      <SortBy
        options={[
          { value: "all", label: "All Directions" },
          { value: "side-sell", label: "Sell" },
          { value: "side-buy", label: "Buy" },
        ]}
      />
      <SortBy options={symbolOptions} />
    </TableOperations>
  );
}

export default TradesTableOperations;
